# Tunivix Industries Limited — Website

Static, multi-page site (no build step, no backend required).

## Structure

```
index.html            Home
about/index.html       About
services/index.html    Services (with #engineering, #fabrication, #manufacturing,
                        #installation, #maintenance, #consulting anchors)
industries/index.html  Industries
projects/index.html    Projects
contact/index.html     Contact (inquiry form + direct email lines)
404.html               Custom not-found page
assets/css/style.css   Shared stylesheet
assets/js/main.js      Shared behaviour (nav toggle, scroll reveal, contact form)
```

## Hosting on GitHub Pages

1. Create a new GitHub repository (e.g. `tunivix-website`).
2. Push everything in this folder to the repository's default branch (`main`):
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. In the repo on GitHub: **Settings → Pages → Source**, choose the `main` branch and `/ (root)` folder, then save.
4. GitHub will publish the site at `https://<your-username>.github.io/<repo-name>/`.
5. To use your own domain (e.g. `www.tunivix.com`):
   - Add a `CNAME` file to the root containing just your domain, e.g. `www.tunivix.com`
   - Point your domain's DNS to GitHub Pages (a `CNAME` record to `<your-username>.github.io` for a `www` subdomain, or GitHub's documented `A` records for an apex domain)
   - Set the custom domain in the same **Settings → Pages** screen

## Things to edit before launch

- **Stats on the homepage** (`index.html`) — the "50+" and "15+" figures are placeholders. Search for `EDIT:` comments in the HTML to find them.
- **Projects page** (`projects/index.html`) — currently shows representative categories of work, not named past projects. Replace with real project photos, names and outcomes as they become available.
- **Contact form** (`contact/index.html`) — currently opens the visitor's email client with a pre-filled draft (works with zero backend). If you'd rather handle submissions in-page, connect a form service like [Formspree](https://formspree.io): set the `<form>`'s `action` attribute to your Formspree endpoint and remove the mailto handler in `assets/js/main.js`.
- **Canonical URLs** — each page has a `<link rel="canonical">` pointing at `https://www.tunivix.com/...`. Update if your final domain differs.

## Design notes

- Fonts: **Montserrat** (headings, nav, labels), **Inter** (body text), **Cormorant Garamond** italic (stat figures and the pull-quote on the About page) — loaded from Google Fonts.
- Color system is defined as CSS variables at the top of `assets/css/style.css` (`--bg`, `--green`, `--brass`, etc.) — change them there to re-theme the whole site at once.
- No frameworks, no build tooling — just edit the HTML/CSS/JS directly.
