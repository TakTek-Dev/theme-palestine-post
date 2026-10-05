"""Assemble the static prototype pages from src/pages + src/partials.

Mirrors Blade's @include so the markup ports 1:1 to Laravel partials.
The weave (places x hours) is rendered here, as the server would render it,
so it is visible without JavaScript; pp.js only adds hover and highlighting.

Usage:  python build.py        (writes redesign/*.html)
Bump VERSION after any CSS/JS change so browsers drop cached assets.
"""
import json
import re
from html import escape
from pathlib import Path

VERSION = 14
ROOT = Path(__file__).parent
# The prototype duplicates live ppost.ps stories, so it must stay out of search results.
# Set PREVIEW = False when these templates move into production.
PREVIEW = True
PARTIALS = {p.stem: p.read_text(encoding="utf-8") for p in (ROOT / "src" / "partials").glob("*.html")}
FLAGS = ["nav_home", "nav_reports", "nav_podcast", "nav_local", "place_gaza"]
WEAVE = json.loads((ROOT / "src" / "data" / "weave.json").read_text(encoding="utf-8"))
SPRITE = (ROOT / "assets" / "img" / "icons.svg").read_text(encoding="utf-8")
SPRITE = re.sub(r"<!--.*?-->", "", SPRITE, flags=re.S).replace(
    '<svg xmlns="http://www.w3.org/2000/svg">',
    '<svg xmlns="http://www.w3.org/2000/svg" class="sprite" aria-hidden="true" focusable="false">', 1)

AR_COUNT = {1: "خبر واحد", 2: "خبران"}


def count_label(n: int) -> str:
    if n in AR_COUNT:
        return AR_COUNT[n]
    return f"{n} أخبار" if 3 <= n <= 10 else f"{n} خبرًا"


def hour_index(story: dict) -> int:
    """Column index from the weave start (18:00 yesterday)."""
    h = int(story["t"].split(":")[0])
    start = 18
    return (h - start) if story.get("day") == -1 else (h + 24 - start)


def stitch_link(place: str, s: dict, small: bool) -> str:
    cls = "stitch" + (" stitch--sm" if small else "") + (" is-breaking" if s.get("breaking") else "")
    when = ("أمس " if s.get("day") == -1 else "") + s["t"]
    label = escape(f"{place}، {when}: {s['h']}")
    return (f'<a class="{cls}" href="article.html" data-story="{s["id"]}" aria-label="{label}">'
            f'<i class="x" aria-hidden="true"></i>'
            f'<span class="stitch__tip" aria-hidden="true"><time>{when}</time>{escape(s["h"])}</span></a>')


def render_weave_table() -> str:
    hours = [(18 + i) % 24 for i in range(WEAVE["hours"])]
    head = ['<thead><tr><th scope="col" class="weave__corner"><span class="visually-hidden">المكان</span></th>']
    for i, h in enumerate(hours):
        cls = ["weave__hour"]
        if i == len(hours) - 1:
            cls.append("is-now")
        elif h % 3:
            cls.append("is-minor")
        head.append(f'<th scope="col" class="{" ".join(cls)}"><span class="num">{h:02d}</span></th>')
    head.append('<th scope="col" class="weave__latest-h">آخر خبر</th></tr></thead>')

    rows = ["<tbody>"]
    quiet = [p for p in WEAVE["places"] if not p["stories"]]
    for p in WEAVE["places"]:
        stories = p["stories"]
        if not stories:
            continue  # quiet places collapse into one closing row
        cells = [[] for _ in hours]
        for s in stories:
            cells[hour_index(s)].append(s)
        tr_cls = "weave__row" + (" weave__row--sep" if p.get("sep") else "") + ("" if stories else " is-quiet")
        count = f'<span class="weave__count num">{len(stories)}</span>' if stories else ""
        rows.append(f'<tr class="{tr_cls}"><th scope="row"><a href="place.html">{escape(p["name"])}</a>{count}</th>')
        for i, cell in enumerate(cells):
            now = " is-now" if i == len(hours) - 1 else ""
            inner = "".join(stitch_link(p["name"], s, len(cell) > 1) for s in cell[:2])
            rows.append(f'<td class="h{now}">{inner}</td>')
        if stories:
            last = max(stories, key=hour_index)
            when = ("أمس " if last.get("day") == -1 else "") + last["t"]
            latest = f'<a href="article.html"><time>{when}</time>{escape(last["h"])}</a>'
        else:
            latest = f'<a class="is-old" href="article.html"><time>{escape(p["latest"]["d"])}</time>{escape(p["latest"]["h"])}</a>'
        rows.append(f'<td class="weave__latest">{latest}</td></tr>')
    if quiet:
        names = "، ".join(f'<a href="place.html">{escape(p["name"])}</a>' for p in quiet)
        rows.append(f'<tr class="weave__quiet"><td colspan="{len(hours) + 2}">لا أخبار خلال آخر 24 ساعة من: {names}</td></tr>')
    rows.append("</tbody>")
    return "".join(head) + "\n" + "\n".join(rows)


