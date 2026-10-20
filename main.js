// Menu mobile
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open);
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('is-open')));
}

// Filtres de la page Ressources
const buttons = document.querySelectorAll('.filters button');
buttons.forEach(btn => btn.addEventListener('click', () => {
  const f = btn.dataset.filter;
  buttons.forEach(b => b.setAttribute('aria-pressed', b === btn));
  document.querySelectorAll('.post[data-rubrique]').forEach(p => {
    p.style.display = (f === 'tout' || p.dataset.rubrique === f) ? '' : 'none';
  });
}));
