/* ========================================
   两周年纪念网站 — 主脚本
   修改下方 CONFIG 即可自定义内容
   ======================================== */

// ==================== 配置区（在这里修改内容！）====================
const CONFIG = {
    // 在一起的具体时间（年-月-日 T 时:分:秒）
    anniversary: new Date('2024-05-20T00:00:00'),

    // 你们的名字/昵称
    names: {
        you: '小可爱',   // 女朋友
        me: '大笨蛋'     // 你
    },

    // 告白信内容（支持 \n 换行，页面会分段显示）
    loveLetter:
        '亲爱的，两周年快乐。\n\n' +
        '还记得两年前的 4 月 28 号吗？由于被试实验的机缘，我们第一次加了微信。那时候还不知道，这个微信号的主人会成为我生命里最重要的人。\n\n' +
        '520 那天我们在一起了。从此，浙江到山东，南京到北京，绍兴到洛阳……我们一起走过了十几座城市，吃了无数顿饭，拍了无数张照片。每一张照片背后，都是一个让我更爱你的理由。\n\n' +
        '谢谢你。谢谢你的温柔、你的包容、你的陪伴。谢谢你在我疲惫时成为我的港湾，在我快乐时做我的第一个听众。谢谢你给我拍毕业照时的认真，谢谢你穿上和服让我眼前一亮，谢谢你在每一个平凡的日子里，让我觉得生活闪闪发光。\n\n' +
        '两年很长，长到我们去了那么多地方、创造了那么多回忆；两年也很短，短到我觉得一切才刚刚开始。\n\n' +
        '我还有好多地方想和你一起去——新疆的星空、九寨沟的彩林、大理的洱海、重庆的火锅。只要是你，去哪里都好。\n\n' +
        '我爱你，不只在纪念日，是每一天。\n\n' +
        '两周年快乐，我的小可爱。',

    // 里程碑（按时间顺序排列）
    milestones: [
        { date: '2024.04.28', title: '命运的齿轮开始转动', desc: '实验课上相遇，加了微信。那一刻还不知道，眼前这个人会变成生命里最重要的存在' },
        { date: '2024.05.20', title: '我们在一起了', desc: '表白的那一刻，整个世界都亮了。从此，每一个 520 都有了不一样的意义' },
        { date: '2024.06.02', title: '海绵宝宝和派大星', desc: '一起画画的日子，我们创造了属于我们的卡通人物。画笔下的世界，就是我们的小宇宙' },
        { date: '2024.06.08', title: '绍兴 · 第一座城市', desc: '单程两小时地铁，是我们第一次一起出游。黄酒棒冰的清凉、漆扇上的色彩，都是初见的记忆' },
        { date: '2024.06.13', title: '双马尾小宝宝诞生记', desc: '一起拍写真，镜头里的你扎着双马尾，可爱到犯规。从此多了个专属昵称' },
        { date: '2024.06.14', title: '游乐园里的童心', desc: '杭州东站的游乐园，我们像两个小孩一样攀爬、大笑。恋爱大概就是，在对方面前永远可以做一个孩子' },
        { date: '2024.06.29', title: '南京 · 第一次高铁旅行', desc: '红山动物园看小动物，中山陵拾级而上。烤鸭和鸭血粉丝汤的味道，现在都还记得' },
        { date: '2024.07.25', title: '北京 · 跨越人海的相遇', desc: '兵分两路，终于在偌大的广场上找到了彼此。人潮汹涌，但我的眼睛只看见你' },
        { date: '2024.07.26', title: '济南 · 凌晨的泰山脚下', desc: '凌晨在泰山换乘，两个人都疲惫不堪。但旅途的辛苦，因为身边有你而变得可以承受' },
        { date: '2024.07.28', title: '淄博 · 念念不忘的烧烤', desc: '淄博的烟火气里，烧烤配着小饼，蘸着酱料，也蘸着快乐。那顿烧烤，至今念念不忘' },
        { date: '2024.07.29', title: '青岛 · 金银沙滩与蒸汽海鲜', desc: '山东最后一站。金沙滩、银沙滩，海风咸咸的，蒸汽海鲜鲜甜的。和你一起看海的日子，全是好天气' },
        { date: '2024.08.24', title: '宁波 · 炎夏与音乐喷泉', desc: '炎炎夏日，音乐喷泉的水雾在灯光下跳舞。那个夜晚，凉意和浪漫一起抵达' },
        { date: '2024.09.07', title: '湖州 · 心心念念的打铁花', desc: '终于看到了传说中的打铁花。铁水飞溅如星河坠落，我们在漫天火花里许了愿' },
        { date: '2024.10.04', title: '第一个国庆 · 青山湖骑行', desc: '青山湖环湖畅骑 30 公里。风吹过耳边，你的笑声就在身旁。这大概就是最好的国庆节' },
        { date: '2024.12.25', title: '第一个圣诞节', desc: '满街的圣诞灯光，都不及你眼里的星星。第一个圣诞节，你在身边就是最好的礼物' },
        { date: '2025.02.14', title: '第一个情人节', desc: '玫瑰、巧克力，还有一整天的甜蜜。第一个情人节，往后还有很多个，但第一个永远最特别' },
        { date: '2025.02.15', title: '上海 · 初探魔都', desc: '来到了传说中的魔都上海。那时候还不知道，这座城市后来会成为我们频繁光顾的地方' },
        { date: '2025.05.03', title: '第一个五一 · 蔷薇花开', desc: '蔷薇花墙上，粉色花开得正好。给你拍了很多照片，每一张都舍不得删' },
        { date: '2025.05.12', title: '暑期 offer · 共同的喜悦', desc: '你拿到了暑期 offer，我们都开心坏了。你的每一次进步，都是我最大的骄傲' },
        { date: '2025.08.16', title: '海洋馆 · 蓝色奇遇', desc: '第一次一起去海洋馆。水母在灯光下漂浮，海豚跃出水面，你站在蓝色光影里，比任何海洋生物都好看' },
        { date: '2025.08.23', title: '德清 · 莫干山的幸福感', desc: '莫干山的幸福体验馆，我们在那里确认了一件事——我们，就是幸福的' },
        { date: '2025.10.01', title: '第二个国庆 · 快快乐乐', desc: '第二个国庆节，依旧是快快乐乐的一天。快乐很简单——就是和你在一起，什么都不用想' },
        { date: '2025.10.25', title: '南京 · 故地重游', desc: '第二次来南京。这次终于不是特种兵式旅游了，慢悠悠地逛，感受这座城市的另一种节奏' },
        { date: '2025.12.25', title: '第二个圣诞节 · 寻找圣诞树', desc: '我们一起在城市里到处寻找圣诞树，甜甜的节日气息让我们开心了一整天' },
        { date: '2026.02.02', title: '洛阳 · 古都里的古装美人', desc: '来到了十三朝古都洛阳。你穿上古装的样子，像是从画卷里走出来的。我的小宝宝，原来是个古装美人' },
        { date: '2026.02.14', title: '第二个情人节 · 跨越距离', desc: '古有遥望银河的牛郎织女，我们却可以通过手机彼此缓解思念。异地也没关系，心在一起就好' },
        { date: '2026.03.02', title: '西湖 · 和服限定体验', desc: '畅游西湖，拍了很多好看的照片。和服限定的你，温婉得让人移不开眼' },
        { date: '2026.03.14', title: '油菜花田里的故事', desc: '故事的小黄花~ 今天是油菜花主题。在金色的花海里拍了很久很久的照片，每一帧都是春天' },
        { date: '2026.03.26', title: '小宝宝的毕业摄影师', desc: '你给我拍毕业照，好看极了！以后看这些照片，就能想起你给我拍照时认真的样子' },
        { date: '2026.04.04', title: '紫藤萝 · 小鱼摄影师上线', desc: '华家池校区的紫藤萝开了，今天是专属摄影师小鱼上线的一天。紫色的花瀑下，留下了最美的笑容' },
        { date: '2026.04.25', title: '学校小山的秘密基地', desc: '小鱼摄影师再次营业。学校的小山，是我们的拍照圣地，也是一起散步的秘密基地' },
        { date: '2026.05.01', title: '第二个五一 · 双人划艇', desc: '体验了双人划艇！运动过后的烤肉，每一口都格外香。和你一起尝试新事物，永远是最快乐的' },
    ],

    // 一起去过的地方
    placesVisited: [
        { name: '绍兴', desc: '第一座一起出游的城市。黄酒棒冰与漆扇，简简单单却念念不忘', emoji: '🍶' },
        { name: '南京', desc: '第一次高铁旅行，也是故地重游的温柔。红山动物园、中山陵、烤鸭与鸭血粉丝汤', emoji: '🏛️' },
        { name: '北京', desc: '兵分两路，在偌大的广场上彼此遇见。人潮汹涌，我只看见你', emoji: '🏯' },
        { name: '济南 · 淄博 · 青岛', desc: '山东三城记。凌晨泰山脚下、念念不忘的烧烤、金银沙滩与蒸汽海鲜', emoji: '🌊' },
        { name: '宁波', desc: '炎炎夏日里的音乐喷泉，凉意与浪漫一同抵达', emoji: '🎵' },
        { name: '湖州', desc: '心心念念的打铁花，铁水飞溅如星河坠落人间', emoji: '✨' },
        { name: '杭州', desc: '我们的城市。青山湖骑行、西湖漫步、华家池的紫藤萝……每个角落都有我们的足迹', emoji: '🌸' },
        { name: '上海', desc: '频繁光顾的魔都，从最初的新奇到后来的熟稔，每次都有不一样的回忆', emoji: '🌃' },
        { name: '德清 · 莫干山', desc: '幸福体验馆里确认了一件事——我们就是幸福的', emoji: '⛰️' },
        { name: '洛阳', desc: '十三朝古都，古装美人的限定体验。穿越千年，只为遇见你', emoji: '👘' },
    ],

    // 未来想去的地方
    placesWish: [
        { name: '新疆', desc: '喀纳斯的秋、禾木的晨雾、赛里木湖的蓝。中国最美的辽阔，想和你一起自驾穿越', emoji: '🏕️' },
        { name: '九寨沟', desc: '五花海的斑斓、诺日朗的磅礴。秋天的九寨是上帝打翻的调色盘，一定要和你一起去看', emoji: '💧' },
        { name: '云南 · 大理', desc: '苍山洱海，风花雪月。在古城里慢慢走，在洱海边发呆，什么都不做也很幸福', emoji: '🏯' },
        { name: '重庆', desc: '洪崖洞的夜景、穿楼的轻轨、红油翻滚的火锅。8D 魔幻城市，等我们一起去探险', emoji: '🌶️' },
        { name: '广州', desc: '喝早茶、逛骑楼、看小蛮腰亮灯。在烟火气最浓的城市里，吃遍每一条街', emoji: '🥟' },
        { name: '徐州', desc: '两汉文化的底蕴，云龙湖的晚风。有历史有美食，想和你一起解锁这座宝藏城市', emoji: '🏙️' },
    ],

    // 喜欢你的理由（越多越好！）
    reasons: [
        '你的笑容能治愈我所有的疲惫',
        '你总是记得我最喜欢吃什么',
        '你认真听我说话的样子好可爱',
        '和你在一起，普通的日子也变得特别',
        '你的小脾气我都觉得可爱',
        '你让我想要变成更好的人',
        '你睡着的样子像个小天使',
        '你总能在我沮丧的时候给我力量',
        '你喜欢分享生活中的小确幸',
        '和你一起吃饭，白米饭都是甜的',
        '你会在我加班时悄悄给我点外卖',
        '你的笑声是世界上最好听的声音',
        '你让我相信了缘分这件事',
        '你总是能发现我隐藏的情绪',
        '和你散步就是最好的约会',
        '你的小唠叨里全是关心',
        '我们之间有说不完的话题',
        '你让我觉得家就是有你在的地方',
        '每一个明天，我都想和你一起醒来',
        '因为你，我变成了更好的自己',
    ],

    // 照片列表 — 由 scan-photos.js 生成 photos.js，自动加载
    photos: window.CONFIG_PHOTOS || [],

    // 背景音乐文件路径
    musicPath: 'music/周杰伦 - 园游会.mp3',

    // 歌词 LRC 文件路径
    lyricsPath: 'music/园游会-周杰伦-歌词.lrc',
};

