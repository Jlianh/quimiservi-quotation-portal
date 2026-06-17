"""
Bake the Quimiservi wordmark from Ethnocentric into SVG outline paths.

Why: Ethnocentric's free desktop license (Typodermic Fonts) forbids embedding
the font on a web page, but permits using it for a logo / non-embedded web use.
Converting the text to vector paths means the .otf is never shipped to the
browser — only static <path> data — which keeps us compliant.

Usage:
    python scripts/build-wordmark.py
Then paste the printed `viewBox` and `d` into
`src/app/shared/components/brand-wordmark/brand-wordmark.ts`.

Requires: pip install fonttools
The source font lives next to this script (not under public/, so it is never
served). It is used only at build time on the desktop.
"""
import json
import os
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.boundsPen import BoundsPen

HERE = os.path.dirname(os.path.abspath(__file__))
OTF = os.path.join(HERE, "Ethnocentric-Regular.otf")
TEXT = "QUIMISERVI"
PAD = 8  # font units of breathing room around the glyph bounds

font = TTFont(OTF)
glyph_set = font.getGlyphSet()
cmap = font.getBestCmap()
hmtx = font["hmtx"]
ascent = font["hhea"].ascent

pen_x = 0
parts = []
for ch in TEXT:
    gname = cmap[ord(ch)]
    # y-flip (font is y-up, SVG is y-down): matrix (1,0,0,-1,pen_x,ascent)
    transform = (1, 0, 0, -1, pen_x, ascent)

    path_pen = SVGPathPen(glyph_set)
    glyph_set[gname].draw(TransformPen(path_pen, transform))

    bounds_pen = BoundsPen(glyph_set)
    glyph_set[gname].draw(TransformPen(bounds_pen, transform))

    commands = path_pen.getCommands()
    if commands:
        parts.append((commands, bounds_pen.bounds))
    pen_x += hmtx[gname][0]

xs0 = min(b[0] for _, b in parts if b) - PAD
ys0 = min(b[1] for _, b in parts if b) - PAD
xs1 = max(b[2] for _, b in parts if b) + PAD
ys1 = max(b[3] for _, b in parts if b) + PAD

d = " ".join(commands for commands, _ in parts)
view_box = f"{xs0} {ys0} {xs1 - xs0} {ys1 - ys0}"

print("viewBox:", view_box)
print("d:", d)
print(json.dumps({"viewBox": view_box, "d": d}))
