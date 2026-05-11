/**
 * scan-photos.js — 扫描 Images 文件夹，读取 EXIF 拍摄日期，生成 photos.js
 *
 * 用法：node scan-photos.js
 * 输出：photos.js（网站直接加载）
 *
 * 零依赖，仅需 Node.js
 */

const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, 'Images');
const OUTPUT_FILE = path.join(__dirname, 'photos.js');
const VALID_EXTS = new Set(['.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp']);

// ==================== EXIF 解析 ====================

function readExifDate(filePath) {
    try {
        // 只读文件头 128KB（EXIF 总在前面）
        const fd = fs.openSync(filePath, 'r');
        const bufSize = Math.min(fs.fstatSync(fd).size, 131072);
        const buf = Buffer.alloc(bufSize);
        fs.readSync(fd, buf, 0, bufSize, 0);
        fs.closeSync(fd);

        return parseExifDate(buf);
    } catch {
        return null;
    }
}

function parseExifDate(buf) {
    // JPEG SOI 检查
    if (buf[0] !== 0xFF || buf[1] !== 0xD8) return null;

    let offset = 2;
    while (offset < buf.length - 4) {
        if (buf[offset] !== 0xFF) break;

        const marker = buf[offset + 1];

        // SOS — 后面是压缩数据，不含我们需要的 EXIF
        if (marker === 0xDA) break;

        // EOI
        if (marker === 0xD9) break;

        // DNL (0xDC) 等无长度字段的特殊标记
        if (marker >= 0xD0 && marker <= 0xD7) {
            offset += 2;
            continue;
        }

        const segLen = buf.readUInt16BE(offset + 2); // 含长度字段自身

        if (marker === 0xE1 && segLen >= 10) {
            // 检查 "Exif\0\0" 标识
            if (
                buf[offset + 4] === 0x45 && // E
                buf[offset + 5] === 0x78 && // x
                buf[offset + 6] === 0x69 && // i
                buf[offset + 7] === 0x66 && // f
                buf[offset + 8] === 0x00 &&
                buf[offset + 9] === 0x00
            ) {
                const result = parseTiff(buf, offset + 10);
                if (result) return result;
            }
        }

        offset += 2 + segLen;
    }

    return null;
}

function parseTiff(buf, tiffStart) {
    if (tiffStart + 8 > buf.length) return null;

    // 字节序
    const isLE = buf[tiffStart] === 0x49 && buf[tiffStart + 1] === 0x49; // "II"
    if (!isLE && !(buf[tiffStart] === 0x4D && buf[tiffStart + 1] === 0x4D)) return null; // "MM"

    const read16 = (o) => isLE ? buf.readUInt16LE(o) : buf.readUInt16BE(o);
    const read32 = (o) => isLE ? buf.readUInt32LE(o) : buf.readUInt32BE(o);

    // 魔数 0x002A
    if (read16(tiffStart + 2) !== 0x002A) return null;

    // IFD0
    const ifd0Off = read32(tiffStart + 4);
    if (ifd0Off === 0 || tiffStart + ifd0Off > buf.length) return null;

    const ifd0 = parseIFD(buf, tiffStart + ifd0Off, tiffStart, isLE);

    // 优先取 ExifIFD (0x8769) 中的 DateTimeOriginal (0x9003)
    const exifOff = ifd0[0x8769];
    if (typeof exifOff === 'number' && exifOff > 0 && tiffStart + exifOff < buf.length) {
        const exifIFD = parseIFD(buf, tiffStart + exifOff, tiffStart, isLE);
        const dt = exifIFD[0x9003] || exifIFD[0x9004];
        if (dt && typeof dt === 'string') {
            const cleaned = dt.replace(/\0/g, '').trim();
            if (cleaned) return formatDate(cleaned);
        }
    }

    // 回退 IFD0 DateTime (0x0132)
    const dt0 = ifd0[0x0132];
    if (dt0 && typeof dt0 === 'string') {
        const cleaned = dt0.replace(/\0/g, '').trim();
        if (cleaned) return formatDate(cleaned);
    }

    return null;
}

function parseIFD(buf, offset, tiffStart, isLE) {
    const read16 = (o) => isLE ? buf.readUInt16LE(o) : buf.readUInt16BE(o);
    const read32 = (o) => isLE ? buf.readUInt32LE(o) : buf.readUInt32BE(o);

    const count = read16(offset);
    const result = {};

    for (let i = 0; i < count && offset + 2 + (i + 1) * 12 <= buf.length; i++) {
        const entryOff = offset + 2 + i * 12;
        const tag = read16(entryOff);
        const type = read16(entryOff + 2);
        const num = read32(entryOff + 4);

        const typeSizes = [0, 1, 1, 2, 4, 8, 1, 1, 2, 4, 8, 4, 8];
        const typeSize = typeSizes[type] || 1;
        const totalBytes = num * typeSize;

        let rawValue;
        if (totalBytes <= 4) {
            rawValue = buf.slice(entryOff + 8, entryOff + 8 + totalBytes);
        } else {
            const valOff = read32(entryOff + 8);
            if (tiffStart + valOff + totalBytes > buf.length) continue;
            rawValue = buf.slice(tiffStart + valOff, tiffStart + valOff + totalBytes);
        }

        // 只提取我们关心的标签类型
        if (type === 2) {
            // ASCII
            result[tag] = rawValue.toString('ascii');
        } else if (type === 1 || type === 3 || type === 4 || type === 5) {
            // 数值类型，保留原始值
            result[tag] = totalBytes <= 4
                ? (type === 5 ? read32(entryOff + 8) : read32(entryOff + 8))
                : read32(entryOff + 8);
        }
    }

    return result;
}