// ==================== 初始化 ====================
document.addEventListener('DOMContentLoaded', () => {
    initNames();
    startTimer();
    initPetals();
    initGallery();
    initTimeline();
    initPlaces();
    initReasons();
    initMusicPlayer();
    initLyrics();
    initScrollReveal();
    initTypewriter();
    initLightbox();

    // 加载页隐藏
    setTimeout(() => {
        document.getElementById('loading').classList.add('hidden');
    }, 2000);
});

// ==================== 名字设置 ====================
function initNames() {
    document.getElementById('nameYou').textContent = CONFIG.names.you;
    document.getElementById('nameMe').textContent = CONFIG.names.me;
}

// ==================== 计时器 ====================
function startTimer() {
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    function update() {
        const now = new Date();
        const diff = now - CONFIG.anniversary;

        if (diff < 0) return; // 还没到纪念日

        const totalSeconds = Math.floor(diff / 1000);
        const days = Math.floor(totalSeconds / 86400);
        const hours = Math.floor((totalSeconds % 86400) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        updateDigit(daysEl, days, 3);
        updateDigit(hoursEl, hours, 2);
        updateDigit(minutesEl, minutes, 2);
        updateDigit(secondsEl, seconds, 2);
    }

    function updateDigit(el, value, pad) {
        const newVal = String(value).padStart(pad, '0');
        if (el.textContent !== newVal) {
            el.classList.add('pop');
            setTimeout(() => el.classList.remove('pop'), 150);
            el.textContent = newVal;
        }
    }

    update();
    setInterval(update, 1000);
}

// ==================== 花瓣飘落 ====================
function initPetals() {
    const canvas = document.getElementById('petalsCanvas');
    const ctx = canvas.getContext('2d');
    const hero = document.getElementById('hero');

    const petalColors = [
        '#FFB8C6', '#FF9AB2', '#FFC1CC', '#FFD1DC',
        '#F8A4B8', '#FFB3C6', '#FFC8D6', '#FFABBE',
    ];

    let petals = [];
    const maxPetals = 60;

    function resize() {
        canvas.width = hero.offsetWidth;
        canvas.height = hero.offsetHeight;
    }

    class Petal {
        constructor(initial) {
            this.reset(initial);
        }

        reset(initial) {
            this.x = Math.random() * canvas.width;
            this.y = initial ? Math.random() * canvas.height : -30;
            this.size = Math.random() * 10 + 5;
            this.speedY = Math.random() * 1.2 + 0.4;
            this.speedX = Math.random() * 0.4 - 0.2;
            this.rotation = Math.random() * Math.PI * 2;
            this.rotSpeed = (Math.random() - 0.5) * 0.03;
            this.opacity = Math.random() * 0.4 + 0.25;
            this.color = petalColors[Math.floor(Math.random() * petalColors.length)];
            this.swingAmp = Math.random() * 1.5 + 0.5;
            this.swingFreq = Math.random() * 0.02 + 0.01;
            this.phase = Math.random() * Math.PI * 2;
        }

        update() {
            this.y += this.speedY;
            this.x += this.speedX + Math.sin(this.y * this.swingFreq + this.phase) * this.swingAmp * 0.3;
            this.rotation += this.rotSpeed;

            if (this.y > canvas.height + 30) {
                this.y = -30;
                this.x = Math.random() * canvas.width;
            }

            if (this.x < -30) this.x = canvas.width + 30;
            if (this.x > canvas.width + 30) this.x = -30;
        }

        draw(ctx) {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation);
            ctx.globalAlpha = this.opacity;
            ctx.fillStyle = this.color;

            // 绘制花瓣形状
            ctx.beginPath();
            ctx.ellipse(0, 0, this.size, this.size * 0.45, 0, 0, Math.PI * 2);
            ctx.fill();

            // 花瓣尖端
            ctx.beginPath();
            ctx.ellipse(this.size * 0.6, 0, this.size * 0.3, this.size * 0.25, 0, 0, Math.PI * 2);
            ctx.fill();

            ctx.restore();
        }
    }

    function init() {
        resize();
        petals = [];
        for (let i = 0; i < maxPetals; i++) {
            petals.push(new Petal(true));
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (const petal of petals) {
            petal.update();
            petal.draw(ctx);
        }

        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', resize);
    init();
    animate();
}

// ==================== 打字机效果 ====================
function initTypewriter() {
    const el = document.getElementById('typewriter');
    const text = CONFIG.loveLetter;
    let index = 0;
    let started = false;

    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !started) {
            started = true;
            type();
        }
    }, { threshold: 0.3 });

    observer.observe(document.getElementById('love-letter'));

    function type() {
        const cursor = el.querySelector('.cursor.blink');
        if (index < text.length) {
            if (text[index] === '\n') {
                el.insertBefore(document.createElement('br'), cursor);
                index++;
                setTimeout(type, 60);
            } else {
                el.insertBefore(document.createTextNode(text[index]), cursor);
                index++;
                const delay = text[index - 1] === '，' || text[index - 1] === '。' ? 80 :
                              text[index - 1] === '！' || text[index - 1] === '？' ? 100 : 40;
                setTimeout(type, delay);
            }
        } else {
            if (cursor) cursor.style.display = 'none';
        }
    }
}

