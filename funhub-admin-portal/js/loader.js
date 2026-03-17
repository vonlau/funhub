// loader.js — fetches sidebar and page partials and injects them into the DOM

const PAGE_MAP = {
  'home': 'pages/home.html',
  'dashboard': 'pages/dashboard.html',
  'users': 'pages/users.html',
  'sales': 'pages/sales.html',
  'transactions': 'pages/transactions.html',
  'articles': 'pages/articles.html',
  'engagements': 'pages/engagements.html',
  'coins': 'pages/coins.html',
  'points': 'pages/points.html',
  'missions': 'pages/missions.html',
  'campaigns': 'pages/campaigns.html',
  'approvals': 'pages/approvals.html',
  'mobile': 'pages/mobile.html',
  'notifications': 'pages/notifications.html',
  'locations': 'pages/locations.html',
  'settings': 'pages/settings.html',
  'finance': 'pages/finance.html',
  'marketing': 'pages/marketing.html',
  'roles': 'pages/roles.html',
  'helpcenter': 'pages/helpcenter.html'
};

// Cache for loaded page HTML
const pageCache = {};

async function loadSidebar() {
  const res = await fetch('components/sidebar.html');
  const html = await res.text();
  document.getElementById('sidebar-container').innerHTML = html;
}

async function loadPage(id) {
  if (pageCache[id]) {
    injectPage(id, pageCache[id]);
    return;
  }
  const src = PAGE_MAP[id];
  if (!src) { console.warn('Unknown page:', id); return; }
  const res = await fetch(src);
  const html = await res.text();
  pageCache[id] = html;
  injectPage(id, html);
}

function injectPage(id, html) {
  const container = document.getElementById('page-container');
  // Remove all existing pages
  container.innerHTML = '';
  const wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  container.appendChild(wrapper.firstElementChild);
  // Activate correct nav item
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => {
    const oc = n.getAttribute('onclick') || '';
    if (oc.includes("'" + id + "'")) n.classList.add('active');
  });
  document.getElementById('main').scrollTo(0, 0);
  // Show/hide back button
  const bb = container.querySelector('.back-btn');
  if (bb) bb.style.display = (history_stack.length > 0 && id !== 'home') ? 'flex' : 'none';
}

// Override showPage to use loader
async function showPage(id, addHistory) {
  const activeEl = document.querySelector('.page.active') ||
                   document.querySelector('#page-container > div');
  const prevId = activeEl ? (activeEl.id || '').replace('page-','') : null;
  if (prevId && prevId !== id && addHistory !== false) history_stack.push(prevId);
  await loadPage(id);
}

// Boot
(async () => {
  await loadSidebar();
  await showPage('home', false);
})();
