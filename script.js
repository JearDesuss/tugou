'use strict';

const COPY = {
  zh: {
    'meta.title': '土狗 $TUGOU｜土到极致就是潮',
    'meta.desc': '土狗币，就是 meme 币。名字就是品种。土到极致就是潮。',
    'a11y.skip': '直接看实话',
    'a11y.language': '切换语言：中文 / English',
    'a11y.pause': '暂停滚动字幕',
    'a11y.play': '继续滚动字幕',
    'a11y.canvas': '土狗早安图预览',
    'a11y.changed': '已切换为中文',
    'a11y.nav': '主导航',
    'a11y.home': '土狗 TUGOU 首页',
    'a11y.pageNav': '页面导航',
    'a11y.ticker': '祝福滚动字幕',
    'nav.what': '什么是土狗',
    'nav.play': '今日土酷',
    'nav.status': '发币状态',
    'hero.eyebrow': '中华土狗币',
    'hero.seal': '正宗',
    'hero.title': '土狗',
    'hero.vertical': '童叟无欺',
    'hero.rating': '五星级土狗',
    'hero.subtitle': '土狗币，就是 meme 币。',
    'hero.lede': '名字就是品种。土到极致就是潮。',
    'hero.status': '发币了没',
    'hero.explain': '土狗是啥',
    'ticker.text': '★ 热烈庆祝本站开通 ★ 少看 K 线 ★ 多发早安图 ★ 祝你发财 ★ 谢谢惠顾 ★ ',
    'ticker.pause': '暂停',
    'ticker.play': '继续',
    'what.eyebrow': '一个词就够了',
    'what.title': '土狗，到底是什么？',
    'what.lead': '中文币圈早就管 memecoin 叫“土狗币”。所以 $TUGOU 不只是个名字，它本身就是个品种。',
    'what.body': '“土”不丢人，“狗”也不是骂人。就是村口那条大黄狗，皮实，好养，见谁都摇尾巴。',
    'what.quote1': '“土狗币，中文名亦作',
    'what.quote2': '‘MeMe币’”',
    'what.source': '——百度百科“土狗币”词条',
    'what.fact1Title': '名字就是品种',
    'what.fact1Body': '币圈叫了这么多年，我们只是认领了。',
    'what.fact2Title': '不装高科技',
    'what.fact2Body': '不画饼，不编路线图。',
    'what.fact3Title': '祝福是真的',
    'what.fact3Body': '行情归行情，心意归心意。',
    'what.note': '页面是照着土酷（Too Cool）做的。挂历、早安图、县城招牌，都是真喜欢。',
    'daily.eyebrow': '今日土酷',
    'daily.title': '先看黄历，再发早安。',
    'daily.subtitle': '黄历天天换，行情概不负责。',
    'almanac.stamp': '每日一签',
    'almanac.title': '土狗黄历',
    'almanac.note': '只认日子，不认行情。',
    'maker.kicker': '家族群专用',
    'maker.title': '做张早安图',
    'maker.subtitle': '写个称呼，挑句祝福。',
    'maker.nameLabel': '称呼',
    'maker.namePlaceholder': '例如：二舅',
    'maker.wishLabel': '祝福',
    'maker.shuffle': '换一张',
    'maker.save': '存图',
    'maker.privacy': '图片不上传，只在本地生成。',
    'launch.eyebrow': '上车前先看',
    'launch.title': '还没发币。',
    'launch.body': '没有预售，没有合约地址。看到同名代币，别碰。',
    'launch.caLabel': '合约地址',
    'launch.caPending': '暂无',
    'launch.copy': '复制 CA',
    'truth.title': '一句实话',
    'truth.lead': '目前没有代币，也没有合约。',
    'truth.risk': 'meme 币可能归零。别借钱，别梭哈。',
    'truth.close': '炒币是玩笑，祝福是真的。',
    'footer.line': '最土的狗，最酷的币。',

    /* 土酷动效层 */
    'chaos.on': '土酷全开',
    'chaos.off': '安静模式',
    'a11y.chaosOff': '关掉全部动效和背景音乐',
    'a11y.chaosOn': '打开土酷动效',
    'a11y.chaosCalm': '系统已开启“减弱动效”，页面保持安静',
    'a11y.chaosOnDone': '特效已打开',
    'a11y.chaosOffDone': '特效已关闭，页面安静了',
    'bgm.play': '配乐',
    'bgm.stop': '静音',
    'bgm.volume': '背景音乐音量',
    'bgm.title': '《土狗贺岁》· 唇呐版 · 土狗民乐队',
    'a11y.bgmPlay': '播放背景音乐：浏览器现场合成，不会自动播放',
    'a11y.bgmStop': '停止背景音乐',
    'burst.word': '恭喜发财',
    'a11y.board': '滚动公告',
    'board.tag': '公告',
    'board.one': '本站不卖币，不开预售，不收群费。',
    'board.two': '黄历每天换一次，行情概不负责。',
    'board.three': '早安图只在你自己的浏览器里生成。',
    'marquee.text': '★ 恭喜发财 ★ 万事如意 ★ 身体健康 ★ 早点睡 ★ 多喝热水 ★ 谢谢惠顾 ★',
    'counter.head': '你是第',
    'counter.tail': '次来串门',
    'counter.uptime': '本站已运行 {n} 天',
    'counter.plain': '这是你第 {n} 次访问本站。这个数字只存在你自己的浏览器里，本站不统计任何人。'
  },
  en: {
    'meta.title': '土狗 $TUGOU | 土狗币 is the Chinese word for memecoin',
    'meta.desc': '土狗币 is the everyday Chinese word for memecoin. The name is the category. Tacky, pushed far enough, is cool.',
    'a11y.skip': 'skip to the honest part',
    'a11y.language': 'switch language: 中文 / English',
    'a11y.pause': 'pause the ticker',
    'a11y.play': 'resume the ticker',
    'a11y.canvas': 'TUGOU good-morning card preview',
    'a11y.changed': 'language changed to English',
    'a11y.nav': 'main navigation',
    'a11y.home': 'TUGOU home',
    'a11y.pageNav': 'page navigation',
    'a11y.ticker': 'blessing ticker',
    'nav.what': 'what is 土狗',
    'nav.play': 'today’s 土酷',
    'nav.status': 'launch status',
    'hero.eyebrow': 'CHINA NATIONAL TUGOU COIN',
    'hero.seal': '正宗',
    'hero.title': '土狗',
    'hero.vertical': '童叟无欺',
    'hero.rating': 'FIVE-STAR MUTT',
    'hero.subtitle': '土狗币 means memecoin.',
    'hero.lede': 'The name is the category. Tacky, pushed far enough, is cool.',
    'hero.status': 'launched yet?',
    'hero.explain': 'look first',
    'ticker.text': '★ GRAND OPENING OF THIS WEBSITE ★ FEWER CHARTS ★ MORE GOOD MORNINGS ★ MAY YOU PROSPER ★ THANK YOU COME AGAIN ★ ',
    'ticker.pause': 'pause',
    'ticker.play': 'play',
    'what.eyebrow': 'one word is enough.',
    'what.title': 'So what is 土狗?',
    'what.lead': 'Chinese-speaking crypto has called memecoins 土狗币 for years. So $TUGOU is not just a name. It is its own category.',
    'what.body': '土 is nothing to be ashamed of, and 狗 is not an insult. Just the big yellow dog at the village gate: tough, cheap to feed, tail always going.',
    'what.quote1': '“土狗币, whose Chinese name is also',
    'what.quote2': 'given as ‘MeMe币’”',
    'what.source': '— Baidu Baike, entry for 土狗币',
    'what.fact1Title': 'The name is the category',
    'what.fact1Body': 'Chinese crypto has called them that for years. We just claimed it.',
    'what.fact2Title': 'No fake tech',
    'what.fact2Body': 'No pie in the sky. No invented roadmap.',
    'what.fact3Title': 'The blessing is real',
    'what.fact3Body': 'The market is one thing. The good wishes are another.',
    'what.note': 'The look is 土酷 — “tǔ kù”, near enough to Too Cool. Wall calendars, good-morning cards, county shop signs: we like all of it.',
    'daily.eyebrow': 'TODAY’S 土酷',
    'daily.title': 'Check the almanac. Send good morning.',
    'daily.subtitle': 'New every day. Not responsible for the market.',
    'almanac.stamp': 'TODAY’S DRAW',
    'almanac.title': 'TUGOU ALMANAC',
    'almanac.note': 'Goes by the date, not the market.',
    'maker.kicker': 'FAMILY CHAT USE ONLY',
    'maker.title': 'Make a good-morning card',
    'maker.subtitle': 'Say who it’s for. Pick a wish.',
    'maker.nameLabel': 'who it’s for',
    'maker.namePlaceholder': 'e.g. Second Uncle',
    'maker.wishLabel': 'wish',
    'maker.shuffle': 'new one',
    'maker.save': 'save',
    'maker.privacy': 'The image never leaves your browser.',
    'launch.eyebrow': 'CHECK BEFORE YOU BUY',
    'launch.title': 'No coin yet.',
    'launch.body': 'No presale. No contract address. If you see a token with this name, do not touch it.',
    'launch.caLabel': 'CONTRACT ADDRESS',
    'launch.caPending': 'NONE YET',
    'launch.copy': 'COPY CA',
    'truth.title': 'One honest line',
    'truth.lead': 'There is no token and no contract yet.',
    'truth.risk': 'Memecoins can go to zero. Do not borrow money. Do not go all in.',
    'truth.close': 'Finance is the joke. The blessing is real.',
    'footer.line': 'The tackiest dog, the coolest coin.',

    /* chaos layer */
    'chaos.on': 'TOO COOL: ON',
    'chaos.off': 'QUIET MODE',
    'a11y.chaosOff': 'turn off every effect and the music',
    'a11y.chaosOn': 'turn the Too Cool effects back on',
    'a11y.chaosCalm': 'your system asks for reduced motion, so the page stays still',
    'a11y.chaosOnDone': 'effects on',
    'a11y.chaosOffDone': 'effects off. The page is quiet now.',
    'bgm.play': 'MUSIC',
    'bgm.stop': 'MUTE',
    'bgm.volume': 'background music volume',
    'bgm.title': 'TUGOU NEW YEAR SUITE · suona mix',
    'a11y.bgmPlay': 'play the music — synthesised live in your browser, never autoplays',
    'a11y.bgmStop': 'stop the music',
    'burst.word': 'MAY YOU PROSPER',
    'a11y.board': 'scrolling notices',
    'board.tag': 'NOTICE',
    'board.one': 'No token sold here. No presale. No paid group.',
    'board.two': 'The almanac changes daily. The market is not consulted.',
    'board.three': 'Cards are made in your own browser only.',
    'marquee.text': '★ MAY YOU PROSPER ★ MAY ALL GO WELL ★ GOOD HEALTH ★ SLEEP EARLY ★ DRINK HOT WATER ★ THANK YOU COME AGAIN ★',
    'counter.head': 'this is visit no.',
    'counter.tail': 'of yours',
    'counter.uptime': 'this site has been up {n} days',
    'counter.plain': 'Your visit number {n}. Counted only in your own browser. This site counts nobody.'
  }
};

