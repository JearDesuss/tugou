# DESIGN.md — 土狗 $TUGOU

The binding design contract. If code and this file disagree, this file is right and the code is a bug.

---

## north_star

**A county-town living room at 6:40 in the morning, where the entire back wall — floor to ceiling, wrapping onto the side wall, furniture standing on top of it — is a hyper-saturated waterfall-and-mountain mural, and the light source in the room is the flat red-orange sun printed on that wall, not the window.**

Everything else follows from that sentence. The wall is not a background; the wall is the room. There is no mat, no margin, no vignette, no hero section that ends. The sun is printed, so the light is flat, hard-edged and banded — never a photographic bloom. It is morning, it is bright, and somebody in this room is about to forward you a blessing.

---

## theme

**light**

Non-negotiable. A dark or black page ground is nearly diagnostic of the failure mode (vaporwave wearing 土酷 as a costume). 土酷 is broad daylight, warm, hyper-saturated. The two places black is permitted are the LED shopfront strip (`#0A0A0A`) and the odometer digits (`#141414`) — both are *objects sitting on* the bright wall, never the wall itself. `html`/`body` carry `#8FE3FF` 天光底 so that even a failed first paint shows daylight.

---

## industry

A memecoin landing page — specifically a Chinese-primary memecoin whose ticker 土狗 (tǔgǒu) is literally the native Chinese slang word for "memecoin". The audience, in priority order:

1. **Chinese-reading crypto natives** (mainland-Simplified register, 冲/上车/梭哈/韭菜/U). They are the primary reader and the Chinese copy must read as complete without the English.
2. **Chinese readers who are not in crypto** — the aunt, the uncle, the person in the family group chat. The blessing-card generator exists for them.
3. **English readers**, who arrive at a finished Chinese object and get burned-in subtitles.

This is also, functionally, a design tribute to 土酷 (tǔkù, "Too Cool"). It carries a cultural obligation, recorded below in **Cultural contract**, that outranks every visual rule in this file.

---

## description

*Read this first.*

This page is built with the house Refero method, and the house Refero method preaches **restraint**: accent scarcity, one primary accent, a small bounded token vocabulary, whitespace as a positive value. 土酷 is the exact opposite of restraint. Its sincere layer — the wallpaper pasted floor to ceiling, the gold-foil 早安 sticker, the rhinestones hot-glued around the edge of a certificate — piles on decoration *specifically* to signal progress, success and joy. Emptiness in that language reads as poverty, not sophistication.

**The resolution is not to abandon the method. It is to apply the method's DISCIPLINE to a MAXIMALIST world.** Concretely:

- **Accent scarcity is deliberately INVERTED.** Instead of one accent used sparingly, we run a loud chromatic world where at least one saturated red/green adjacency appears in every viewport. But the set is still hard-bounded and every member is named: **seven accent families, thirty enumerated chromatic hexes, one reserved system blue, six neutrals, three named ramps.** Pick the number and hold it. An eighth accent family is a bug. A thirty-first chromatic hex is a bug. "It needed one more purple" is the sound of the system failing.
- **Three radii, total.** `0px` / `4px` / `999px`. Six radius slots in the token set map onto those three values and no others. The discipline holds even here — *especially* here, because in a maximalist page a fourth radius is invisible to the author and obvious to the eye.
- **One elevation philosophy, stated and held: WordArt physics.** Hard offset drop shadows with zero blur, thick outlines, bevel and emboss, stepped extrusion ramps. There are no soft modern shadows anywhere on this page. Mixing a `0 4px 12px rgba(0,0,0,.08)` into this world is the single most legible tell that a Western designer touched it, more legible than any color mistake.
- **Type is not "tuned"; it is CAST.** There is no Linear-style optical size/tracking ladder here. Instead there is a closed set of **ten named typographic treatments** — 富贵金匾额 gold plaque, 彩虹艺术字 rainbow WordArt, 立体旋转字, 彩云体 hollow outline, 蓝底白字 blue subtitle box, LED 走字, 印章 seal, 长辈图正文, 老实话正文, 计数器数字. Every text node on the page is exactly one of those ten. A treatment outside the set is a bug, and "a clean sans headline" is not a treatment.

**Maximalism executed with a system is what separates real 土酷 from noise.** The source objects were made *with care and pride using limited tools* — a person chose that gold gradient, glued those rhinestones on one at a time, picked that WordArt preset out of the ten available. The crudeness comes from the vocabulary, never from sloppiness. Do not build in fake incompetence: no deliberate misalignment, no ironic Comic Sans, no intentionally broken layout. **Build it well.** A page that is merely chaotic has failed the aesthetic exactly as badly as a page that is tasteful.

There is one and only one place where all of this stops: `#honest`, the 说句老实话 section. Every effect drops — no gold, no sparkle, no seal, no blue box, no webfont — and the English is set in the same plain serif as the Chinese, because the subtitle joke ends there too. That section has a permanent nav link. It is not an easter egg.

---

## colors

Seven accent families. Thirty chromatic hexes. One reserved system blue. Six neutrals. The `role` column is the whole contract — a color used outside its stated role is a bug even if it looks fine.

### Family 1 — 大红 Red (5)

| hex | name | group | role — where it is allowed to appear |
|---|---|---|---|
| `#E60012` | 大红 Big Red | accent/red | The structural red and the single most-used non-white color. Card frames, mascot collar, the 冲 button, banner grounds, red-envelope body, 红配绿 red half, crane crown. Must touch ≥40% of viewports. Never darkened toward brick to look tasteful. |
| `#FF4C00` | 朱红 Vermilion | accent/red | The *lit* red only. Sun mid-ring, koi bodies, plum/peach blossom cores, the hot stop of any red gradient, 红包 highlight. **Never for text.** |
| `#C1000F` | 深红 Deep Red | accent/red | Bottom stop of red gradients and the red extrusion floor. Absolute darkness floor for red. Never a flat fill on its own. |
| `#C8102E` | 印泥红 Seal Ink | accent/red | Seal stamps only (印章 treatment). The one red allowed to look like pigment rather than print. Max two seals per page. |
| `#FF2D1A` | 灯管红 LED Phosphor | accent/red | LED ticker glyphs and their glow only. Never a fill, never a border, never outside `.led`. |

### Family 2 — 富贵金 Gold (4)

| hex | name | group | role |
|---|---|---|---|
| `#FFD400` | 富贵金 Prosperity Gold | accent/gold | Flat gold: coins, 元宝, medal centers, the 1–2px keyline, sparkle secondary, mid-stop of every gold gradient. This is the money color; it must touch red constantly. |
| `#FFF6C0` | 金高光 Gold Highlight | accent/gold | Top stop of gold gradients and the traveling shine band. **Highlight only** — never a fill, never a background, never body text. |
| `#C98F10` | 金中调 Gold Midtone | accent/gold | The dark band inside a gold gradient that creates the bevel flip. Only ever a gradient stop. |
| `#8A5A00` | 金暗部 Gold Shadow | accent/gold | Bottom stop of gold gradients, calligraphy outline stroke, base of the stacked extrusion, lotus stamen. Never used alone as a fill. |

### Family 3 — 翠绿 Green (4)

| hex | name | group | role |
|---|---|---|---|
| `#12B33F` | 翠绿 Jade Green | accent/green | The counter-color. Foreground foliage, lotus pads, near-mid ridges, the green half of every deliberate 红配绿 adjacency, the fake music-player progress bar. **Required somewhere in every full-bleed composition.** |
| `#075C2A` | 深山绿 Deep Mountain | accent/green | Nearest ridge and the darkest value inside any natural imagery. **Substitutes for black in all landscape drawing** — the wallpaper genre contains no true black. |
| `#2F8F4E` | 中岭绿 Mid Ridge | accent/green | Ridge-gradient stop only. |
| `#6FBF73` | 远岭绿 Far Ridge | accent/green | Farthest ridge top stop only. |

