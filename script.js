'use strict';

const COPY = {
  zh: {
    'meta.title': '土狗 $TUGOU｜土到极致，就是酷',
    'meta.desc': '土狗币，就是 meme 币。名字就是品类。土到极致，就是酷。',
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
    'nav.play': '今日份土酷',
    'nav.status': '发币状态',
    'hero.eyebrow': '中华土狗币',
    'hero.seal': '正宗',
    'hero.title': '土狗',
    'hero.vertical': '中华土酷',
    'hero.rating': '五星级土狗',
    'hero.subtitle': '土狗币，就是 meme 币。',
    'hero.lede': '名字就是品类。土到极致，就是酷。',
    'hero.status': '查看状态',
    'hero.explain': '先看看',
    'ticker.text': '★ 最土的狗 ★ 最酷的币 ★ 祝你发财 ★ 少看 K 线 ★ 多发早安 ★ ',
    'ticker.pause': '暂停',
    'ticker.play': '继续',
    'what.eyebrow': '一个词，讲明白',
    'what.title': '土狗，到底是什么？',
    'what.lead': '中文币圈早就把 memecoin 叫作“土狗币”。所以 $TUGOU 不只是名字，也是它自己的品类。',
    'what.body': '这里的“土”不是自嘲，“狗”也不是骂人。它就是村口那只皮实、好养、谁都认识的狗。',
    'what.quote1': '“土狗币，中文名亦作',
    'what.quote2': '‘MeMe币’”',
    'what.source': '——百度百科“土狗币”词条',
    'what.fact1Title': '名字就是品类',
    'what.fact1Body': '不绕弯。土狗币，就是 meme 币。',
    'what.fact2Title': '不装高科技',
    'what.fact2Body': '不画饼，不编路线图。',
    'what.fact3Title': '祝福是真的',
    'what.fact3Body': '金融是玩笑，祝你发财是真心的。',
    'what.note': '视觉灵感来自土酷（Too Cool）：真心祝福，不拿长辈当笑话。',
    'daily.eyebrow': '今日份土酷',
    'daily.title': '先看黄历，再发早安。',
    'daily.subtitle': '黄历每天换，行情不负责。',
    'almanac.stamp': '每日一签',
    'almanac.title': '土狗黄历',
    'almanac.note': '按日期生成，不看盘。',
    'maker.kicker': '家族群专用',
    'maker.title': '做张早安图',
    'maker.subtitle': '写个名字，送句祝福。',
    'maker.nameLabel': '称呼',
    'maker.namePlaceholder': '例如：二舅',
    'maker.wishLabel': '祝福',
    'maker.shuffle': '换一张',
    'maker.save': '保存',
    'maker.privacy': '图片只在本地生成。',
    'launch.eyebrow': '上车前先看',
    'launch.title': '还没发币。',
    'launch.body': '没有预售，没有合约地址。看到同名代币，别碰。',
    'launch.caLabel': '合约地址',
    'launch.caPending': '待公布',
    'launch.copy': '复制 CA',
    'truth.title': '一句实话',
    'truth.lead': '目前没有代币，也没有合约。',
    'truth.risk': 'meme 币可能归零。别借钱，别梭哈。',
    'truth.close': '金融是玩笑，祝福是真的。',
    'footer.line': '最土的狗，最酷的币。'
  },
  en: {
    'meta.title': '土狗 $TUGOU | Local all the way. Too Cool.',
    'meta.desc': '土狗币 is the Chinese word for memecoin. The name is the category. Local all the way. Too Cool.',
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
    'nav.play': 'today’s Too Cool',
    'nav.status': 'launch status',
    'hero.eyebrow': 'CHINESE VILLAGE-DOG COIN',
    'hero.seal': '正宗',
    'hero.title': '土狗',
    'hero.vertical': 'CHINA TOO COOL',
    'hero.rating': 'FIVE-STAR TUGOU',
    'hero.subtitle': '土狗币 means memecoin.',
    'hero.lede': 'The name is the category. Local all the way. Too Cool.',
    'hero.status': 'launch status',
    'hero.explain': 'get it',
    'ticker.text': '★ THE LOCAL DOG ★ THE TOO-COOL COIN ★ MAY YOU PROSPER ★ LESS CHARTS ★ MORE GOOD MORNINGS ★ ',
    'ticker.pause': 'pause',
    'ticker.play': 'play',
    'what.eyebrow': 'one word. no pitch.',
    'what.title': 'So what is 土狗?',
    'what.lead': 'Chinese crypto already calls memecoins 土狗币. So $TUGOU is both the name and its own category.',
    'what.body': '土 is not self-loathing, and 狗 is not an insult. It is the hardy village dog everybody on the road knows.',
    'what.quote1': '“Tugou coin, also rendered',
    'what.quote2': 'in Chinese as ‘MeMe coin’”',
    'what.source': '— Baidu Baike, entry for 土狗币',
    'what.fact1Title': 'The name is the category',
    'what.fact1Body': 'No detour. 土狗币 means memecoin.',
    'what.fact2Title': 'No fake tech',
    'what.fact2Body': 'No promises. No invented roadmap.',
    'what.fact3Title': 'The blessing is real',
    'what.fact3Body': 'Finance is the joke. Wishing you well is not.',
    'what.note': 'The visual language is 土酷 (Too Cool): a sincere blessing, never a joke at an elder’s expense.',
    'daily.eyebrow': 'TODAY’S TOO COOL',
    'daily.title': 'Check the almanac. Send good morning.',
    'daily.subtitle': 'The date changes. The market is not consulted.',
    'almanac.stamp': 'DAILY FORTUNE',
    'almanac.title': 'TUGOU ALMANAC',
    'almanac.note': 'Made from the date, not the chart.',
    'maker.kicker': 'FOR THE FAMILY CHAT',
    'maker.title': 'Make a good-morning card',
    'maker.subtitle': 'Add a name. Send a blessing.',
    'maker.nameLabel': 'name',
    'maker.namePlaceholder': 'e.g. Auntie',
    'maker.wishLabel': 'blessing',
    'maker.shuffle': 'shuffle',
    'maker.save': 'save',
    'maker.privacy': 'Made locally in your browser.',
    'launch.eyebrow': 'CHECK BEFORE YOU BUY',
    'launch.title': 'No coin yet.',
    'launch.body': 'No presale. No contract address. Ignore any token using the same name.',
    'launch.caLabel': 'CONTRACT ADDRESS',
    'launch.caPending': 'NOT PUBLISHED',
    'launch.copy': 'COPY CA',
    'truth.title': 'One honest line',
    'truth.lead': 'There is no token and no contract yet.',
    'truth.risk': 'Memecoins can go to zero. Do not borrow. Do not go all in.',
    'truth.close': 'Finance is the joke. The blessing is real.',
    'footer.line': 'The local dog. The Too Cool coin.'
  }
};

const ALMANAC = {
  yi: [
    ['少看 K 线', 'check the chart less'],
    ['小仓位', 'keep the position small'],
    ['发早安图', 'send a good-morning card'],
    ['关掉手机', 'close the app'],
    ['读一遍合约', 'read the contract'],
    ['早点睡', 'go to bed early'],
    ['记账', 'write down the spend'],
    ['多喝水', 'drink water']
  ],
  ji: [
    ['梭哈', 'go all in'],
    ['相信内幕', 'believe insider tips'],
    ['借钱炒币', 'borrow to buy'],
    ['晒助记词', 'show your seed phrase'],
    ['追高', 'chase the green candle'],
    ['开杠杆', 'use leverage'],
    ['在群里喊单', 'shill in the group chat'],
    ['凌晨加仓', 'add at 3 a.m.']
  ]
};

const WISHES = [
  ['恭喜发财', 'may you prosper'],
  ['一夜暴富', 'rich overnight'],
  ['身体健康', 'good health'],
  ['万事如意', 'may all go well'],
  ['年年有U', 'plenty of U every year'],
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
    const label = currentLang() === 'zh' ? `致 ${name}` : `for ${name}`;
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