// ==================== 照片墙 ====================
function getPhotoCaption(photo) {
    // 新格式：{src, date} — 直接用 EXIF/扫描得到的日期
    if (photo && typeof photo === 'object' && photo.date) {
        const [y, m, d] = photo.date.split('-');
        return `${y}年${parseInt(m)}月${parseInt(d)}日`;
    }

    // 旧格式兼容：纯字符串路径
    const filename = typeof photo === 'string' ? photo : (photo?.src || '');
    const base = filename.replace(/^.*[\\/]/, '').replace(/\.(jpg|jpeg|png|gif|webp)$/i, '');

    let match = base.match(/^IMG(\d{4})(\d{2})(\d{2})\d{6}$/);
    if (match) {
        return `${match[1]}年${parseInt(match[2])}月${parseInt(match[3])}日`;
    }

    match = base.match(/^mmexport(\d+)$/);
    if (match) {
        const ts = parseInt(match[1]);
        const d = new Date(ts);
        return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
    }

    return '我们的回忆';
}

// ==================== 按月分组 ====================
function groupPhotosByMonth() {
    const groups = [];
    let currentMonth = '';

    CONFIG.photos.forEach((photo, index) => {
        const caption = getPhotoCaption(photo);
        const monthMatch = caption.match(/^(\d{4}年\d{1,2}月)/);
        const month = monthMatch ? monthMatch[1] : '其他';

        if (month !== currentMonth) {
            currentMonth = month;
            groups.push({ month, photos: [] });
        }
        groups[groups.length - 1].photos.push({ src: photo.src, index, caption });
    });

    return groups;
}

