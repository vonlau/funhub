# FunHub Admin Portal — Team Guide

Internal documentation for the FunHub admin portal.

## Project Structure

```
funhub-admin-portal/
├── index.html              # Main entry point
├── css/
│   └── styles.css          # All styles (design tokens, layout, components)
├── js/
│   ├── app.js              # Core interactions (showPage, toggleCard, filterNav, goBack)
│   └── loader.js           # Fetches and injects sidebar + page partials
├── components/
│   └── sidebar.html        # Sidebar navigation (shared across all pages)
├── pages/
│   ├── home.html           # Overview / landing page
│   ├── dashboard.html
│   ├── users.html
│   ├── sales.html
│   ├── transactions.html
│   ├── articles.html
│   ├── engagements.html
│   ├── coins.html
│   ├── points.html
│   ├── missions.html
│   ├── campaigns.html
│   ├── approvals.html
│   ├── mobile.html
│   ├── notifications.html
│   ├── locations.html
│   ├── settings.html
│   ├── finance.html
│   ├── marketing.html
│   ├── roles.html
│   └── helpcenter.html
└── assets/
    └── logo.png            # FunHub logo
```

## How to Run

Open `index.html` in a browser **via a local server** (required for fetch() to load partials):

```bash
# Python
python3 -m http.server 8080

# Node (npx)
npx serve .
```

Then visit: http://localhost:8080

> ⚠️ Opening index.html directly as a file (file://) will not work due to CORS restrictions on fetch().
> Use a local server.

## Adding / Editing Content

- **Edit a section** → open the relevant file in `pages/`
- **Edit navigation** → open `components/sidebar.html`
- **Edit styles** → open `css/styles.css`
- **Edit interactions** → open `js/app.js`

## Pages (20)

- `home.html`
- `dashboard.html`
- `users.html`
- `sales.html`
- `transactions.html`
- `articles.html`
- `engagements.html`
- `coins.html`
- `points.html`
- `missions.html`
- `campaigns.html`
- `approvals.html`
- `mobile.html`
- `notifications.html`
- `locations.html`
- `settings.html`
- `finance.html`
- `marketing.html`
- `roles.html`
- `helpcenter.html`