### Family 4 — 湖蓝 Lake Blue (3)

| hex | name | group | role |
|---|---|---|---|
| `#00A0E9` | 湖蓝 Lake Blue | accent/blue | Sky bands, lake body, ripple lines, waterfall shadow, sky behind cranes, and band 5 of the rainbow ramp. Decorative only. **Distinct from and never substituted for the subtitle blue.** |
| `#8FE3FF` | 水光蓝 Water Light | accent/blue | Top stop of the lake ramp, waterfall inner banding, rhinestone facet. |
| `#0D7BB5` | 深水蓝 Deep Water | accent/blue | Bottom stop of the lake ramp only. |

### Family 5 — 桃粉 Peach Pink (3)

| hex | name | group | role |
|---|---|---|---|
| `#FF3D8B` | 桃粉 Peach Pink | accent/pink | Lotus and peach petals, rhinestone glints, hearts, the 早安 card's flower cluster, sparkle variant. The softest voice; it is what stops the page reading as purely patriotic red-gold. |
| `#FFF0F6` | 瓣白 Petal White | accent/pink | Innermost petal-gradient stop only. |
| `#E5327C` | 瓣深 Petal Deep | accent/pink | Outermost petal-gradient stop and lotus vein only. |

### Family 6 — 土黄 Earth Ochre (6)

| hex | name | group | role |
|---|---|---|---|
| `#D69A3C` | 土黄 Earth Yellow | accent/ochre | **The coat of 大黄, the 中华田园犬 mascot, and nowhere else on the page.** This one ochre is what links the ticker 土狗 to the 土 in 土酷. |
| `#F0C274` | 犬腹白 Belly | accent/ochre | Mascot belly, muzzle underside, inner ear. Mascot only. |
| `#8A5A1E` | 犬暗部 Coat Shadow | accent/ochre | Mascot shading and outline. Mascot only. |
| `#E8A33D` | 豹底 Leopard Ground | accent/ochre | 豹纹 texture ground. Texture only; never a card fill. |
| `#A5651C` | 豹芯 Rosette Core | accent/ochre | 豹纹 rosette inner core. Texture only. |
| `#6B3D10` | 豹纹褐 Rosette Crescent | accent/ochre | 豹纹 crescents. Texture only. |

### Family 7 — 彩虹 Rainbow (5 new)

One object, six hard bands at 16% each, top to bottom. It is a *ramp*, not six independent colors: no member of it may be lifted out and used as a fill anywhere else.

| hex | name | group | role |
|---|---|---|---|
| `#FF0000` | 虹一 Band 1 | accent/rainbow | Rainbow WordArt ramp, band 1 (0–16%). Ramp only. |
| `#FF8A00` | 虹二 Band 2 | accent/rainbow | Ramp band 2 (16–32%). Also permitted as odometer digit color (`#FF8A00` on `#141414`) — the one sanctioned exception, because that is the literal 2006 counter color. |
| `#FFE100` | 虹三 Band 3 | accent/rainbow | Ramp band 3 (32–48%). Ramp only. |
| `#00C853` | 虹四 Band 4 | accent/rainbow | Ramp band 4 (48–64%). Ramp only. |
| (`#00A0E9`) | 虹五 Band 5 | accent/rainbow | Ramp band 5 (64–80%). Shared with 湖蓝; not a new hex. |
| `#7B2FF7` | 虹六 Band 6 | accent/rainbow | Ramp band 6 (80–100%). Ramp only. **The only purple on the page.** |

### Reserved system color (1) — not an accent

| hex | name | group | role |
|---|---|---|---|
| `#0000FF` | 纯蓝 Pure Blue | system/reserved | **Single-purpose: the solid rectangle behind burned-in English subtitles. Nothing else may use it — not a button, not a link, not a background, not a tint, not a focus ring.** Its wrongness against the landscape is the whole point; softening it to a designer blue destroys the reference. The only sanctioned deviation is `#0A16E8` if it strobes on OLED, applied globally via one token, never per-instance. |

### Neutrals (6)

| hex | name | group | role |
|---|---|---|---|
| `#FFFFFF` | 雪白 Snow White | neutral | Waterfalls, cranes, sparkle cores, WordArt stroke, card fill, subtitle text, honest-section ground, and — critically — the **1–2px keyline inserted wherever saturated red meets saturated green** so both hold value while still touching. |
| `#E8E8E8` | 面板灰 Panel Grey | neutral | QQ-era bevel panel face for long copy. |
| `#D4D0C8` | 按钮灰 Button Grey | neutral | QQ-era bevel button face. |
| `#808080` | 凹边灰 Bevel Dark | neutral | Bottom/right border of an outset bevel; top/left of an inset one. Bevel geometry only. |
| `#141414` | 墨黑 Ink Black | neutral | Odometer ground, the hard 1px offset drop-shadow under WordArt, body text on white cards, dot-matrix mask, crane wingtips. **Never the page background.** |
| `#0A0A0A` | 灯箱黑 Lightbox Black | neutral | LED strip ground only. |

### Named ramps (3 objects, not colors)

Generated once, referenced by name, never disassembled:

1. **金字挤出阶梯 Gold Extrusion Ramp** — 8 stops stepping 1px each in x and y: `#B8860B, #B8860B, #A0740A, #8A6208, #6F4E06, #593E05, #432F04, #2E2003`, closed by `9px 11px 14px rgba(0,0,0,.45)`. Used only by 彩虹艺术字 and 立体旋转字. Its stops are not accents and may not be reused as fills.
2. **四岭 Ridge Ramp** — three `linearGradient` pairs, back to front: `#6FBF73→#2F8F4E`, `#2F8F4E→#12B33F`, `#12B33F→#075C2A`, whole SVG at `filter: saturate(1.55) contrast(1.12)`.
3. **镜湖 Lake Ramp** — `#8FE3FF 0 → #00A0E9 42% → #0D7BB5 100%`.

---

## surfaces

Elevation here means *how far off the wall the object is glued*, not how much blur it gets.

**Surfaces introduce no new hexes.** Every value below is drawn from the accent and neutral sets above; if a surface needs a color that is not already named, that is a bug in the surface, not a missing token.

| hex | name | level | purpose |
|---|---|---|---|
| `#8FE3FF` (水光蓝) | 天光底 Sky Ground | 0 | `html`/`body` background beneath the fixed `.wall`. Exists so the first paint, a failed paint, and any overscroll are all daylight — never black. Nothing is ever *placed* on it; it is only ever seen by accident. |
| — | 墙 The Wall | 0 | The full-bleed fixed landscape stack (sky, ridges, falls, lake, lotus, cranes, sun) plus the wallpaper panel seam. Level 0 because it is the room. It is a composite, not a color token: it must never be reduced to a flat fill. |
| `#FFFFFF` | 卡面 Card Face | 1 | 早安 blessing cards, the 荣誉证书, the 百科 reveal card, the almanac day page. The default thing that sits *on* the wall. Always bordered — a white rectangle with no frame is not a card, it is a hole. |
| `#E8E8E8` / `#D4D0C8` | QQ 面板 / 按钮 | 1 | Long-copy panels and bevel buttons. The second era, playing against the wall's timelessness. Outset bevel = level 1, `:active` inset bevel = level 0 (the object is pressed into the wall). |
| `#E60012` | 红面 Red Face | 2 | Banner grounds, red-envelope step cards, plaque grounds, the 冲 CTA, the ribbon behind a medal. Stacks *on top of* a level-1 card. |
| `#0A0A0A` | 灯箱 Lightbox | 3 | The LED marquee strip and the visitor counter. Topmost fixed chrome; the announcement strip is `position: sticky` at the top of the page. Nothing is ever placed on top of level 3 except the dot-matrix mask. |
| `#FFFFFF` | 老实话底 Honest Ground | 1 (full-bleed) | `#honest` only. Covers the wall completely, edge to edge, killing every layer behind it. The one surface in the system that is allowed to be empty. |

