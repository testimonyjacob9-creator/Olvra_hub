/* Olvra Hub — small UI enhancer: soft background light, scroll progress, reveal animations,
   glass spotlight, and a sticky-nav state. No dependencies. Everything degrades gracefully. */
(function () {
  var doc = document, root = doc.documentElement;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function ready(fn){ doc.readyState === 'loading' ? doc.addEventListener('DOMContentLoaded', fn) : fn(); }

  ready(function () {
    /* 1. Floating background light */
    if (!doc.querySelector('.aurora')) {
      var a = doc.createElement('div');
      a.className = 'aurora'; a.setAttribute('aria-hidden', 'true');
      a.innerHTML = '<i></i><i></i><i></i>';
      doc.body.insertBefore(a, doc.body.firstChild);
    }

    /* 2. Scroll progress bar + sticky nav state */
    var bar = doc.createElement('div');
    bar.className = 'scroll-progress'; bar.setAttribute('aria-hidden', 'true');
    doc.body.appendChild(bar);
    var nav = doc.querySelector('nav');
    var ticking = false;
    function onScroll() {
      var h = root.scrollHeight - window.innerHeight;
      bar.style.transform = 'scaleX(' + (h > 0 ? Math.min(window.scrollY / h, 1) : 0) + ')';
      if (nav) nav.classList.toggle('scrolled', window.scrollY > 24);
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
    }, { passive: true });
    onScroll();

    /* 3. Scroll reveal (with a small stagger for siblings) */
    var selectors = '.hero > div, .hero .chip, .section-head, .glass-panel, .panel, .sys-card, .step, .docs-result-item, .faq-item, footer';
    var io = ('IntersectionObserver' in window && !reduce) ? new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }) : null;

    function track(el) {
      if (el.__rv) return; el.__rv = true;
      if (!io) return;
      el.classList.add('rv');
      var sibs = el.parentElement ? el.parentElement.children : [];
      var i = Array.prototype.indexOf.call(sibs, el);
      el.style.setProperty('--d', Math.min(i, 8) * 70 + 'ms');
      io.observe(el);
    }
    if (io) root.classList.add('js-reveal');
    function scan(scope) {
      (scope || doc).querySelectorAll(selectors).forEach(track);
    }
    scan();

    /* cards are rendered later by the page script — watch for them */
    var grid = doc.getElementById('systemsGrid');
    if (grid && 'MutationObserver' in window) {
      new MutationObserver(function (muts) {
        muts.forEach(function (m) { m.addedNodes.forEach(function (n) { if (n.nodeType === 1) track(n); }); });
      }).observe(grid, { childList: true });
    }
    var docsBox = doc.getElementById('docsResults');
    if (docsBox && 'MutationObserver' in window) {
      new MutationObserver(function () { scan(docsBox); }).observe(docsBox, { childList: true });
    }

    /* 4. Glass spotlight follows the pointer */
    if (!reduce) {
      doc.addEventListener('pointermove', function (e) {
        var t = e.target.closest && e.target.closest('.glass-panel, .panel, .sys-card');
        if (!t) return;
        var r = t.getBoundingClientRect();
        t.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        t.style.setProperty('--my', (e.clientY - r.top) + 'px');
      }, { passive: true });
    }

    /* 5. Highlight the nav link for the section being read (home page) */
    var links = doc.querySelectorAll('.nav-links a[href^="#"]');
    if (links.length && 'IntersectionObserver' in window) {
      var map = {};
      links.forEach(function (l) { map[l.getAttribute('href').slice(1)] = l; });
      var spy = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting && map[e.target.id]) {
            links.forEach(function (l) { l.classList.remove('active'); });
            map[e.target.id].classList.add('active');
          }
        });
      }, { rootMargin: '-45% 0px -50% 0px' });
      Object.keys(map).forEach(function (id) { var s = doc.getElementById(id); if (s) spy.observe(s); });
    }
  });
})();
