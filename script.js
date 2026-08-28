/* ============================================================================
   土狗 $TUGOU

   The dictionary lives here rather than in a fetched JSON file on purpose: the
   page has to work when it is opened straight off disk, and file:// blocks
   fetch(). No build step, no framework, no dependencies.
   ========================================================================== */

'use strict';

/* ---------------------------------------------------------------------------
   COPY
   Chinese is the original. English is the subtitle — blunt, lowercase, a beat
   off, the voice of a burned-in caption rather than a translation.
   Simplified characters throughout. The ONE place Traditional is allowed is
   inside a calligraphy plaque, where it is what a real board would carry.
   ------------------------------------------------------------------------- */
const I18N = {
  zh: {
    'meta.desc': '土狗：中文互联网早就给这个东西起好名字了。一个关于“土狗币”这个词的土狗币。',
    'a11y.langToggle': '切换语言：中文 / English',
    'a11y.canvas': '早安图预览',
    'a11y.skipToHonest': '直接看老实话',
    'a11y.marqueePause': '暂停滚动字幕',
    'a11y.marqueePlay': '继续滚动字幕',

    'hero.sub': '中文互联网早就给这个东西起好名字了',
    'hero.tickerLabel': '代币符号',
    'hero.sub2': '土狗币 = meme 币。这个币就叫“土狗”。',
    'hero.ctaBuy': '怎么买',
    'hero.ctaWhat': '什么是土狗',

    'marquee.text': '★ 恭喜发财 ★ 一夜暴富 ★ 招财进宝 ★ 心想事成 ★ 万事如意 ★ 财源广进 ★ 早安 ★ 身体健康 ★ 步步高升 ★ 花开富贵 ★',

    'what.title': '什么是土狗',
    'what.sub': '这个词不是我们编的。它在词典里。',
    'what.quote': '“土狗币，中文名亦作‘MeMe 币’”',
    'what.quoteSrc': '——百度百科“土狗币”词条开篇',
    'what.dictBody': '指一种用于投资的加密虚拟货币，通常被认为无实际价值，具有低门槛、高波动特性。该币种多由匿名团队发行，强调草根文化与娱乐性，代币设计常采用表情包等 meme 元素。',
    'what.dictSrc': '也就是说：中文互联网早就把“memecoin”翻译完了，而且翻出来的不是音译词，是一条村里的土狗。',
    'what.credit': '“土酷”概念出处：“养鸭”，《Too Cool To Be True》，约 2016 年。',
    'what.c1t': '土 — 土气，也是土地',
    'what.c1b': '在主流审美里，“土”是句难听话：没见过世面、不精致、乡下人。土酷把这个字抢了回来。',
    'what.c2t': '狗 — 中华田园犬',
    'what.c2b': '土狗不是名贵品种，是村口那条谁都认识的狗。币圈拿它当所有 meme 币的统称。',
    'what.c3t': '酷 — Too Cool',
    /* The homophone has to be stated outright. "重音在 Too 不在土" assumes the
       reader already knows 土 is standing in for the English "too" — and if this
       one line fails, the section that explains the aesthetic's name explains
       nothing. */
    'what.c3b': '“土”念出来就是英文的 too。所以土酷不是“有点土”，是 too cool——酷到最高级，酷到不像真的。',

    'tok.title': '土狗学',
    'tok.sub': '数字这么整齐，是因为它们是编的。',
    'tok.certTitle': '土狗币荣誉证书',
    'tok.k1': '总量', 'tok.k2': '税率', 'tok.v2': '零',
    'tok.k3': '流动性', 'tok.v3': '已锁', 'tok.k4': '团队份额', 'tok.v4': '没有',
    'tok.note': '这四项是每一只 meme 币都会写的四项。印在烫金证书上，不会让它们更真一点。',

    'alm.title': '土狗黄历',
    'alm.sub': '路线图。做成老黄历，因为准确度差不多。',
    'alm.foot': '宜忌每日更新，依据是今天的日期本身，与任何行情无关。',

    'gen.title': '早安生成器',
    'gen.sub': '做一张早安图，发到家族群里。',
    'gen.nameLabel': '称呼',
    'gen.namePh': '例如：二舅',
    'gen.wishLabel': '祝福语',
    'gen.sceneLabel': '背景',
    'gen.random': '换一张',
    'gen.download': '保存图片',
    'gen.hint': '图片在你自己的浏览器里生成，不会上传到任何地方。',

    'buy.title': '怎么买',
    'buy.sub': '四步。和其他每一只土狗一模一样。',
    'buy.s1t': '装个钱包', 'buy.s1b': '下载钱包，把助记词抄在纸上。别截图，别发微信。',
    'buy.s2t': '充一点钱', 'buy.s2b': '转一笔你亏得起的钱进去。是真的亏得起，不是嘴上说说。',
    'buy.s3t': '换成土狗', 'buy.s3b': '在 DEX 里粘贴合约地址，先核对名字对不对，再点确认。',
    'buy.s4t': '发张早安图', 'buy.s4b': '这一步和上面三步一样重要。',
    'buy.caLabel': '合约地址',
    'buy.caPending': '合约地址待公布',
    'buy.copy': '复制',
    'buy.caNote': '没有合约地址。这是一个设计作品，不是一次发行。',
    'buy.warning': '只用你亏得起的钱。这句话是这一页上唯一不打折的话。',

    'truth.title': '说句老实话',
    'truth.sub': '这一段没有金光，也没有闪。',
    /* Not 垃圾币. That word is contempt, and it breaks the page's own argument:
       the whole point is that 土狗币 is the NEUTRAL category word mainland retail
       uses about itself. If 土狗币 just meant "shitcoin", the Baike line would
       stop being interesting. */
    'truth.p1': '$土狗 就是一只土狗。“土狗币”在中文里的意思就是 meme 币——一个没有技术、没有团队、没有用途的币。所以你从头看到这儿，是一个拿“土狗币”这三个字本身开的玩笑。这就是全部的产品。',
    'truth.p2': '它没有实用性。它没有路线图——上面那个是黄历。黄历不是承诺，黄历每天都换。它不会让你财富自由。',
    'truth.p3': '数据是公开的：这类项目里，约 99% 在热度过去之后接近归零，有的只活了十几天。发一个币在链上的成本是几百块。你不是特别的那一个，我们也不是。',
    'truth.p4': '土酷（Too Cool）不是我们发明的。这个说法约在 2016 年由“养鸭”在《Too Cool To Be True》里叫响，它背后是几代小镇青年、是贴满一整面墙的山水壁纸、是长辈每天早上发出去的那张早安图。',
    'truth.p5': '唯一不是玩笑的，是上面那些祝福。你姥姥发的那张早安图是真心的，我们这些也是。玩笑开的是金融，不是那份心意——这两件事我们分得很清楚。所以：只花你输得起的钱，买之前自己去看合约，别借钱，别跟自己说这次不一样。',
    'truth.laozi': '“金玉满堂，莫之能守。”',
    'truth.laoziSrc': '——《老子·第九章》',
    'truth.sign': '祝好。真的。',

    'footer.line': '土狗 · 一个关于“土狗”这个词的设计作品',
    'footer.credit': '致敬土酷（Too Cool）美学，以及家族群里每天早上那张早安图。'
  },

  en: {
    'meta.desc': '土狗 — the Chinese internet already had a name for this. A memecoin named after the word for memecoin.',
    'a11y.langToggle': 'Switch language: 中文 / English',
    'a11y.canvas': 'Good morning card preview',
    'a11y.skipToHonest': 'skip to the honest part',
    'a11y.marqueePause': 'Pause the scrolling banner',
    'a11y.marqueePlay': 'Resume the scrolling banner',

    'hero.sub': 'the chinese internet already had a name for this',
    'hero.tickerLabel': 'ticker',
    'hero.sub2': '土狗币 means memecoin. this coin is called 土狗.',
    'hero.ctaBuy': 'how to buy',
    'hero.ctaWhat': 'what is a 土狗',

    'marquee.text': '★ GET RICH ★ RICH OVERNIGHT ★ WEALTH COME IN ★ ALL WISHES GRANTED ★ GOOD MORNING ★ GOOD HEALTH ★ RISE STEP BY STEP ★ FLOWERS BLOOM, FORTUNE COMES ★',

    'what.title': 'WHAT IS A 土狗',
    'what.sub': 'we did not make this word up. it is in the dictionary.',
    'what.quote': '"tugou coin, also rendered in Chinese as MeMe coin"',
    'what.quoteSrc': '— the opening line of the Baidu Baike entry for 土狗币',
    'what.dictBody': 'a crypto asset held for investment, generally considered to have no real value, with a low barrier to entry and high volatility. usually issued by anonymous teams, emphasising grassroots culture and entertainment, with tokens designed around memes and reaction images.',
    'what.dictSrc': 'which is to say: the Chinese internet finished translating "memecoin" a long time ago, and what it landed on is not a loanword. it is a village dog.',
    'what.credit': 'the term 土酷 comes from the artist working as 养鸭, in Too Cool To Be True, c. 2016.',
    'what.c1t': '土 — tacky, and also soil',
    'what.c1b': 'in mainstream taste 土 is an insult: provincial, unrefined, has not seen the world. 土酷 took the word back.',
    'what.c2t': '狗 — the village dog',
    'what.c2b': 'a 土狗 is not a pedigree. it is the mongrel at the end of the road that everybody knows. crypto Chinese uses it for every memecoin there is.',
    'what.c3t': '酷 — Too Cool',
    'what.c3b': '土酷, phonetically "Too Cool". the stress is on TOO, not on 土: not slightly tacky — cool taken all the way.',

    'tok.title': 'TOKENOMICS',
    'tok.sub': 'the numbers are this round because they were made up.',
    'tok.certTitle': 'Certificate of Authentic 土狗',
    'tok.k1': 'total supply', 'tok.k2': 'tax', 'tok.v2': 'zero',
    'tok.k3': 'liquidity', 'tok.v3': 'locked', 'tok.k4': 'team allocation', 'tok.v4': 'none',
    'tok.note': 'every memecoin lists these same four things. printing them on a gold-foil certificate does not make any of them truer.',

    'alm.title': 'THE ALMANAC',
    'alm.sub': 'the roadmap, as a fortune almanac, because the accuracy is comparable.',
    'alm.foot': 'updates daily from today’s date itself. it is not reading any market.',

    'gen.title': 'GOOD MORNING',
    'gen.sub': 'make a good-morning card. send it to the family group chat.',
    'gen.nameLabel': 'who is it for',
    'gen.namePh': 'e.g. Auntie',
    'gen.wishLabel': 'blessing',
    'gen.sceneLabel': 'scene',
    'gen.random': 'shuffle',
    'gen.download': 'save image',
    'gen.hint': 'the image is made in your own browser. nothing is uploaded anywhere.',

    'buy.title': 'HOW TO BUY',
    'buy.sub': 'four steps. identical to every other 土狗.',
    'buy.s1t': 'get a wallet', 'buy.s1b': 'install a wallet. write the seed phrase on paper. do not screenshot it, do not message it to anyone.',
    'buy.s2t': 'fund it', 'buy.s2b': 'send an amount you can lose. actually lose, not theoretically lose.',
    'buy.s3t': 'swap for 土狗', 'buy.s3b': 'paste the contract address into a DEX. check the name matches before you confirm.',
    'buy.s4t': 'send a good morning card', 'buy.s4b': 'this step matters as much as the other three.',
    'buy.caLabel': 'contract',
    'buy.caPending': 'contract address not published yet',
    'buy.copy': 'copy',
    'buy.caNote': 'there is no contract address. this is a design piece, not a launch.',
    'buy.warning': 'only use money you can afford to lose. that sentence is the one thing on this page with no discount on it.',

    'truth.title': 'The honest part',
    'truth.sub': 'no gold on this part. no sparkle.',
    'truth.p1': '$土狗 is a 土狗. in Chinese, 土狗币 just means memecoin — a coin with no technology, no team and no use. so what you have been reading is a joke built out of the word for joke coins. that is the entire product.',
    'truth.p2': 'there is no utility. there is no roadmap. the thing above is an almanac. an almanac is not a promise; it changes every day, which is what makes it an almanac. it will not make you financially free.',
    'truth.p3': 'the numbers are public: about 99% of these approach zero once the attention leaves. some last two weeks. it costs a few hundred yuan to deploy one. you are not the exception. neither are we.',
    'truth.p4': '土酷 ("Too Cool") is not ours. The term was popularised around 2016 by the artist working as 养鸭 in a film called Too Cool To Be True, and behind it sit generations of small-town youth, the landscape wallpaper covering an entire living-room wall, and the good-morning image an elder sends out every single morning.',
    'truth.p5': 'the only part that is not a joke is the blessings. your grandmother meant hers. we mean ours. the finance is the joke; the sincerity is not, and we know the difference. so: only spend what you can lose, read the contract yourself, do not borrow, and do not tell yourself this one is different.',
    'truth.laozi': '"Gold and jade fill the hall, but no one can keep them."',
    'truth.laoziSrc': '— Laozi, chapter 9. he wrote the exit liquidity warning about 2,500 years before the exit liquidity.',
    'truth.sign': 'best wishes. sincerely.',

    'footer.line': '土狗 · a design piece about the word 土狗',
    'footer.credit': 'after the 土酷 (Too Cool) aesthetic, and the good-morning image in the family group chat.'
  }
};

