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
    'footer.line': '最土的狗，最酷的币。'
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
    'footer.line': 'The tackiest dog, the coolest coin.'
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
