---
name: Palestine Post 2.0
description: Place-first Palestinian news set as counted-thread journalism, where every story is one stitch on a grid of places and hours.
colors:
  navy: "#023B56"
  navy-deep: "#01283B"
  ink: "#0B2230"
  teal: "#33B3C0"
  teal-ink: "#0A6773"
  teal-wash: "#D6EFF1"
  madder: "#B0172C"
  madder-wash: "#FBE5E7"
  gold: "#A87A22"
  gold-ink: "#7A5814"
  paper: "#FFFFFF"
  paper-raised: "#FFFFFF"
  mist: "#F1F6F7"
  rule: "#D5E0E3"
  ink-2: "#43555D"
  ink-3: "#56656C"
  seam: "#A9BCC2"
  seam-strong: "#7C9299"
  hole: "#C9D6DA"
  scrim: "rgb(11 34 48 / 0.55)"
  on-navy: "#D7E6EB"
  on-navy-muted: "#A9C6D0"
  on-navy-teal: "#9FD8DE"
typography:
  display:
    fontFamily: "Noto Kufi Arabic, Segoe UI, Tahoma, sans-serif"
    fontSize: "clamp(1.875rem, 1.35rem + 2.2vw, 3.25rem)"
    fontWeight: 800
    lineHeight: 1.32
    letterSpacing: "normal"
  headline:
    fontFamily: "Noto Kufi Arabic, Segoe UI, Tahoma, sans-serif"
    fontSize: "clamp(1.75rem, 1.3rem + 1.7vw, 2.75rem)"
    fontWeight: 800
    lineHeight: 1.32
    letterSpacing: "normal"
  title-lg:
    fontFamily: "Noto Kufi Arabic, Segoe UI, Tahoma, sans-serif"
    fontSize: "clamp(1.375rem, 1.15rem + 0.9vw, 1.875rem)"
    fontWeight: 800
    lineHeight: 1.42
    letterSpacing: "normal"
  section:
    fontFamily: "Noto Kufi Arabic, Segoe UI, Tahoma, sans-serif"
    fontSize: "clamp(1.25rem, 1.1rem + 0.6vw, 1.625rem)"
    fontWeight: 800
    lineHeight: 1.3
    letterSpacing: "normal"
  title:
    fontFamily: "Noto Kufi Arabic, Segoe UI, Tahoma, sans-serif"
    fontSize: "clamp(1.125rem, 1.03rem + 0.38vw, 1.375rem)"
    fontWeight: 800
    lineHeight: 1.45
    letterSpacing: "normal"
  title-list:
    fontFamily: "Noto Kufi Arabic, Segoe UI, Tahoma, sans-serif"
    fontSize: "clamp(1.125rem, 1.03rem + 0.38vw, 1.375rem)"
    fontWeight: 700
    lineHeight: 1.6
    letterSpacing: "normal"
  title-sm:
    fontFamily: "Noto Kufi Arabic, Segoe UI, Tahoma, sans-serif"
    fontSize: "clamp(1rem, 0.97rem + 0.15vw, 1.0625rem)"
    fontWeight: 700
    lineHeight: 1.6
    letterSpacing: "normal"
  opinion-title:
    fontFamily: "Noto Naskh Arabic, Noto Naskh, Times New Roman, serif"
    fontSize: "clamp(1.25rem, 1.12rem + 0.45vw, 1.5rem)"
    fontWeight: 700
    lineHeight: 1.6
    letterSpacing: "normal"
  standfirst:
    fontFamily: "Noto Naskh Arabic, Noto Naskh, Times New Roman, serif"
    fontSize: "clamp(1.125rem, 1.04rem + 0.35vw, 1.375rem)"
    fontWeight: 400
    lineHeight: 1.85
    letterSpacing: "normal"
  body:
    fontFamily: "Noto Naskh Arabic, Noto Naskh, Times New Roman, serif"
    fontSize: "clamp(1.125rem, 1.07rem + 0.22vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.95
    letterSpacing: "normal"
  ui:
    fontFamily: "Noto Kufi Arabic, Segoe UI, Tahoma, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "normal"
  meta:
    fontFamily: "Noto Kufi Arabic, Segoe UI, Tahoma, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "normal"
  micro:
    fontFamily: "Noto Kufi Arabic, Segoe UI, Tahoma, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "normal"
    fontFeature: "'tnum' 1, 'lnum' 1"
rounded:
  none: "0px"
  pill: "999px"
spacing:
  s1: "4px"
  s2: "8px"
  s3: "12px"
  s4: "16px"
  s5: "24px"
  s6: "32px"
  s7: "48px"
  s8: "64px"
  s9: "96px"
  gutter: "clamp(16px, 3.2vw, 40px)"
  col-gap: "clamp(20px, 2.4vw, 36px)"
  container: "1320px"
  measure: "45rem"
  stitch-len: "7px"
  stitch-gap: "5px"
  seam-w: "2px"