/* Almanac entries. 宜 = auspicious, 忌 = to be avoided — the two columns of a
   Chinese daily almanac, which is exactly the shape of a crypto roadmap. */
const ALMANAC = {
  yi: [
    { zh: '拿住',           en: 'holding' },
    { zh: '看看就好',       en: 'just looking' },
    { zh: '关掉手机',       en: 'closing the app' },
    { zh: '给长辈回消息',   en: 'replying to your elders' },
    { zh: '承认自己不懂',   en: 'admitting you do not understand it' },
    { zh: '少看 K 线',      en: 'checking the chart less' },
    { zh: '读一遍合约',     en: 'reading the contract' },
    { zh: '早睡',           en: 'going to bed early' },
    { zh: '发早安图',       en: 'sending a good-morning card' },
    { zh: '记账',           en: 'writing down what you actually spent' },
    { zh: '出去走走',       en: 'going outside' },
    { zh: '喝水',           en: 'drinking water' }
  ],
  ji: [
    { zh: '梭哈',           en: 'going all in' },
    { zh: '追高',           en: 'buying the green candle' },
    { zh: '加杠杆',         en: 'using leverage' },
    { zh: '借钱炒币',       en: 'borrowing to buy' },
    { zh: '相信内幕消息',   en: 'believing the alpha group' },
    { zh: '熬夜盯盘',       en: 'watching the chart at 4am' },
    { zh: '相信路线图',     en: 'believing a roadmap' },
    { zh: '问“还能涨吗”', en: 'asking if it can still go up' },
    { zh: '抄底',           en: 'catching the falling knife' },
    { zh: '把助记词截图',   en: 'screenshotting your seed phrase' },
    { zh: '在群里喊单',     en: 'shilling in the group chat' },
    { zh: '拿房租买币',     en: 'spending the rent' }
  ]
};

