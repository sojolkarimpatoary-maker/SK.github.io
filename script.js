(() => {
  const intro = document.getElementById('intro');
  const menu = document.getElementById('menu');
  const navLinks = document.getElementById('navLinks');
  const cube = document.getElementById('cube');

  window.addEventListener('load', () => {
    setTimeout(() => intro?.classList.add('done'), 3900);
  });

  menu?.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
    menu.textContent = open ? '×' : '☰';
  });

  navLinks?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menu?.setAttribute('aria-expanded', 'false');
    if (menu) menu.textContent = '☰';
  }));

  cube?.addEventListener('mouseenter', () => cube.style.animationPlayState = 'paused');
  cube?.addEventListener('mouseleave', () => cube.style.animationPlayState = 'running');
  cube?.addEventListener('focusin', () => cube.style.animationPlayState = 'paused');
  cube?.addEventListener('focusout', () => cube.style.animationPlayState = 'running');

  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
