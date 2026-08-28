# 土狗 · $TUGOU

A memecoin landing page whose ticker is the Chinese word for "memecoin".

Baidu Baike's entry for 土狗币 opens: 「土狗币，中文名亦作『MeMe币』」 — *tugou coin, also
rendered in Chinese as MeMe coin*. The Chinese internet finished translating "memecoin" years
ago, and what it landed on is not a loanword: 土狗 is a village mongrel, the dog at the end of
the road that everybody knows. So the coin is named after its own category. That is the joke,
and the page says so out loud in [the honest section](#the-honest-section).

The visual language is **土酷 (tǔkù)**, phonetically **"Too Cool"** — the term popularised
around 2016 by the artist working as 「养鸭」 in a film called *Too Cool To Be True*. The stress
is on **TOO**, not on 土: not "slightly tacky" but *cool taken all the way*. Its sincere layer is
small-town and older-generation taste — hyper-saturated landscape wallpaper pasted floor to
ceiling, gold calligraphy boards, and the blinged-out 早安 image an elder sends to everyone at
six in the morning as a genuine blessing.

The source was [this reel](https://www.instagram.com/reel/DcdbF-JueeA/) by @fakeplasticbrands.

## Running it

Static. No build, no dependencies, no server required.

```
open index.html
```

Everything except the Google Fonts request works offline and from `file://`, which is why the
i18n dictionary lives in `script.js` as a plain object rather than in a fetched JSON file —
`fetch()` is blocked on `file://`.

## Files

| file | what it holds |
|---|---|
| `index.html` | Structure, and the hero landscape inlined as SVG so it renders with JS disabled |
| `styles.css` | The token system and the six type treatments |
| `script.js` | i18n dictionary + engine, the almanac, and the 早安 card generator |
| `DESIGN.md` | The design contract — read this before changing anything visual |
| `content.json` | A larger copy bank than the page currently uses; source material for new sections |

> **On `DESIGN.md` and `content.json`:** both were written against a *larger* version of this page
> — one with a nav, a mascot, an LED price strip, a plaque wall and a community section. They
> describe roughly ten type treatments and thirty chromatic hexes; what is actually built is a
> tighter system of **six chromatics and six treatments**, and the implementation is the tested
> one. So where the two disagree on *counts and inventory*, the code is current and the documents
> are a superset. Where they disagree on **principles** — the cultural contract, the elevation
> philosophy, the antipatterns, the register rules — the documents win, and those are the parts
> worth reading. Treat both as a backlog and a rulebook rather than a spec of the current page.
| `assets/proto-*.html` | Standalone prototypes for the landscape and the type treatments, kept because they are the fastest way to iterate on either in isolation |
| `test/` | Playwright checks — not shipped, not a dependency of the page. See `test/README.md` |

## How it is built

**No images.** Every pixel is CSS, SVG or canvas. The hero landscape is one inline SVG, and the
thing that makes it read as a photo-collage rather than flat vector art is `feTurbulence` +
`feDisplacementMap` on every organic mass — foliage, rock, falling water and the lake all get
their edges broken by fractal noise. Without it the same geometry reads as Corporate Memphis.
The whole SVG then goes through `filter: saturate(1.45) contrast(1.12)`, which is the "enhance"
button every one of these wallpapers has been through.

**Six chromatics, three radii, one elevation philosophy.** The house design method preaches
accent scarcity; 土酷 is the opposite of scarcity. The resolution is to keep the *discipline* and
invert the *output* — the palette is loud but hard-bounded and named, and there is exactly one
elevation recipe: hard offset shadows with zero blur. A soft modern shadow anywhere in the chrome
is the fastest way to make this read as a Western pastiche. See `DESIGN.md`.

**Bilingual, Chinese-primary.** Chinese is the original; English is a burned-in subtitle, which
is why it is set in white Arial on a pure `#0000f5` box — the most specific single thing in the
reference frame. The switch is `data-i18n` attributes over a single DOM, persisted to
`localStorage` and falling back to `navigator.language`, then to Chinese.

## Things that will look like mistakes and are not

- **`Noto Sans SC` is requested at `wght@400` only, and weight comes from switching family.**
  Any multi-weight Google Fonts request resolves to a variable file. Measured against the live
  API, a representative CJK subset is **19 KB** at `wght@400` and **35 KB** at either
  `wght@400;900` *or* `wght@400;700;900` — asking for two weights costs exactly what asking for
  three does. So all the visual weight is carried by ZCOOL KuaiLe, a display face that was
  already loaded for the WordArt, and which is a more authentic shopfront voice than a bold sans
  would have been anyway.

- **Two families ship subset via `&text=`, each in its own `<link>`.** Ma Shan Zheng to 土狗酷早安
  (2,928 bytes instead of ~2 MB) and Noto Serif SC 900 to 正宗土狗币宜忌一二三四 plus digits
  (3,760 bytes instead of the **499 KB** the full family actually pulled). `&text=` is a
  *request-level* parameter — it applies to every family in the URL it appears in — so merging
  either link into the main stylesheet would silently subset everything else to those few glyphs
  and render the page as tofu.

  The subsetted serif is a **register, not a weight**: only the seal, the certificate crest, the
  宜/忌 marks, the almanac day, the step numerals and the dictionary headword. Every one of those
  strings is hardcoded and never translated, which is what makes subsetting safe. **A character
  outside a subset does not error — it silently falls back.** `test/subset-check.mjs` walks every
  element on a subsetted family in both languages and fails if anything drifts outside; run it
  after editing any of those strings, and update the `&text=` at the same time.

  Total webfont cost, measured: **813 KB zh / 499 KB en**, down from 1,260 / 788 before the
  serif was subset.

- **The WordArt paints its text three times.** `::before` is the dark keyline, the real text node
  is the white keyline, `::after` is the rainbow fill. That order is not arbitrary: an element
  paints its *background* first, so a `background-clip: text` gradient on the parent ends up
  *underneath* its own pseudo-elements. Painting inside an inline box runs
  `::before → text → ::after`, which is the only stacking that puts the gradient on top. The
  headings also carry an `aria-label`, because Chrome puts generated content into the
  accessibility tree and a screen reader would otherwise read every heading three times.

- **The card generator calls `document.fonts.load()` explicitly rather than trusting
  `document.fonts.ready`.** `ready` resolves once fonts used in *layout* have settled; a face the
  page only ever draws to canvas is never referenced in layout, so the browser never starts
  fetching it and `ready` resolves immediately. The PNG would then ship in a system fallback.

- **`word-break` stays `normal`.** `keep-all` is a Korean rule; Chinese has no spaces, so it turns
  a paragraph into one unbreakable token that blows out of the viewport.

- **`prefers-reduced-motion` stops travel but keeps the sparkle.** Blanket-freezing every
  animation parks the sparkles on their final `opacity: 0` keyframe and they disappear — which
  erases the aesthetic for exactly the people who did not ask for that.

- **The contract address field says 合约地址待公布 and the copy button is disabled.** There is no
  token. A realistic-looking placeholder is something a person can send funds to.

## The honest section

`#truth` is the one place every effect drops — no gold, no sparkle, no blue box, no WordArt. It
has a permanent skip link at the top of the document so it is not something a reader has to
scroll to find. It states plainly that there is no token, no contract and no roadmap, that the
almanac is computed from the date, and that roughly 99% of these approach zero once attention
leaves. It ends on 「金玉满堂，莫之能守。」 — Laozi, chapter 9.

The finance is the joke. The sincerity is not. Every blessing on the page is meant.

## Cultural contract

`DESIGN.md` carries this in full and it outranks every visual rule in the file. The short
version: this lands on the **sincere** side of 土酷, celebration rather than mockery. The
grandmother is never the punchline. No vaporwave in costume, no Chinese characters used as
texture, no Chinatown-pack orientalism or wonton fonts, no Japanese leakage (the dog is a
中华田园犬, not a Shiba), and no deliberate incompetence — real 土酷 objects are made *with care
using limited tools*, so the crudeness comes from the vocabulary and never from sloppiness.

## Not a launch

There is no token, no contract, no presale and no team. This is a design piece.