const WISHES = [
  { zh: '恭喜发财', en: 'Get rich' },
  { zh: '一夜暴富', en: 'Rich overnight' },
  { zh: '招财进宝', en: 'Wealth come in' },
  { zh: '心想事成', en: 'All wishes granted' },
  { zh: '万事如意', en: 'May all go well' },
  { zh: '财源广进', en: 'Fortune flow in' },
  { zh: '身体健康', en: 'Good health' },
  { zh: '步步高升', en: 'Rise step by step' },
  { zh: '花开富贵', en: 'Flowers bloom, fortune comes' },
  { zh: '永不归零', en: 'Never go to zero' }
];

const SCENES = [
  { id: 'waterfall', zh: '瀑布山水', en: 'Waterfall' },
  { id: 'lotus',     zh: '荷花池',   en: 'Lotus pond' },
  { id: 'sunrise',   zh: '日出东方', en: 'Sunrise' },
  { id: 'peach',     zh: '桃花满园', en: 'Peach blossom' }
];

/* ============================================================================
   I18N ENGINE
   Three directives, all attribute-driven so the markup stays the single source
   of truth for what is translatable:
     data-i18n="key"                     -> textContent
     data-i18n-attr="attr:key;attr2:key" -> attributes (placeholder, aria-label…)
     data-i18n-wordart="key"             -> textContent AND data-text, because
                                            the WordArt treatment paints the same
                                            string three times and all three
                                            copies must stay in sync.
   ========================================================================== */