// ==================== 分批加载画廊 ====================
let galleryBatchSize = 24;
let galleryVisible = 0;        // 已渲染的照片数
let galleryDisplayItems = [];  // [{ type:'header'|'photo', month?, src?, index?, caption? }]

function createPhotoCard(src, index, caption, isCover) {
    const item = document.createElement('div');
    item.className = 'gallery-item reveal' + (isCover ? ' cover' : '');
    item.setAttribute('data-index', index);
    item.addEventListener('click', () => openLightbox(index));

    const img = document.createElement('img');
    img.src = src;
    img.alt = caption;
    img.loading = 'lazy';
    img.onerror = function () {
        const emojis = ['💕', '📷', '💝', '✨', '🌸', '💖', '🫶', '💗'];
        const placeholder = document.createElement('div');
        placeholder.className = 'gallery-placeholder';
        placeholder.textContent = emojis[index % emojis.length];
        item.replaceChild(placeholder, img);
    };

    const captionEl = document.createElement('div');
    captionEl.className = 'gallery-caption';
    captionEl.textContent = caption;

    item.appendChild(img);
    item.appendChild(captionEl);
    return item;
}

function initGallery() {
    // 构建展示列表：月份标题 + 照片
    const grouped = groupPhotosByMonth();
    galleryDisplayItems = [];

    for (const group of grouped) {
        galleryDisplayItems.push({ type: 'header', month: group.month });
        for (let i = 0; i < group.photos.length; i++) {
            galleryDisplayItems.push({
                type: 'photo',
                src: group.photos[i].src,
                index: group.photos[i].index,
                caption: group.photos[i].caption,
                isCover: i === 0, // 每月第一张是封面
            });
        }
    }

    // 渲染第一批
    const grid = document.getElementById('galleryGrid');
    grid.innerHTML = '';
    galleryVisible = 0;
    showGalleryBatch();

    // 加载更多按钮
    const loadBtn = document.getElementById('loadMoreBtn');
    loadBtn.addEventListener('click', showGalleryBatch);
}

