# 💰 PocketLedger

A fast, private, and modern personal finance tracker built with **React**.

PocketLedger helps users track expenses, manage monthly budgets, visualize spending habits, and generate spending insights — all while keeping data fully private by default.

No account required. No analytics. No server dependency (unless optional cloud sync is enabled).

---

## ✨ Features

### Expense Management
- Add expenses with:
  - Amount
  - Category
  - Date
  - Note/description
- Delete individual expenses
- View full expense history

### Budget Tracking
- Set monthly budget
- Live spending progress bar
- Remaining budget calculation
- Overspending alerts

### Analytics
- Category-wise pie chart
- Monthly spending summary
- Smart spending insights

Examples:
- Highest spending category
- Daily average spending
- Budget burn rate

### Preferences
- Dark mode toggle
- Currency selector

Supported currencies:
- USD
- EUR
- GBP
- INR
- JPY
- CAD
- AUD

### Data Management
- Export data as JSON
- Import JSON backup
- Local persistent storage

### Privacy
- 100% local-first
- No tracking
- No cookies
- No external servers by default

---

## 🏗 Tech Stack

### Frontend
- React
- Vite

### Charts
- Chart.js
- react-chartjs-2

### State Management
- React Context API

### Storage
Default:
- localStorage

Optional upgrades:
- IndexedDB
- Supabase
- Firebase

---


## 🔐 Privacy Philosophy

PocketLedger is designed around **local-first privacy**.

What PocketLedger does:
- stores data locally
- exports/imports manually

What PocketLedger does NOT do:
- collect analytics
- send personal finance data
- require login
- use ads

---


## 🤝 Contributing

Contributions welcome.

Steps:

1. Fork repository
2. Create branch

```bash
git checkout -b feature/new-feature
```

3. Commit changes

```bash
git commit -m "Add feature"
```

4. Push branch

```bash
git push origin feature/new-feature
```

5. Open pull request

---


## ⭐ Support

If you like the project:

- star the repo
- fork it
- contribute improvements

---

**PocketLedger — personal finance without surveillance.**