const LANGS = ['zh', 'en'];
const STORE_KEY = 'tugou.lang';

function t(key, lang) {
  const dict = I18N[lang] || I18N.zh;
  return Object.prototype.hasOwnProperty.call(dict, key) ? dict[key] : key;
}

function applyLang(lang) {
  const root = document.documentElement;
  /* zh-Hans, not zh-CN: the distinction that matters here is the SCRIPT, and a
     zh-Hans root also stops a CJK-unified font serving Hant glyph variants. */
  root.setAttribute('lang', lang === 'zh' ? 'zh-Hans' : 'en');
  root.setAttribute('data-lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n, lang);
  });

  document.querySelectorAll('[data-i18n-wordart]').forEach(el => {
    const s = t(el.dataset.i18nWordart, lang);
    el.textContent = s;
    el.setAttribute('data-text', s);
    /* The two keyline layers are ::before/::after carrying the same string via
       attr(). Chrome puts generated content INTO the accessibility tree, so a
       screen reader would otherwise read every heading on this page three times
       over. An explicit accessible name on the heading overrides all of it. */
    el.setAttribute('aria-label', s);
  });

  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    el.dataset.i18nAttr.split(';').forEach(pair => {
      const [attr, key] = pair.split(':').map(s => s && s.trim());
      if (attr && key) el.setAttribute(attr, t(key, lang));
    });
  });

  document.title = lang === 'zh'
    ? '土狗 $TUGOU — 正宗土狗币'
    : '土狗 $TUGOU — an authentic memecoin';

  const btn = document.getElementById('langBtn');
  if (btn) btn.setAttribute('aria-pressed', String(lang === 'en'));

  renderAlmanac(lang);
  refillSelects(lang);
  drawCard();

  try { localStorage.setItem(STORE_KEY, lang); } catch (_) { /* private mode */ }
}

function initialLang() {
  try {
    const saved = localStorage.getItem(STORE_KEY);
    if (LANGS.includes(saved)) return saved;
  } catch (_) { /* private mode — fall through to the browser's preference */ }
  const nav = (navigator.languages && navigator.languages[0]) || navigator.language || 'zh';
  return /^zh\b/i.test(nav) ? 'zh' : 'en';
}

function currentLang() {
  return document.documentElement.getAttribute('data-lang') === 'en' ? 'en' : 'zh';
}

/* ============================================================================
   ALMANAC
   Picked deterministically from the date so the page says the same thing to
   everybody on the same day — a real almanac is a calendar, not a dice roll.
   ========================================================================== */
function dayIndex(d) {
  return Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 86400000);
}

function pick(list, n, seed) {
  const out = [];
  const used = new Set();
  let s = seed;
  while (out.length < n && used.size < list.length) {
    s = (s * 1103515245 + 12345) & 0x7fffffff;   // LCG — stable across browsers
    const i = s % list.length;
    if (!used.has(i)) { used.add(i); out.push(list[i]); }
  }
  return out;
}

function renderAlmanac(lang) {
  const now = new Date();
  const seed = dayIndex(now);

  const dayEl = document.getElementById('almDay');
  const monthEl = document.getElementById('almMonth');
  const weekdayEl = document.getElementById('almWeekday');
  if (!dayEl) return;

  dayEl.textContent = String(now.getDate());
  const locale = lang === 'zh' ? 'zh-CN' : 'en-GB';
  monthEl.textContent = now.toLocaleDateString(locale, { year: 'numeric', month: 'long' });
  weekdayEl.textContent = now.toLocaleDateString(locale, { weekday: 'long' });

  const fill = (id, items) => {
    const ul = document.getElementById(id);
    ul.replaceChildren();
    items.forEach(it => {
      const li = document.createElement('li');
      li.textContent = lang === 'zh' ? it.zh : it.en;
      ul.appendChild(li);
    });
  };
  fill('almYi', pick(ALMANAC.yi, 5, seed + 7));
  fill('almJi', pick(ALMANAC.ji, 5, seed + 991));
}

/* ============================================================================
   早安 CARD GENERATOR
   Everything is drawn with canvas 2D from the same palette as the page. No
   external image is ever loaded, so the canvas is never tainted and toBlob()
   always succeeds.
   ========================================================================== */