---

## typography

Three webfonts, one weight each, two `<link>` requests. Everything else is a system stack, on purpose.

| family | substitute (fallback stack) | weight | sizes | lineHeight | letterSpacing | fontFeatureSettings | role |
|---|---|---|---|---|---|---|---|
| **ZCOOL KuaiLe** | `"PingFang SC","Microsoft YaHei","Heiti SC",sans-serif` | 400 only (there is no bold and none is needed) | 20–168px | 1.0–1.15 | `.05em` on display, `0` under 24px | `normal` | Display voice: 彩虹艺术字 hero mark, every 早安 card primary line, the 冲 button, festive interjections, medal text. The chunky rounded WeChat-sticker register. Cheapest CJK face measured (~301 KB full, ~5 KB with `&text=`). |
| **Noto Sans SC** | `"PingFang SC","Hiragino Sans GB","Microsoft YaHei",sans-serif` | **`wght@400` and nothing else** | 13–24px | 1.7–1.9 | `0` (never letter-space Chinese body copy) | `"tnum" 1` on numeric UI only | 长辈图正文 body, almanac columns, UI labels, form fields, and **the only face the canvas card generator may use** — it is the only recommended family carrying a full 101-subset set, and users type arbitrary names. |
| **Ma Shan Zheng** | `"STKaiti","KaiTi","Songti SC",serif` | 400 | 30–86px | 1.0 | `.12em` in the vertical variant, `.04em` horizontal | `normal` | Brush calligraphy, **fixed decorative strings only**: the plaques, the 早安 lockup, the certificate header. Loaded via `&text=` in its own `<link>` (~3.5 KB). Never bound to anything a user or a translation can change. |
| **Arial (system, no webfont)** | `Arial, Helvetica, "Liberation Sans", sans-serif` | 700 | 13–17px | 1.30 | `0` | `normal` | **All English on the page, without exception**, inside the 蓝底白字 blue box. Costs zero bytes, and a nicer font would be less correct. White on `#0000FF` measures ~8.6:1, which makes this simultaneously the authentic layer and the guaranteed-accessible layer. |
| **System serif (no webfont)** | `Songti SC, SimSun, "Noto Serif CJK SC", "Source Han Serif SC", serif` | 400 | 15–20px | 1.8 | `0` | `normal` | 百科 reveal card and the entire 老实话 honest section, in **both** languages. Noto Serif SC was rejected (5.12 MB, and its literary Song forms read as restrained — the opposite of 土酷). The system serif is free, is what Baidu Baike actually renders in, and its arrival marks the moment the page stops performing. |
| **ui-monospace (system)** | `ui-monospace, "SF Mono", Consolas, "Courier New", monospace` | 400/700 | 13–22px | 1.0 | `.22em` on the LED strip; `0` on the address | `"tnum" 1` | LED ticker glyphs, odometer digits, and the contract address (`overflow-wrap: anywhere`). |

Rejected and why, so nobody re-litigates it: **Noto Serif SC** (5.12 MB, too literary), **ZCOOL XiaoWei** (4.56 MB, too refined), **Liu Jian Mao Cao** and **Long Cang** (thin scrawly cursive — reads "casual handwritten note", not "thick gold-brush temple couplet"), **ZCOOL QingKe HuangYou** (2.3× KuaiLe for the same text; a valid *swap* for headings if you want them harder, never an *addition*).

**Consequence of the rejections, recorded so it is not rediscovered as a bug:** the 手写便签 handwritten-annotation treatment has no font and is therefore **cut from the system**. Marginalia that wanted to be handwritten becomes a 长辈图正文 line inside a small rotated white card instead. Eleven candidate treatments, ten shipped.

---

## type_scale

Sizes are given per language where the two diverge — Chinese is two full-width glyphs where English is thirteen letters, and compromising on one value ruins both. Switch with `html[data-lang="zh"]` / `html[data-lang="en"]`.

| role | size | weight | lineHeight | letterSpacing |
|---|---|---|---|---|
| `hero.wordart` (彩虹艺术字, zh) | `clamp(56px, 15vw, 168px)` | 400 | 1.0 | `.05em` |
| `hero.wordart` (en, when EN mode replaces it) | `clamp(34px, 9vw, 96px)` | 400 | 1.05 | `0` |
| `plaque.horizontal` (富贵金匾额) | `clamp(30px, 7vw, 86px)` | 400 | 1.0 | `.04em` |
| `plaque.vertical` | `clamp(26px, 5vw, 64px)` | 400 | 1.0 | `.12em` |
| `card.primary` (早安卡 main line, 2–6 chars) | `clamp(40px, 11vw, 104px)` | 400 | 1.05 | `.05em` |
| `card.secondary` (~38% of primary) | `clamp(16px, 4.2vw, 40px)` | 500 | 1.4 | `0` |
| `section.title` (彩云体 hollow) | `clamp(32px, 8vw, 72px)` | 400 | 1.1 | `.06em` |
| `body.zh` (长辈图正文) | `clamp(18px, 2.2vw, 24px)` | 500 | 1.8 | `0` |
| `body.serif` (百科 + 老实话, both langs) | `clamp(15px, 1.8vw, 20px)` | 400 | 1.8 (zh) / 1.6 (en) | `0` |
| `subtitle.en` (蓝底白字) | `clamp(13px, 1.5vw, 17px)` | 700 | 1.30 | `0` |
| `led` (走字屏) | `clamp(14px, 2vw, 22px)` | 700 | 1.0 | `.22em` |
| `seal` (印章) | `.82em` of its host | 600 | 1.0 | `0` |
| `ui.label` (bevel buttons, form labels) | `clamp(14px, 1.6vw, 17px)` | 500 | 1.4 | `0` |
| `odometer` (计数器数字) | `20px` fixed | 400 | 1.0 | `0` |
| `address` (contract) | `clamp(13px, 1.6vw, 16px)` | 400 | 1.5 | `0` |
| `finePrint` (footer legal) | `13px` | 400 | 1.7 | `0` |

CJK line-breaking, applied once on `:lang(zh)` and never overridden: `word-break: normal; line-break: strict; overflow-wrap: break-word; text-align: start;`. **`word-break: keep-all` on Chinese is a horizontal-overflow bug** (Chinese has no spaces, so the paragraph becomes one unbreakable token); `break-all` is wrong in the other direction (it splits English words mid-word). English headings get `text-wrap: balance`; Chinese headings must not. Traditional-character plaques are wrapped `lang="zh-Hant"` so a `zh-Hans` root does not pull Hans glyph variants out of a CJK-unified font. `text-autospace` is already `normal` by default — write nothing, and never hand-insert hair spaces.

---

## spacing

