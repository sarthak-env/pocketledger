<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PocketLedger – Track Your Money</title>
  <link rel="stylesheet" href="../styles/main.css">
  <script type="module">
    import { getSettings, applyDarkMode } from "../js/store.js";
    applyDarkMode(!!(getSettings().darkMode));
  </script>
  <style>
    /* ── Page-specific styles ── */
    body { background: var(--bg); min-height: 100vh; }

    .hero-gradient {
      background: linear-gradient(135deg, rgba(0,122,255,0.06) 0%, rgba(52,199,89,0.04) 100%);
    }

    .feature-card {
      transition: transform 0.25s cubic-bezier(0.4,0,0.2,1), box-shadow 0.25s;
    }
    .feature-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 24px rgba(0,122,255,0.12);
    }

    .preview-mock {
      background: linear-gradient(135deg, #f5f5f7 0%, #fff 50%, #f0f0f2 100%);
    }

    /* mock bars */
    .mock-bar { border-radius: 4px; }

    /* nav mobile toggle */
    .mobile-menu { display: none; }
    @media (max-width: 640px) {
      .desktop-nav { display: none; }
    }

    /* Staggered fade-up for hero */
    .fade-up { opacity: 0; animation: fadeUp 0.45s ease forwards; }
    .fade-up:nth-child(1) { animation-delay: 0s; }
    .fade-up:nth-child(2) { animation-delay: 0.08s; }
    .fade-up:nth-child(3) { animation-delay: 0.16s; }
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(14px); }
      to   { opacity: 1; transform: translateY(0); }
    }
  </style>
</head>
<body>

<!-- ── Navigation ── -->
<header class="glass-nav">
  <div style="max-width:1100px;margin:auto;padding:16px 24px;display:flex;align-items:center;justify-content:space-between;">
    <a href="index.html" style="font-size:18px;font-weight:700;color:var(--text-primary);text-decoration:none;">
      💰 PocketLedger
    </a>
    <nav class="desktop-nav" style="display:flex;align-items:center;gap:32px;">
      <a href="index.html" class="nav-link active">Home</a>
      <a href="dashboard.html" class="nav-link">Dashboard</a>
      <a href="settings.html" class="nav-link">Settings</a>
    </nav>
    <a href="dashboard.html" class="btn btn-primary" style="padding:8px 20px;font-size:13px;">Open App →</a>
  </div>
</header>

<!-- ── Hero ── -->
<section class="hero-gradient" style="padding:72px 24px;">
  <div style="max-width:680px;margin:auto;text-align:center;">
    <div class="fade-up">
      <span class="badge badge-green" style="margin-bottom:20px;display:inline-flex;">✨ Simple. Smart. Yours.</span>
    </div>
    <h1 class="fade-up" style="font-size:clamp(2rem,5vw,3.2rem);font-weight:700;line-height:1.15;color:var(--text-primary);margin:0 0 18px;">
      Track your money.<br>Understand your habits.
    </h1>
    <p class="fade-up" style="font-size:17px;color:var(--text-secondary);max-width:480px;margin:0 auto 36px;line-height:1.6;">
      Simple, intelligent expense tracking that helps you spend smarter and save more — all stored right in your browser.
    </p>
    <div class="fade-up" style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
      <a href="dashboard.html" class="btn btn-primary" style="font-size:15px;padding:12px 28px;">Get Started</a>
      <a href="#features" class="btn btn-secondary" style="font-size:15px;padding:12px 28px;">Learn More</a>
    </div>
  </div>
</section>

<!-- ── Stats strip ── -->
<section style="background:var(--surface);border-top:1px solid var(--border);border-bottom:1px solid var(--border);padding:28px 24px;">
  <div style="max-width:800px;margin:auto;display:flex;justify-content:space-around;flex-wrap:wrap;gap:20px;text-align:center;">
    <div>
      <div style="font-size:2rem;font-weight:700;color:var(--accent-blue);">100%</div>
      <div style="font-size:12px;color:var(--text-secondary);margin-top:4px;">Private — data stays on your device</div>
    </div>
    <div>
      <div style="font-size:2rem;font-weight:700;color:var(--accent-green);">7</div>
      <div style="font-size:12px;color:var(--text-secondary);margin-top:4px;">Spending categories</div>
    </div>
    <div>
      <div style="font-size:2rem;font-weight:700;color:var(--accent-orange);">∞</div>
      <div style="font-size:12px;color:var(--text-secondary);margin-top:4px;">Expenses you can track</div>
    </div>
    <div>
      <div style="font-size:2rem;font-weight:700;color:var(--accent-purple);">Free</div>
      <div style="font-size:12px;color:var(--text-secondary);margin-top:4px;">No account needed</div>
    </div>
  </div>
