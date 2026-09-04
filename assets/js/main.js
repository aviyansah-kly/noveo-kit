(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const revealEls = [...document.querySelectorAll('.reveal')];
  if (reduced || !('IntersectionObserver' in window)) {
    revealEls.forEach(el => el.classList.add('show'));
  } else {
    const revealIO = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        revealIO.unobserve(entry.target);
      }
    }), { threshold: .12 });
    revealEls.forEach(el => revealIO.observe(el));
  }

  const markerEls = [...document.querySelectorAll('.highlight')];
  if (reduced || !('IntersectionObserver' in window)) {
    markerEls.forEach(el => el.classList.add('marker-show'));
  } else {
    const markerIO = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('marker-show');
        markerIO.unobserve(entry.target);
      }
    }), { threshold: .5 });
    markerEls.forEach(el => markerIO.observe(el));
  }

  const messages = [...document.querySelectorAll('.top-message')];
  let msgIndex = 0;
  if (messages.length > 1 && !reduced) {
    window.setInterval(() => {
      const current = messages[msgIndex];
      current.classList.remove('active');
      current.classList.add('exit');
      msgIndex = (msgIndex + 1) % messages.length;
      const next = messages[msgIndex];
      next.classList.remove('exit');
      requestAnimationFrame(() => next.classList.add('active'));
      window.setTimeout(() => current.classList.remove('exit'), 500);
    }, 3400);
  }

  document.querySelectorAll('form[data-demo-form]').forEach(form => {
    form.addEventListener('submit', event => event.preventDefault());
  });

  document.querySelectorAll('.mobile-nav-toggle').forEach(toggle => {
    const header = toggle.closest('.header');
    const menu = header?.querySelector('.mobile-menu');
    if (!menu) return;
    const closeMenu = () => { menu.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); };
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    window.addEventListener('resize', () => { if (window.innerWidth > 980) closeMenu(); });
    document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  });

  document.querySelectorAll('.foot-links a').forEach(link => {
    const label = link.textContent.trim().toLowerCase();
    if (label === 'privacy') link.setAttribute('href', 'privacy.html');
    if (label === 'terms') link.setAttribute('href', 'terms.html');
  });
})();

document.querySelectorAll('.nav-group').forEach(group=>{
  group.addEventListener('toggle',()=>{
    if(!group.open)return;
    document.querySelectorAll('.nav-group[open]').forEach(other=>{if(other!==group)other.removeAttribute('open')});
  });
});
document.addEventListener('click',event=>{
  if(event.target.closest('.nav-group'))return;
  document.querySelectorAll('.nav-group[open]').forEach(group=>group.removeAttribute('open'));
});
document.addEventListener('keydown',event=>{
  if(event.key==='Escape')document.querySelectorAll('.nav-group[open]').forEach(group=>group.removeAttribute('open'));
});