```
base           8px                 (all spacing is a multiple of 8; 4px exists only as a bevel/keyline width)
elementGap     16px                (24px between a card and its blue subtitle box)
cardPadding    28px mobile / 40px ≥768px
sectionGap     0px                 — sections butt directly against each other. The ONLY divider is a
                                     48px-tall LED marquee strip. Whitespace between sections is a bug;
                                     the wall must never be visible as "breathing room".
sectionPadY    64px mobile / 96px ≥768px   (inside a section, above and below its content)
pageMaxWidth   1024px              — period-correct. The footer says 最佳浏览分辨率 1024×768 and means it.
                                     The .wall is always 100vw and ignores this.
gutter         20px mobile / 32px ≥768px

radius {
  small:   0px     hard corners: bevel panels, plaques, the certificate, LED strip, subtitle box
  badges:  4px     stickers, red envelopes, chips, the 星期一 date chip, medal ribbon tips
  inputs:  0px     every form field in the card generator
  buttons: 0px     QQ bevel buttons and the 冲 CTA — the hard corner IS the button
  cards:   4px     早安 cards, WeChat group card, koi blessing output
  pills:   999px   EXACTLY TWO USES: the 中文/EN language switch, and the unread 99+ badge
}
```

**Three radii, total: `0px`, `4px`, `999px`.** Six slots, three values. A fourth radius is a bug. `border-radius: 8px` in particular is the modern-web default and must never appear.

---

## elevation

**WordArt physics. Nothing on this page casts a soft shadow.**

Depth here comes from three techniques and no others:

1. **Hard offset drop shadow, blur radius `0`.** `text-shadow: 1px 1px 0 #141414` under WordArt; `box-shadow: 4px 4px 0 #141414` under a card. The offset is always positive-down-right and always an integer. A blurred shadow is the single most legible sign that a Western designer touched the page — more legible than any color mistake, because a viewer feels it before they can name it.
2. **Stepped extrusion.** The 金字挤出阶梯 ramp: 8–14 stacked shadows each stepping exactly 1px in x and y, darkening down a fixed ladder. This is the 90s-Office 3D preset, reproduced honestly. Only one element per page may carry the full 14-step version (the 立体旋转字 ticker callout); headline WordArt uses the 8-step.
3. **Bevel and emboss.** Two-tone borders that fake a light from the top-left: outset = `border-color: #fff #808080 #808080 #fff`, inset = the same four values reversed. `:active` flips them and applies `translate(1px, 1px)` with **no transition** — the hard snap is the point. A gilded frame is the ornate version of the same idea: `border-image` acanthus plus `inset 0 0 0 4px #E60012, inset 0 0 0 6px #FFD400` so gold touches red at the seam.

**Blur is permitted in exactly four enumerated places and nowhere else:**
`filter: drop-shadow(0 0 10px rgba(255,212,0,.35))` on gold calligraphy · `text-shadow: 0 0 6px #FF2D1A, 0 0 18px rgba(255,45,26,.55)` on LED glyphs · `filter: blur(7px)` on the KTV beam layer · `filter: blur(.35px)` on waterfalls and `blur(1.2px)` on the lake reflection. Every one of those is a *light source or water*, not a shadow. A fifth blur is a bug.

Stacking order, fixed: `.wall` z-index 0 → content sections z-index 1 (all `background: transparent`) → cards and panels z-index 2 → applied objects (stickers, seals, rhinestones, sparkles) z-index 3, overlapping their host's edge on purpose → 蓝底白字 subtitle boxes z-index 4, sitting on top of imagery and ignoring section padding → LED strip and skip-link z-index 5.

---

## layout

**The wall is fixed; the content scrolls over it.** One `.wall { position: fixed; inset: 0; z-index: 0; overflow: hidden }` holds every landscape layer for the life of the page. Content sections are all `background: transparent`; only individual cards get opacity. This is the installation logic of the sincere layer — in a real room the mural wraps onto the adjacent wall and the sofa stands on top of it. A build betrays itself instantly by putting the landscape in a rounded card with whitespace around it.

The wall carries the panel seam real wallpaper has: `repeating-linear-gradient(90deg, transparent 0 1023px, rgba(0,0,0,.10) 1023px 1024px)` plus a `rgba(255,255,255,.06)` lift on the next pixel. Micro-parallax on scroll via one rAF-throttled listener writing `--sy`, with `--depth` of `.02` sky / `.06` mountains / `.12` lake / `.20` foreground lotus, and a `scale(1) → scale(1.015)` breathe over 18s. The amounts are deliberately tiny: this must never read as a parallax hero, only as the wall being slightly closer than the furniture.

**Rhythm.** A single 1024px content column, centered, with no max-width on anything full-bleed. Sections stack with `sectionGap: 0` and are separated *only* by a 48px LED marquee strip — so the page reads as one continuous wall interrupted by shop signage, never as a stack of cards on a background. Vertical rhythm inside a section is `8px`-based; the recurring unit is `card (40px padding) → 24px → blue subtitle box`, and the subtitle box is *outside and below* the thing it translates, never inside it.

**Grid.** Two grids only. (1) `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))` with `gap: 24px` for card rows — how-to-buy steps, family links, medal stickers. (2) The plaque wall is a horizontal `overflow-x: auto` scroller with `scroll-snap-type: x mandatory`, because a 匾额 wall is something you walk along. The almanac is its own two-column 宜/忌 block that never reflows below 1fr 1fr — a tear-off calendar page has two columns or it is not one.

**Density test, run per viewport:** can you point at 30cm² with nothing happening in it? If yes, the composition has failed. Two corollaries: at least one saturated red/green adjacency must be visible at every scroll position, and every full-bleed composition must contain `#12B33F`. A page without saturated green has quietly become tasteful.

**Never size a container to its text.** No fixed `width`/`height` on anything holding copy — `min-height`, padding, intrinsic sizing. Buttons get `min-width` and padding, never `width`. `土狗` is two glyphs; `DIRT DOG COIN` is thirteen, and both must fit the same box.

---

## imagery

**There is not one photograph, one raster file, or one external image request on this page.** Every visual is CSS gradients, inline SVG, or canvas. That is a delivery constraint and it is also thematically correct: the footer says so out loud, and it is the one boast the page is allowed.

- **Landscape** is one inline SVG per layer inside `.wall`: four ridge `<path>`s on the 四岭 ramp with a white ridge-light stroke on the sunward side; the sun as a hard-stop `radial-gradient` disc (`#FFF6C0 0 6% / #FFD400 6% 34% / #FF8A00 34% 62% / #FF4C00 62% 100%`) — hard stops only, because flatness is the printed-poster tell; 4–6 waterfalls as clipped `repeating-linear-gradient` at `steps(6)` on desynchronised durations; the lake as the 镜湖 ramp with a flipped, masked, blurred clone of the ridges for reflection.
- **Living things** are SVG symbols instantiated with `<use>`: nine koi on an `offset-path`, three cranes at scale `.5/.75/1` (depth from parallax speed, never from blur or opacity), lotus built from one petal path rotated 8×22.5° plus an inner ring at `scale(.62) rotate(11.25deg)`, and 大黄 the 中华田园犬.
- **大黄 has four required breed markers.** All four or it reads as a generic cartoon dog: `#D69A3C` coat with `#F0C274` belly and `#8A5A1E` shading; pointed muzzle and flat forehead; small semi-erect ears whose top third folds *forward*; and the identifying 金钱尾 curled up over the back. Square proportion, body length ≈ shoulder height. He is proud, well-fed, chest out, grinning, in a `#E60012` collar with a gold chain and an 元宝 in his mouth. **Not a Shiba.**
- **Degradation layer.** JPEG chroma noise (`feTurbulence` desaturated to `slope .09`, `mix-blend-mode: overlay`, opacity `.55`), an 8×8 block grid, and chroma bleed on the big gold headline. These images have been forwarded through WeChat a hundred times and the artifacts are evidence of circulation and affection. **But degradation sits on DECORATION only, never on copy.** A page that is hard to read has crossed from celebration into mockery.
- **Hand-applied objects need jitter.** Rhinestones along a perimeter at 18px±4px spacing with ±2px position, ±8deg rotation, ±10% scale, randomised animation delay. Never a `background-repeat` — even spacing is the tell that a machine did it, and the pride of the source material is that a person did it.
- **The canvas card is 1080×1350** (portrait 4:5, the ratio these actually get sent at), rendered by one pure `(ctx, model) => void` function in logical coordinates with a seeded PRNG so the exported PNG is byte-identical to the preview the user approved. `devicePixelRatio` never reaches the export; export scale is fixed and clamped to `sqrt(16e6 / (W*H))` for iOS.