function showGalleryBatch() {
    const grid = document.getElementById('galleryGrid');
    const loadBtn = document.getElementById('loadMoreBtn');
    const fragment = document.createDocumentFragment();
    let photoCount = 0;

    while (galleryVisible < galleryDisplayItems.length && photoCount < galleryBatchSize) {
        const item = galleryDisplayItems[galleryVisible];

        if (item.type === 'header') {
            const header = document.createElement('div');
            header.className = 'month-header reveal';
            header.textContent = item.month;
            fragment.appendChild(header);
        } else {
            fragment.appendChild(createPhotoCard(item.src, item.index, item.caption, item.isCover));
            photoCount++;
        }

        galleryVisible++;
    }

    grid.appendChild(fragment);

    // 更新滚动观察器
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
        if (revealObserver) revealObserver.observe(el);
    });

    // 全部加载完毕则隐藏按钮
    if (galleryVisible >= galleryDisplayItems.length) {
        loadBtn.style.display = 'none';
    }
}

// ==================== 灯箱 ====================
let lightboxIndex = 0;
let touchStartX = 0;
let touchEndX = 0;

function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const closeBtn = lightbox.querySelector('.lb-close');
    const prevBtn = lightbox.querySelector('.lb-prev');
    const nextBtn = lightbox.querySelector('.lb-next');

    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', prevImage);
    nextBtn.addEventListener('click', nextImage);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    // 触摸滑动
    lightbox.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightbox.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 60) {
            if (diff > 0) nextImage();
            else prevImage();
        }
    });

    // 键盘操作
    document.addEventListener('keydown', (e) => {
        if (!document.getElementById('lightbox').classList.contains('open')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'ArrowRight') nextImage();
    });
}

