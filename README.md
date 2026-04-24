# 💰 PocketLedger

A simple, private personal finance tracker that runs entirely in your browser.

## Project Structure

```
pocketledger/
├── index.html          ← Root redirect
├── app/
│   ├── index.html      ← Landing / home page
│   ├── dashboard.html  ← Main expense tracker
│   └── settings.html   ← Budget & preferences
├── styles/
│   └── main.css        ← Shared design system (CSS variables, components)
└── js/
    ├── store.js         ← Data layer (localStorage CRUD)
    └── toast.js         ← Toast notification helper
```

## How to Run

**Option 1 — Open directly in browser:**
Double-click `index.html` (or `app/index.html`). The app uses ES modules, so some browsers may block `file://` imports. Use Option 2 for best results.

**Option 2 — Local server (recommended):**
```bash
# Python 3
python3 -m http.server 3000
# then open http://localhost:3000

# Node / npx
npx serve .
# then open the URL shown
```

## Features

- ✅ Log expenses by category, amount, date & note
- ✅ Monthly budget with progress bar
- ✅ Pie chart breakdown by category
- ✅ Smart spending insights
- ✅ Dark mode toggle
- ✅ Currency selector (USD, EUR, GBP, INR, JPY, CAD, AUD)
- ✅ Export data as JSON
- ✅ Delete individual expenses
- ✅ 100% private — all data in `localStorage`, nothing sent to any server

## Categories

🍔 Food · 🚗 Transport · 🛍️ Shopping · 🎬 Entertainment · 📄 Bills · 💊 Health · 📌 Other
