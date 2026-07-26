# Gonzales — site source

Static download site for Gonzales. Two pages, no build step:

- `index.html` — landing / download page
- `thanks.html` — shown after someone clicks download; auto-starts the file
- `styles.css`, `script.js` — shared styles and behavior
- `assets/favicon.svg` — tab icon

## 1. Put these files in your repo

Copy everything in this folder into the root of your GitHub repo (or into
a `/docs` folder if you'd rather keep Pages files separate — just update
the Pages source setting to match in step 3).

## 2. Point the download button at your actual installer

Open `script.js` and edit the two constants at the top:

```js
const DOWNLOAD_URL = "https://github.com/YOUR-USERNAME/YOUR-REPO/releases/latest/download/Gonzales-Setup.exe";
const DOWNLOAD_FILENAME = "Gonzales-Setup.exe";
```

The recommended approach is to **not** commit the installer itself into
the repo. Instead:

1. Zip or package your build.
2. On your repo's GitHub page, go to **Releases → Draft a new release**,
   tag it (e.g. `v2.4.1`), and attach the installer file as a release
   asset.
3. Publish the release. GitHub gives every release asset a stable URL in
   this form:
   `https://github.com/<user>/<repo>/releases/latest/download/<filename>`
4. Put that exact URL into `DOWNLOAD_URL` above.

This keeps your git history small and lets you ship new versions just by
publishing a new release — no code changes needed as long as the
filename stays the same.

Also replace the three placeholder GitHub links (`YOUR-USERNAME/YOUR-REPO`)
in `index.html` and `thanks.html` — used for the "View source" and
footer links.

## 3. Turn on GitHub Pages

In your repo: **Settings → Pages → Source**, choose the branch (usually
`main`) and the folder (`/root` or `/docs`, matching where you put the
files), then save. GitHub will give you a URL like
`https://your-username.github.io/your-repo/` within a minute or two.

## 4. Preview locally (optional)

No build tools needed — any static server works, e.g. from this folder:

```
python3 -m http.server 8000
```

then open `http://localhost:8000`.

## Notes

- Update the `v2.4.1` version tag (top bar, spec sheet) and the size in
  the spec sheet whenever you cut a new release.
- The footer disclaimer noting Gonzales isn't affiliated with Ubisoft is
  there deliberately — keep it, since the site references Rainbow Six
  Siege branding.
- Fonts (Chakra Petch / Inter / JetBrains Mono) load from Google Fonts
  via the `<link>` tags in each HTML file's `<head>`.