function openLightbox(index) {
    lightboxIndex = index;
    const photo = CONFIG.photos[index];
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightboxImg');
    const caption = document.getElementById('lightboxCaption');

    img.src = photo.src;
    caption.textContent = getPhotoCaption(photo);
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
}

function prevImage() {
    lightboxIndex = (lightboxIndex - 1 + CONFIG.photos.length) % CONFIG.photos.length;
    updateLightboxImage();
}

function nextImage() {
    lightboxIndex = (lightboxIndex + 1) % CONFIG.photos.length;
    updateLightboxImage();
}

function updateLightboxImage() {
    const photo = CONFIG.photos[lightboxIndex];
    const img = document.getElementById('lightboxImg');
    const caption = document.getElementById('lightboxCaption');
    img.style.opacity = '0';
    setTimeout(() => {
        img.src = photo.src;
        caption.textContent = getPhotoCaption(photo);
        img.style.opacity = '1';
    }, 150);
}

// ==================== 时间线 ====================
function initTimeline() {
    const timeline = document.getElementById('timeline');

    CONFIG.milestones.forEach((milestone, index) => {
        const item = document.createElement('div');
        item.className = 'timeline-item reveal';

        item.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-date">${milestone.date}</div>
            <div class="timeline-title">${milestone.title}</div>
            <div class="timeline-desc">${milestone.desc}</div>
        `;

        timeline.appendChild(item);
    });
}

// ==================== 去过的地方 & 想去的地方 ====================
function initPlaces() {
    const visitedGrid = document.getElementById('visitedGrid');
    const wishGrid = document.getElementById('wishGrid');

    CONFIG.placesVisited.forEach((place) => {
        const card = createPlaceCard(place, false);
        visitedGrid.appendChild(card);
    });

    CONFIG.placesWish.forEach((place) => {
        const card = createPlaceCard(place, true);
        wishGrid.appendChild(card);
    });
}

function createPlaceCard(place, isWish) {
    const card = document.createElement('div');
    card.className = 'place-card reveal';

    card.innerHTML = `
        <div class="place-card-image">${place.emoji}</div>
        <div class="place-card-body">
            <h3>${place.name}</h3>
            <p>${place.desc}</p>
            ${isWish ? '<span class="wish-badge">期待前往 ✨</span>' : ''}
        </div>
    `;

    return card;
}

// ==================== 喜欢你的理由 ====================
function initReasons() {
    const reasonText = document.getElementById('reasonText');
    const nextBtn = document.getElementById('nextReason');
    const reasonCard = document.getElementById('reasonCard');
    let lastIndex = -1;

    function showRandom() {
        let index;
        do {
            index = Math.floor(Math.random() * CONFIG.reasons.length);
        } while (index === lastIndex && CONFIG.reasons.length > 1);

        lastIndex = index;

        reasonCard.classList.add('switching');
        setTimeout(() => {
            reasonText.textContent = CONFIG.reasons[index];
            reasonCard.classList.remove('switching');
        }, 200);
    }

    nextBtn.addEventListener('click', showRandom);
    showRandom();
}

// ==================== 音乐播放器 ====================
function initMusicPlayer() {
    const audio = document.getElementById('bgm');
    const toggle = document.getElementById('musicToggle');
    const player = document.getElementById('musicPlayer');
    const hint = player.querySelector('.music-hint');

    let isPlaying = false;
    let autoTriggered = false;

    // 音频加载失败
    audio.addEventListener('error', () => {
        toggle.style.opacity = '0.5';
        hint.textContent = '音乐加载失败';
        hint.style.color = '#C44569';
    });

    // 播放函数
    function tryPlay() {
        if (audio.error) return;
        const playPromise = audio.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                toggle.classList.add('playing');
                hint.textContent = '正在播放...';
                isPlaying = true;
            }).catch(() => {
                // 自动播放被阻止 — 脉冲按钮提醒
                player.classList.add('call-attention');
                hint.textContent = '点我播放 🎵';
            });
        }
    }

    // 手动点击切换
    toggle.addEventListener('click', () => {
        if (audio.error) return;

        player.classList.remove('call-attention');

        if (isPlaying) {
            audio.pause();
            toggle.classList.remove('playing');
            hint.textContent = '点击播放音乐';
            isPlaying = false;
        } else {
            tryPlay();
        }
    });

    // 滚动到告白信时自动尝试播放
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !autoTriggered) {
            autoTriggered = true;
            tryPlay();
        }
    }, { threshold: 0.5 });

    const loveLetter = document.getElementById('love-letter');
    if (loveLetter) observer.observe(loveLetter);
}

// ==================== 歌词同步 ====================
let lyricsData = []; // [{time, text}]

function parseLRC(text) {
    const lines = [];
    const regex = /\[(\d{2}):(\d{2})\.(\d{2,3})\](.*)/;
    text.split('\n').forEach(line => {
        const match = line.match(regex);
        if (match) {
            const minutes = parseInt(match[1]);
            const seconds = parseInt(match[2]);
            const ms = parseInt(match[3].padEnd(3, '0'));
            const time = minutes * 60 + seconds + ms / 1000;
            const txt = match[4].trim();
            if (txt) lines.push({ time, text: txt });
        }
    });
    return lines;
}

function initLyrics() {
    const floatEl = document.getElementById('lyricsFloat');
    const currentEl = document.getElementById('lyricsCurrent');
    const nextEl = document.getElementById('lyricsNext');
    const fullEl = document.getElementById('lyricsFull');
    const audio = document.getElementById('bgm');

    // 加载 LRC 构建 Footer
    fetch(CONFIG.lyricsPath)
        .then(res => res.text())
        .then(text => {
            lyricsData = parseLRC(text);
            fullEl.innerHTML =
                '<p class="lyrics-full-title">🎵 园游会 — 周杰伦</p>' +
                lyricsData.map(line =>
                    `<p data-time="${line.time}">${line.text}</p>`
                ).join('');
        })
        .catch(() => {
            fullEl.style.display = 'none';
        });

    // 同步
    audio.addEventListener('timeupdate', () => {
        if (lyricsData.length === 0) return;

        const t = audio.currentTime;
        const songLength = audio.duration || 207;
        if (!songLength) return;

        const loopTime = t % songLength;

        let idx = -1;
        for (let i = lyricsData.length - 1; i >= 0; i--) {
            if (loopTime >= lyricsData[i].time) { idx = i; break; }
        }

        if (idx < 0) {
            floatEl.classList.remove('visible');
            return;
        }

        floatEl.classList.add('visible');

        // 当前行逐字高亮
        const lineStart = lyricsData[idx].time;
        const lineEnd = idx + 1 < lyricsData.length
            ? lyricsData[idx + 1].time
            : Math.min(lineStart + 4, songLength);
        const lineDuration = Math.max(lineEnd - lineStart, 0.5);
        const progress = Math.min((loopTime - lineStart) / lineDuration, 1);
        const text = lyricsData[idx].text;
        const charCount = text.length;
        const activeChars = Math.floor(progress * charCount);

        let html = '';
        for (let c = 0; c < charCount; c++) {
            html += `<span class="char${c < activeChars ? ' active' : ''}">${text[c]}</span>`;
        }
        currentEl.innerHTML = html;

        nextEl.textContent = idx + 1 < lyricsData.length ? lyricsData[idx + 1].text : '';

        // Footer 高亮
        fullEl.querySelectorAll('p[data-time]').forEach((p, i) => {
            p.classList.toggle('highlight', i === idx);
        });
    });

    // 暂停 / 播放
    audio.addEventListener('pause', () => floatEl.classList.remove('visible'));
    audio.addEventListener('play', () => {
        if (lyricsData.length > 0) floatEl.classList.add('visible');
    });
}

// ==================== 滚动显示动画 ====================
// 全局滚动观察器，供画廊分批加载复用
let revealObserver;

function initScrollReveal() {
    revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
    });

    // 观察所有带 reveal 类的元素
    const observeReveal = () => {
        document.querySelectorAll('.reveal:not(.visible)').forEach((el) => {
            revealObserver.observe(el);
        });
    };

    // 初始观察
    observeReveal();

    // 3 秒后再扫一次，确保动态内容都被观察
    setTimeout(observeReveal, 3000);
}