---

## components

| name | role | description |
|---|---|---|
| **墙 Wall** | Structure | Fixed full-viewport landscape stack + panel seam + micro-parallax + breathe. Everything else is glued to it. Owns z-index 0 and is never given a margin, a radius, or a container. |
| **红日 Sun** | Wall layer | Flat hard-banded disc at `left:62% top:9%`, `22vmin`, with a `repeating-conic-gradient` ray fan masked to an annulus, spinning at 90s linear. Reflected in the lake as a squashed blurred copy at opacity `.5`. |
| **层叠青山 Ridges** | Wall layer | Four SVG ridge paths on the 四岭 ramp, `saturate(1.55) contrast(1.12)`, each with a white sunward ridge-light. |
| **瀑布 Waterfall** | Wall layer | 4–6 clipped banded falls, `steps(6)` at .40–.62s so they never phase-lock, each with a stepped splash pool. |
| **镜湖 Lake** | Wall layer | Lake ramp + masked inverted ridge reflection + three rows of drifting surface glints. |
| **锦鲤 Koi** | Wall layer / **the page's one real interaction** | Nine koi on an `offset-path`, tails at `steps(3)`. Clicking one fires 转发这条锦鲤: scale 1.6× over 240ms `steps(4)`, gold halo burst, and a generated 早安 blessing card. The koi meme *is* an image you forward hoping to get rich; so is the coin. The site says that with motion, not with a paragraph. |
| **荷花 Lotus** | Wall layer | Two foreground clusters at bottom-left and bottom-right, `translateY(18%)` so they are genuinely cropped by the viewport. The crop is what sells "the wall goes past you". |
| **仙鹤 Crane** | Wall layer | Three cranes crossing the sky, wings at `steps(3)`, outer wrapper translating 40–70s linear, inner wrapper bobbing 4s. |
| **匾额 Plaque** | Content | Gold `background-clip: text` calligraphy on red, gilded frame, seal bottom-right, rhinestones at the corners. Traditional characters. Flips on hover/tap to reveal its crypto pun. Ten of them in a snap-scrolling wall. |
| **印章 Seal** | Marker | 2×2 `direction: rtl` grid of Ma Shan Zheng characters on `#C8102E`, eroded by `feTurbulence` + `feDisplacementMap`, rotated a random −6…6deg, overlapping whatever it validates. **Two per page maximum** — a seal that appears everywhere stops meaning "someone vouched for this". |
| **蓝底白字 Subtitle box** | Content | `display: inline`, `box-decoration-break: clone`, `#0000FF`, Arial 700 white, `border-radius: 0`, no shadow, tight padding. Wrapped lines must produce two separate hard rectangles with a gap. Sits below and outside the thing it translates. **The page's entire English typographic system.** |
| **早安卡 Blessing card** | Content — **the universal unit** | Fixed anatomy, top to bottom: 4:3 or 1:1 → gilded or scalloped border → landscape or leopard fill (never flat white) → one huge arched WordArt line of 2–6 characters → one secondary line at ~38% with a white halo → a lotus cluster anchored bottom-left at ~28% width → 8–14 sparkles scattered over everything including the text → a small 星期一 chip top-right. **No body paragraph inside a card may exceed 24 Chinese characters.** Tokenomics, roadmap and how-to-buy are all instances of this component — that is the structural idea that makes the page cohere. |
| **荣誉证书 Certificate** | Content | Tokenomics as a 荣誉证书: gilded rococo border, guilloche ground, serial number, red circular seal overlapping the text at an angle, a holographic corner sticker, and the supply "chart" as a red-and-gold paper-cut fan. **Not a pie chart. There is no chart on this page.** |
| **老黄历 Almanac** | Content — replaces the roadmap | A tear-off day page: 值神/冲/煞 header, red 宜 column left, black 忌 column right, 彭祖百忌 footer. Entries shuffle from the bank on load, animating in like a stamp landing, and the page admits the shuffle is random — which is the honest point. **Never hardcode a fake 农历 date**; compute it or leave it stylized (吉日 / 岁次丙午). |
| **红包 Step card** | Content | The four how-to-buy steps as red envelopes with gold foil seals, 出入平安 hung above the row and 生意兴隆 below, as a door couplet. Step five (拿住) is set apart and quieter. |
| **LED 走字屏 Ticker** | Chrome | `#FF2D1A` on `#0A0A0A`, `.22em` tracking, dot-matrix mask via a 3px radial-gradient mask, duplicated track, `steps(240,end)` so it advances in pixel columns like a real board. **All live numbers on the page live here** — price, market cap, holders, contract, supply counter. Doubles as the only section divider. |
| **QQ 面板 / 凸起按钮** | Chrome | Two-tone bevel borders, `#D4D0C8` face, `transition: none`, `:active` flips the bevel and translates 1px. Home for long copy (anything over 24 characters) and for functional furniture. |
| **计数器 Visitor counter** | Chrome | Seven `#141414` spans with `#FF8A00` monospace digits, rolling on a `steps(10)` vertical strip, captioned 本站已运行 N 天. The one place a number is allowed to be boring, because in 2006 it was. |
| **大黄 Mascot** | Identity | The 中华田园犬. Idle loop: tail `steps(2)` at .38s, blink `steps(1)` on a 4s cycle with random offset, chest breathe 2.4s. Hover = one hard 120ms `steps(2)` hop with no return easing and one sparkle at the collar. |
| **奖状贴纸 Medal sticker** | Decoration / stats | 24-point scalloped gold foil, `#E60012` inner disc, two rotated ribbons, ZCOOL KuaiLe text. Rotated a random −9…9deg and overlapping its host's edge — stickers are applied, not laid out. **Folk text only** (优秀 / 第一名 / 大吉大利). Never "AUDITED BY" or a fake endorsement. |
| **钻 Rhinestone rail** | Decoration | JS-placed gems along an element's perimeter with jitter, each with a mandatory blurred white glue halo and a `steps(4)` sparkle on a random delay. |
| **闪 Sparkle field** | Decoration | 40–70 four-point concave stars (never five-point, never a dot, never a lens flare), `steps(8)` twinkle, `mix-blend-mode: screen`, JS-randomised position/scale/delay, concentrated on gold text, the sun and the water. |
| **KTV 灯 Beam layer** | Decoration | Exactly one section (the 家人们 block). Rotating conic wedges, `mix-blend-mode: screen`, opacity `.34`, `blur(7px)`, plus a drifting disco speckle. The section gets `isolation: isolate; overflow: hidden` so the blend cannot leak. |
| **豹纹 Leopard ground** | Decoration | Rosettes as 2–4 dark crescents around a lighter tan core, two offset layers to break the grid. Behind a 早安 card only — never behind body copy. |
| **貔貅 Pixiu** | Illustration / argument | The mythical beast with a mouth and no anus: a genuine wealth charm in every jade shop *and* the Chinese name for a honeypot contract. The same statue is a blessing on a shelf and a rug-pull on a chain. This single object carries the page's whole thesis better than any sentence; draw it in the honest section's approach. |
| **百科卡 Baike card** | Content — the reveal | A Baidu Baike entry dropped into the glitter: grey-blue header bar, system serif body, a non-functional 编辑/讨论/收藏 toolbar, deliberately plain against everything around it, with the quoted line in a light-yellow highlight. It should look like a *document*, not a poster. |
| **老实话 Honest block** | Content — the escape hatch | White full-bleed, system serif, black text, no gold, no sparkle, no seal, no blue box, English in the same serif as the Chinese. One greyscale 童叟无欺 plaque is the only decoration. Permanent nav link. |
| **早安生成器 Card generator** | Interaction | Canvas 1080×1350. Controls in the WeChat-sticker register: 字大一点 / 金亮一点 / 花多一点 / 换个山. Renders on debounced input, never on a permanent rAF loop. Web Share first on mobile, `<a download>` second, 「长按保存图片」 third — the long-press fallback is how these are actually saved and forwarded, so it is the most authentic path, not a compromise. |
| **元宝雨 Coin rain** | Feedback | 24–40 元宝 and 红包 falling on CTA press, `rotateY` at `steps(8)` so each ingot flips in visible facets, plus a 恭喜发财 WordArt burst at `steps(5)`. Nodes cleaned up on `animationend`. Festive, not SaaS-celebratory: no confetti, no particles, no named easing curve. |
| **语言开关 Language switch** | Chrome | A small gold pill, top-right. A real `<button>` with `aria-pressed` and a visually-hidden `aria-live="polite"` announcement. **The only toggle on the page besides 安静模式.** Defaults to 中文. |
| **安静模式 Calm mode** | Accessibility | Strips the page to plain readable type. It is a real `prefers-contrast: more` implementation and a real reduced-motion affordance — the page insisting it can behave itself. It is *not* a "clean version" easter egg and must never be framed as one; the label is 安静模式 / CALM MODE, never "tasteful version". |