const ALMANAC = {
  yi: [
    ['轻仓', 'stay light'],
    ['止盈', 'take profit'],
    ['遛狗', 'walk the dog'],
    ['查貔貅', 'check for a honeypot'],
    ['早睡', 'sleep early'],
    ['关机', 'turn the phone off'],
    ['发早安图', 'send a good-morning card'],
    ['多喝热水', 'drink more hot water']
  ],
  ji: [
    ['梭哈', 'go all in'],
    ['信小作文', 'believe the hype thread'],
    ['借钱炒币', 'borrow to buy'],
    ['晒助记词', 'post your seed phrase'],
    ['追高', 'chase the green candle'],
    ['开杠杆', 'use leverage'],
    ['群里喊单', 'shill in the group chat'],
    ['凌晨加仓', 'add at 3 a.m.']
  ]
};

const WISHES = [
  ['恭喜发财', 'may you prosper'],
  ['一夜暴富', 'rich overnight'],
  ['身体健康', 'good health'],
  ['万事如意', 'may all go well'],
  ['年年有U', 'may you have USDT to spare'],
  ['步步高升', 'rise step by step']
];

const heroImage = new Image();
let cardSeed = new Date().getDate();

function currentLang() {
  return document.documentElement.dataset.lang === 'en' ? 'en' : 'zh';
}

function t(key, lang = currentLang()) {
  return COPY[lang][key] || COPY.zh[key] || key;
}

function setTranslatedAttributes(lang) {
  document.querySelectorAll('[data-i18n-attr]').forEach(element => {
    element.dataset.i18nAttr.split(';').forEach(binding => {
      const [attribute, key] = binding.split(':').map(part => part.trim());
      if (attribute && key) element.setAttribute(attribute, t(key, lang));
    });
  });
}

function setTicker(lang) {
  const track = document.querySelector('.ticker__track');
  if (!track) return;
  const copy = t('ticker.text', lang);
  track.textContent = `${copy}　${copy}　`;
}

function syncTickerButton(lang = currentLang()) {
  const ticker = document.querySelector('.ticker');
  const button = document.getElementById('tickerToggle');
  if (!ticker || !button) return;
  const paused = ticker.classList.contains('is-paused');
  button.setAttribute('aria-label', t(paused ? 'a11y.play' : 'a11y.pause', lang));
  const label = button.querySelector('span');
  if (label) label.textContent = t(paused ? 'ticker.play' : 'ticker.pause', lang);
}

function applyLang(lang, announce = false) {
  document.documentElement.dataset.lang = lang;
  document.documentElement.lang = lang === 'zh' ? 'zh-Hans' : 'en';

  document.querySelectorAll('[data-i18n]').forEach(element => {
    if (element.classList.contains('ticker__track')) return;
    element.textContent = t(element.dataset.i18n, lang);
  });
  setTranslatedAttributes(lang);
  setTicker(lang);
  syncTickerButton(lang);
  if (window.TUGOU_CHAOS) window.TUGOU_CHAOS.retranslate();

  document.title = t('meta.title', lang);
  document.querySelector('meta[name="description"]')?.setAttribute('content', t('meta.desc', lang));
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', t('meta.title', lang));
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', t('meta.desc', lang));

  const button = document.getElementById('langBtn');
  button?.setAttribute('aria-pressed', String(lang === 'en'));
  try { localStorage.setItem('tugou-lang', lang); } catch (_) {}

  fillAlmanac(lang);
  fillWishes(lang);
  drawCard();

  if (announce) {
    const live = document.getElementById('liveRegion');
    if (live) live.textContent = t('a11y.changed', lang);
  }
}

function seededRandom(seed) {
  let value = seed >>> 0;
  return () => {
    value = (value * 1664525 + 1013904223) >>> 0;
    return value / 4294967296;
  };
}

function dateSeed() {
  const now = new Date();
  return now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate();
}

function pickThree(items, seed) {
  const random = seededRandom(seed);
  const pool = items.slice();
  const result = [];
  while (result.length < 3 && pool.length) {
    result.push(pool.splice(Math.floor(random() * pool.length), 1)[0]);
  }
  return result;
}

function fillList(id, items, lang) {
  const list = document.getElementById(id);
  if (!list) return;
  list.replaceChildren(...items.map(item => {
    const li = document.createElement('li');
    li.textContent = item[lang === 'zh' ? 0 : 1];
    return li;
  }));
}

function fillAlmanac(lang) {
  const now = new Date();
  const locale = lang === 'zh' ? 'zh-CN' : 'en-GB';
  const day = document.getElementById('almDay');
  const month = document.getElementById('almMonth');
  const weekday = document.getElementById('almWeekday');
  if (day) day.textContent = String(now.getDate());
  if (month) month.textContent = now.toLocaleDateString(locale, { year: 'numeric', month: 'long' });
  if (weekday) weekday.textContent = now.toLocaleDateString(locale, { weekday: 'long' });
  fillList('almYi', pickThree(ALMANAC.yi, dateSeed() + 7), lang);
  fillList('almJi', pickThree(ALMANAC.ji, dateSeed() + 991), lang);
}

function fillWishes(lang) {
  const select = document.getElementById('genWish');
  if (!select) return;
  const selected = Math.max(0, select.selectedIndex);
  select.replaceChildren(...WISHES.map(([zh, en], index) => {
    const option = document.createElement('option');
    option.value = String(index);
    option.textContent = lang === 'zh' ? zh : `${zh} · ${en}`;
    return option;
  }));
  select.selectedIndex = Math.min(selected, WISHES.length - 1);
}

function cropImageToSquare(ctx, image, size) {
  const source = Math.min(image.naturalWidth, image.naturalHeight);
  const sx = (image.naturalWidth - source) / 2;
  const sy = (image.naturalHeight - source) / 2;
  ctx.drawImage(image, sx, sy, source, source, 0, 0, size, size);
}

function drawStar(ctx, x, y, radius) {
  ctx.beginPath();
  ctx.moveTo(x, y - radius);
  ctx.quadraticCurveTo(x + radius * .12, y - radius * .12, x + radius, y);
  ctx.quadraticCurveTo(x + radius * .12, y + radius * .12, x, y + radius);
  ctx.quadraticCurveTo(x - radius * .12, y + radius * .12, x - radius, y);
  ctx.quadraticCurveTo(x - radius * .12, y - radius * .12, x, y - radius);
  ctx.closePath();
  ctx.fill();
}

function goldText(ctx, text, x, y, size) {
  ctx.save();
  ctx.font = `${size}px "ZCOOL KuaiLe", "Microsoft YaHei", sans-serif`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.lineJoin = 'round';
  ctx.shadowColor = '#171008';
  ctx.shadowOffsetX = size * .055;
  ctx.shadowOffsetY = size * .065;
  ctx.shadowBlur = 0;
  ctx.lineWidth = Math.max(5, size * .055);
  ctx.strokeStyle = '#171008';
  ctx.strokeText(text, x, y);
  const fill = ctx.createLinearGradient(0, y - size * .6, 0, y + size * .6);
  fill.addColorStop(0, '#fff9e9');
  fill.addColorStop(.18, '#f7c928');
  fill.addColorStop(.5, '#ff4a1f');
  fill.addColorStop(.62, '#f7c928');
  fill.addColorStop(1, '#8a6a4a');
  ctx.fillStyle = fill;
  ctx.fillText(text, x, y);
  ctx.restore();
}

function drawCard() {
  const canvas = document.getElementById('genCanvas');
  if (!canvas || !heroImage.complete || !heroImage.naturalWidth) return;
  const ctx = canvas.getContext('2d');
  const size = 720;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = size * dpr;
  canvas.height = size * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  cropImageToSquare(ctx, heroImage, size);

  const shade = ctx.createLinearGradient(0, 0, 0, size);
  shade.addColorStop(0, 'rgba(23,16,8,.18)');
  shade.addColorStop(.42, 'rgba(23,16,8,0)');
  shade.addColorStop(1, 'rgba(23,16,8,.28)');
  ctx.fillStyle = shade;
  ctx.fillRect(0, 0, size, size);

  const random = seededRandom(cardSeed);
  ctx.fillStyle = '#f5fbff';
  for (let index = 0; index < 12; index += 1) {
    drawStar(ctx, size * random(), size * (.08 + random() * .74), 7 + random() * 12);
  }

  const wishIndex = Math.max(0, document.getElementById('genWish')?.selectedIndex || 0);
  const [wishZh, wishEn] = WISHES[wishIndex] || WISHES[0];
  const name = document.getElementById('genName')?.value.trim() || '';

  goldText(ctx, '早安', size / 2, size * .18, 142);
  goldText(ctx, wishZh, size / 2, size * .38, wishZh.length > 4 ? 72 : 92);

  if (name) {
    const label = currentLang() === 'zh' ? `送给${name}` : `for ${name}`;
    ctx.save();
    ctx.font = '400 34px "Noto Sans SC", "Microsoft YaHei", sans-serif';
    const width = ctx.measureText(label).width + 48;
    ctx.fillStyle = '#d92716';
    ctx.strokeStyle = '#171008';
    ctx.lineWidth = 4;
    ctx.fillRect((size - width) / 2, size * .49, width, 58);
    ctx.strokeRect((size - width) / 2, size * .49, width, 58);
    ctx.fillStyle = '#f5fbff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(label, size / 2, size * .49 + 29);
    ctx.restore();
  }

  const gloss = currentLang() === 'zh' ? `good morning · ${wishEn}` : `${wishZh} · good morning`;
  ctx.save();
  ctx.font = '26px Arial, sans-serif';
  const glossWidth = ctx.measureText(gloss).width + 28;
  ctx.fillStyle = '#0500ff';
  ctx.fillRect((size - glossWidth) / 2, size * .61, glossWidth, 46);
  ctx.fillStyle = '#f5fbff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(gloss, size / 2, size * .61 + 23);
  ctx.restore();

  ctx.strokeStyle = '#f7c928';
  ctx.lineWidth = 12;
  ctx.strokeRect(8, 8, size - 16, size - 16);
  ctx.strokeStyle = '#d92716';
  ctx.lineWidth = 4;
  ctx.strokeRect(22, 22, size - 44, size - 44);

  ctx.save();
  ctx.translate(size * .88, size * .87);
  ctx.rotate(-.08);
  ctx.fillStyle = '#d92716';
  ctx.strokeStyle = '#f5fbff';
  ctx.lineWidth = 3;
  ctx.fillRect(-38, -38, 76, 76);
  ctx.strokeRect(-38, -38, 76, 76);
  ctx.fillStyle = '#f5fbff';
  ctx.font = '400 30px "ZCOOL KuaiLe", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('土狗', 0, 0);
  ctx.restore();
}