components:
  button-primary:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.paper-raised}"
    typography: "{typography.ui}"
    rounded: "{rounded.none}"
    padding: "0 24px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.navy-deep}"
  button-thread:
    backgroundColor: "transparent"
    textColor: "{colors.navy}"
    typography: "{typography.ui}"
    rounded: "{rounded.none}"
    padding: "0 24px"
    height: "44px"
  button-thread-hover:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.paper-raised}"
  button-teal:
    backgroundColor: "{colors.teal}"
    textColor: "{colors.navy}"
    typography: "{typography.ui}"
    rounded: "{rounded.none}"
    padding: "0 24px"
    height: "44px"
  button-gold:
    backgroundColor: "transparent"
    textColor: "{colors.gold-ink}"
    typography: "{typography.ui}"
    rounded: "{rounded.none}"
    padding: "0 24px"
    height: "44px"
  button-gold-hover:
    backgroundColor: "{colors.gold-ink}"
    textColor: "{colors.paper-raised}"
  button-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.teal-ink}"
    typography: "{typography.ui}"
    rounded: "{rounded.none}"
    padding: "0 12px"
    height: "44px"
  button-quiet-hover:
    backgroundColor: "{colors.mist}"
  icon-button:
    backgroundColor: "transparent"
    textColor: "{colors.navy}"
    rounded: "{rounded.none}"
    size: "44px"
  icon-button-hover:
    backgroundColor: "{colors.mist}"
  field:
    backgroundColor: "{colors.paper-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "12px 16px"
    height: "48px"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.ink-2}"
    typography: "{typography.meta}"
    rounded: "{rounded.none}"
    padding: "0 16px"
    height: "40px"
  chip-active:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.paper-raised}"
  tag:
    backgroundColor: "transparent"
    textColor: "{colors.ink-2}"
    typography: "{typography.meta}"
    rounded: "{rounded.none}"
    padding: "0 16px"
    height: "40px"
  section-head:
    textColor: "{colors.navy}"
    typography: "{typography.section}"
  lead-panel:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.navy}"
    typography: "{typography.display}"
    rounded: "{rounded.none}"
    padding: "24px 32px"
  breaking-bar:
    backgroundColor: "{colors.madder}"
    textColor: "#FFF6F4"
    height: "56px"
  dossier:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "24px"
  dossier-lead:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "32px"
  record:
    backgroundColor: "{colors.mist}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "16px"
  source-card:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.paper-raised}"
    rounded: "{rounded.none}"
    padding: "48px 32px"
  tool-panel:
    backgroundColor: "{colors.paper-raised}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "16px"
    width: "min(360px, calc(100vw - 32px))"
  toast:
    backgroundColor: "{colors.navy}"
    textColor: "{colors.paper-raised}"
    typography: "{typography.ui}"
    rounded: "{rounded.none}"
    padding: "12px 16px"
---

# Design System: Palestine Post 2.0

Scope: this file describes the redesign in `redesign/` only (built pages, `assets/css/tokens.css`, `base.css`, `components.css`, `pages.css`, `assets/js/pp.js`). The older static theme at the repository root is a different system and is not covered here.

## Overview

**Creative North Star: "The Counted Thread"**

Palestine Post 2.0 reads Palestinian tatreez as an information system, not as ornament. In counted cross-stitch every stitch sits on a grid of holes; here every story is one cross-stitch placed on a grid of places (ordered north to south) and hours. The same mark runs through the product: it is the node on the live thread of latest news, the cell in today's weave, the stitch inside a dateline, the bullet of a file, the current page of the pager, and, sewn row by row, the loader. The page is composed like a thobe: dense at the chest (navy strip, masthead, place rail, lead story beside the live thread, today's weave at the fold), open through the middle for reading (regions, reports, columns, audio and video), dense again at the hem (the footer, which indexes every place, section and tag).

The material is white paper with cool mist bands, inked in the logo's navy and threaded in the logo's teal. Two more threads have one job each: madder for what is happening now, gold for special files. Fabric is cut straight: no radius anywhere except the live pulse dot, no boxed cards, no shadow on anything that sits in the page. Stories are separated by running-stitch seams, days and the page close with a hem, and a panel that is sewn on carries an inset dashed seam instead of a border and a shadow. The logo's ط-stem, the silhouette of historic Palestine, is the signature: it stands on a navy baseline at the head of every section, marks the active section on the masthead, ends every article, closes the footer, and is what the loader sews. The masthead carries the logo's own baseline across the page like a kashida, and the sections and the search are written on that line.

The register is editorial, dense and fast, never a campaign poster: no flag palette, no map backgrounds, no decorative tatreez, no olive or Aqsa imagery, and no dark theme. Kufi builds the structure; Naskh carries the reading. Motion behaves like sewing rather than flourish: colours change in 140ms and panels drop 6px into place in 240ms on one ease-out curve; the only loops are the breaking label's pulse and the loader stitching the ط-stem from north to south, and both stop under reduced motion.