</section>

<!-- ── Features ── -->
<section id="features" style="padding:72px 24px;background:var(--surface);">
  <div style="max-width:1100px;margin:auto;">
    <h2 style="font-size:clamp(1.5rem,3vw,2.2rem);font-weight:700;text-align:center;margin:0 0 10px;">Why choose PocketLedger?</h2>
    <p style="text-align:center;color:var(--text-secondary);margin:0 0 52px;">Everything you need to take control of your spending</p>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:20px;">

      <div class="card feature-card" style="padding:32px;">
        <div style="width:48px;height:48px;border-radius:50%;background:rgba(0,122,255,0.1);display:flex;align-items:center;justify-content:center;margin-bottom:18px;font-size:22px;">💳</div>
        <h3 style="font-size:16px;font-weight:600;margin:0 0 8px;">Expense Tracking</h3>
        <p style="color:var(--text-secondary);line-height:1.6;margin:0;font-size:13px;">Log expenses instantly with categories. Simple, fast, and always at your fingertips.</p>
      </div>

      <div class="card feature-card" style="padding:32px;">
        <div style="width:48px;height:48px;border-radius:50%;background:rgba(52,199,89,0.1);display:flex;align-items:center;justify-content:center;margin-bottom:18px;font-size:22px;">📊</div>
        <h3 style="font-size:16px;font-weight:600;margin:0 0 8px;">Smart Insights</h3>
        <p style="color:var(--text-secondary);line-height:1.6;margin:0;font-size:13px;">Get intelligent spending insights. See where your money goes and identify patterns instantly.</p>
      </div>

      <div class="card feature-card" style="padding:32px;">
        <div style="width:48px;height:48px;border-radius:50%;background:rgba(255,59,48,0.1);display:flex;align-items:center;justify-content:center;margin-bottom:18px;font-size:22px;">🎯</div>
        <h3 style="font-size:16px;font-weight:600;margin:0 0 8px;">Budget Control</h3>
        <p style="color:var(--text-secondary);line-height:1.6;margin:0;font-size:13px;">Set monthly budgets and stay on track. Visual indicators keep you aware of your spending limits.</p>
      </div>

      <div class="card feature-card" style="padding:32px;">
        <div style="width:48px;height:48px;border-radius:50%;background:rgba(175,82,222,0.1);display:flex;align-items:center;justify-content:center;margin-bottom:18px;font-size:22px;">🔒</div>
        <h3 style="font-size:16px;font-weight:600;margin:0 0 8px;">100% Private</h3>
        <p style="color:var(--text-secondary);line-height:1.6;margin:0;font-size:13px;">All data is stored locally in your browser. Nothing is sent to any server. Your finances stay yours.</p>
      </div>

      <div class="card feature-card" style="padding:32px;">
        <div style="width:48px;height:48px;border-radius:50%;background:rgba(90,200,250,0.15);display:flex;align-items:center;justify-content:center;margin-bottom:18px;font-size:22px;">📤</div>
        <h3 style="font-size:16px;font-weight:600;margin:0 0 8px;">Export Data</h3>
        <p style="color:var(--text-secondary);line-height:1.6;margin:0;font-size:13px;">Download your expense history anytime as a JSON file for safekeeping or further analysis.</p>
      </div>

      <div class="card feature-card" style="padding:32px;">
        <div style="width:48px;height:48px;border-radius:50%;background:rgba(255,149,0,0.1);display:flex;align-items:center;justify-content:center;margin-bottom:18px;font-size:22px;">🌙</div>
        <h3 style="font-size:16px;font-weight:600;margin:0 0 8px;">Dark Mode</h3>
        <p style="color:var(--text-secondary);line-height:1.6;margin:0;font-size:13px;">Easy on the eyes at night. Toggle dark mode from settings to match your preference.</p>
      </div>

    </div>
  </div>
</section>

