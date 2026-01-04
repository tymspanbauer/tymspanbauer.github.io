(function () {
  const here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const hash = (location.hash || '').toLowerCase();

  document.querySelectorAll('nav a').forEach(a => {
    const href = (a.getAttribute('href') || '').toLowerCase();
    const page = href.split('#')[0];
    const anchor = href.includes('#') ? ('#' + href.split('#')[1]) : '';

    // Page match
    if (page && here === page && !anchor) a.classList.add('active');

    // Same page anchor match (index.html#section)
    if (page && here === page && anchor && hash === anchor) a.classList.add('active');

    // Pure anchor hrefs like #contact (optional)
    if (!page && anchor && hash === anchor) a.classList.add('active');
  });
})();
