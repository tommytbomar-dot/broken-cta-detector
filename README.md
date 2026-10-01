# Broken CTA Detector

Bookmarklet (MIT) that scans the current page for call/book/quote CTAs that are dead (`href="#"`), empty, disabled, malformed `tel:`/`mailto:`, tiny, or below the fold. Runs locally.

Install: open https://tommytbomar-dot.github.io/tools/broken-cta/ and drag the button to your bookmarks bar. Or run `node build-bookmarklet.js` and use the contents of the generated `bookmarklet.txt` as a bookmark URL.

- `detector.js` pure analysis logic (tested: `node --test test`), `scan.js` DOM collector + panel.

Limits: sites with strict CSP block bookmarklets; heuristics only. See [SUPPORT.md](SUPPORT.md) for the $125 session or email `WANT AUDIT` for a human audit. License: MIT.