---

## dos

| rule | reason |
|---|---|
| Write the Chinese first, as real blessings and real crypto slang, and translate outward into the blue box. | The brief is explicit that Chinese is primary. If the Chinese reads like machine translation, everything else you built is decoration on a lie — and it is the single fastest way to read as appropriation on a page about Chinese aesthetics. |
| Put at least one saturated red/green adjacency in every viewport, touching, with a 1–2px `#FFFFFF` or `#FFD400` keyline at the seam. | 红配绿，赛狗屁 exists as a proverb precisely because the vernacular does it constantly and refined taste forbids it. Doing it on purpose, well, is the clearest single signal that the page understands the aesthetic rather than sampling it. The keyline fixes simultaneous-contrast vibration; desaturating either color does not. |
| Run every decorative animation on `steps()` at an effective 8–12fps. | A real 早安 GIF is 8–12 frames on a hard cadence. 60fps eased motion is the unmistakable signature of a modern Western site wearing the aesthetic as a costume. Only three things get smooth interpolation: the marquee scroll, the sun's rays, and the landscape parallax. |
| Make every content block an instance of 早安卡 or QQ 面板. | If you could delete the Chinese ornament and be left with a standard 2024 memecoin landing page, you built a skin. Tokenomics is a certificate. The roadmap is an almanac. How-to-buy is four red envelopes. |
| Give every hand-applied element jitter: ±2px position, ±8deg rotation, ±10% scale, randomised delay. | Perfect spacing announces that a machine did it. The pride of the source material is that a person did it, one rhinestone at a time. |
| Animate only `transform` and `opacity`; render gradients once and rotate the element. | They are the only properties that stay off the main thread. An animated conic or radial gradient repaints the whole layer every frame, and twenty simultaneous decorative layers will visibly stutter on a mid-range Android — which is exactly the device this page is for. |
| Carry all functional information — CTA, contract address, disclaimers, FAQ — in the 蓝底白字 boxes, and mark decorative headings `aria-hidden="true"` with `pointer-events: none`. | Gold-on-red and rainbow WordArt cannot pass AA and should not be forced to. White on `#0000FF` measures ~8.6:1. The accessible layer and the authentic layer are the same component here; that is the design's best structural luck. |
| Use a double focus ring that survives any ground: `outline: 3px solid #fff; outline-offset: 3px; box-shadow: 0 0 0 6px #000`. | A default outline is invisible over a hyper-saturated waterfall. Also keep the ~40 decorative spans out of the tab order. |
| Pause offscreen decoration with `IntersectionObserver` and on `document.hidden`. | Offscreen sparkle burns battery for nothing, and the canvas preview must render on debounced input rather than a permanent rAF loop — 200 sparkles at 60fps on a 1080×1350 canvas will cook a phone. |
| Ship the Chinese copy as real HTML in the document; only the English path repaints text. | Zero flash for the majority case, full function with JS disabled, real content for crawlers, and — measured — it guarantees English strings stay inert JS and never trigger a CJK subset fetch. |
| Use traditional characters on plaques, seals and the certificate; Simplified everywhere else. Wrap the traditional runs `lang="zh-Hant"`. | That is how real plaques work — the reel's own plaque is 富水長流, not 富水长流. A Chinese reader registers it as the page knowing what it is doing. The `lang` wrap stops a `zh-Hans` root pulling Hans glyph variants out of a CJK-unified font. |
| `await document.fonts.load(spec, text)` with the actual text before every canvas render. | `document.fonts.ready` resolves *immediately* for a font used only on canvas, because it is never referenced in layout and the browser never starts fetching it. The PNG then ships in a system fallback and nobody notices until a user complains. |
| Make the price/holder/supply numbers live in the LED strip, and make red = up, green = down. | In Chinese markets 红 means the price went UP. Any candle or 涨/跌 indicator using Western colors will be read backwards by the primary audience, and the 大展宏图 → 大展红图 pun depends on the reversal. |
| Give `#honest` a permanent nav link and hold the escape hatch absolutely. | It is the only section where the bit drops, and it must drop *completely* — no gold, no sparkle, no blue box, English in the same serif as the Chinese, because the subtitle joke ends there too. It is not something a reader should have to scroll to find. |

---

## donts

