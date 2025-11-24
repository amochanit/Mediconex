# Mediconex — Website (GitHub Pages)

Simple static site for Mediconex.

## Files
- `index.html` — entry point
- `styles.css` — styling
- `app.js` — small client interactions
- `assets/` — images, favicon, OG image (placeholders)

## Deploy to GitHub Pages (quick)
1. Create a repository: `mediconex` or `yourusername.github.io` (for user site).
2. Push files to `main` (or `gh-pages` branch).
3. In repo -> Settings -> Pages -> Source: choose `main` branch `/ (root)` or `/docs` folder. Save.
4. If using `gh-pages` branch, you can use the `gh-pages` npm package or GitHub Action to publish automatically.

Example commands:
```bash
git init
git add .
git commit -m "Initial Mediconex site"
git branch -M main
git remote add origin git@github.com:yourusername/mediconex.git
git push -u origin main
