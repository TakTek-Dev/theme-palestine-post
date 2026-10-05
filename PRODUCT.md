# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Live site: Laravel + Livewire (server-rendered Blade), Bootstrap RTL, jQuery, Owl Carousel, Font Awesome subset. This repository holds an older static front-end (Feb 2025) of the same site.
Redesign deliverable (confirmed 2026-10-05): static HTML/CSS/vanilla JS prototype in `redesign/`, no Bootstrap/jQuery, structured as reusable components so it ports to Blade partials. The old static files at the repo root stay untouched.

## Users

- Primary (confirmed): a loyal daily audience that opens the homepage directly to follow what is happening in Palestine right now, place by place.
- Also served: readers arriving on article pages from Facebook, Telegram, WhatsApp, X and TikTok on mobile; citizens who send news (citizen journalism is the founding mission).
- Arabic, RTL. Many readers inside the West Bank and Gaza read under poor connectivity, limited power and on mid-range Android phones.

## Product Purpose

Palestine Post (فلسطين بوست, ppost.ps) is a Palestinian digital news outlet founded 5 March 2015 by volunteer Palestinian journalists to strengthen citizen journalism within professional news standards. Tagline: «السرعة والموضوعية في نقل الحدث». Success: a reader understands within seconds what matters now, what is happening in Gaza and in each city, and what deserves a longer read.

## Positioning

Place-first Palestinian journalism: most stories are anchored to a governorate or city (Gaza 7,426 stories, Jerusalem 2,666, Ramallah 1,714, Nablus 1,499, Hebron 1,268 as of Oct 2026), with citizen-sourced reporting, continuing coverage files (نافذة على غزة), a Palestine encyclopedia (موسوعة فلسطين), and its own audio documentary series from the tents of Gaza (يوميات نازح في خيمة).

## Operating Context

Content types: news (خبر), reports (تقارير بوست), opinion (مقالات), video (فيديو بوست), podcast programs and episodes, quotes (اقتباسات), special files (ملفات خاصة), encyclopedia entries (موسوعة فلسطين), tags, writers.
Places: غزة، القدس، رام الله، نابلس، الخليل، جنين، طولكرم، طوباس، أريحا، قلقيلية، سلفيت، بيت لحم، الداخل المحتل. Topics: عربي دولي، تكنولوجيا، منوعات.
Publishing cadence: roughly 12–20 news items per day; timestamps to the minute.

## Capabilities and Constraints

Must keep every current feature (full inventory and checklist in `redesign/docs/01-audit.md` §9): search, currencies (USD/EUR), weather (Gaza/Jerusalem, 5 days), latest-news notifications dropdown, full navigation incl. 13 places, lead story + companions, numbered latest news + load more, local news by city, video player + playlist, podcast programs/episodes/player/share, special files + view-all, opinion articles, quotes, follow-us (5 platforms), footer with category counts and tags, back-to-top, category/tag listing with breadcrumb + in-section search + pagination, article page with font-size control, share (Facebook, X, WhatsApp, Telegram, copy link), tags and related news, writer page, video/podcast filters, send-news form, about, sitemap, 404.
Content model does not change. Images are served responsive via `/media/img/{400|800|1200}/…webp`.
Breaking/live/priority states are not visible today; the design may introduce them as presentation states that need a CMS flag (to be flagged as backend dependencies, not assumed to exist).

## Brand Commitments

- Logo drawing is fixed: the wordmark «فلسطين بوست» whose ط stem is the silhouette of historic Palestine, with «بوست» small above. It may be recolored with the new system.
- Light interface only (confirmed 2026-10-05): no dark theme as default or option.
- The logo's colors stay in the palette (confirmed 2026-10-05): teal #33B3C0 (the logo itself) and navy #023B56 (the current masthead). The rest of the color system is new.
- Brief requirements (binding): Palestinian identity translated into editorial design without clichés (no flag-color palette, no repeated map backgrounds, no random tatreez, no olive/Aqsa imagery everywhere); not a political campaign or poster; editorial, information-dense, fast, accessible; brand recognizable without the logo.
- Fonts: IBM Plex Sans Arabic is banned; Cairo is to be avoided.

## Evidence on Hand

Real content from the live site (headlines, categories, counts, writers, podcast programs, files) captured 2026-10-05; logo files in `imgs/` (`header logo.png`, `footer logo.png`, `fade-logo.png`). No brand guidelines, no analytics numbers, no photography licenses beyond the live site's own images. Do not invent readership figures, awards or partnerships.

## Product Principles

1. Place before category: where a story happened is the first thing a reader needs, and the system should make geography legible without drawing maps for decoration.
2. Priority must be visible: breaking, lead, important, regular and archive news must look different through scale, position and markers, never through shouting labels.
3. Works in the worst conditions: fast first render, little JavaScript, readable on a cheap phone with a weak signal and low battery.
4. A file is a journalistic body of work, not a tag: continuing coverage gets its own home and treatment.
5. The citizen is a source: sending news is part of the brand, not a footer link.

## Accessibility & Inclusion

WCAG 2.2 AA target: semantic headings (one h1 per page), visible focus, keyboard-reachable menus and tabs, 44px touch targets, reduced-motion respect, Arabic line-height and size suitable for long reading, real text instead of text in images.