const C = {
  zhu: '#d81f14', jin: '#f0c23a', fei: '#12c2c8',
  tao: '#ff2e86', lan: '#0000f5', qing: '#2f8f33'
};

function refillSelects(lang) {
  const wish = document.getElementById('genWish');
  const scene = document.getElementById('genScene');
  if (!wish || !scene) return;

  const keepWish = wish.selectedIndex < 0 ? 0 : wish.selectedIndex;
  const keepScene = scene.selectedIndex < 0 ? 0 : scene.selectedIndex;

  wish.replaceChildren(...WISHES.map((w, i) => {
    const o = document.createElement('option');
    o.value = String(i);
    o.textContent = lang === 'zh' ? w.zh : `${w.zh} — ${w.en}`;
    return o;
  }));
  scene.replaceChildren(...SCENES.map((s, i) => {
    const o = document.createElement('option');
    o.value = String(i);
    o.textContent = lang === 'zh' ? s.zh : s.en;
    return o;
  }));

  wish.selectedIndex = keepWish;
  scene.selectedIndex = keepScene;
}

function roundedStar(ctx, x, y, r) {
  ctx.beginPath();
  ctx.moveTo(x, y - r);
  ctx.quadraticCurveTo(x + r * 0.12, y - r * 0.12, x + r, y);
  ctx.quadraticCurveTo(x + r * 0.12, y + r * 0.12, x, y + r);
  ctx.quadraticCurveTo(x - r * 0.12, y + r * 0.12, x - r, y);
  ctx.quadraticCurveTo(x - r * 0.12, y - r * 0.12, x, y - r);
  ctx.closePath();
  ctx.fill();
}