function downloadCard() {
  const canvas = document.getElementById('genCanvas');
  if (!canvas) return;
  canvas.toBlob(blob => {
    if (!blob) return;
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.href = url;
    link.download = 'tugou-good-morning.png';
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }, 'image/png');
}

function loadCanvasFont() {
  if (!document.fonts?.load) return Promise.resolve();
  return document.fonts.ready
    .then(() => Promise.all([
      document.fonts.load('400 100px "ZCOOL KuaiLe"', `早安土狗${WISHES.map(item => item[0]).join('')}`),
      document.fonts.load('400 34px "Noto Sans SC"', '致')
    ]))
    .catch(() => {});
}

function init() {
  document.getElementById('year').textContent = String(new Date().getFullYear());

  document.getElementById('langBtn')?.addEventListener('click', () => {
    applyLang(currentLang() === 'zh' ? 'en' : 'zh', true);
  });

  const ticker = document.querySelector('.ticker');
  const tickerButton = document.getElementById('tickerToggle');
  tickerButton?.addEventListener('click', () => {
    ticker?.classList.toggle('is-paused');
    syncTickerButton();
  });

  ['genName', 'genWish'].forEach(id => {
    document.getElementById(id)?.addEventListener('input', drawCard);
  });

  document.getElementById('genRandom')?.addEventListener('click', () => {
    cardSeed += 73;
    const wishes = document.getElementById('genWish');
    if (wishes) wishes.selectedIndex = (wishes.selectedIndex + 1 + Math.floor(Math.random() * (WISHES.length - 1))) % WISHES.length;
    drawCard();
  });
  document.getElementById('genDownload')?.addEventListener('click', downloadCard);

  applyLang(currentLang());

  heroImage.addEventListener('load', () => loadCanvasFont().then(drawCard), { once: true });
  heroImage.src = 'assets/tugou-too-cool-hero-v3.jpg';
  if (heroImage.complete && heroImage.naturalWidth) loadCanvasFont().then(drawCard);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init, { once: true });
} else {
  init();
}

/* ==========================================================================
   土酷动效层 · THE CHAOS LAYER
   ==========================================================================
   Appended after the boot block on purpose. script.js is loaded with `defer`,
   so readyState is already 'interactive' when it evaluates and init() has
   finished before a single line below is reached. A throw in a sparkle loop
   therefore cannot take down applyLang(), fillAlmanac(), fillWishes() or
   drawCard() — the two-file split's benefit without a second file.

   THE ONE CONTRACT. Every decorative effect on this page is an object:

     { name, init(), start(), stop(), destroy() }

     init()     build DOM (only inside #chaosLayer, or a host that passes the
                guard) and attach listeners. Never appends anything focusable.
     start()    idempotent. May be called many times in a row.
     stop()     idempotent, instant, cheap. Freeze. DOM stays put.
     destroy()  remove EVERYTHING init() made, detach every listener, clear
                every timer, release every claimed budget slot.

   Nothing owns its own lifecycle. That is what makes "off" mean off.
   ========================================================================== */