// EXIF 日期格式: "2025:06:14 15:16:59" → "2025-06-14"
function formatDate(exifDate) {
    const m = exifDate.match(/^(\d{4}):(\d{2}):(\d{2})/);
    if (m) return `${m[1]}-${m[2]}-${m[3]}`;
    return null;
}

// ==================== 文件名日期提取（回退方案） ====================

function extractDateFromFilename(filename) {
    let m;

    // IMG20250614151659.jpg（无分隔符）
    m = filename.match(/IMG(\d{4})(\d{2})(\d{2})\d{6}/i);
    if (m) return `${m[1]}-${m[2]}-${m[3]}`;

    // IMG_YYYYMMDD_HHMMSS 或 IMG_YYYYMMDD_HHMMSS(1)
    m = filename.match(/IMG[_-](\d{4})(\d{2})(\d{2})[_-]/i);
    if (m) return `${m[1]}-${m[2]}-${m[3]}`;

    // wx_camera_ 时间戳（毫秒）
    m = filename.match(/wx_camera_(\d{13})/);
    if (m) {
        const d = new Date(parseInt(m[1]));
        if (!isNaN(d.getTime())) {
            return fmtDate(d);
        }
    }

    // Screenshot_YYYY-MM-DD-...
    m = filename.match(/Screenshot[_-](\d{4})-(\d{2})-(\d{2})/);
    if (m) return `${m[1]}-${m[2]}-${m[3]}`;

    // mmexport 时间戳（毫秒，13位）
    m = filename.match(/mmexport(\d{13})/);
    if (m) {
        const d = new Date(parseInt(m[1]));
        if (!isNaN(d.getTime())) return fmtDate(d);
    }

    // mmexport 时间戳（秒，10位）
    m = filename.match(/mmexport(\d{10})/);
    if (m) {
        const d = new Date(parseInt(m[1]) * 1000);
        if (!isNaN(d.getTime())) return fmtDate(d);
    }

    // 通用 YYYYMMDD（加合理性检查，避免把时间戳当成日期）
    m = filename.match(/(\d{4})(\d{2})(\d{2})/);
    if (m) {
        const year = parseInt(m[1]);
        const month = parseInt(m[2]);
        const day = parseInt(m[3]);
        if (year >= 2020 && year <= 2030 && month >= 1 && month <= 12 && day >= 1 && day <= 31) {
            return `${m[1]}-${m[2]}-${m[3]}`;
        }
    }

    return null;
}

function fmtDate(d) {
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function pad(n) {
    return String(n).padStart(2, '0');
}

// ==================== 主流程 ====================

function scan() {
    if (!fs.existsSync(IMAGES_DIR)) {
        console.error('错误：Images 文件夹不存在');
        process.exit(1);
    }

    const files = fs.readdirSync(IMAGES_DIR);
    const photos = [];
    let exifHits = 0;
    let fallbackHits = 0;
    let noDate = 0;

    for (const file of files) {
        const ext = path.extname(file).toLowerCase();
        if (!VALID_EXTS.has(ext)) continue;

        const filePath = path.join(IMAGES_DIR, file);
        const stat = fs.statSync(filePath);
        if (!stat.isFile()) continue;

        // 读取 EXIF
        process.stdout.write(`扫描: ${file} ... `);
        let date = readExifDate(filePath);

        if (date) {
            console.log(`EXIF → ${date}`);
            exifHits++;
        } else {
            // 回退到文件名
            date = extractDateFromFilename(file);
            if (date) {
                console.log(`文件名 → ${date}`);
                fallbackHits++;
            } else {
                // 最终回退：文件修改时间
                date = `${stat.mtime.getFullYear()}-${pad(stat.mtime.getMonth() + 1)}-${pad(stat.mtime.getDate())}`;
                console.log(`文件时间 → ${date}`);
                noDate++;
            }
        }

        photos.push({ src: `Images/${file}`, date });
    }

    // 按日期排序
    photos.sort((a, b) => {
        if (a.date < b.date) return -1;
        if (a.date > b.date) return 1;
        return a.src.localeCompare(b.src);
    });

    // 生成 photos.js
    const lines = [
        '// 自动生成于 ' + new Date().toISOString().split('T')[0],
        '// 运行 node scan-photos.js 以更新',
        '// 共 ' + photos.length + ' 张照片',
        'window.CONFIG_PHOTOS = [',
    ];

    for (let i = 0; i < photos.length; i++) {
        const comma = i < photos.length - 1 ? ',' : '';
        lines.push(`  {"src":"${photos[i].src}","date":"${photos[i].date}"}${comma}`);
    }

    lines.push('];');
    lines.push('');

    fs.writeFileSync(OUTPUT_FILE, lines.join('\n'), 'utf-8');

    console.log('');
    console.log(`✅ 已生成 photos.js（${photos.length} 张照片）`);
    console.log(`   EXIF 命中: ${exifHits}  文件名回退: ${fallbackHits}  文件时间: ${noDate}`);
}

scan();