| rule | reason |
|---|---|
| **Don't build vaporwave and call it 土酷.** No black page ground, no cyan-and-magenta on purple, no pink-to-purple sunset with a wireframe horizon, no marble bust, no palm trees, no Win95 chrome, no VHS scanlines, no Latin spaced out as "A E S T H E T I C". | Vaporwave is nocturnal, melancholic and distanced — it mourns a dead consumer future. 土酷 is broad daylight, warm, and sincerely wishing you a good morning. If the page could be called "dreamy" or "nostalgic for the mall", it is the wrong aesthetic. A black background alone is nearly diagnostic. |
| **Don't use Chinese characters as texture.** No glyphs set because they look good, no character repeated as a pattern fill, no mirroring or rotating past 90°, no vertical stretching to fit a layout, no accidental Simplified/Traditional mixing inside one phrase. | Every glyph must be real, correct, and mean what a Chinese reader expects. This is the single most reliable marker separating participation from appropriation, and Chinese audiences spot it in under a second. |
| **Don't make the grandmother the punchline.** The words "tacky", "cringe", "so bad it's good", "gloriously ugly", "cursed", "ironic", "my aunt's WeChat" must never appear in the interface in either language. | The English on this page is a plain translation of the Chinese, nothing more. The sincere layer — the elder sending a blessing at 6am — is the thing being honored, not the material being mined. |
| **Don't build in fake incompetence.** No deliberate misalignment, no intentionally broken layout, no ironic Comic Sans, no artificially bad Photoshop. | This is the Balenciaga Qixi failure mode exactly: deliberately degraded execution produced at luxury cost, so the crudeness reads as a rich outsider performing poor taste. 57% of a 13,000-person Weibo poll called it unacceptable. Real 土酷 objects are made with care using limited tools. The crudeness comes from the vocabulary; the execution is careful. |
| **Don't reach for refined ink-wash minimalism.** No misty grey 水墨, no single plum branch on cream rice paper, no generous negative space, no "zen". | That is literati taste — precisely the register that historically despises 土酷 as peasant vulgarity. Choosing it means you researched "Chinese aesthetic" and stopped at the museum gift shop. |
| **Don't ship Chinatown-pack orientalism.** No paper lanterns, no fortune cookies (an American invention), no bamboo, no yin-yang, no generic dragons, and above all **no wonton/chop-suey Latin display faces**. | Faking Latin letters to look like brush strokes is racist-typography 101 and instantly disqualifies the page. This aesthetic has its own real typography: ZCOOL faces, Ma Shan Zheng, 90s 艺术字, LED shopfront type. |
| **Don't leak Japanese references.** No katakana, torii, cherry blossoms, ukiyo-e waves, seigaiha, kawaii pastels, and **no Shiba Inu**. | The memecoin genre pushes hard toward a Shiba because DOGE is one. This coin's dog is a 中华田园犬 — a yellow Chinese village mongrel with a curled 金钱尾 and semi-erect ears. Drawing a Shiba is drawing a Japanese dog for a coin whose entire name is about being the local one. |
| **Don't add a soft shadow, a `border-radius: 8px`, a glassmorphic card, a gradient-border button, or a neon candlestick chart.** | Each one is a 2024 default, and each one is individually enough to reveal that the Chinese ornament is a skin over a template. There is no chart on this page; live numbers live in the LED strip. |
| **Don't ship any UI that winks.** No cringe meter, no tacky-level slider, no ironic/tasteful toggle, no hidden "clean version", no "we know this is ugly" disclaimer. | One such control converts the whole page from celebration into mockery, because it tells the visitor the design is a costume you can take off. The only toggles are 中文/EN and 安静模式, and neither is framed as an escape from bad taste. |
| **Don't use a dull, tasteful red** — no brick, no oxblood, no `#8B0000`, no desaturated Pantone "Chinese red" — and don't separate red from green with a neutral buffer. | The vernacular red is hot and loud. `#C1000F` is the absolute floor and only as a gradient's dark stop. Buffering red from green because the adjacency vibrates is the exact instinct the 红配绿 rule exists to override. |
| **Don't practice restraint.** One gold gradient on a dark ground; one motif per section; a considered ornament-to-whitespace ratio. | Maximalism is the medium, not a style applied on top of it. If a design reviewer would call this page "clean", "refined", "elevated" or "premium", it has failed. |
| **Don't use smooth expensive motion.** No spring physics, no `cubic-bezier(.34,1.56,.64,1)`, no 200ms ease-out fades, no scroll-linked reveals, no staggered fade-ups, no parallax hero. | Every polished motion default drags the page toward the Silicon Valley register the aesthetic is defined against. Hovers cut hard with `transition: none`; where a transition is unavoidable it is `transform 90ms steps(3)`. |
| **Don't fake authority with the certificate stickers.** No "SEC APPROVED", no "AUDITED BY", no fake exchange endorsement. | It converts a warm folk reference into securities-adjacent deception, and it is the one place where the maximalism can do real harm. Keep the stickers unambiguously decorative (优秀 / 第一名 / 大吉大利) and keep every real claim in plain, checkable text. |
| **Don't treat 土狗 as an insult.** No mangy, sad, cowering, flea-bitten or roadkill dog. Never translate 土狗 into English as "mutt", "trash dog" or "shitcoin" in a way that lands as contempt. | In crypto slang 土狗币 is the ordinary Chinese word for a memecoin, used by the people buying them, about themselves. A pitiful dog flips the coin's name from self-recognition into a foreigner calling Chinese retail traders peasants. |
| **Don't let English lead.** No English headline with a Chinese subtitle, no Chinese as decorative accent above a Latin wordmark, no EN default. | Chinese is the original and must read as complete without the English. English is something appended to a finished thing. |
| **Don't sand off the blue box.** No rounded corners, no opacity, no shadow, no designer blue, no inherited Chinese font, no comfortable padded container. | Its ugliness against the landscape is not a bug you were asked to fix — it is the most specific single thing in the reference frame, and every instinct you have will try to soften it. Pure `#0000FF`, zero radius, Arial, tight padding, `box-decoration-break: clone`. |
| **Don't request a CJK weight range.** `Noto+Sans+SC:wght@400..900` is 810 KB where `wght@400` is 430 KB for identical text. | Verified by URL hash: single-weight resolves to a static instance, any multi-weight request resolves to a larger variable file. Take visual bold from ZCOOL KuaiLe instead. |
| **Don't merge the `&text=` stylesheet into the main one, and don't point the card generator at a subsetted face.** | `&text=` is a *request-level* parameter — it applies to every family in that URL, so merging would silently subset Noto Sans SC and ZCOOL KuaiLe to 8 characters and render most of the page as tofu. And the generator accepts arbitrary names, so a subsetted face renders tofu for any name outside the subset. |
| **Don't apply `word-break: keep-all` to Chinese.** | It prevents breaks *within* CJK runs; Chinese has no spaces, so the paragraph becomes one unbreakable token and blows out of the viewport. It is a Korean rule. Use `word-break: normal; line-break: strict`. |
| **Don't ship a placeholder contract address that looks real.** | Someone will send funds to it. Until the real address exists, the field says 合约地址待公布 / "contract address not published yet" and the copy button is disabled. |
| **Don't let `prefers-reduced-motion` strip the page to a grey document.** | That erases the aesthetic for exactly the users who did not ask for it to be erased. Stop translation and rotation; keep the sparkle and gold sheen at 3× duration with opacity-only oscillation. The page must still feel blessed. |

---

## Cultural contract

*This is the section most likely to be lost in a later session, so it is stated as a contract rather than as advice. It outranks every visual rule above. If holding a rule from this section costs a visual effect, the effect goes.*

**1. The aesthetic has two layers and both are sincere.** Layer one is small-town and older-generation taste: the hyper-saturated landscape pasted floor to ceiling, the WeChat 早安 sticker, the blinged-out good-morning blessing sent at 6am as a genuine blessing, KTV lighting. It is maximalist and decorative to signal **progress, success and joy** — not refinement. Layer two is the conscious ironic remake by post-90s/00s Chinese youth, and crucially that remake is **endearing** — a full embrace of the cringe, not distanced irony. It is a way to talk to your grandparents in a language they understand. **This project lands on the sincere side of that line. Celebration, not mockery.**

**2. 土酷 means "TOO cool", not "tacky cool".** The term was coined around 2016 by the artist working under the handle **「养鸭」**, in a video titled **《Too Cool To Be True》**. 土 (soil/rural/tacky) plus 酷 (cool), with the emphasis on the **TOO** — the *highest degree* of cool. It does not mean "so bad it's good". Credit 「养鸭」 and the film title on the page. **Do not invent hanzi for the personal name** — the brief gives "Li Zhiyuan" but 李志远 / 李智渊 / 李子远 are all plausible spellings and this page cannot ship a guessed name while elsewhere insisting on being factual. Ship only the verified handle until the characters are confirmed.

