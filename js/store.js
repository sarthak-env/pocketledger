// js/store.js — PocketLedger data layer (localStorage)

const EXPENSES_KEY = 'pl_expenses';
const SETTINGS_KEY = 'pl_settings';

export const DEFAULT_SETTINGS = {
  budget: 2000,
  currency: 'USD',
  darkMode: false,
};

export const CURRENCY_SYMBOLS = {
  USD: '$', EUR: '€', GBP: '£', INR: '₹', JPY: '¥', CAD: 'CA$', AUD: 'A$',
};

export const CATEGORY_META = {
  Food:          { icon: '🍔', color: '#ff9500' },
  Transport:     { icon: '🚗', color: '#007aff' },
  Shopping:      { icon: '🛍️', color: '#af52de' },
  Entertainment: { icon: '🎬', color: '#ff2d55' },
  Bills:         { icon: '📄', color: '#5ac8fa' },
  Health:        { icon: '💊', color: '#34c759' },
  Other:         { icon: '📌', color: '#8e8e93' },
};

// ── Expenses ─────────────────────────────────────────────────────────────────

export function getExpenses() {
  try {
    const raw = localStorage.getItem(EXPENSES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}

export function saveExpenses(list) {
  localStorage.setItem(EXPENSES_KEY, JSON.stringify(list));
}

export function addExpense({ amount, category, date, note = '' }) {
  const list = getExpenses();
  const exp = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
    amount: Math.round(parseFloat(amount) * 100) / 100,
    category,
    date,
    note: note.trim(),
    icon: CATEGORY_META[category]?.icon || '📌',
    createdAt: new Date().toISOString(),
  };
  list.unshift(exp);
  saveExpenses(list);
  return exp;
}

export function deleteExpense(id) {
  const list = getExpenses().filter(e => e.id !== id);
  saveExpenses(list);
}

export function clearExpenses() {
  localStorage.removeItem(EXPENSES_KEY);
}

// ── Settings ─────────────────────────────────────────────────────────────────

export function getSettings() {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    return { ...DEFAULT_SETTINGS, ...(raw ? JSON.parse(raw) : {}) };
  } catch { return { ...DEFAULT_SETTINGS }; }
}

export function saveSetting(key, value) {
  const s = getSettings();
  s[key] = value;
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(s));
}

export function clearSettings() {
  localStorage.removeItem(SETTINGS_KEY);
}

// ── Helpers ───────────────────────────────────────────────────────────────────

export function fmt(n, currency) {
  const cur = currency || getSettings().currency || 'USD';
  const num = Number(n) || 0;
  try {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: cur,
      minimumFractionDigits: cur === 'JPY' ? 0 : 2,
      maximumFractionDigits: cur === 'JPY' ? 0 : 2,
    }).format(num);
  } catch {
    const sym = CURRENCY_SYMBOLS[cur] || (cur + ' ');
    return sym + num.toFixed(cur === 'JPY' ? 0 : 2);
  }
}

export function formatDate(d) {
  if (!d) return '';
  try {
    return new Date(d + 'T00:00:00').toLocaleDateString('en-US', {
      month: 'short', day: 'numeric', year: 'numeric',
    });
  } catch { return d; }
}

export function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function calcStats(expenses, budget) {
  const total = expenses.reduce((s, e) => s + (Number(e.amount) || 0), 0);
  const budgetLeft = budget - total;
  const cats = {};
  expenses.forEach(e => { cats[e.category] = (cats[e.category] || 0) + (Number(e.amount) || 0); });
  const topCat = Object.entries(cats).sort((a, b) => b[1] - a[1])[0]?.[0] || null;
  return { total, budgetLeft, cats, topCat };
}

export function applyDarkMode(isDark) {
  const r = document.documentElement;
  if (isDark) {
    r.style.setProperty('--bg',             '#1c1c1e');
    r.style.setProperty('--surface',        '#2c2c2e');
    r.style.setProperty('--text-primary',   '#f5f5f7');
    r.style.setProperty('--text-secondary', '#ababaf');
    r.style.setProperty('--text-tertiary',  '#79797e');
    r.style.setProperty('--border',         'rgba(255,255,255,0.10)');
    r.setAttribute('data-dark', '1');
  } else {
    r.style.setProperty('--bg',             '#f5f5f7');
    r.style.setProperty('--surface',        '#ffffff');
    r.style.setProperty('--text-primary',   '#1d1d1f');
    r.style.setProperty('--text-secondary', '#6e6e73');
    r.style.setProperty('--text-tertiary',  '#8e8e93');
    r.style.setProperty('--border',         'rgba(0,0,0,0.08)');
    r.removeAttribute('data-dark');
  }
}