<!-- ── Dashboard Preview ── -->
<section style="padding:72px 24px;background:var(--bg);">
  <div style="max-width:900px;margin:auto;">
    <h2 style="font-size:clamp(1.5rem,3vw,2.2rem);font-weight:700;text-align:center;margin:0 0 10px;">Your dashboard awaits</h2>
    <p style="text-align:center;color:var(--text-secondary);margin:0 0 44px;">Clean, minimal design that keeps you focused on what matters</p>

    <!-- Mock dashboard card -->
    <div class="card preview-mock" style="padding:28px;">
      <!-- Summary row mock -->
      <div class="grid-3" style="margin-bottom:20px;">
        <div style="background:#fff;border-radius:16px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.06);">
          <div style="font-size:10px;color:var(--text-secondary);font-weight:600;margin-bottom:8px;">TOTAL SPENT</div>
          <div style="font-size:22px;font-weight:700;color:var(--accent-red);">$847</div>
        </div>
        <div style="background:#fff;border-radius:16px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.06);">
          <div style="font-size:10px;color:var(--text-secondary);font-weight:600;margin-bottom:8px;">BUDGET LEFT</div>
          <div style="font-size:22px;font-weight:700;color:var(--accent-green);">$1,153</div>
        </div>
        <div style="background:#fff;border-radius:16px;padding:16px;box-shadow:0 1px 6px rgba(0,0,0,0.06);">
          <div style="font-size:10px;color:var(--text-secondary);font-weight:600;margin-bottom:8px;">TOP CATEGORY</div>
          <div style="font-size:18px;font-weight:700;">🍔 Food</div>
        </div>
      </div>

      <!-- Progress bar -->
      <div style="background:#fff;border-radius:16px;padding:18px;margin-bottom:16px;box-shadow:0 1px 6px rgba(0,0,0,0.06);">
        <div style="display:flex;justify-content:space-between;margin-bottom:10px;">
          <span style="font-size:12px;font-weight:600;color:var(--text-secondary);">Budget Usage</span>
          <span style="font-size:12px;font-weight:600;color:var(--accent-orange);">42%</span>
        </div>
        <div class="progress-track">
          <div class="progress-fill" style="width:42%;background:var(--accent-orange);"></div>
        </div>
      </div>

      <!-- Expense rows mock -->
      <div style="background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 1px 6px rgba(0,0,0,0.06);">
        <div style="padding:14px 18px;border-bottom:1px solid var(--border);font-size:11px;font-weight:600;color:var(--text-tertiary);">RECENT EXPENSES</div>
        <div style="padding:12px 18px;display:flex;align-items:center;gap:12px;border-bottom:1px solid var(--border);">
          <span style="font-size:20px;">🍔</span>
          <div style="flex:1;"><div style="font-size:13px;font-weight:600;">Food</div><div style="font-size:11px;color:var(--text-tertiary);">Apr 17, 2026</div></div>
          <div style="font-size:14px;font-weight:700;">-$42.50</div>
        </div>
        <div style="padding:12px 18px;display:flex;align-items:center;gap:12px;border-bottom:1px solid var(--border);">
          <span style="font-size:20px;">🚗</span>
          <div style="flex:1;"><div style="font-size:13px;font-weight:600;">Transport</div><div style="font-size:11px;color:var(--text-tertiary);">Apr 16, 2026</div></div>
          <div style="font-size:14px;font-weight:700;">-$18.00</div>
        </div>
        <div style="padding:12px 18px;display:flex;align-items:center;gap:12px;">
          <span style="font-size:20px;">🛍️</span>
          <div style="flex:1;"><div style="font-size:13px;font-weight:600;">Shopping</div><div style="font-size:11px;color:var(--text-tertiary);">Apr 15, 2026</div></div>
          <div style="font-size:14px;font-weight:700;">-$129.99</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ── CTA ── -->
<section style="padding:72px 24px;background:var(--accent-blue);">
  <div style="max-width:600px;margin:auto;text-align:center;">
    <h2 style="font-size:clamp(1.5rem,3vw,2.2rem);font-weight:700;color:#fff;margin:0 0 14px;">Start tracking today</h2>
    <p style="color:rgba(255,255,255,0.8);margin:0 0 36px;font-size:15px;line-height:1.6;">No sign-up. No subscription. Just open the dashboard and start logging your expenses.</p>
    <a href="dashboard.html" class="btn" style="background:#fff;color:var(--accent-blue);font-size:15px;padding:14px 36px;">Open Dashboard →</a>
  </div>
</section>

<!-- ── Footer ── -->
<footer style="background:var(--text-primary);padding:32px 24px;text-align:center;">
  <div style="color:rgba(255,255,255,0.5);font-size:12px;">
    💰 PocketLedger &nbsp;·&nbsp; Your finances, your device, your control.
  </div>
</footer>

<div id="toast" class="toast"></div>

</body>
</html>
