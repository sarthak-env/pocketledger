# 💰 PocketLedger

> Simple, intelligent expense tracking. No server. No account. No data collection.

PocketLedger is a fully client-side personal finance tracker built with vanilla HTML, CSS, and JavaScript. All data is stored in your browser's `localStorage` — nothing ever leaves your device.

---

## Project Structure

```
pocketledger/
├── index.html              # Homepage / landing page
├── README.md
│
├── pages/
│   ├── dashboard.html      # Main app: add/view/delete expenses
│   └── settings.html       # Budget, currency, dark mode, data export
│
├── styles/
│   └── main.css            # Design system: tokens, components, utilities
│
└── js/
    ├── store.js            # Data layer: localStorage CRUD + helpers
    └── toast.js            # Toast notification utility
```

No build step. No bundler. No dependencies. Open `index.html` in a browser and it works.

---

## Features

- **Expense logging** — amount, category, date, optional note
- **Budget tracking** — set a monthly limit, see real-time progress
- **Category breakdown** — visual pie chart and per-category totals
- **Spending insights** — top category, total spent, budget remaining
- **Dark mode** — toggled via Settings, persisted across sessions
- **Data export** — download full expense history as JSON
- **Multi-currency** — USD, EUR, GBP, INR, JPY, CAD, AUD
- **100% private** — no network requests, no telemetry, no accounts

---

## Getting Started

1. Clone or download the repository
2. Open `index.html` in any modern browser
3. Click **Open Dashboard** and start tracking

No installation. No `npm install`. No server required.

---

## Design System

All visual tokens live in `styles/main.css` as CSS custom properties:

| Token | Value |
|---|---|
| `--accent-blue` | `#007aff` |
| `--accent-green` | `#34c759` |
| `--accent-red` | `#ff3b30` |
| `--accent-orange` | `#ff9500` |
| `--accent-purple` | `#af52de` |
| Font | DM Sans (Google Fonts) |

Dark mode is applied via `applyDarkMode()` in `js/store.js`, which overrides CSS variables on `:root` and sets a `data-dark="1"` attribute for component-level overrides.

---

## Browser Support

Any modern browser with `localStorage` and ES Modules support (Chrome 61+, Firefox 60+, Safari 10.1+, Edge 16+).

---

## License

MIT