(() => {
  'use strict';

  const root = document.documentElement;
  const CALM = matchMedia('(prefers-reduced-motion: reduce)');

  const store = {
    read(key) { try { return localStorage.getItem(key); } catch (_) { return null; } },
    write(key, value) { try { localStorage.setItem(key, value); } catch (_) {} }
  };

  /* ---- device tier -------------------------------------------------------
     A narrow viewport, a coarse pointer, four cores, four gigs or Save-Data
     are all treated as the same evidence: be careful here. */
  const lite = matchMedia('(max-width: 700px), (pointer: coarse)').matches
    || (navigator.deviceMemory || 8) <= 4
    || (navigator.hardwareConcurrency || 8) <= 4
    || !!(navigator.connection && navigator.connection.saveData);

  /* ONE SHARED CAP, not per-effect caps. body::after is a fixed full-viewport
     mix-blend-mode:multiply layer at z-90; anything that animates anywhere
     forces that blend region to re-composite. Per-effect budgets are
     meaningless underneath it. */
  const CAP = lite
    ? { nodes: 18, stickers: 6,  danmu: 2, lanes: 2, packets: 7,  trail: 0,  burst: 5, danmuGap: 5200 }
    : { nodes: 40, stickers: 14, danmu: 3, lanes: 4, packets: 14, trail: 18, burst: 8, danmuGap: 3200 };

  root.dataset.chaosTier = lite ? 'lite' : 'full';

  let used = 0;
  const Budget = {
    claim(count) {
      const granted = Math.max(0, Math.min(count, CAP.nodes - used));
      used += granted;
      return granted;
    },
    release(count) { used = Math.max(0, used - count); },
    reset() { used = 0; }
  };

  /* ---- the layer ---------------------------------------------------------
     position:fixed + overflow:hidden + contain is the STRUCTURAL guarantee
     behind verify.mjs's scrollWidth assertions: nothing inside can widen the
     document, however far it translates. */
  let layerEl = null;
  function layer() {
    if (layerEl && layerEl.isConnected) return layerEl;
    layerEl = document.getElementById('chaosLayer');
    if (!layerEl) {
      layerEl = document.createElement('div');
      layerEl.id = 'chaosLayer';
      layerEl.className = 'chaos-layer';
      layerEl.setAttribute('aria-hidden', 'true');
      document.body.appendChild(layerEl);
    }
    return layerEl;
  }

  /* ---- transient nodes ---------------------------------------------------
     ONE retire path, and only one. Removing a node from the DOM does not fire
     animationend, so a counter decremented only on that event leaks forever
     the first time anything calls remove(). Here every transient has exactly
     one closure, registered in a Set that teardown drains. */
  const pending = new Set();

  function transient(node, lifetimeMs) {
    if (!live() || !Budget.claim(1)) return null;
    let done = false;
    let timer = 0;
    const retire = () => {
      if (done) return;
      done = true;
      clearTimeout(timer);
      pending.delete(retire);
      node.remove();
      Budget.release(1);
    };
    node.addEventListener('animationend', retire, { once: true });
    timer = setTimeout(retire, lifetimeMs);
    pending.add(retire);
    layer().appendChild(node);
    return node;
  }

  function drain() {
    [...pending].forEach(retire => retire());
    pending.clear();
  }

  /* ---- the #truth guard --------------------------------------------------
     A body-level sibling can never be a descendant of .honest, which is the
     real firewall. This is the second layer; the MutationObserver at the
     bottom is the third — for the careless edit six months from now. */
  const FORBIDDEN = '#truth, .honest, [data-i18n], #almYi, #almJi, #genWish, .topbar, #genCanvas';
  const hostOk = element => !!element && !element.closest(FORBIDDEN);

  /* ==== THE SOUNDTRACK ====================================================
     《土狗贺岁》 — synthesised live with the Web Audio API. No mp3, no ogg,
     no base64, no CDN. Nothing is fetched at runtime.

     Declared HERE, above the registry, so apply() can reference BGM without a
     temporal-dead-zone throw. Named BGM, never Audio, so it cannot shadow
     window.Audio.

       调式:  D宫系统 · A徵调式.  音阶 D E F♯ A B (无 4 级, 无 7 级)
       拍号:  2/4   速度: 132 BPM   长度: 16 小节 / 32 拍 / 14.55 s
       徵 A4 440.00  羽 B4 493.88  宫 D5 587.33  商 E5 659.25  角 F♯5 739.99
       打岔音 D♯5 622.25 ← 不在音阶内
     ====================================================================== */
  const BGM = (() => {
    'use strict';

    /* ---- §1  音阶与曲谱 -------------------------------------------------- */
    const mtof = midi => 440 * Math.pow(2, (midi - 69) / 12);

    const P = {
      a3: 57, b3: 59, d4: 62, e4: 64, f4: 66,
      a4: 69, b4: 71, d5: 74, e5: 76, f5: 78,
      a5: 81, b5: 83,
      WRONG: 75                    // D♯5
    };

    const BASE_BPM = 132;
    const BEATS = 32;
    const LOOKAHEAD_MS = 25;
    const AHEAD = 0.30;            // 300 ms of stall margin. 0.12 drops notes
                                   // when a long main-thread task lands.
    const REST_FROM = 26;
    const REST_TO = 28;            // 第 14 小节：连梆子都停

    // [起拍, 音高, 时值(拍), 选项]
    const MELODY = [
      [ 0.0, P.a4, 0.5], [ 0.5, P.b4, 0.5], [ 1.0, P.d5, 0.5], [ 1.5, P.b4, 0.5],
      [ 2.0, P.a4, 0.5], [ 2.5, P.f4, 0.5], [ 3.0, P.a4, 1.0],
      [ 4.0, P.d5, 0.5], [ 4.5, P.e5, 0.5], [ 5.0, P.f5, 0.5], [ 5.5, P.e5, 0.5],
      [ 6.0, P.d5, 1.0], [ 7.0, P.a4, 0.5],
      [ 8.0, P.e5, 0.5], [ 8.5, P.d5, 0.5], [ 9.0, P.b4, 0.5], [ 9.5, P.d5, 0.5],
      [10.0, P.a4, 0.5], [10.5, P.b4, 0.5], [11.0, P.a4, 1.0],
      [12.0, P.f4, 0.5], [12.5, P.a4, 0.5], [13.0, P.b4, 0.5], [13.5, P.d5, 0.5],
      [14.0, P.a4, 2.0],

      // 乙 —— 唢呐夺门而入：滑音上扑，0.95 对 0.42
      [16.0, P.a5, 0.5, { gain: 0.95, scoop: -700 }],
      [16.5, P.b5, 0.5], [17.0, P.a5, 0.5], [17.5, P.f5, 0.5],
      [18.0, P.e5, 0.5], [18.5, P.f5, 0.5], [19.0, P.a5, 1.0],
      [20.0, P.a5, 0.5], [20.5, P.f5, 0.5], [21.0, P.e5, 0.5], [21.5, P.d5, 0.5],

      // 吹错了 —— 唢呐 D♯5，古筝照弹 D5；半拍后滑下来改正，还小声了
      [22.0, P.WRONG, 0.5, { gain: 0.62, double: P.d5 }],
      [22.5, P.d5,   0.5, { gain: 0.34, scoop: 100 }],
      [23.0, P.b4, 1.0],

      // 丙 收 —— 第 14 小节整小节空拍；第 15 小节锣响在没有旋律的正拍上
      [24.0, P.d5, 0.5], [24.5, P.b4, 0.5], [25.0, P.a4, 0.5], [25.5, P.f4, 0.5],
      [29.0, P.a4, 0.5, { gain: 0.30 }], [29.5, P.b4, 0.5, { gain: 0.34 }],
      [30.0, P.a4, 1.5, { gain: 0.44 }]
    ];

    function buildScore() {
      const events = [];
      const put = (beat, voice, options) =>
        events.push(Object.assign({ beat, voice }, options || {}));

      MELODY.forEach(([beat, midi, dur, extra]) => {
        const x = extra || {};
        if (beat < 16) {
          put(beat, 'zheng', { midi, dur, gain: 0.50 });
          put(beat, 'erhu',  { midi: midi - 12, dur, gain: 0.26 });
        } else {
          put(beat, 'suona', { midi, dur, gain: x.gain != null ? x.gain : 0.42, scoop: x.scoop });
          // 乐队弹对的音 —— 只有唢呐一个人吹错，笑点才在他身上
          put(beat, 'zheng', { midi: (x.double != null ? x.double : midi) - 12, dur, gain: 0.24 });
        }
      });

      for (let beat = 0; beat < BEATS; beat += 0.5) {
        if (beat >= REST_FROM && beat < REST_TO) continue;
        const down = beat % 2 === 0;
        put(beat, 'wood', { gain: down ? 0.26 : 0.15, hard: down });
      }
      put(27.0, 'wood', { gain: 0.10, hard: false });   // 空拍里一记孤零零的木鱼
      put( 0.0, 'luo',  { gain: 0.40, firstLoopOnly: true });
      put(28.0, 'luo',  { gain: 0.60 });                // 该来的没来，锣先来了
      put(31.5, 'bark', { gain: 0.40, everyOther: true });

      return events.sort((a, b) => a.beat - b.beat);
    }

    const EVENTS = buildScore();

    /* ---- §2  主总线与共享节点 --------------------------------------------
       信号链: 乐器 → bus → 高频衰减 → master → 压缩器 → destination
               bus → 92 ms 延迟 + 0.22 反馈 → 湿声 0.16 → master
       那条延迟是村口大喇叭的回声，比卷积混响便宜，也更像那个场子。 */
    const REED = (() => {
      const n = 1024;
      const curve = new Float32Array(n);
      const k = 2.6;
      const d = Math.tanh(k);
      for (let i = 0; i < n; i += 1) curve[i] = Math.tanh(((i / (n - 1)) * 2 - 1) * k) / d;
      return curve;
    })();

    const audio = { ctx: null, master: null, bus: null, noise: null, reedIn: null };
    const state = {
      playing: false,   // the engine is running
      wanted: false,    // the USER asked for music. Never persisted.
      timer: null,
      loopStart: 0,
      i: 0,
      loop: 0,
      bpm: BASE_BPM,
      volume: 0.42,
      level: 0.0001,    // tracked target, never read back off the AudioParam:
                        // older Safari returns the last SET value mid-ramp and
                        // stopping during the fade-in would click.
      lastErhu: null
    };

    function ensureAudio() {
      if (audio.ctx) return audio.ctx;
      const Ctor = window.AudioContext || window.webkitAudioContext;
      if (!Ctor) return null;                    // 老浏览器: 静默降级
      const ctx = new Ctor({ latencyHint: 'interactive' });

      const master = ctx.createGain();
      master.gain.value = 0.0001;                // 永远从静音开始

      const comp = ctx.createDynamicsCompressor();
      comp.threshold.value = -14;
      comp.knee.value = 6;
      comp.ratio.value = 5;
      comp.attack.value = 0.004;
      comp.release.value = 0.16;

      const tame = ctx.createBiquadFilter();
      tame.type = 'highshelf';
      tame.frequency.value = 3600;
      tame.gain.value = -3.5;

      const bus = ctx.createGain();
      bus.gain.value = 1;

      const dly = ctx.createDelay(0.5);
      dly.delayTime.value = 0.092;
      const dlyLp = ctx.createBiquadFilter();
      dlyLp.type = 'lowpass';
      dlyLp.frequency.value = 2200;
      const fb = ctx.createGain();
      fb.gain.value = 0.22;
      const wet = ctx.createGain();
      wet.gain.value = 0.16;

      bus.connect(tame); tame.connect(master);
      bus.connect(dly); dly.connect(dlyLp); dlyLp.connect(fb); fb.connect(dly);
      dlyLp.connect(wet); wet.connect(master);
      master.connect(comp); comp.connect(ctx.destination);

      const noise = ctx.createBuffer(1, Math.floor(ctx.sampleRate * 2), ctx.sampleRate);
      const data = noise.getChannelData(0);
      for (let i = 0; i < data.length; i += 1) data[i] = Math.random() * 2 - 1;

      // 唢呐共享链: 每音只建 4 个节点，贵的部分（2 倍过采样整形器 + 两个共振峰）
      // 只建一次。整形器共享还有一个好处：越响越毛，进场那一下自然最炸。
      const reedIn = ctx.createGain(); reedIn.gain.value = 1;
      const shaper = ctx.createWaveShaper(); shaper.curve = REED; shaper.oversample = '2x';
      const nose = ctx.createBiquadFilter(); nose.type = 'bandpass'; nose.frequency.value = 1780; nose.Q.value = 3.2;
      const cry  = ctx.createBiquadFilter(); cry.type  = 'bandpass'; cry.frequency.value  = 3050; cry.Q.value  = 6;
      const cryG = ctx.createGain(); cryG.gain.value = 0.45;
      const thin = ctx.createBiquadFilter(); thin.type = 'highpass'; thin.frequency.value = 300; thin.Q.value = 0.7;
      const out  = ctx.createGain(); out.gain.value = 2.6;
      reedIn.connect(shaper);
      shaper.connect(nose); nose.connect(thin);
      shaper.connect(cry); cry.connect(cryG); cryG.connect(thin);
      thin.connect(out); out.connect(bus);

      const blip = ctx.createBufferSource();      // iOS 解锁: 一帧无声
      blip.buffer = ctx.createBuffer(1, 1, ctx.sampleRate);
      blip.connect(ctx.destination);
      blip.start(0);

      audio.ctx = ctx;
      audio.master = master;
      audio.bus = bus;
      audio.noise = noise;
      audio.reedIn = reedIn;
      return ctx;
    }

    function noiseBurst(at, dur, type, freq, q, peak) {
      const ctx = audio.ctx;
      const src = ctx.createBufferSource();
      src.buffer = audio.noise;
      const filter = ctx.createBiquadFilter();
      filter.type = type;
      filter.frequency.value = freq;
      filter.Q.value = q;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.0001, at);
      gain.gain.exponentialRampToValueAtTime(Math.max(peak, 0.0002), at + 0.002);
      gain.gain.exponentialRampToValueAtTime(0.0001, at + dur);
      src.connect(filter); filter.connect(gain); gain.connect(audio.bus);
      src.start(at, Math.random() * 1.5, dur + 0.05);
      src.onended = () => {
        try { src.disconnect(); filter.disconnect(); gain.disconnect(); } catch (_) {}
      };
    }

    /* ---- §3  古筝 ---------------------------------------------------------
       拨弦: 起音 4 ms，指数衰减，亮度随时间掉下来（拨弦先掉高次分音，那条
       从 f×14 到 f×1.6 的滤波扫描就是全部诀窍）。两个振荡器互相失谐 −6/+7
       音分，模拟同一根弦上的分音不完全同步。前面一记指甲触弦的噪声。 */
    function zheng(t, midi, dur, gain) {
      const ctx = audio.ctx;
      const f = mtof(midi);
      const ring = Math.max(0.55, Math.min(1.6, dur * 1.35));

      const lp = ctx.createBiquadFilter();
      lp.type = 'lowpass';
      lp.Q.value = 1.1;
      lp.frequency.setValueAtTime(Math.min(6400, f * 14), t);
      lp.frequency.exponentialRampToValueAtTime(Math.max(420, f * 1.6), t + 0.45);

      const a = ctx.createOscillator(); a.type = 'triangle'; a.frequency.value = f; a.detune.value = -6;
      const b = ctx.createOscillator(); b.type = 'sawtooth'; b.frequency.value = f; b.detune.value = 7;
      const bg = ctx.createGain(); bg.gain.value = 0.34;

      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(gain, t + 0.004);
      g.gain.exponentialRampToValueAtTime(0.0001, t + ring);

      a.connect(lp); b.connect(bg); bg.connect(lp); lp.connect(g); g.connect(audio.bus);
      a.start(t); b.start(t);
      a.stop(t + ring + 0.02); b.stop(t + ring + 0.02);
      b.onended = () => {
        try { a.disconnect(); b.disconnect(); bg.disconnect(); lp.disconnect(); g.disconnect(); } catch (_) {}
      };

      noiseBurst(t, 0.014, 'highpass', 2000, 0.7, gain * 0.34);   // 指甲触弦
    }

    /* ---- §4  二胡 ---------------------------------------------------------
       弓弦: 锯齿波（弓的粘滑运动本来就是锯齿）经共鸣腔滤波。起音 70 ms —— 弓
       要先吃上弦。揉弦延迟 180 ms 才进来：一上来就抖是合成器预置的破绽。
       相邻音之间 55 ms 滑音 —— 没有品的指板不会跳音。 */
    function erhu(t, midi, dur, gain, from) {
      const ctx = audio.ctx;
      const f = mtof(midi);
      const len = Math.max(0.22, dur * (60 / state.bpm));

      const osc = ctx.createOscillator();
      osc.type = 'sawtooth';
      if (from != null && Math.abs(from - midi) <= 7) {
        osc.frequency.setValueAtTime(mtof(from), t);
        osc.frequency.linearRampToValueAtTime(f, t + 0.055);      // 滑音
      } else {
        osc.frequency.setValueAtTime(f, t);
      }

      const body = ctx.createBiquadFilter(); body.type = 'lowpass';  body.frequency.value = 2600; body.Q.value = 0.9;
      const res  = ctx.createBiquadFilter(); res.type  = 'bandpass'; res.frequency.value  = 900;  res.Q.value  = 4;
      const resG = ctx.createGain(); resG.gain.value = 0.26;         // 蟒皮共鸣

      const lfo = ctx.createOscillator(); lfo.type = 'sine'; lfo.frequency.value = 5.2;
      const lfoG = ctx.createGain();
      lfoG.gain.setValueAtTime(0, t);
      lfoG.gain.setValueAtTime(0, t + 0.18);
      lfoG.gain.linearRampToValueAtTime(30, t + 0.34);               // ±30 音分
      lfo.connect(lfoG); lfoG.connect(osc.detune);

      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, t);
      g.gain.linearRampToValueAtTime(gain, t + 0.07);
      g.gain.setValueAtTime(gain, t + Math.max(0.09, len - 0.16));
      g.gain.exponentialRampToValueAtTime(0.0001, t + len + 0.16);

      osc.connect(body); body.connect(g);
      osc.connect(res); res.connect(resG); resG.connect(g);
      g.connect(audio.bus);
      osc.start(t); lfo.start(t);
      osc.stop(t + len + 0.2); lfo.stop(t + len + 0.2);
      osc.onended = () => {
        try {
          osc.disconnect(); lfo.disconnect(); lfoG.disconnect();
          body.disconnect(); res.disconnect(); resG.disconnect(); g.disconnect();
        } catch (_) {}
      };
    }

    /* ---- §5  唢呐 ---------------------------------------------------------
       双簧: 锯齿波 → 共享 tanh 波形整形（簧片的爆音是互调，不只是谐波）
       → 鼻音共振峰 1780 Hz Q3.2 并联 3050 Hz Q6 的尖啸 → 300 Hz 高通削掉体
       量。唢呐几乎没有基频重量，这正是它能盖过一整个乐队的原因。
       哨音 5.6 Hz，延迟 120 ms 才进。进场那一下 0.95 对常规 0.42。 */
    function suona(t, midi, dur, gain, scoop) {
      const ctx = audio.ctx;
      const f = mtof(midi);
      const len = Math.max(0.18, dur * (60 / state.bpm));

      const osc = ctx.createOscillator();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(f, t);
      if (scoop) {                                   // −700 进场 / +100 改正
        osc.detune.setValueAtTime(scoop, t);
        osc.detune.linearRampToValueAtTime(0, t + (scoop > 0 ? 0.07 : 0.09));
      }

      const lfo = ctx.createOscillator(); lfo.type = 'sine'; lfo.frequency.value = 5.6;
      const lfoG = ctx.createGain();
      lfoG.gain.setValueAtTime(0, t);
      lfoG.gain.setValueAtTime(0, t + 0.12);
      lfoG.gain.linearRampToValueAtTime(22, t + 0.30);
      lfo.connect(lfoG); lfoG.connect(osc.detune);   // 与 scoop 相加，互不冲突

      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, t);
      g.gain.linearRampToValueAtTime(gain, t + 0.02);
      g.gain.linearRampToValueAtTime(gain * 0.85, t + 0.07);
      g.gain.setValueAtTime(gain * 0.85, t + Math.max(0.09, len - 0.07));
      g.gain.exponentialRampToValueAtTime(0.0001, t + len + 0.07);

      osc.connect(g); g.connect(audio.reedIn);       // 整形前给增益 —— 越响越毛
      osc.start(t); lfo.start(t);
      osc.stop(t + len + 0.12); lfo.stop(t + len + 0.12);
      osc.onended = () => {
        try { osc.disconnect(); lfo.disconnect(); lfoG.disconnect(); g.disconnect(); } catch (_) {}
      };
    }

    /* ---- §6  木鱼 / 梆子 --------------------------------------------------
       两层: 有音高的“笃”(三角波，35 ms 内下滑到 0.72 倍) 加一记滤波噪声。
       木鱼既不是纯 click 也不是纯噪声，是两者相差 20 ms 的频谱。它从不为唢呐
       加速，也不为那个错音停顿 —— 全曲的笑点都是某一个人在失态，只有其他人
       绷着脸，才看得出是谁。 */
    function wood(t, gain, hard) {
      const ctx = audio.ctx;
      const pitch = hard ? 2100 : 1150;

      const osc = ctx.createOscillator();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(pitch, t);
      osc.frequency.exponentialRampToValueAtTime(pitch * 0.72, t + 0.035);

      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(gain, t + 0.001);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.045);

      osc.connect(g); g.connect(audio.bus);
      osc.start(t); osc.stop(t + 0.06);
      osc.onended = () => { try { osc.disconnect(); g.disconnect(); } catch (_) {} };

      noiseBurst(t, hard ? 0.018 : 0.022, 'bandpass', hard ? 4200 : 2400, hard ? 12 : 8, gain * 0.6);
    }

    /* ---- §7a  大锣 --------------------------------------------------------
       非谐 FM: 载波 205 Hz，调制比 √2（无理数 → 金属般的非谐分音），调制指数
       900 → 40。中国大锣的标志是敲下去之后音高往下掉：205 → 150 Hz。没有这
       个下滑就只是一片镲。外加 520 Hz 的噪声铺底当余响。 */
    function luo(t, gain) {
      const ctx = audio.ctx;

      const car = ctx.createOscillator();
      car.type = 'sine';
      car.frequency.setValueAtTime(205, t);
      car.frequency.exponentialRampToValueAtTime(150, t + 0.62);    // 那一声“哐——”

      const mod = ctx.createOscillator();
      mod.type = 'sine';
      mod.frequency.value = 205 * 1.4142;
      const modG = ctx.createGain();
      modG.gain.setValueAtTime(900, t);
      modG.gain.exponentialRampToValueAtTime(40, t + 1.2);
      mod.connect(modG); modG.connect(car.frequency);   // 与上面的 ramp 相加

      const g = ctx.createGain();
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(gain, t + 0.002);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 2.6);

      car.connect(g); g.connect(audio.bus);
      car.start(t); mod.start(t);
      car.stop(t + 2.7); mod.stop(t + 2.7);
      car.onended = () => {
        try { car.disconnect(); mod.disconnect(); modG.disconnect(); g.disconnect(); } catch (_) {}
      };

      noiseBurst(t, 2.2, 'bandpass', 520, 1.5, gain * 0.35);
    }

    /* ---- §7b  土狗叫 ------------------------------------------------------
       滑音而非采样: 音高 900 → 300 Hz 用 110 ms，共振峰 1400 → 700 Hz 跟着
       掉。下行的音高配下行的共振峰，就是一声狗叫。两声，间隔 155 ms，第二声
       更低。落在整首循环的接缝上 —— 耳朵刚被告知曲子收干净了。 */
    function bark(t, gain) {
      const ctx = audio.ctx;
      const yelp = (at, hi, lo, peak) => {
        const osc = ctx.createOscillator();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(hi, at);
        osc.frequency.exponentialRampToValueAtTime(lo, at + 0.11);

        const bp = ctx.createBiquadFilter();
        bp.type = 'bandpass';
        bp.Q.value = 3.2;
        bp.frequency.setValueAtTime(1400, at);
        bp.frequency.exponentialRampToValueAtTime(700, at + 0.12);

        const g = ctx.createGain();
        g.gain.setValueAtTime(0.0001, at);
        g.gain.linearRampToValueAtTime(peak, at + 0.012);
        g.gain.exponentialRampToValueAtTime(0.0001, at + 0.16);

        osc.connect(bp); bp.connect(g); g.connect(audio.bus);
        osc.start(at); osc.stop(at + 0.18);
        osc.onended = () => { try { osc.disconnect(); bp.disconnect(); g.disconnect(); } catch (_) {} };
      };
      yelp(t, 900, 300, gain);
      yelp(t + 0.155, 780, 260, gain * 0.8);   // 汪，汪
    }

    /* ---- §8  调度与生命周期 ----------------------------------------------
       25 ms 的 setInterval 只做一件事: 把未来 300 ms 内该响的音排进 Web Audio
       的时钟。绝不用 setTimeout 逐音触发 —— 那会听得出来在飘，而且后台标签页
       会被节流到 1 Hz。 */
    function fire(event, when) {
      switch (event.voice) {
        case 'zheng': zheng(when, event.midi, event.dur, event.gain); break;
        case 'erhu':  erhu(when, event.midi, event.dur, event.gain, state.lastErhu);
                      state.lastErhu = event.midi; break;
        case 'suona': suona(when, event.midi, event.dur, event.gain, event.scoop); break;
        case 'wood':  wood(when, event.gain, event.hard); break;
        case 'luo':   luo(when, event.gain); break;
        case 'bark':  bark(when, event.gain); break;
        default: break;
      }
    }

    // 速度一圈比一圈快 3 BPM，132 → 147，第六圈一记锣，打回原速。
    // 锣排在新一圈的正拍上，不是 currentTime + 0.05 —— 后者会偏出 100 ms。
    function advanceTempo(atTime) {
      state.loop += 1;
      if (state.loop > 5) {
        state.loop = 0;
        state.bpm = BASE_BPM;
        luo(atTime, 0.45);
      } else {
        state.bpm = BASE_BPM + state.loop * 3;
      }
    }

    function tick() {
      const ctx = audio.ctx;
      if (!ctx || !state.playing || ctx.state !== 'running') return;
      let spb = 60 / state.bpm;
      const horizon = ctx.currentTime + AHEAD;
      let guard = 0;
      while (guard < 600) {
        guard += 1;
        const event = EVENTS[state.i];
        const when = state.loopStart + event.beat * spb;
        if (when >= horizon) break;
        const skip = (event.firstLoopOnly && state.loop !== 0)
          || (event.everyOther && state.loop % 2 !== 0);
        if (!skip && when > ctx.currentTime - 0.03) fire(event, when);
        state.i += 1;
        if (state.i >= EVENTS.length) {
          state.i = 0;
          state.loopStart += BEATS * spb;   // 用刚跑完那一圈的旧速度
          state.lastErhu = null;            // 接缝处不要从 B4 滑到 A4
          advanceTempo(state.loopStart);
          spb = 60 / state.bpm;             // 新速度只在圈与圈之间生效
        }
      }
      if (guard >= 600) { state.loopStart = ctx.currentTime + 0.05; state.i = 0; }
    }

    function rampTo(target, seconds) {
      if (!audio.ctx || !audio.master) return;
      const now = audio.ctx.currentTime;
      const param = audio.master.gain;
      const safe = Math.max(target, 0.0001);
      param.cancelScheduledValues(now);
      param.setValueAtTime(Math.max(state.level, 0.0001), now);
      param.exponentialRampToValueAtTime(safe, now + seconds);
      state.level = safe;
    }

    function engineUp() {
      const ctx = ensureAudio();
      if (!ctx) return Promise.resolve(false);
      const go = () => {
        if (state.playing) return true;
        state.playing = true;
        state.i = 0;
        state.loop = 0;
        state.bpm = BASE_BPM;
        state.lastErhu = null;
        state.loopStart = ctx.currentTime + 0.12;
        rampTo(state.volume, 0.35);
        if (state.timer) clearInterval(state.timer);
        state.timer = setInterval(tick, LOOKAHEAD_MS);
        tick();
        return true;
      };
      return ctx.state === 'running'
        ? Promise.resolve(go())
        : ctx.resume().then(go).catch(() => false);
    }

    function engineDown() {
      if (state.timer) { clearInterval(state.timer); state.timer = null; }
      if (!state.playing) return;
      state.playing = false;
      rampTo(0.0001, 0.45);
      setTimeout(() => {
        if (!state.playing && audio.ctx && audio.ctx.state === 'running') {
          audio.ctx.suspend().catch(() => {});
        }
      }, 700);
    }

    return {
      /* Only ever reached from a click handler. Never on load, never on scroll,
         and the play state is deliberately NOT persisted: a page that resumes
         music because you agreed last Tuesday is an ambush. */
      toggle() {
        if (state.wanted) { state.wanted = false; engineDown(); return false; }
        state.wanted = true;
        engineUp();
        return true;
      },
      off() { state.wanted = false; engineDown(); },
      hush() { if (state.wanted) engineDown(); },        // keeps the intent
      unhush() { if (state.wanted && !state.playing) engineUp(); },
      wanted() { return state.wanted; },
      setVolume(value) {
        state.volume = Math.max(0, Math.min(1, value));
        if (state.playing) rampTo(state.volume, 0.08);
      },
      getVolume() { return state.volume; }
    };
  })();

  /* ---- registry and mode machine ---------------------------------------- */
  const REGISTRY = [];
  const LIVE = [];
  const register = effect => { REGISTRY.push(effect); };

  let enabled = store.read('tugou-chaos') !== 'off';
  let inTruth = false;
  let tabHidden = document.hidden;
  let mounted = false;

  /* 'off'    — reduced motion, or the switch. Nothing exists.
     'hushed' — #truth is on screen, or the tab is hidden. Frozen, DOM kept.
     'on'     — everything runs. */
  const mode = () => (CALM.matches || !enabled)
    ? 'off'
    : (inTruth || tabHidden) ? 'hushed' : 'on';

  const live = () => mode() === 'on';

  function mount() {
    if (mounted) return;
    layer();
    REGISTRY.forEach(effect => {
      try { effect.init(); LIVE.push(effect); } catch (_) {}
    });
    /* focus-order audit: the layer must hold nothing tabbable, ever */
    layer().querySelectorAll('a[href], button, input, select, textarea, [tabindex]')
      .forEach(node => node.remove());
    mounted = true;
  }

  function teardown() {
    while (LIVE.length) {
      const effect = LIVE.pop();
      try { effect.stop(); } catch (_) {}
      try { effect.destroy(); } catch (_) {}
    }
    drain();
    Budget.reset();
    mounted = false;
  }

  /* THE MASTER LOOP. Every effect and the audio pass through this one place.
     That is the whole reason the off switch can be trusted. */
  function apply() {
    const next = mode();
    root.dataset.chaos = next;
    root.dataset.fx = enabled ? 'on' : 'off';

    if (next === 'on') {
      mount();
      LIVE.slice().forEach(effect => { try { effect.start(); } catch (_) {} });
      BGM.unhush();
    } else if (next === 'hushed') {
      LIVE.slice().forEach(effect => { try { effect.stop(); } catch (_) {} });
      drain();
      BGM.hush();
    } else {
      teardown();
      BGM.off();
    }
    syncControls();
  }

  function setEnabled(on) {
    enabled = on;
    store.write('tugou-chaos', on ? 'on' : 'off');
    apply();
    const region = document.getElementById('liveRegion');
    if (region) region.textContent = t(on ? 'a11y.chaosOnDone' : 'a11y.chaosOffDone');
  }

  /* ---- the two controls -------------------------------------------------- */
  function syncControls() {
    const fx = document.getElementById('chaosBtn');
    if (fx) {
      fx.hidden = false;
      fx.setAttribute('aria-pressed', String(enabled));
      fx.setAttribute(
        'aria-label',
        CALM.matches ? t('a11y.chaosCalm') : t(enabled ? 'a11y.chaosOff' : 'a11y.chaosOn')
      );
      const label = fx.querySelector('.chaos-switch__label');
      if (label) label.textContent = t(enabled ? 'chaos.on' : 'chaos.off');
    }

    const music = document.getElementById('bgmBtn');
    if (music) {
      music.hidden = false;
      const playing = BGM.wanted();
      music.setAttribute('aria-pressed', String(playing));
      music.setAttribute('aria-label', t(playing ? 'a11y.bgmStop' : 'a11y.bgmPlay'));
      music.title = t('bgm.title');
      const glyph = music.querySelector('.bgm-btn__glyph');
      const label = music.querySelector('.bgm-btn__label');
      if (glyph) glyph.textContent = playing ? '■' : '▶';
      if (label) label.textContent = t(playing ? 'bgm.stop' : 'bgm.play');
    }

    const vol = document.getElementById('bgmVol');
    if (vol) { vol.hidden = false; vol.setAttribute('aria-label', t('bgm.volume')); }
  }

  /* A language switch is handled by remount, not by an optional fifth method
     on the contract. applyLang() has already written the new dataset.lang by
     the time this runs, so every t() call below picks up the new dictionary. */
  function retranslate() {
    syncControls();
    if (mounted) { teardown(); apply(); }
  }

  /* ======================================================================
     THE NINE EFFECTS
     ====================================================================== */

  /* ---- 1. 早安贴纸雨 ------------------------------------------------------
     The forwarded 早安图 itself, escaped from the family chat. Drawn in the
     page's own hero-plaque type recipe (gold fill, ink stroke, lacquer+blue
     hard offsets) so it belongs here instead of arriving from a particle
     library. Reuses script.js's own seededRandom, so the field is identical
     on every mount and a language switch does not reshuffle it. */
  const STICKER_GLYPHS = ['早安', '福', '★', '恭喜发财', '土狗', '发财', '✿', '早'];

  register({
    name: 'stickers',
    nodes: [],
    init() {
      const count = Budget.claim(CAP.stickers);
      const rand = seededRandom(20260831);
      const frag = document.createDocumentFragment();
      for (let index = 0; index < count; index += 1) {
        const rising = index % 3 === 2;
        const node = document.createElement('i');
        node.className = rising ? 'chaos-sticker chaos-sticker--rise' : 'chaos-sticker';
        node.textContent = rising
          ? '♥'
          : STICKER_GLYPHS[Math.floor(rand() * STICKER_GLYPHS.length)];
        node.style.setProperty('--x', `${Math.round(rand() * 90)}%`);
        node.style.setProperty('--size', `${16 + Math.round(rand() * 24)}px`);
        node.style.setProperty('--dur', `${11 + Math.round(rand() * 9)}s`);
        node.style.setProperty('--delay', `${-Math.round(rand() * 18)}s`);
        node.style.setProperty('--drift', `${Math.round(rand() * 90 - 45)}px`);
        node.style.setProperty('--spin-a', `${Math.round(rand() * 30 - 15)}deg`);
        node.style.setProperty('--spin-b', `${Math.round(rand() * 48 - 24)}deg`);
        node.style.animationPlayState = 'paused';
        frag.appendChild(node);
        this.nodes.push(node);
      }
      layer().appendChild(frag);
    },
    start() { this.nodes.forEach(node => { node.style.animationPlayState = 'running'; }); },
    stop() { this.nodes.forEach(node => { node.style.animationPlayState = 'paused'; }); },
    destroy() {
      Budget.release(this.nodes.length);
      this.nodes.forEach(node => node.remove());
      this.nodes = [];
    }
  });

  /* ---- 2. 家族群弹幕 ------------------------------------------------------
     The one crypto primitive that is already Chinese. Every other memecoin
     page has a scrolling feed of strangers screaming BUY; this one has your
     aunt asking whether you have eaten. 二舅 walks in from script.js's own
     'maker.namePlaceholder': '例如：二舅'. Pooled nodes, transform only. */
  const DANMU_WHO = [
    ['二舅', 'Second Uncle'], ['三姨', 'Third Aunt'], ['大表哥', 'Big Cousin'],
    ['群主', 'Group Admin'], ['隔壁王叔', 'Uncle Wang'], ['小姑', 'Little Aunt'],
    ['老同学', 'Old Classmate'], ['表妹', 'Cousin']
  ];
  const DANMU_SAYS = [
    ['早安！', 'good morning!'], ['恭喜发财', 'may you prosper'],
    ['身体健康最重要', 'health comes first'], ['吃饭了没有', 'have you eaten yet'],
    ['天天开心', 'be happy every day'], ['出入平安', 'safe coming and going'],
    ['少看手机', 'look at your phone less'], ['转给你妈看看', 'forward this to your mum'],
    ['笑口常开', 'keep smiling'], ['早点睡', 'go to bed early']
  ];
  const DANMU_MARKS = ['★', '❀', '✿'];
  const DANMU_LANES = [15, 24, 33, 66];   /* % of viewport; 40–60 kept clear */

  register({
    name: 'danmu',
    pool: [],
    timer: 0,
    opener: 0,
    init() {
      const count = Budget.claim(CAP.danmu);
      for (let index = 0; index < count; index += 1) {
        const node = document.createElement('p');
        node.className = 'chaos-danmu';
        node.hidden = true;
        node.addEventListener('animationend', () => {
          node.hidden = true;
          node.classList.remove('is-running');
        });
        layer().appendChild(node);
        this.pool.push(node);
      }
    },
    launch() {
      if (!live()) return;
      const node = this.pool.find(item => item.hidden);
      if (!node) return;                       /* hard cap: never a fourth */
      const slot = currentLang() === 'zh' ? 0 : 1;
      const who = DANMU_WHO[Math.floor(Math.random() * DANMU_WHO.length)][slot];
      const says = DANMU_SAYS[Math.floor(Math.random() * DANMU_SAYS.length)][slot];
      const mark = DANMU_MARKS[Math.floor(Math.random() * DANMU_MARKS.length)];
      node.textContent = `${who}：${says} ${mark}`;
      const lanes = DANMU_LANES.slice(0, CAP.lanes);
      node.style.setProperty('--top', `${lanes[Math.floor(Math.random() * lanes.length)]}%`);
      node.style.setProperty('--dur', `${(11 + Math.random() * 5).toFixed(1)}s`);
      node.hidden = false;
      void node.offsetWidth;                   /* one reflow, one node */
      node.classList.add('is-running');
    },
    start() {
      if (this.timer) return;                  /* apply() fires often; never stack */
      this.timer = setInterval(() => this.launch(), CAP.danmuGap);
      clearTimeout(this.opener);
      this.opener = setTimeout(() => this.launch(), 1400);
    },
    stop() {
      clearInterval(this.timer);
      clearTimeout(this.opener);
      this.timer = 0;
      this.opener = 0;
      this.pool.forEach(node => { node.hidden = true; node.classList.remove('is-running'); });
    },
    destroy() {
      Budget.release(this.pool.length);
      this.pool.forEach(node => node.remove());
      this.pool = [];
    }
  });

  /* ---- 3. 红包雨 ----------------------------------------------------------
     Chinese-native: the 春节 Alipay/WeChat mechanic every county-town promo
     page copied. Western retro has confetti; it does not have 元宝, and the
     sycee silhouette is the tell. One shot, then locked for 12 s — the peak
     node moment on the page, so it is never continuous.
     threshold 0.25, not 0.35: on a 390x844 phone the launch section is taller
     than the viewport, so the maximum achievable ratio is bounded and a high
     threshold would mean the shower never fires at all. */
  const FALL_KINDS = ['packet', 'packet', 'coin', 'ingot'];

  register({
    name: 'redpacket',
    observer: null,
    armed: true,
    rearm: 0,
    pour(count) {
      for (let index = 0; index < count; index += 1) {
        const node = document.createElement('i');
        node.className = `chaos-fall chaos-fall--${FALL_KINDS[Math.floor(Math.random() * FALL_KINDS.length)]}`;
        node.style.left = `${Math.random() * 92}%`;
        node.style.setProperty('--drift', `${-40 + Math.random() * 80}px`);
        node.style.setProperty('--spin-from', `${-30 + Math.random() * 60}deg`);
        node.style.setProperty('--spin-to', `${-220 + Math.random() * 440}deg`);
        node.style.animationDuration = `${4.4 + Math.random() * 2.6}s`;
        node.style.animationDelay = `${Math.random() * 900}ms`;
        if (!transient(node, 8600)) return;   /* budget exhausted: stop asking */
      }
    },
    init() {
      const buy = document.getElementById('buy');
      if (!buy || !('IntersectionObserver' in window)) return;
      this.observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting || !this.armed || !live()) return;
          this.armed = false;
          this.pour(CAP.packets);
          clearTimeout(this.rearm);
          this.rearm = setTimeout(() => { this.armed = true; }, 12000);
        });
      }, { threshold: 0.25 });
      this.observer.observe(buy);
    },
    start() { /* the observer is the trigger; nothing to resume */ },
    stop() { clearTimeout(this.rearm); this.armed = true; },
    destroy() {
      clearTimeout(this.rearm);
      this.observer?.disconnect();
      this.observer = null;
    }
  });

  /* ---- 4. 恭喜发财 --------------------------------------------------------
     The 点击特效 that shipped with every 空间 skin. Text glyphs with hard
     offset shadows, not emoji and not a particle fountain: 发 and 福 as
     characters, ¥ as a real currency mark. The reference is a stamp landing,
     one per press. */
  const BURST_GLYPHS = ['✦', '★', '发', '福', '¥', '✧'];
  const BURST_COLORS = ['--gold', '--toxic', '--lotus', '--lake', '--chrome'];
  const BURST_MUTE = '#truth, .honest, .topbar, .ticker, .chaos-layer';

  register({
    name: 'tapburst',
    downX: 0,
    downY: 0,
    last: 0,
    onDown: null,
    onUp: null,
    init() {
      this.onDown = event => { this.downX = event.clientX; this.downY = event.clientY; };
      this.onUp = event => {
        if (!live()) return;
        if (Math.hypot(event.clientX - this.downX, event.clientY - this.downY) > 12) return;
        if (event.target && event.target.closest && event.target.closest(BURST_MUTE)) return;
        const now = performance.now();
        if (now - this.last < 420) return;
        this.last = now;

        const x = event.clientX;
        const y = event.clientY;
        const count = CAP.burst;
        for (let index = 0; index < count; index += 1) {
          const angle = (Math.PI * 2 * index) / count + Math.random() * 0.4;
          const reach = 46 + Math.random() * 40;
          const bit = document.createElement('span');
          bit.className = 'chaos-burst';
          bit.textContent = BURST_GLYPHS[Math.floor(Math.random() * BURST_GLYPHS.length)];
          bit.style.left = `${x}px`;
          bit.style.top = `${y}px`;
          bit.style.color = `var(${BURST_COLORS[Math.floor(Math.random() * BURST_COLORS.length)]})`;
          bit.style.setProperty('--dx', `${Math.cos(angle) * reach}px`);
          bit.style.setProperty('--dy', `${Math.sin(angle) * reach}px`);
          if (!transient(bit, 900)) break;
        }
        const plaque = document.createElement('span');
        plaque.className = 'chaos-plaque';
        plaque.textContent = t('burst.word');
        plaque.style.left = `${x}px`;
        plaque.style.top = `${y}px`;
        transient(plaque, 1200);
      };
      addEventListener('pointerdown', this.onDown, { passive: true });
      addEventListener('pointerup', this.onUp, { passive: true });
    },
    start() { /* gated by live() inside the handler */ },
    stop() { this.last = performance.now(); },
    destroy() {
      removeEventListener('pointerdown', this.onDown);
      removeEventListener('pointerup', this.onUp);
      this.onDown = null;
      this.onUp = null;
    }
  });

  /* ---- 5. 金光拖尾 --------------------------------------------------------
     The most-pasted 光标特效 in QQ空间 / 百度空间 history. The details that
     make it right rather than generic: 五角星 and 花瓣 glyphs typed as TEXT,
     not sprites, and steps(9) rather than ease-out, because the original was
     a 12fps GIF and smooth easing is the fastest tell of a Western pastiche.
     No rAF, no per-frame DOM query, no forced layout read anywhere. */
  const SPARK_GLYPHS = ['✦', '★', '✧', '❀', '✿', '❋'];
  const SPARK_COLORS = ['--gold', '--lotus', '--toxic', '--lake', '--chrome', '--violet'];

  register({
    name: 'trail',
    onMove: null,
    init() {
      if (!CAP.trail || !matchMedia('(pointer: fine)').matches) return;
      let last = 0;
      let lastX = 0;
      let lastY = 0;
      this.onMove = event => {
        if (event.pointerType && event.pointerType !== 'mouse') return;
        if (!live()) return;
        const now = event.timeStamp;
        if (now - last < 45) return;
        if (Math.hypot(event.clientX - lastX, event.clientY - lastY) < 16) return;
        last = now;
        lastX = event.clientX;
        lastY = event.clientY;

        const spark = document.createElement('span');
        spark.className = 'chaos-spark';
        spark.textContent = SPARK_GLYPHS[Math.floor(Math.random() * SPARK_GLYPHS.length)];
        spark.style.color = `var(${SPARK_COLORS[Math.floor(Math.random() * SPARK_COLORS.length)]})`;
        spark.style.fontSize = `${13 + Math.random() * 12}px`;
        spark.style.setProperty('--x', `${event.clientX - 9}px`);
        spark.style.setProperty('--y', `${event.clientY - 9}px`);
        transient(spark, 1000);
      };
      addEventListener('pointermove', this.onMove, { passive: true });
    },
    start() { /* gated by live() inside the handler */ },
    stop() { /* nothing in flight but transients, drained by the core */ },
    destroy() {
      if (this.onMove) removeEventListener('pointermove', this.onMove);
      this.onMove = null;
    }
  });

  /* ---- 6. 挂件 ------------------------------------------------------------
     The QQ空间 item par excellence: the little ornament bolted to the side of
     the 空间 that stayed put while the content scrolled under it. A 中国结
     rather than a generic badge because the knot, the 福 plaque and the tassel
     are the objects that actually hang in a county-town shop — and off the
     rear-view mirror of the minivan already in the hero photo. */
  register({
    name: 'pendant',
    node: null,
    init() {
      if (!Budget.claim(1)) return;
      const node = document.createElement('div');
      node.className = 'chaos-pendant';
      node.innerHTML =
        '<span class="chaos-pendant__cord"></span>'
        + '<span class="chaos-pendant__knot"></span>'
        + '<span class="chaos-pendant__plaque">福</span>'
        + '<span class="chaos-pendant__tassel"></span>';
      node.style.animationPlayState = 'paused';
      layer().appendChild(node);
      this.node = node;
    },
    start() { if (this.node) this.node.style.animationPlayState = 'running'; },
    stop() { if (this.node) this.node.style.animationPlayState = 'paused'; },
    destroy() {
      if (!this.node) return;
      Budget.release(1);
      this.node.remove();
      this.node = null;
    }
  });

  /* ---- 7. 闪字 + 艺术字 ---------------------------------------------------
     闪字生成器 output pasted as a 个性签名. The tell that separates it from
     Western rainbow text is that the bands march through STATIONARY glyphs in
     hard steps, rather than the whole word cycling hue smoothly.
     Class-only: applyLang() overwrites textContent on [data-i18n] elements but
     never touches classList, so these survive a language switch untouched.
     The .honest h2 is deliberately absent from both selector lists. */
  register({
    name: 'shanzi',
    marked: [],
    init() {
      const paint = (selector, className) => {
        document.querySelectorAll(selector).forEach(element => {
          if (element.closest('#truth, .honest')) return;
          element.classList.add(className);
          this.marked.push([element, className]);
        });
      };
      paint('.definition h2, .launch h2', 'chaos-shanzi');
      paint('.daily h2', 'chaos-wordart');
    },
    start() { this.marked.forEach(([element]) => { element.style.animationPlayState = 'running'; }); },
    stop() { this.marked.forEach(([element]) => { element.style.animationPlayState = 'paused'; }); },
    destroy() {
      this.marked.forEach(([element, className]) => {
        element.classList.remove(className);
        element.style.animationPlayState = '';
      });
      this.marked = [];
    }
  });

  /* ---- 8. 三速跑马灯 ------------------------------------------------------
     The defining sound of a 2004 Chinese page is not one marquee, it is three,
     at three speeds, none synchronised. The vertical 滚动公告 in particular is
     a Chinese-web fixture — school, government and shop pages still ship it —
     with no Western retro equivalent, and it is what a page uses to say
     something ordinary and administrative in the middle of all the celebration.
     Extending the EXISTING pause button rather than adding a second one is the
     accessibility half of the joke: the page is relentless, and exactly one
     control stops it.
     The footer marquee is deliberately NOT frozen by the quiet zone: it sits
     below #truth, so pausing it there would mean it could never be seen. */
  register({
    name: 'marquee',
    marquee: null,
    board: null,
    onPause: null,
    init() {
      const footer = document.querySelector('.footer');
      const anchor = document.querySelector('.footer__inner');
      if (footer && hostOk(anchor)) {
        const strip = document.createElement('div');
        strip.className = 'chaos-marquee';
        strip.setAttribute('aria-hidden', 'true');
        const track = document.createElement('div');
        track.className = 'chaos-marquee__track';
        const text = t('marquee.text');
        for (let index = 0; index < 2; index += 1) {
          const span = document.createElement('span');
          span.textContent = text;
          track.appendChild(span);
        }
        strip.appendChild(track);
        footer.insertBefore(strip, anchor);
        this.marquee = strip;
      }

      const daily = document.querySelector('.daily .section__inner');
      if (hostOk(daily)) {
        const board = document.createElement('div');
        board.className = 'chaos-board';
        board.setAttribute('role', 'note');
        board.setAttribute('aria-label', t('a11y.board'));
        const tag = document.createElement('span');
        tag.className = 'chaos-board__tag';
        tag.setAttribute('aria-hidden', 'true');
        tag.textContent = t('board.tag');
        const win = document.createElement('div');
        win.className = 'chaos-board__window';
        const reel = document.createElement('div');
        reel.className = 'chaos-board__reel';
        const lines = [t('board.one'), t('board.two'), t('board.three')];
        lines.forEach(line => {
          const p = document.createElement('p');
          p.textContent = line;
          reel.appendChild(p);
        });
        lines.forEach(line => {                 /* the duplicate half of the loop */
          const p = document.createElement('p');
          p.textContent = line;
          p.setAttribute('aria-hidden', 'true');
          reel.appendChild(p);
        });
        win.appendChild(reel);
        board.appendChild(tag);
        board.appendChild(win);
        daily.insertBefore(board, daily.firstChild);
        this.board = board;
      }

      /* one button, three crawls */
      const ticker = document.querySelector('.ticker');
      const button = document.getElementById('tickerToggle');
      if (ticker && button) {
        this.onPause = () => {
          document.documentElement.classList.toggle(
            'is-marquee-paused',
            ticker.classList.contains('is-paused')
          );
        };
        button.addEventListener('click', this.onPause);
        this.onPause();
      }
    },
    start() {
      if (this.marquee) this.marquee.querySelector('.chaos-marquee__track').style.animationPlayState = 'running';
      if (this.board) this.board.querySelector('.chaos-board__reel').style.animationPlayState = 'running';
    },
    stop() {
      /* only the board freezes in the quiet zone; the footer crawl is not in
         .honest and must stay visible where it lives */
      if (this.board) this.board.querySelector('.chaos-board__reel').style.animationPlayState = 'paused';
    },
    destroy() {
      const button = document.getElementById('tickerToggle');
      if (button && this.onPause) button.removeEventListener('click', this.onPause);
      document.documentElement.classList.remove('is-marquee-paused');
      this.marquee?.remove();
      this.board?.remove();
      this.marquee = null;
      this.board = null;
      this.onPause = null;
    }
  });

  /* ---- 9. 站长挂件 --------------------------------------------------------
     The 访问量 counter and 本站已运行 X 天 opened or closed every 站长 page of
     the era, and the 农历 line is the specifically Chinese one — Western retro
     pages had hit counters, they did not print the lunar date beside them.
     The honesty is load-bearing: the count is YOURS, from localStorage, and
     the label says so (来串门). A fabricated global traffic number would be
     the same lie as a fabricated contract address, in a smaller font. */
  const SITE_LAUNCH = Date.UTC(2026, 7, 28);   /* 2026-08-28 */
  let visitCount = 1;
  try {
    visitCount = Math.min(99999, (parseInt(localStorage.getItem('tugou-visits'), 10) || 0) + 1);
    localStorage.setItem('tugou-visits', String(visitCount));
  } catch (_) {}

  register({
    name: 'counter',
    node: null,
    init() {
      const host = document.querySelector('.footer__inner');
      if (!hostOk(host)) return;

      const box = document.createElement('div');
      box.className = 'chaos-counter';

      const row = document.createElement('p');
      row.className = 'chaos-counter__row';
      const head = document.createElement('span');
      head.textContent = `${t('counter.head')} `;
      const odo = document.createElement('span');
      odo.className = 'chaos-odo';
      odo.setAttribute('aria-hidden', 'true');
      String(visitCount).padStart(5, '0').split('').forEach((digit, index) => {
        const cell = document.createElement('span');
        cell.className = 'chaos-odo__box';
        const reel = document.createElement('span');
        reel.className = 'chaos-odo__reel';
        reel.style.animationDelay = `${index * 110}ms`;
        reel.style.animationPlayState = 'paused';
        for (let n = 0; n <= 9; n += 1) {
          const b = document.createElement('b');
          b.textContent = String(n);
          reel.appendChild(b);
        }
        const stop = document.createElement('b');   /* 11th cell = the landing digit */
        stop.textContent = digit;
        reel.appendChild(stop);
        cell.appendChild(reel);
        odo.appendChild(cell);
      });
      const tail = document.createElement('span');
      tail.textContent = ` ${t('counter.tail')}`;
      const plain = document.createElement('span');
      plain.className = 'sr-only';
      plain.textContent = t('counter.plain').replace('{n}', String(visitCount));
      row.append(head, odo, tail, plain);

      const days = Math.max(1, Math.floor((Date.now() - SITE_LAUNCH) / 86400000));
      const uptime = document.createElement('p');
      uptime.className = 'chaos-counter__row';
      uptime.textContent = t('counter.uptime').replace('{n}', String(days));

      box.append(row, uptime);

      try {
        const calendar = currentLang() === 'zh' ? 'zh-Hans-u-ca-chinese' : 'en-u-ca-chinese';
        const lunar = document.createElement('p');
        lunar.className = 'chaos-counter__row';
        lunar.textContent = new Intl.DateTimeFormat(calendar, { dateStyle: 'long' })
          .format(new Date());
        box.appendChild(lunar);
      } catch (_) {
        /* no ICU chinese calendar: drop the line, never print a wrong date */
      }

      host.appendChild(box);
      this.node = box;
    },
    start() {
      this.node?.querySelectorAll('.chaos-odo__reel')
        .forEach(reel => { reel.style.animationPlayState = 'running'; });
    },
    stop() {
      this.node?.querySelectorAll('.chaos-odo__reel')
        .forEach(reel => { reel.style.animationPlayState = 'paused'; });
    },
    destroy() { this.node?.remove(); this.node = null; }
  });

  /* ---- boot -------------------------------------------------------------- */
  function afterFirstPaint(fn) {
    const idle = window.requestIdleCallback || (callback => setTimeout(callback, 200));
    requestAnimationFrame(() => requestAnimationFrame(() => idle(fn, { timeout: 1400 })));
  }

  document.getElementById('chaosBtn')?.addEventListener('click', () => setEnabled(!enabled));

  /* The required user gesture, and the only path to sound on this page. */
  document.getElementById('bgmBtn')?.addEventListener('click', () => {
    BGM.toggle();
    syncControls();
  });

  const volInput = document.getElementById('bgmVol');
  if (volInput) {
    const saved = parseInt(store.read('tugou-bgm-vol'), 10);
    if (Number.isFinite(saved)) volInput.value = String(Math.max(0, Math.min(100, saved)));
    BGM.setVolume(Number(volInput.value) / 100);
    volInput.addEventListener('input', () => {
      BGM.setVolume(Number(volInput.value) / 100);
      store.write('tugou-bgm-vol', volInput.value);     // volume persists…
    });                                                 // …play state never does
  }

  /* Escape is the second off switch: the instinct in the moment someone
     wants it to stop, and it always finds a target. */
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && enabled) {
      setEnabled(false);
      document.getElementById('chaosBtn')?.focus();
    }
  });

  document.addEventListener('visibilitychange', () => {
    tabHidden = document.hidden;
    apply();
  });

  CALM.addEventListener?.('change', apply);

  /* THE QUIET ZONE. While #truth actually occupies the middle of the screen,
     every effect stops and the music ducks to silence. Not compliance
     paperwork — the page screams for four sections and then goes completely
     quiet exactly where it has something true to say. */
  const truth = document.getElementById('truth');
  if (truth && 'IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      inTruth = entries.some(entry => entry.isIntersecting);
      apply();
    }, { rootMargin: '-15% 0px -15% 0px', threshold: 0 }).observe(truth);
  } else {
    inTruth = true;   /* no observer: refuse to run rather than run in the
                         wrong place. The base page is the honest fallback. */
  }

  /* Third firewall layer: self-healing. Anything decorative that ever appears
     inside the honest section is removed and reported. */
  const honest = document.querySelector('.honest');
  if (honest && typeof MutationObserver === 'function') {
    const sweep = () => {
      const strays = honest.querySelectorAll('.chaos-layer, [class*="chaos-"]');
      if (!strays.length) return;
      strays.forEach(node => node.remove());
      console.warn(`[tugou] #truth firewall removed ${strays.length} chaos node(s)`);
    };
    new MutationObserver(sweep).observe(honest, { childList: true, subtree: true });
    sweep();
  }

  window.TUGOU_CHAOS = { retranslate, set: setEnabled, mode, bgm: BGM };

  syncControls();
  afterFirstPaint(apply);
})();
