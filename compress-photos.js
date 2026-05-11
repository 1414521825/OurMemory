/**
 * compress-photos.js — 批量压缩图片到适合 Web 展示的尺寸
 *
 * 用法：
 *   node compress-photos.js              # 压缩到 800px 宽度
 *   node compress-photos.js 1200         # 压缩到 1200px 宽度
 *   node compress-photos.js 800 90       # 800px + 90% 质量
 *
 * 输出到 Images_compressed/，审核后手动替换原 Images/
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const IMAGES_DIR = path.join(__dirname, 'Images_original');
const OUTPUT_DIR = path.join(__dirname, 'Images');

// 可配置参数
const MAX_WIDTH = parseInt(process.argv[2]) || 800;   // 最大宽度
const QUALITY = parseInt(process.argv[3]) || 80;       // JPEG 质量 (1-100)

const VALID_EXTS = new Set(['.jpg', '.jpeg', '.png', '.gif', '.webp']);

// 统计
let totalOriginal = 0;
let totalCompressed = 0;
let count = 0;
let failed = 0;

async function compress() {
    if (!fs.existsSync(IMAGES_DIR)) {
        console.error('错误：Images 文件夹不存在');
        process.exit(1);
    }

    // 创建输出目录
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    const files = fs.readdirSync(IMAGES_DIR)
        .filter(f => VALID_EXTS.has(path.extname(f).toLowerCase()))
        .sort();

    console.log(`找到 ${files.length} 张照片`);
    console.log(`目标宽度: ${MAX_WIDTH}px  质量: ${QUALITY}%`);
    console.log('');

    for (const file of files) {
        const srcPath = path.join(IMAGES_DIR, file);
        const ext = path.extname(file).toLowerCase();
        // 统一输出为 .jpg
        const outName = file.replace(ext, '.jpg');
        const outPath = path.join(OUTPUT_DIR, outName);

        try {
            const originalSize = fs.statSync(srcPath).size;

            let pipeline = sharp(srcPath)
                .resize(MAX_WIDTH, null, {
                    fit: 'inside',
                    withoutEnlargement: true,
                })
                .jpeg({
                    quality: QUALITY,
                    mozjpeg: true,
                })
                .withMetadata();   // 保留 EXIF 拍摄日期等信息

            await pipeline.toFile(outPath);

            const compressedSize = fs.statSync(outPath).size;
            const ratio = ((1 - compressedSize / originalSize) * 100).toFixed(1);

            totalOriginal += originalSize;
            totalCompressed += compressedSize;
            count++;

            process.stdout.write(
                `[${String(count).padStart(3)}/${files.length}] ` +
                `${file}  ${formatSize(originalSize)} → ${formatSize(compressedSize)}  (↓${ratio}%)\n`
            );
        } catch (err) {
            failed++;
            console.error(`  失败: ${file} — ${err.message}`);
        }
    }

    console.log('');
    console.log('='.repeat(60));
    console.log(`完成！${count} 张成功${failed > 0 ? `，${failed} 张失败` : ''}`);
    console.log(`原图总大小: ${formatSize(totalOriginal)}`);
    console.log(`压缩后大小: ${formatSize(totalCompressed)}`);
    console.log(`节省空间:   ${formatSize(totalOriginal - totalCompressed)} (${((1 - totalCompressed / totalOriginal) * 100).toFixed(1)}%)`);
    console.log('');
    console.log(`输出目录: ${OUTPUT_DIR}`);
    console.log('审核无误后，执行以下命令替换：');
    console.log('  mv Images Images_original && mv Images_compressed Images');
}

function formatSize(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    if (bytes < 1024 * 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
    return (bytes / (1024 * 1024 * 1024)).toFixed(2) + ' GB';
}

compress().catch(err => {
    console.error('压缩过程出错:', err);
    process.exit(1);
});