**3. The load-bearing fact.** Baidu Baike's entry for 土狗币 opens: 「土狗币，中文名亦作『MeMe币』」— *"tugou coin, also rendered in Chinese as MeMe coin."* The Chinese internet already finished translating "memecoin", and the translation is not a loanword: it is a mongrel village dog. Quote that line verbatim, with the guillemets, in the 百科 reveal. Source: `baike.baidu.com/item/土狗币/64278161`. The same entry supplies the honest section's two hard numbers: ~99% of these approach zero once attention fades (some survive ~17 days), and deployment costs on the order of 百元.

**4. The finance is the joke. The sincerity is not.** The page says this out loud, once, in the honest section: *"你姥姥发的那张早安图是真心的，我们这些也是。玩笑开的是金融，不是那份心意。"* Every blessing on this page is meant. Every financial claim is a joke about a category the coin belongs to.

**5. 韭菜 stays self-directed.** In Chinese it is overwhelmingly self-deprecating — 「我就是个老韭菜」— and becomes ugly the instant it is aimed at the reader. Every use in the copy is first-person or generic. The metaphor is also precise: chives regrow after cutting, which is why the market keeps cutting. The almanac entry 宜栽种韭菜 (plant chives, don't cut them) is built on that and is the gentlest joke in the set.

**6. The named antipatterns, held as hard rules.** Vaporwave-in-costume · Chinese characters as texture · the grandmother as punchline · the Balenciaga Qixi failure mode (fake incompetence at high production cost) · refined ink-wash literati minimalism · Chinatown-pack orientalism and wonton fonts · Japanese leakage and Shibas · the generic memecoin template under a Chinese skin · any UI that winks · dull tasteful red and red/green buffering · restraint of any kind · smooth expensive motion · machine-perfect placement of DIY elements · treating 土狗 as an insult · letting English lead · confusing the WordArt rainbow with the pride flag (it is a *vertical banded ROYGBIV ramp clipped inside letterforms*, never a horizontal six-stripe flag, never a smooth gradient mesh) · faking authority with certificate stickers · sanding off the blue box. Each is expanded with its reason in **donts** above.

**7. Copy hygiene, non-negotiable before launch.** Every Chinese string must be read by a native speaker. Every number on the certificate (supply, tax, renouncement, LP burn, no-insider claim) is a **placeholder** and must be replaced with what is actually true or deleted — a page whose honest section says 「请核验，别信我们」 cannot print an unverified fairness claim four sections earlier. 归零险 is **not** established slang and may only appear as an obviously-fake mock insurance certificate, never in a glossary the page presents as factual. Do not hardcode a fake 农历 date.

**8. Register.** Body copy is mainland-Simplified throughout. Plaques, seals and certificates are traditional, because that is how those objects are actually written. The English subtitle voice is lowercase-adjacent, short declaratives, no em-dashes, no rhetorical flourish, occasional flat over-literalness ("the animal is this dog. the dog is the coin."), and it is **allowed to fail**: 卖飞 and 踏空 have no compact English equivalent, and a subtitle box that stops and says so is more faithful to burned-in fansub English than a smooth translation would be.

---

## Motion contract

Recorded here because it is where the aesthetic actually lives, and because `steps()` is the first thing a later session will "clean up".

- **`steps()`, not `ease`, on every decorative animation.** Sparkle `steps(8)` · waterfall `steps(6)` · koi tail `steps(3)` · crane wings `steps(3)` · dog tail `steps(2)` · blink `steps(1)` · gold sheen `steps(12)` · coin flip `steps(8)` · marquee `steps(240,end)` · firework at 12fps drawn into canvas, not at rAF's full rate.
- **Exactly three things get smooth interpolation:** the marquee's translate, the sun's ray rotation, the landscape parallax and breathe. Plus the KTV beam spin, which is the one sanctioned fourth.
- **Interaction cuts hard.** `transition: none` on bevel buttons; `:active` flips the bevel and translates 1px. Where a transition is unavoidable: `transform 90ms steps(3)`.
- **The marquee needs a visible pause control** (WCAG 2.2.2 — any auto-scrolling content over 5 seconds). Put it in 安静模式 and as a small control on the strip itself. Implement with a duplicated track and `translate3d`, never `<marquee>`, never `background-position`.
- **Reduced motion keeps the blessing.** Stop all translation and rotation; keep the sparkle twinkle and gold sheen at 3× duration with opacity oscillating `.6 → 1` and no scale change. Pin the marquee to a static, fully-readable line. In JS, `matchMedia('(prefers-reduced-motion: reduce)').matches` makes the canvas draw one static frame.
- **`will-change` is not free.** Promote 3–5 genuinely-animating layers, not 50 decorative spans. Prefer one shared long-period keyframe with staggered `animation-delay` over dozens of bespoke animations.

---

## Font contract

Two stylesheet requests. They cannot be merged, because `&text=` is request-level.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- body + display: full subsets, ONE weight each -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400&family=ZCOOL+KuaiLe&display=swap">

<!-- calligraphy: subset to exactly 富水長流早安土狗 = 3.5 KB. If you edit a plaque, edit this param. -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&text=%E5%AF%8C%E6%B0%B4%E9%95%B7%E6%B5%81%E6%97%A9%E5%AE%89%E5%9C%9F%E7%8B%97&display=swap">
```

Budget: ~730 KB of CJK on the Chinese view (430 Noto + 301 KuaiLe) + 3.5 KB calligraphy + **0 for English**. The biggest available win, to be taken **last, once copy is frozen**: subset ZCOOL KuaiLe with `&text=` containing the finalised heading characters and 301 KB becomes roughly 5 KB. Leave a source comment tying that param to the exact strings — if anyone edits a heading without updating it, those characters silently render in the fallback.

Always end every CJK stack explicitly (`"Noto Sans SC","PingFang SC","Hiragino Sans GB","Microsoft YaHei",sans-serif`). Test with no system CJK font installed: during the `display=swap` window a bare `sans-serif` fallback shows a screen of tofu.

**Emoji:** Noto Sans SC genuinely covers `U+273D–2744` and `U+1F330–1F357` — as flat monochrome outline glyphs. So `🌸` and `✿` render black when Noto SC wins the cascade. Draw every flower and sparkle as SVG or canvas, which the no-images constraint pushes you toward anyway.

---

## i18n contract

Single DOM, `data-i18n` keys, one dictionary object loaded from `content.json`. **Not duplicated DOM** — duplicated DOM risks paying the full CJK font cost for both languages (Chromium has historically prefetched subsets for hidden-but-rendered subtrees), leaks hidden translations into the accessibility tree, and cannot carry two `aria-label`s or two `placeholder`s on one input anyway, so you end up building the dictionary regardless.

- `data-i18n="key"` → `textContent`, **never `innerHTML`**. The card generator accepts user input; there must not be two paths where one is unsafe. An explicit `data-i18n-html` opt-in exists for author-controlled strings only and must stay countable on one hand.
- `data-i18n-attr="placeholder:card.name; aria-label:card.name"` for any attribute.
- Fallback chain is `en → zh → key`. **zh is the fallback, not en.**
- Boot order: `?lang=` query param → `localStorage` (wrapped in try/catch; it throws in private mode and in embedded webviews) → `navigator.languages` → **`zh` on ambiguity**.
- A 3-line inline `<head>` script sets `documentElement.lang` (`zh-Hans` / `en`, never `zh-CN`) and `dataset.lang` before first paint so CSS keyed off `html[data-lang]` is correct immediately. The full string swap runs on `DOMContentLoaded`, and because the served HTML is already Chinese, only the `en` path ever repaints text.
- Emit `<link rel="alternate" hreflang="zh-Hans">` and `hreflang="en"`, and update `document.title`, `meta[name=description]`, `og:title`, `og:description`, `og:locale` on switch.
