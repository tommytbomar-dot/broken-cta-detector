# Broken CTA Detector — FAQ / Discussions seed

Seed questions for the Discussions tab (GitHub Discussions must be enabled in repo Settings → Features; copy each Q&A into a new Q&A discussion).

## Project-specific

### The bookmarklet does nothing on some sites. Why?
Sites with a strict Content Security Policy block bookmarklets. This is a browser rule, not a bug.

### What does it check?
Dead links (`#`, empty), empty or malformed `tel:`/`mailto:`, disabled buttons, tiny tap targets, no tap-to-call link, and no CTA on the first screen.

### Does it click anything or submit forms?
No. It only reads the page.

### Can it find every broken button?
No. It is a heuristic check on common problems. Always test on a real phone.

### How do I build the bookmarklet myself?
Run `node build-bookmarklet.js` and use the contents of `bookmarklet.txt` as a bookmark URL.

## General

### Is this really free?
Yes. The code/data is MIT licensed: use it, modify it, and use it for clients. The only paid thing is optional human help — see [SUPPORT.md](SUPPORT.md) ($97 session, email order).

### Does it send my data anywhere?
No. There is no server and no tracking. Nothing you enter is uploaded.

### Can I use it for my clients' businesses?
Yes, the MIT license allows commercial use. Keep the license notice in copies of the code.

### How do I report a bug or ask for a feature?
Open an issue or start a Discussion on this repo. For private questions, email tommytbomar@gmail.com.

Spiel Ventures · Tommy Bomar · tommytbomar@gmail.com
