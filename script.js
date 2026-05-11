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
        '还记得两年前的今天，我们决定牵起彼此的手。从那一天起，我的世界变得不一样了。\n\n' +
        '谢谢你出现在我的生命里。谢谢你的温柔、你的包容、你的陪伴。和你在一起的每一天，都值得被好好珍藏。\n\n' +
        '两年很短，短到我还记得第一次见你时的心跳；两年很长，长到我已经习惯了生活里有你的每一个细节。\n\n' +
        '你是我疲惫时的港湾，是我快乐时第一个想要分享的人。和你在一起，平凡的日子也闪闪发光。\n\n' +
        '未来的路还很长，但我一点也不怕，因为有你在我身边。我想和你一起去更多的地方，看更多的风景，创造更多属于我们的回忆。\n\n' +
        '我爱你，不只是今天，是每一天。\n\n' +
        '两周年快乐，我的小可爱。',

    // 里程碑（按时间顺序排列）
    milestones: [
        { date: '2024.05.20', title: '我们在一起了', desc: '最美好的一天，从此有了彼此' },
        { date: '2024.06.01', title: '第一次正式约会', desc: '紧张又甜蜜，记得那天你穿了一条好看的裙子' },
        { date: '2024.07.20', title: '第一次一起看电影', desc: '握着你的手，电影演了什么已经不重要了' },
        { date: '2024.09.15', title: '第一次一起旅行', desc: '短途旅行，但因为有你在，每一帧都像电影画面' },
        { date: '2024.12.25', title: '第一个圣诞节', desc: '满街的灯光，都不及你眼里的星星' },
        { date: '2025.02.14', title: '第一个情人节', desc: '玫瑰、巧克力、还有一整天的开心' },
        { date: '2025.05.20', title: '一周年纪念日', desc: '365天，每一天都值得' },
        { date: '2025.08.15', title: '第一次一起看海', desc: '海浪声里，悄悄许下了更多未来的愿望' },
        { date: '2026.01.01', title: '一起跨年', desc: '在新年的烟火里，和你一起迎接新的一年' },
        { date: '2026.05.20', title: '两周年纪念日', desc: '第730天，比第一天更爱你' },
    ],

    // 一起去过的地方
    placesVisited: [
        { name: '西湖 · 杭州', desc: '断桥边，你说这里好像白娘子的故事', emoji: '🏞️' },
        { name: '外滩 · 上海', desc: '浦江夜景很美，但你的侧脸更美', emoji: '🌃' },
        { name: '迪士尼乐园', desc: '看到你像小朋友一样开心，我也好幸福', emoji: '🏰' },
        { name: '鼓浪屿 · 厦门', desc: '小岛漫步，阳光和你的笑容都正好', emoji: '🏝️' },
        { name: '宽窄巷子 · 成都', desc: '火锅很辣，但和你一起吃得特别开心', emoji: '🐼' },
        { name: '海边 · 三亚', desc: '海风吹过，我们在沙滩上写下彼此的名字', emoji: '🌊' },
    ],

    // 未来想去的地方
    placesWish: [
        { name: '稻城亚丁', desc: '想看那里蓝得不像话的天空', emoji: '🏔️' },
        { name: '圣托里尼', desc: '蓝白房子和爱琴海的日落，一定很浪漫', emoji: '🇬🇷' },
        { name: '北海道', desc: '冬天去看雪，在雪地里画一颗心', emoji: '❄️' },
        { name: '巴黎', desc: '埃菲尔铁塔下，和你说一声 Je t\'aime', emoji: '🗼' },
        { name: '冰岛', desc: '一起追极光，见证大自然的魔法', emoji: '🌌' },
        { name: '京都', desc: '樱花树下，拍一张最美的合影', emoji: '🌸' },
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
    musicPath: 'music/bgm.mp3',
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

    // 检测音频文件是否可加载
    audio.addEventListener('error', () => {
        toggle.style.opacity = '0.5';
        hint.textContent = '请放入 music/bgm.mp3';
        hint.style.color = '#C44569';
    });

    toggle.addEventListener('click', () => {
        if (audio.error) return;

        if (isPlaying) {
            audio.pause();
            toggle.classList.remove('playing');
            hint.textContent = '点击播放音乐';
            isPlaying = false;
        } else {
            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    toggle.classList.add('playing');
                    hint.textContent = '正在播放...';
                    isPlaying = true;
                }).catch(() => {
                    // 自动播放被阻止，用户需要手动点击
                    hint.textContent = '再点一次播放';
                });
            }
        }
    });

    // 首次用户交互时尝试自动播放
    let autoPlayAttempted = false;
    document.addEventListener('click', () => {
        if (!autoPlayAttempted && !isPlaying && !audio.error) {
            autoPlayAttempted = true;
            audio.play().then(() => {
                toggle.classList.add('playing');
                hint.textContent = '正在播放...';
                isPlaying = true;
            }).catch(() => {});
        }
    }, { once: true });
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