def render_weave_list() -> str:
    """Mobile: each place with its last 12 hours as a strip of stitches."""
    out = ['<ol class="weave__list">']
    quiet = [p["name"] for p in WEAVE["places"] if not p["stories"]]
    for p in WEAVE["places"]:
        stories = p["stories"]
        if not stories:
            continue
        on = {}
        for s in stories:
            idx = hour_index(s) - 12
            if idx >= 0:
                on[idx] = on.get(idx) or bool(s.get("breaking"))
        strip = "".join(
            f'<i class="on{" is-breaking" if on[i] else ""}"></i>' if i in on else "<i></i>" for i in range(12)
        )
        if stories:
            last = max(stories, key=hour_index)
            when = ("أمس " if last.get("day") == -1 else "") + last["t"]
            latest = f'<a href="article.html"><time>{when}</time>{escape(last["h"])}</a>'
            count = f'<span class="weave__count num">{count_label(len(stories))}</span>'
        else:
            latest = f'<a class="is-old" href="article.html"><time>{escape(p["latest"]["d"])}</time>{escape(p["latest"]["h"])}</a>'
            count = ""
        out.append(
            f'<li class="wl-item{" is-quiet" if not stories else ""}"><a class="wl-item__place" href="place.html">{escape(p["name"])}{count}</a>'
            f'<span class="wl-item__strip" aria-hidden="true">{strip}</span>'
            f'<p class="wl-item__latest">{latest}</p></li>'
        )
    if quiet:
        names = "، ".join(f'<a href="place.html">{escape(n)}</a>' for n in quiet)
        out.append(f'<li class="wl-quiet">لا أخبار خلال آخر 24 ساعة من: {names}</li>')
    out.append("</ol>")
    return "\n".join(out)


def build(page: Path) -> None:
    text = page.read_text(encoding="utf-8")
    meta_block = re.match(r"<!--meta\n(.*?)\n-->\n", text, re.S)
    meta = dict(line.split(": ", 1) for line in meta_block.group(1).splitlines()) if meta_block else {}
    body = text[meta_block.end():] if meta_block else text

    for name, partial in PARTIALS.items():
        body = body.replace(f"<!-- @{name} -->", partial)
    if "<!-- @weave-table -->" in body:
        body = body.replace("<!-- @weave-table -->", render_weave_table())
        body = body.replace("<!-- @weave-list -->", render_weave_list())

    values = {"v": str(VERSION), "head_extra": meta.pop("head_extra", ""),
              "robots": '<meta name="robots" content="noindex, nofollow">' if PREVIEW else ""}
    values.update(meta)
    for flag in FLAGS:
        values[flag] = 'aria-current="page"' if flag in meta.get("current", "").split() else ""
    body = re.sub(r"\{\{(\w+)\}\}", lambda m: values.get(m.group(1), ""), body)
    body = re.sub(r"(<[a-z][^<>]*?) +>", r"\1>", body)
    # icons: one inline sprite per page (external <use> references are unreliable)
    body = body.replace('href="assets/img/icons.svg#', 'href="#')
    body = re.sub(r"(<body[^>]*>)", lambda m: m.group(1) + "\n" + SPRITE.strip(), body, count=1)

    (ROOT / page.name).write_text(body, encoding="utf-8")
    print("built", page.name)


for p in sorted((ROOT / "src" / "pages").glob("*.html")):
    build(p)
