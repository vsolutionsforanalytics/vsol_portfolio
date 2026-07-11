# V Solutions Website

A static, multi-page marketing website for V Solutions (data analytics & BI consultancy). No build step — just HTML, CSS, and vanilla JS, so you can upload it to any host and it works immediately.

## Pages
- `index.html` — Home
- `about.html` — About Us (mission, vision, why us, team)
- `services.html` — Services (BI, data engineering, AI/ML, cloud, consulting, training)
- `industries.html` — Industries served
- `portfolio.html` — Sample/demonstration projects
- `blog.html` — Blog listing (sample posts — wire up a CMS or add real posts later)
- `contact.html` — Contact form + direct contact details
- `privacy.html`, `terms.html` — Placeholder legal pages (**have a lawyer review before launch**)
- `robots.txt`, `sitemap.xml` — Basic SEO setup (update the domain inside both once you know your final URL)

## Structure
```
/assets/css/style.css   — all styling (brand colors, type, components)
/assets/js/main.js      — mobile nav, footer year, contact form handler
/assets/img/logo.png    — your logo
```

## Before you launch — quick checklist
1. **Contact form**: `contact.html` currently just shows a "thanks" message locally. Open `assets/js/main.js` and either:
   - Point the form's `action` to a service like [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com/), or
   - Replace the JS handler with your form service's snippet.
2. **Domain in SEO files**: update the URLs inside `robots.txt` and `sitemap.xml` to your real domain.
3. **Email & phone**: replace the placeholder `info@vsol.cloud` and `+91 7904356983` in `contact.html` and the footers.
4. **Legal pages**: `privacy.html` and `terms.html` are placeholders — have them reviewed by a lawyer before going live.
5. **Analytics**: add your Google Analytics / Search Console snippet to the `<head>` of each page once you have the tracking ID (Phase 6 of your plan).
6. **Blog content**: the blog posts on `blog.html` are placeholders reflecting your planned topics (Power BI tips, Snowflake optimization, PySpark interview questions, etc.) — swap in real posts, or connect a headless CMS/MDX setup later if you want to scale past static pages.
7. **Social links**: the `in` / `gh` icons in the footer are placeholders — swap in real LinkedIn/GitHub URLs.

## Deploying
Any static host works — for example:
- **Netlify / Vercel**: drag-and-drop this folder, or connect it to a Git repo.
- **Traditional hosting (cPanel, etc.)**: upload the whole folder's contents to your `public_html` (or equivalent) directory via FTP/File Manager.

Because this is plain HTML/CSS/JS (no Next.js build step), it deploys instantly on virtually any host with zero configuration.

## Design notes
- Palette and type are derived from your logo: deep navy background, blue-to-cyan gradient accents, with Space Grotesk (headings), Inter (body), and IBM Plex Mono (data/stat labels) to underline the analytics theme.
- The ascending-bar motif from your logo repeats throughout the site (hero graphic, card icons, portfolio thumbnails) as a consistent visual signature.