**Key Characteristics:**
- One cross-stitch stands for one story, hour cell or file entry.
- White paper and cool mist ground; navy ink and teal thread; madder only for now; gold only for special files.
- Noto Kufi Arabic for display, headlines and UI; Noto Naskh Arabic for reading.
- Straight cuts: radius 0, flat in-flow surfaces, shadows only on floating layers.
- Running-stitch seams between stories, hems to close days and the page, appliqué seams for sewn-on panels.
- The logo's ط-stem standing on a navy baseline as the section signature, the active marker and the end mark.
- Dense chest, open middle, dense hem; light interface only.

## Colors

A cool, low-chroma ground (OKLCH hue around 205 to 238) carrying one navy ink, one teal thread and two single-purpose accent threads.

### Primary
- **Logo Navy** (#023B56): the ink of the structure. The masthead strip and baseline, the logo (the wordmark is masked and painted navy), lead and article headlines, section titles and their 3px baseline, page names, primary buttons, active chips, toasts, the source card, the program head and the browser theme colour. 11.9:1 on paper.
- **Night Navy** (#01283B): the hover and pressed state of navy fills (primary button, the audio play button, the next-in-place block). Used consistently in three places but hard-coded, not yet in `tokens.css`.
- **Deep Ink** (#0B2230): body text, story titles in lists, field text, and the ground of the video stage. 16.3:1 on paper.

### Secondary
- **Logo Teal** (#33B3C0): the brand thread. The ط-stem signature, cross-stitches in the thread and the place rail, the read-progress bar, the search focus thread, the audio progress fill, the pager's current stitch, the opening quotation mark and the citizen-source action fill. 2.5:1 on paper, so never text there; 4.7:1 on navy, so it may carry text on navy, and navy text may sit on a teal fill.
- **Teal Ink** (#0A6773): every teal that must be read: place names in the thread, links, breadcrumbs, writer names, "more" links, quiet buttons, the text caret and form accent colour. 6.6:1 on paper, 6.0:1 on mist.
- **Teal Wash** (#D6EFF1): text selection, highlighted search hits, and the 3px focus halo around fields.

### Tertiary
- **Madder** (#B0172C): the now-thread. The breaking bar, live dots, the "جديد" (new since your last visit) markers and the knot that marks where the reader stopped, breaking stitches in the thread and the weave, the current hour of the weave, the notification count badge, and "يُعرض الآن" (now playing) in the video list. 7.0:1 on paper.
- **Madder Wash** (#FBE5E7): the background of the current-hour column in the home weave and the place weave.
- **File Gold** (#A87A22): the gold thread of special files, for seams and marks only: the dossier appliqué seam, the files section stem and rule, the file timeline thread, file bullets and the gold button border. 3.8:1 on paper, so never body text.
- **Gold Ink** (#7A5814): gold that must be read: file tags, file facts, gold button text and the "all files" link. 6.5:1 on paper.

### Neutral
- **Paper** (#FFFFFF): the page ground and in-flow panels (the lead headline panel, dossiers).
- **Paper Raised** (#FFFFFF): menus, fields, sheets, tool panels and text on navy. Identical to paper since the white-ground revision: floating layers are lifted by shadow, never by tone, and an in-flow "raised" panel reads as open page.
- **Mist** (#F1F6F7): the sunk bands and frames: the special-files band, the footer, file and place heads, the place weave, records and ledgers, image placeholders, hover fills, the audio controls bar, the scrollbar track.
- **Rule** (#D5E0E3): the solid hairline, only where a structural edge is required (under the place rail, above the article meta row, around audio controls and article tool buttons).
- **Ink 2** (#43555D): secondary text: standfirsts and deks, inactive navigation and chips, caption credits. 7.8:1.
- **Ink 3** (#56656C): metadata, archive stories, notes and placeholders; the faded thread. 6.0:1 on paper, 5.6:1 on mist.
- **Seam** (#A9BCC2): running-stitch dividers, column rules and hems (decorative, 2.0:1).
- **Seam Strong** (#7C9299): control borders (fields, chips, dashed tags), archive stitches, breadcrumb stitches and the scrollbar thumb. 3.3:1, the non-text minimum.
- **Hole** (#C9D6DA): the evenweave holes, one dot in every empty cell of a weave.
- **Scrim** (rgb(11 34 48 / 0.55)): the backdrop behind the menu drawer and the search sheet.

### On-navy tints
Hard-coded in the build, not yet in `tokens.css`; they recur, so they are recorded here.
- **Steel Mist** (#D7E6EB): running text on navy (strip tools, source card text). Near-duplicates #C9DCE3 and #DDEAEE also appear and should fold into it. 9.3:1 on navy.
- **Muted Steel** (#A9C6D0): secondary text on navy (the Hijri date, units, program fact labels). 6.6:1 on navy.
- **Pale Teal** (#9FD8DE): links and labels on navy (program breadcrumbs, weave tooltip times, the "next in place" label). 7.6:1 on navy.

### Named Rules
**The One Job Per Thread Rule.** Teal is the brand thread, madder is now, gold is a special file. A thread never does another thread's job, and none of them is decoration. The build currently paints the stitch inside every dateline madder, and the video play glyph too, which spends the now-thread on stories that are not breaking; that is drift, not precedent.

**The Teal-Ink Rule.** Logo teal is a thread, not a text colour on paper or mist. Readable teal is teal ink; logo teal carries text only on navy.

**The Cool Ground Rule.** Grounds are white paper and teal-tinted mist; there are no warm, beige or cream surfaces. One leftover warm rule between weave rows (rgb(185 177 161 / 0.35)) predates the white-ground revision and is drift.

## Typography

**Display Font:** Noto Kufi Arabic (with Segoe UI, Tahoma, sans-serif), variable 400 to 900
**Body Font:** Noto Naskh Arabic (with Noto Naskh, Times New Roman, serif), variable 400 to 700
**Label/Mono Font:** none; numbers use Kufi with tabular lining figures.

Both families load from Google Fonts with `display=swap`.

**Character:** A grid-built Kufi for the loom (display, headlines, navigation, UI and numbers) set against the calligraphic Naskh hand for reading. Weight does the work Arabic cannot do with tracking or capitals: 800 is the house headline weight and 900 is reserved for names (a place, a file, a program, a region, the breaking label).

### Hierarchy
- **Display** (800, 30 to 52px fluid, 1.32): the lead story headline only, navy, balanced; capped at 3rem inside the lead panel.
- **Headline** (800, 28 to 44px fluid, 1.32): the article title, navy, balanced, at most 22em wide.
- **Page name** (900, fluid up to 4rem for programs, 4.75rem for files and 7.5rem for places, 1.1 to 1.25): a place, file or program name heading its own page. Region titles (28 to 40px) and dossier titles (28 to 42px) use the same 900 weight. Navy, or white on the navy program head.
- **Title Large** (800, 22 to 30px fluid, 1.42): important stories with images, the first story of a listing, feature reports, article subheads.
- **Section** (800, 20 to 26px fluid, 1.3): section heads and the thread title.
- **Title** (800, 18 to 22px fluid, 1.45 to 1.5): titles that head a block or a promoted story (secondary lead stories, region leads, related stories, episode, video and encyclopedia titles), navy.
- **Title List** (700, 18 to 22px fluid, 1.6): story titles inside day lists and search results, ink.
- **Title Small** (600 to 700, 16 to 17px, 1.6): compact stories, thread items (600), lead related links, file items, ink.
- **Opinion title** (Naskh 700, 20 to 24px fluid, 1.6): opinion headlines, navy. Pull quotes use Naskh 700 at 22 to 30px; quotes use Naskh 500 at 19 to 22px.
- **Standfirst** (Naskh 400, 18 to 22px fluid, 1.8 to 1.85): deks under lead, article and file titles, file descriptions, the source text; ink 2.
- **Body** (Naskh 400, 18 to 20px fluid, 1.95, measure 45rem, about 70 Arabic characters): the article text. The first line of the first paragraph is set at 600; paragraphs are spaced 1.05em. Readers can step the size through s, m, l and xl (17px, default, 22px, 25px at 1.9), remembered per browser.
- **UI** (Kufi 700, 15px, 1.5): buttons, navigation and controls; running UI copy at 400 to 600.
- **Meta** (Kufi 500, 14px, 1.5): bylines, captions, counts, notes and meta rows; ink 3. The smallest size for Arabic words.
- **Micro** (Kufi 600, 12px, 1.5, tabular lining figures): digits only: weave hours, counts, badges.

Headlines use `text-wrap: balance`; deks, opinion titles and quotes use `text-wrap: pretty`.

### Named Rules
**The Two Hands Rule.** Kufi builds: news headlines, structure, UI and numbers. Naskh speaks: the article body, standfirsts, deks, records, quotes and the footer's about text. A headline set in Naskh means opinion or a quotation, never news.

**The No-Tracking Rule.** Letter-spacing stays normal everywhere, inputs included, because Arabic is connected script. Hierarchy comes from size and weight (500 to 900), never from tracking or case.

**The Counted Digits Rule.** Times and counts use Western digits (Intl locales with `-u-nu-latn`) set tabular and lining on every `time` and `.num`. The 12px micro size is for digits only. Drift: several Arabic labels sit at 12px (writer bios, the knot label, filter notes, tool panel subtitles) and the "جديد" marker at 10.5px.

## Layout

The page is a 1320px container with fluid side gutters (16 to 40px) over a 12-column grid. The column gap (20 to 36px, fixed at 20px below 768px) is where the stitched column rules run. Every grid child gets `min-width: 0`. Space is counted in 4px stitches: 4, 8, 12, 16, 24, 32, 48, 64, 96. Bands breathe with 48px block padding and are separated by seams and changes of ground, not by boxes; the footer starts 96px below the last band.

**Home.** The chest: a 40px navy strip (Gregorian and Hijri date, Jerusalem clock, weather, currencies, latest-news bell, the "send news" action), an 88px main bar with the logo and its baseline, a 44px place rail, the breaking bar when flagged, then the front grid: the lead (8fr) with its headline panel sewn over the photo's lower corner, the live thread (4fr) beside it, two secondary stories under the lead. Today's weave sits at the fold. The middle: regions in three columns, special files on a mist band (8 and 4), reports (7 and 5), four opinion columns, a media band (audio 6, video 6), three quotes, the source call with follow links (7 and 5), three desk lists. The hem: the footer on mist (4, 3, 2, 3).

**Reading pages.** The article is one Naskh column at 45rem beside a 320px rail that sticks 112px from the top, 64px apart. The story head stacks breadcrumbs, headline, dek and a meta row (byline, dateline, type size and share tools) opened by a 1px rule; the figure is capped at 72vh. Listings (place, section, file, search) share one grammar: filters and in-section search above, stories grouped by day under a dated hem, a 320px sticky rail, "load more" and a counted pager, and a list or grid toggle.

**Masthead behaviour.** The strip scrolls away; the main bar sticks and gains the bar shadow after 40px; the place rail tucks under it while reading down past 320px and returns on scroll up or when anything in the masthead takes focus.

**Responsive.** Max-width queries at 1279, 1023, 767 and 380px (and one min-width at 1400px that aligns the footer stem). Each band is re-composed, not shrunk.
- 1279px and below: optional sections move into the "المزيد" menu; opinion goes two-up.
- 1023px and below: the masthead collapses to the logo plus 44px bell, search and menu icons, with a dialog drawer; the front stacks lead, thread, more; the weave table becomes a list of places with 12-hour stitch strips; regions go two-up; rails drop under the content in two columns.
- 767px and below: the thread shows 8 stories and opens the rest on request; opinion and quotes become swipe rows (82% columns, scroll snap); the lead photo bleeds edge to edge at 4:3 with the panel overlapping it by 40px; vertical column rules turn into horizontal seams.
- 380px and below: the logo drops to 36px.

**Direction.** RTL throughout with logical properties (`inline-start`, `block-end`). Arrows that mean "forward" are flipped. Media timelines stay LTR (the audio player is `dir="ltr"`); social handles are LTR-isolated.

## Elevation & Depth

Flat by default. Everything that sits in the page is flat and separated by tone (paper, mist and navy bands) and by stitches. Depth exists only for layers that float above the page. Overlap does the rest of the layering without any shadow: the lead's headline panel sits over the photo's lower corner with a 4px navy top edge.

### Shadow Vocabulary
- **Float** (`box-shadow: 0 18px 40px -18px rgb(0 0 0 / 0.28), 0 2px 6px rgb(0 0 0 / 0.08)`): dropdown panels (weather, currencies, notifications, the "more" menu), each opened by a 3px teal top edge.
- **Bar** (`box-shadow: 0 10px 22px -16px rgb(0 0 0 / 0.35)`): the masthead's main bar once it is stuck.

Box-shadow is also used as a stroke, never as depth: the 3px teal inset underline of the current place, the 4px paper knockout ring around file timeline stitches, and the 3px teal-wash focus halo of fields.

### Named Rules
**The Float-Only Shadow Rule.** A shadow means the layer floats (a dropdown, the stuck bar). Anything in the page's flow is flat; separation comes from mist, navy or a seam.

## Shapes

Fabric is cut straight. Radius is 0 on everything: buttons, fields, chips, panels, images, the audio player's controls, menus and tooltips. The 8px live dot is the only round element.

Lines speak in two voices. **Solid strokes are structure:** the 3px navy baseline under section heads and search tabs, the 4px navy edge on the lead panel and the footer, the 2px navy rule under rail block titles, and 1px rule hairlines for structural edges only. **Stitches are relationship:** a running-stitch seam (7px stitch, 5px gap, 2px, seam colour) between stories and as vertical column rules; a lighter 6px stitch with 4px gaps at 1.5px between rows inside panels and lists (currencies, notifications, ledger rows, episode rows, file items); and the hem, two parallel running stitches offset by half a stitch (8px tall), to close a day or the page.

**Appliqué.** A panel that is sewn on carries an inset dashed seam instead of a border: 2px gold at 8px inset on a dossier, 1.5px gold on the file rail block, teal at 60% inside the navy source card, white at 55% inside the stitched button, white at 75% over a file cover.

**Marks.** Two masks painted with `currentColor`, so they take any thread: the cross-stitch `.x` (two diagonal strokes, the under-stitch at 72% opacity) and the ط-stem `.stem` (a 35 by 75 silhouette). A counted stitch (teal, madder when breaking, gold in files) stands for one story, hour or file entry; a small muted stitch (7px, seam strong) separates levels in breadcrumbs and place lists.

**Images.** Straight-cut frames on a mist placeholder at fixed ratios (3:2, 4:3, 16:9, 1:1, 4:5), true colour, no gradient scrims. Anything placed on a photo sits on its own solid patch: the lead panel, the video play label, the episode number.

### Named Rules
**The Straight Cut Rule.** Border radius is 0; only the live pulse dot is round.

**The Seam, Not Box Rule.** Stories are never boxed; they are separated by running stitches. A panel exists only as a sewn appliqué (inset dashed seam) or as a full navy or mist band.

## Components

### Buttons
Straight-cut, 44px tall, Kufi 700 at 15px, 24px side padding, a 2px border slot; colours change in 140ms and a press nudges 1px down. Disabled buttons drop to 45% opacity.
- **Primary** (`.btn--primary`): navy fill, white text; hover Night Navy. The stitched variant (`.btn--stitched`) adds a white dashed seam inset 4px; it appears once, on search.
- **Thread** (`.btn--thread`): transparent with a 2px navy border and navy text; hover fills navy. On navy, `.btn--thread-light` uses a white 60% border and fills white with navy text on hover.
- **Teal** (`.btn--teal`): teal fill with navy text, the citizen-source action. The strip's "أرسل خبرًا" link (`.masthead__send`) uses the same pairing at 30px; both lighten on hover.
- **Gold** (`.btn--gold`): gold border and gold-ink text, for special files only; hover fills gold ink.
- **Quiet** (`.btn--quiet`): teal-ink text, 12px side padding, mist on hover.
- **Icon buttons** (`.icon-btn`, `.tool-btn`): 44px squares with navy icons (20px, 1.75 stroke). Masthead icon buttons hover to mist; article tool buttons carry a 1.5px rule border and fill navy on hover.
- **More link** (`.more-link`): teal-ink 700 text with an arrow; a dashed underline appears on hover. Gold-ink variant for files.

### Chips and Tags
- **Chip** (`.chip`, filters): 40px, 1.5px seam-strong border, ink 2 at 600 and 14px; hover turns border and text navy; pressed or current fills navy with white text; counts sit at 75% opacity. On the navy program head the active chip is teal with navy text.
- **Tag** (`.tag`, footer tags): a 1.5px dashed seam-strong border, like basting; on hover the stitch pulls tight into a solid navy border with navy text.
- **File tag** (`.file-tag`): gold-ink 700 at 14px, led by a gold cross-stitch; it sits in a story's meta row to say the story belongs to a special file.

### Panels (no cards)
- **Bands:** mist for files, the footer, file and place heads; navy for the strip, the program head, the source card and the next-in-place block.
- **Appliqué panels:** the dossier (white on the mist band, gold seam), the file rail block (mist, gold seam), the source card (navy, teal seam).
- **Sunk records:** records and ledgers on mist with 16 to 24px padding and no border.
- No story is ever wrapped in a bordered, shadowed or tinted box.

### Inputs / Fields
- **Field** (`.field`): white, 1.5px seam-strong border, 48px tall, 12px by 16px padding; hover darkens the border to ink 2; focus replaces the outline with a navy border and a 3px teal-wash halo. Placeholder in ink 3. The search sheet and the search page enlarge it to 56 to 64px at 18 to 22px; on the search page the query is set in navy 700.
- **Masthead search:** no box at all. The input sits on the masthead baseline, and on focus a teal thread the thickness of the baseline is drawn over it from the right (scaleX 0 to 1 in 240ms).
- **Select:** a field with native appearance removed and a navy chevron at the inline end.
- **Check** (`.check`): an 18px native checkbox tinted navy in a 40px row with its count at the end.

### Navigation
- **Strip** (`.masthead__strip`): navy, 40px, 14px meta in Steel Mist with values in white 700; the Jerusalem clock carries a light-madder live dot. Tool buttons open floating panels with a 3px teal top edge.
- **The baseline** (`.masthead__main-inner::after`): a navy stroke at the height of the logo's own baseline (8% of the logo height), running from 14px after the logo to the page edge, the kashida. Section links (`.sections__link`, Kufi 700 at 15px, ink 2, navy on hover) are written on it. The current section turns navy 800 and a 10 by 22px teal ط-stem stands on the baseline at its start. The search sits on the same line.
- **Place rail** (`.place-rail`): the places from north to south (جنين to غزة, then الداخل المحتل after a short separator), 44px items in ink 2 at 600, navy with a mist fill on hover. Today's stories show as small teal cross-stitches beside each place; the current place is navy 800 with a 3px teal underline. It scrolls sideways with snap on small screens.
- **Drawer and search sheet** (`.sheet`): native dialogs, a 420px drawer from the start edge or a full-width search sheet, over the scrim, entering in 240ms.
- **Search tabs** (`.search-tabs`): 48px tabs on a 3px navy baseline; the current tab gets the teal ط-stem.
- **Breadcrumbs** (`.crumbs`): teal-ink 700 links at 14px separated by 7px seam-strong cross-stitches.
- **Pager** (`.pager`): 44px cells in ink 2; the current page is navy with a teal cross-stitch under its number, a counted stitch.

### Section Head (signature)
`.section-head`: the section title (Kufi 800, 20 to 26px, navy) on a 3px navy baseline, with the logo's ط-stem (23 by 50px, teal) standing on that baseline at the inline start; an optional ink-3 note and a more-link at the end. The files variant (`.section-head--gold`) swaps stem and rule to gold. No eyebrow label and no icon in the title.

### Thread (signature)
`.thread`: the latest news as one vertical running stitch (teal at 85%) through a time column. Each item is a 46px time (ink 2, 700, 14px), a 24px node holding an 11px teal cross-stitch, and the link (Kufi 600, 16 to 17px, ink) opened by its place in teal-ink 800. A breaking item turns its stitch and place madder; an item new since the last visit turns its time madder with "جديد" under it; an archive item fades to ink 3 at 500 with a seam-strong stitch. The knot, a madder dashed line with a small knot, marks where the reader stopped on the previous visit; a day change is a navy label on a hem. Hovering a story lights the same story in the weave. The article rail reuses the thread at 14px.

### Weave (signature)
`.weave`: today's fabric, a table of places (rows, north to south, each with its count) against the hours since 18:00 yesterday (columns; every third hour labelled; the current hour in madder over a madder-wash column), ending in each place's latest headline. Each empty cell shows a hole; each story is a 14px teal-ink cross-stitch link (two in the same hour shrink to 10px; breaking ones are madder) with a navy tooltip on hover or focus. Quiet places collapse into one closing line. Below 1024px it becomes a list of places, each with a 12-hour strip of 14px cells. The weave is rendered on the server (`build.py`) so it reads without JavaScript. The place page carries a 24-cell version on mist with 22px stitches.

### Story Patterns
Priority shows through scale, position and marks, never labels. The title link is stretched over the whole story so the story is one target.
- **Lead** (`.lead`): a 16:9 photo with a white panel overlapping its lower edge by 128px, flush with the start edge and stopping 9% short of the end, opened by a 4px navy edge; Display headline, a Naskh dek that opens with the dateline, two related links on seams. The photo scales to 1.015 over 900ms on hover.
- **Image** (`.story--image`): frame above a Title Large headline in navy 800.
- **Row** (`.story--row`): a Title Small or Title List headline with a 96 to 132px thumbnail at the end.
- **Text** (`.story--text`): headline and meta only, 700, ink.
- **Archive** (`.story--archive`): 15px at 500 in ink 3.
- **Lead row** (`.story--lead-row`): the first story of a listing, Title Large in navy 800 beside a 45% image.
- Lists put a 2px running-stitch seam above every story after the first.

### Dateline
`.dateline`: the place (teal ink, 700, linked when a place page exists), a small cross-stitch, then the time (ink 2, 600), at 0.86em of its context. It opens the dek or sits in the meta row and never sits above a headline. The build colours its stitch madder on every story; see the One Job Per Thread Rule.

### Dossier (special file)
`.dossier`: a white panel sewn onto the mist files band with a 2px gold dashed seam inset 8px. The lead dossier splits cover and body 5 to 7 with 32px padding; the compact one uses 24px. The title is Kufi 900 at 28 to 42px in navy (gold ink on hover), then a Naskh description, facts with gold-ink 800 values, items bulleted by gold cross-stitches on light seams, and a gold button with a gold-ink more-link at the foot. On the file page the file's stories hang on a vertical gold running stitch with gold cross-stitch nodes and their dates (gold ink, the day number navy at 28px).

### Breaking Bar
`.breaking`: a full-width madder band at least 56px tall, with white running stitches at 60% inset 4px along both edges. The label "عاجل" in Kufi 900 with a pulsing white live dot, then the place (900), the time and the headline (700, 17px, dashed underline), a "follow" outline button and a close button that dismisses it for the session. Focus rings turn white on it. It appears only when the desk flags a story.

### Records and Ledgers
`.record` (home) and `.ledger` (article): documented figures on mist. Text in Naskh, the figure in Kufi 800 navy, the source in ink-3 meta with a teal-ink link. The ledger is set like a register: a 7.5ch Kufi 800 figure column beside Naskh descriptions on light seams.

### Quotes and Pull Quotes
`.quote`: Naskh 500 at 19 to 22px under a 5rem teal Naskh « mark; the speaker in navy 800, linked; the role in ink 3. `.pull` in articles: Naskh 700 at 22 to 30px in navy, balanced, with a 16 by 34px teal ط-stem at its start.

### Audio Player (Plyr)
Plyr 3.7.8 from cdnjs, loaded only when a player comes within 600px of the viewport or an episode is tapped; native audio controls work until then, and a 56px minimum height reserves the space. Dressed in the brand through Plyr's custom properties: controls on mist inside a 1px rule border, navy icons that fill navy with white on hover, a navy play button, teal progress fill, rule-coloured buffer, navy thumb without shadow, radius 0 for controls, menus and tooltips, Kufi 600 at 14px, Arabic labels, 15-second seek and speeds from 0.75 to 2. The timeline runs left to right (`dir="ltr"`). Episode covers carry a navy episode-number patch; episode rows have 44px navy-outlined play squares that fill navy when current; only one player plays at a time.

### Video
Poster first: a 16:9 poster with a white "play" label at its corner (navy text, madder play glyph), and the privacy-enhanced YouTube embed loads only on request. Playlist rows use 112px thumbnails; the current row sits on mist, prefixed "يُعرض الآن" in madder.

### Source and Follow
`.source__card`: the citizen-journalism call on navy with 48 by 32px padding and a teal dashed seam inset 10px, a Kufi 900 title, Naskh text in Steel Mist, and teal and light-thread buttons. The follow list beside it uses 52px rows with 24px platform icons, mist on hover.

### Footer (hemline)
`.hemline`: a mist band with a 4px navy top edge and a 30 by 64px teal ط-stem standing on it at the start gutter, so the page closes the way the logo does. Four columns: logo, tagline, Naskh about text and 44px social squares (white on mist, navy on hover); places from north to south with their counts, in two columns; sections; dashed tags and site links. A hem, then the copyright line and a small teal stem before "ppost.ps".

### Feedback and Utilities
- **Loader** (`.stitch-loader`): the ط-stem built from 15 rows of teal cross-stitches, sewn north to south (each row fades in 0.1s after the previous one, 1.6s loop), beside an ink-3 status line. It stops under reduced motion.
- **Toast:** navy, white 700 text with a teal check, centred at the bottom, gone after 2.6s.
- **Back to top:** a 48px white square with a navy arrow that fills navy on hover; it appears once the reader is well into the page.
- **Read progress:** a 3px teal bar across the top of the article, growing from the right.
- **End mark** (`.end-mark`): a line-high teal ط-stem closes the article's last paragraph.
- **Live dot:** an 8px madder circle; it pulses (2.4s) only on the breaking label.
- **Focus:** a 3px navy outline at 3px offset on everything focusable; teal on navy surfaces, white on the breaking bar.

## Do's and Don'ts

### Do:
- **Do** keep stitches meaningful: a counted cross-stitch (teal; madder when breaking; gold in files) stands for one story, hour cell, file entry or current page, and the small muted stitch only separates levels in breadcrumbs and place lists.
- **Do** separate stories with the 2px running-stitch seam (7px stitch, 5px gap, seam colour) and close days and the page with the hem.
- **Do** open every section with the section head: the teal ط-stem (23 by 50px) standing on a 3px navy baseline, gold stem and rule for special files.
- **Do** open a story's dek or meta row with the dateline: place in teal ink, the stitch, then the time.
- **Do** set reading in Naskh at 18 to 20px with 1.95 line height inside 45rem, and everything structural in Kufi.
- **Do** use teal ink (#0A6773) for any teal that must be read on paper or mist; keep logo teal for stems, stitches, fills and text on navy.
- **Do** keep touch controls at 44px (buttons, icon buttons, pager cells, rail items); dense filter chips may go to 40px.
- **Do** keep the focus ring: 3px navy outline at 3px offset, teal on navy, white on madder.
- **Do** re-compose each band at each breakpoint (stack it, turn it into a swipe row or a list) instead of shrinking it.
- **Do** defer heavy media: the audio player near the viewport, video on request, weather and currencies when their panel opens, and render the weave on the server.

### Don't:
- **Don't** round corners; the 8px live dot is the only circle.
- **Don't** box stories in cards with borders, shadows or tinted fills; a panel is either a sewn appliqué (inset dashed seam) or a full navy or mist band.
- **Don't** put a shadow on anything in the page flow; a shadow means the layer floats.
- **Don't** spend madder on anything that is not happening now (breaking, live, new since the last visit, the current hour, now playing).
- **Don't** use gold outside special files.
- **Don't** set logo teal (#33B3C0) as text on paper or mist.
- **Don't** letter-space Arabic, and don't set Arabic words below 14px; 12px is for digits.
- **Don't** put kickers or eyebrow labels above headlines; place and time arrive through the dateline and sections through the ط-stem.
- **Don't** use tatreez as ornament (motifs, pattern fills, decorative bands): stitches count (cross-stitch), divide (running stitch) or attach a panel (appliqué seam).
- **Don't** use flag colours, map backgrounds, keffiyeh, olive or Aqsa imagery; the only silhouette in the system is the logo's ط-stem.
- **Don't** lay gradients, scrims or running text over news photos.
- **Don't** introduce warm or beige grounds, and don't add a dark theme; the product is light only.
- **Don't** use IBM Plex Sans Arabic or Cairo.