function drawScene(ctx, W, H, sceneId, rnd) {
  /* --- sky --- */
  const sky = ctx.createLinearGradient(0, 0, 0, H * 0.62);
  if (sceneId === 'sunrise') {
    sky.addColorStop(0, '#ff9b3d'); sky.addColorStop(.42, '#ffd88a');
    sky.addColorStop(.78, '#cdeeff'); sky.addColorStop(1, '#e9fbe8');
  } else {
    sky.addColorStop(0, '#2f9fe0'); sky.addColorStop(.34, '#7ecdf2');
    sky.addColorStop(.68, '#cfeeff'); sky.addColorStop(1, '#eafaf0');
  }
  ctx.fillStyle = sky; ctx.fillRect(0, 0, W, H);

  /* --- sun: hard-stopped disc, a sticker rather than a light.
         Parked high in the top-right corner so it clears the 早安 lockup, which
         is centred and runs from roughly 0.30W to 0.70W. --- */
  const sx = W * 0.855, sy = H * (sceneId === 'sunrise' ? 0.20 : 0.115), sr = W * 0.068;
  const halo = ctx.createRadialGradient(sx, sy, 0, sx, sy, sr * 3);
  halo.addColorStop(0, 'rgba(255,176,58,.55)');
  halo.addColorStop(1, 'rgba(255,233,168,0)');
  ctx.fillStyle = halo;
  ctx.beginPath(); ctx.arc(sx, sy, sr * 3, 0, Math.PI * 2); ctx.fill();

  const disc = ctx.createRadialGradient(sx, sy, 0, sx, sy, sr);
  disc.addColorStop(0, '#fffbe0'); disc.addColorStop(.32, '#ffe14a');
  disc.addColorStop(.6, '#ffa100'); disc.addColorStop(1, '#e81d00');
  ctx.fillStyle = disc;
  ctx.beginPath(); ctx.arc(sx, sy, sr, 0, Math.PI * 2); ctx.fill();

  /* --- ranges, back to front, each more saturated than the last --- */
  const ranges = [
    { y: H * 0.40, amp: H * 0.10, a: '#7ea9c9', b: '#c2dcea' },
    { y: H * 0.48, amp: H * 0.09, a: '#3f8f5e', b: '#96d47e' },
    { y: H * 0.56, amp: H * 0.07, a: '#15662a', b: '#5fb93c' }
  ];
  ranges.forEach((r, ri) => {
    const g = ctx.createLinearGradient(0, r.y - r.amp, 0, r.y + H * 0.2);
    g.addColorStop(0, r.a); g.addColorStop(1, r.b);
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.moveTo(-10, H);
    ctx.lineTo(-10, r.y);
    const steps = 7 + ri;
    for (let i = 0; i <= steps; i++) {
      const x = (W + 20) * (i / steps) - 10;
      const peak = r.y - r.amp * (0.35 + rnd());
      const mid = r.y - r.amp * 0.1 * rnd();
      ctx.lineTo(x - (W / steps) * 0.5, mid);
      ctx.lineTo(x, peak);
    }
    ctx.lineTo(W + 10, r.y); ctx.lineTo(W + 10, H);
    ctx.closePath(); ctx.fill();

    /* Tree line along each ridge. Without it the ranges read as folded paper —
       the same failure the SVG hero solved with a displacement filter, which
       canvas 2D has no equivalent for, so it gets solved with geometry instead. */
    if (ri > 0) {
      ctx.fillStyle = ri === 1 ? 'rgba(20,86,28,.5)' : 'rgba(10,60,20,.55)';
      for (let i = 0; i < 90; i++) {
        const x = W * rnd();
        const y = r.y - r.amp * 0.30 * rnd() + H * 0.02;
        const th = H * (0.012 + rnd() * 0.022);
        ctx.beginPath();
        ctx.moveTo(x, y - th);
        ctx.lineTo(x + th * 0.42, y);
        ctx.lineTo(x - th * 0.42, y);
        ctx.closePath(); ctx.fill();
      }
    }
  });

  /* Cranes: two strokes each, and never more than two. */
  ctx.strokeStyle = '#fff'; ctx.lineWidth = W * 0.005; ctx.lineCap = 'round';
  for (let i = 0; i < 4; i++) {
    const x = W * (0.1 + rnd() * 0.55), y = H * (0.08 + rnd() * 0.18), s = W * (0.012 + rnd() * 0.01);
    ctx.beginPath();
    ctx.moveTo(x - s * 2, y); ctx.quadraticCurveTo(x - s, y - s, x, y);
    ctx.quadraticCurveTo(x + s, y - s, x + s * 2, y);
    ctx.stroke();
  }

  /* --- waterfalls --- */
  if (sceneId === 'waterfall') {
    [[W * 0.12, H * 0.34], [W * 0.30, H * 0.42], [W * 0.86, H * 0.38]].forEach(([fx, fy]) => {
      const fw = W * 0.055;
      const g = ctx.createLinearGradient(fx - fw, 0, fx + fw, 0);
      g.addColorStop(0, 'rgba(255,255,255,.1)');
      g.addColorStop(.45, 'rgba(255,255,255,1)');
      g.addColorStop(1, 'rgba(210,240,255,.15)');
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.moveTo(fx - fw * 0.7, fy);
      ctx.lineTo(fx + fw * 0.7, fy);
      ctx.lineTo(fx + fw, H * 0.63);
      ctx.lineTo(fx - fw, H * 0.63);
      ctx.closePath(); ctx.fill();
      ctx.fillStyle = 'rgba(255,255,255,.9)';
      ctx.beginPath(); ctx.ellipse(fx, H * 0.63, fw * 1.6, H * 0.018, 0, 0, Math.PI * 2); ctx.fill();
    });
  }

  /* --- water --- */
  const wy = H * 0.63;
  const water = ctx.createLinearGradient(0, wy, 0, H);
  water.addColorStop(0, '#c7f0d2'); water.addColorStop(.16, '#5fe0c6');
  water.addColorStop(.46, C.fei); water.addColorStop(1, '#0a6ea0');
  ctx.fillStyle = water; ctx.fillRect(0, wy, W, H - wy);

  ctx.strokeStyle = 'rgba(255,255,255,.7)'; ctx.lineCap = 'round';
  for (let i = 0; i < 16; i++) {
    const y = wy + (H - wy) * (0.06 + rnd() * 0.9);
    const x = W * rnd() * 0.8;
    ctx.lineWidth = 2 + rnd() * 3;
    ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + W * (0.06 + rnd() * 0.16), y); ctx.stroke();
  }

  /* --- koi --- */
  for (let i = 0; i < 3; i++) {
    const x = W * (0.12 + rnd() * 0.76), y = wy + (H - wy) * (0.2 + rnd() * 0.7);
    const s = W * (0.018 + rnd() * 0.012);
    ctx.fillStyle = ['#ff5a0a', '#f03000', '#ffab00'][i];
    ctx.beginPath(); ctx.ellipse(x, y, s, s * 0.42, 0, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath();
    ctx.moveTo(x + s, y); ctx.lineTo(x + s * 1.8, y - s * 0.5); ctx.lineTo(x + s * 1.8, y + s * 0.5);
    ctx.closePath(); ctx.fill();
  }

  /* --- foreground planting --- */
  const drawLotus = (cx, cy, s) => {
    ctx.save(); ctx.translate(cx, cy);
    ctx.fillStyle = '#2e8f2b'; ctx.strokeStyle = '#0d4a15'; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.ellipse(0, s * 0.5, s * 1.5, s * 0.5, 0, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
    for (let i = -2; i <= 2; i++) {
      const g = ctx.createLinearGradient(0, s * 0.4, 0, -s);
      g.addColorStop(0, '#e5006e'); g.addColorStop(.45, C.tao);
      g.addColorStop(1, '#fff6fa');
      ctx.fillStyle = g; ctx.strokeStyle = '#c4005e'; ctx.lineWidth = 1.5;
      ctx.save(); ctx.rotate(i * 0.34);
      ctx.beginPath(); ctx.ellipse(0, -s * 0.35, s * 0.3, s * 0.85, 0, 0, Math.PI * 2);
      ctx.fill(); ctx.stroke(); ctx.restore();
    }
    ctx.fillStyle = '#ffe14a'; ctx.strokeStyle = '#e0a000';
    ctx.beginPath(); ctx.ellipse(0, s * 0.1, s * 0.26, s * 0.18, 0, 0, Math.PI * 2);
    ctx.fill(); ctx.stroke();
    ctx.restore();
  };

  if (sceneId === 'peach') {
    for (let i = 0; i < 46; i++) {
      const x = W * rnd(), y = H * (0.28 + rnd() * 0.34), r = W * (0.012 + rnd() * 0.03);
      ctx.fillStyle = ['#ff6b8a', '#f0004f', '#ff9ab4'][i % 3];
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
    }
  }
  /* Bottom-right is reserved for the seal, so nothing is planted there. */
  if (sceneId === 'lotus') {
    drawLotus(W * 0.16, H * 0.86, W * 0.10);
    drawLotus(W * 0.44, H * 0.95, W * 0.085);
    drawLotus(W * 0.66, H * 0.83, W * 0.09);
  } else {
    drawLotus(W * 0.13, H * 0.92, W * 0.075);
    drawLotus(W * 0.62, H * 0.94, W * 0.07);
  }

  /* --- sparkles --- */
  ctx.fillStyle = '#fff';
  for (let i = 0; i < 22; i++) {
    roundedStar(ctx, W * rnd(), H * rnd(), W * (0.006 + rnd() * 0.016));
  }

  /* --- grain ---
     These images have been saved, forwarded and re-compressed a hundred times
     before they reach you. A little speckle is the difference between "rendered"
     and "arrived in a group chat". */
  ctx.save();
  for (let i = 0; i < 2600; i++) {
    const v = rnd();
    ctx.fillStyle = v > 0.5 ? 'rgba(255,255,255,.07)' : 'rgba(0,0,0,.07)';
    ctx.fillRect(W * rnd(), H * rnd(), 1.5, 1.5);
  }
  ctx.restore();
}

/* Gold text: a vertical gradient with a hard specular band, a dark keyline, and
   a hard offset shadow. Same recipe as the CSS plaque so the card and the page
   look like the same object. */
function goldText(ctx, text, x, y, size, font) {
  ctx.save();
  ctx.font = `${size}px ${font}`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  ctx.fillStyle = 'rgba(0,0,0,.5)';
  ctx.fillText(text, x + size * 0.05, y + size * 0.05);

  const g = ctx.createLinearGradient(0, y - size * 0.6, 0, y + size * 0.6);
  g.addColorStop(0, '#fff6c9'); g.addColorStop(.26, '#ffd84a');
  g.addColorStop(.48, '#c98a00'); g.addColorStop(.58, '#ffe98a');
  g.addColorStop(.74, '#f5b500'); g.addColorStop(1, '#8a5a00');

  ctx.lineWidth = Math.max(3, size * 0.045);
  ctx.strokeStyle = '#3b1a06';
  ctx.lineJoin = 'round';
  ctx.strokeText(text, x, y);
  ctx.fillStyle = g;
  ctx.fillText(text, x, y);
  ctx.restore();
}

/* A tiny deterministic PRNG so "shuffle" changes the picture but a redraw after
   a language switch does not. */
let cardSeed = 12345;
function makeRnd(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

function drawCard() {
  const canvas = document.getElementById('genCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const lang = currentLang();

  const CSS_W = 720, CSS_H = 720;
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = CSS_W * dpr;
  canvas.height = CSS_H * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const W = CSS_W, H = CSS_H;
  const rnd = makeRnd(cardSeed);

  const sceneSel = document.getElementById('genScene');
  const wishSel = document.getElementById('genWish');
  const nameInput = document.getElementById('genName');
  const scene = SCENES[Math.max(0, sceneSel ? sceneSel.selectedIndex : 0)] || SCENES[0];
  const wish = WISHES[Math.max(0, wishSel ? wishSel.selectedIndex : 0)] || WISHES[0];
  const who = (nameInput && nameInput.value.trim()) || '';

  drawScene(ctx, W, H, scene.id, rnd);

  /* Warm wash — the "enhance" button, applied to the whole card. */
  ctx.save();
  ctx.globalCompositeOperation = 'overlay';
  ctx.fillStyle = 'rgba(255,190,90,.16)';
  ctx.fillRect(0, 0, W, H);
  ctx.restore();

  /* 早安 in brush gold, the reason the card exists */
  goldText(ctx, '早安', W / 2, H * 0.17, W * 0.20, '"Ma Shan Zheng", serif');

  /* Blessing, in the chunky rounded face */
  goldText(ctx, wish.zh, W / 2, H * 0.36, W * 0.125, '"ZCOOL KuaiLe", sans-serif');

  /* Who it is for — a red name tag, the way the real cards do it */
  if (who) {
    ctx.save();
    ctx.font = `700 ${W * 0.05}px "Noto Sans SC", sans-serif`;
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    const label = lang === 'zh' ? `致 ${who}` : `for ${who}`;
    const tw = ctx.measureText(label).width;
    const bx = W / 2 - tw / 2 - W * 0.035, by = H * 0.455;
    const bw = tw + W * 0.07, bh = W * 0.085;
    ctx.fillStyle = 'rgba(0,0,0,.4)'; ctx.fillRect(bx + 5, by + 5, bw, bh);
    ctx.fillStyle = C.zhu; ctx.fillRect(bx, by, bw, bh);
    ctx.strokeStyle = C.jin; ctx.lineWidth = 3; ctx.strokeRect(bx, by, bw, bh);
    ctx.fillStyle = '#fff6ec';
    ctx.fillText(label, W / 2, by + bh / 2);
    ctx.restore();
  }

  /* English gloss in the burned-in subtitle box — the reel's own device */
  ctx.save();
  ctx.font = `${W * 0.042}px Arial, Helvetica, sans-serif`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  const gloss = lang === 'zh' ? `good morning · ${wish.en.toLowerCase()}` : `早安 · ${wish.zh}`;
  const gw = ctx.measureText(gloss).width;
  const gx = W / 2 - gw / 2 - 10, gy = H * 0.565, gh = W * 0.072;
  ctx.fillStyle = C.lan; ctx.fillRect(gx, gy, gw + 20, gh);
  ctx.fillStyle = '#fff';
  ctx.fillText(gloss, W / 2, gy + gh / 2);
  ctx.restore();

  /* Seal, bottom right, stamped slightly crooked */
  ctx.save();
  ctx.translate(W * 0.87, H * 0.88);
  ctx.rotate(-0.12);
  const ss = W * 0.11;
  ctx.fillStyle = 'rgba(0,0,0,.4)'; ctx.fillRect(-ss / 2 + 5, -ss / 2 + 5, ss, ss);
  ctx.fillStyle = C.zhu; ctx.fillRect(-ss / 2, -ss / 2, ss, ss);
  ctx.strokeStyle = '#f2eee0'; ctx.lineWidth = 3;
  ctx.strokeRect(-ss / 2, -ss / 2, ss, ss);
  ctx.fillStyle = '#fff6ec';
  ctx.font = `900 ${ss * 0.40}px "Noto Serif SC", serif`;
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText('土', 0, -ss * 0.21);
  ctx.fillText('狗', 0, ss * 0.21);
  ctx.restore();

  /* Gold hairline frame */
  ctx.strokeStyle = C.jin; ctx.lineWidth = 10;
  ctx.strokeRect(5, 5, W - 10, H - 10);
  ctx.strokeStyle = C.zhu; ctx.lineWidth = 3;
  ctx.strokeRect(16, 16, W - 32, H - 32);
}

function downloadCard() {
  const canvas = document.getElementById('genCanvas');
  if (!canvas) return;
  canvas.toBlob(blob => {
    if (!blob) return;
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'zaoan-tugou.png';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }, 'image/png');
}

/* ============================================================================
   WIRING
   ========================================================================== */
function init() {
  const btn = document.getElementById('langBtn');
  if (btn) {
    btn.addEventListener('click', () => {
      applyLang(currentLang() === 'zh' ? 'en' : 'zh');
    });
  }

  ['genName', 'genWish', 'genScene'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', drawCard);
  });

  const rand = document.getElementById('genRandom');
  if (rand) {
    rand.addEventListener('click', () => {
      cardSeed = (cardSeed * 48271 + 11) % 2147483647;
      const w = document.getElementById('genWish');
      const s = document.getElementById('genScene');
      if (w) w.selectedIndex = Math.floor(Math.random() * WISHES.length);
      if (s) s.selectedIndex = Math.floor(Math.random() * SCENES.length);
      drawCard();
    });
  }

  const dl = document.getElementById('genDownload');
  if (dl) dl.addEventListener('click', downloadCard);

  /* The copy button stays disabled while there is no address. Wiring it up to
     copy the words "contract address not published yet" would be worse than
     doing nothing — the point is that there is nothing here to paste. */
  const copyBtn = document.getElementById('copyBtn');
  if (copyBtn && !copyBtn.disabled) {
    copyBtn.addEventListener('click', async () => {
      const addr = document.getElementById('contractAddr');
      const text = addr ? addr.textContent.trim() : '';
      const original = copyBtn.textContent;
      try {
        await navigator.clipboard.writeText(text);
        copyBtn.textContent = currentLang() === 'zh' ? '已复制' : 'copied';
      } catch (_) {
        copyBtn.textContent = currentLang() === 'zh' ? '复制失败' : 'failed';
      }
      setTimeout(() => { copyBtn.textContent = original; }, 1400);
    });
  }

  const pause = document.getElementById('marqueePause');
  if (pause) {
    pause.addEventListener('click', () => {
      const track = document.querySelector('.marquee__track');
      if (!track) return;
      const paused = track.style.animationPlayState === 'paused';
      track.style.animationPlayState = paused ? 'running' : 'paused';
      pause.classList.toggle('is-paused', !paused);
      pause.setAttribute('aria-label',
        t(paused ? 'a11y.marqueePause' : 'a11y.marqueePlay', currentLang()));
      pause.firstElementChild.textContent = paused ? '❚❚' : '▶';
    });
  }

  applyLang(initialLang());

  /* Canvas text needs the webfonts, and document.fonts.ready is NOT sufficient
     on its own: it resolves as soon as the fonts used in LAYOUT have settled,
     and a face the page only ever draws on canvas is never referenced in layout,
     so the browser never starts fetching it and `ready` resolves immediately.
     The card would then quietly ship in a system fallback. Asking for each face
     explicitly, with the text that will be drawn, is what actually loads them. */
  loadCanvasFonts().then(drawCard);
}

function loadCanvasFonts() {
  if (!document.fonts || !document.fonts.load) return Promise.resolve();
  const specs = [
    ['400 96px "Ma Shan Zheng"', '早安'],
    ['400 96px "ZCOOL KuaiLe"', WISHES.map(w => w.zh).join('')],
    ['400 40px "Noto Sans SC"', '致'],
    ['900 40px "Noto Serif SC"', '土狗']
  ];
  return Promise.all(
    specs.map(([spec, text]) => document.fonts.load(spec, text).catch(() => {}))
  ).catch(() => {});
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
