const history_stack = [];

function showPage(id, addHistory) {
  const prev = document.querySelector('.page.active');
  const prevId = prev ? prev.id.replace('page-','') : null;
  if (prevId && prevId !== id && addHistory !== false) history_stack.push(prevId);
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => {
    if (n.getAttribute('onclick') && n.getAttribute('onclick').includes("'" + id + "'")) n.classList.add('active');
  });
  document.getElementById('main').scrollTo(0, 0);
  const bb = document.getElementById('page-' + id).querySelector('.back-btn');
  if (bb) bb.style.display = (history_stack.length > 0 && id !== 'home') ? 'flex' : 'none';
}

function goBack() {
  if (history_stack.length > 0) {
    const prev = history_stack.pop();
    showPage(prev, false);
  }
}

function toggleCard(id) {
  const exp = document.getElementById('exp-' + id);
  const lbl = document.getElementById('lbl-' + id);
  const open = exp.classList.toggle('open');
  lbl.textContent = open ? '▲ Hide details' : '▼ More details';
}

function filterNav(q) {
  q = q.toLowerCase().trim();
  document.querySelectorAll('.nav-item').forEach(item => {
    const label = (item.dataset.label || '') + ' ' + item.textContent;
    item.style.display = (!q || label.toLowerCase().includes(q)) ? 'flex' : 'none';
  });
  document.querySelectorAll('.nav-group').forEach(g => {
    let next = g.nextElementSibling;
    let anyVisible = false;
    while (next && !next.classList.contains('nav-group')) {
      if (next.style.display !== 'none') anyVisible = true;
      next = next.nextElementSibling;
    }
    g.style.display = anyVisible ? 'block' : 'none';
  });
}
window.addEventListener('DOMContentLoaded', () => showPage('home', false));