// SnackPlot Main Application Bundle (index.c3f47533.js)
(function () {
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function renderHeader(currentPath) {
    var navItems = [
      { href: '/', label: 'SnackPlot', isBrand: true },
      { href: '/source/', label: 'Platforms' },
      { href: '/categories', label: 'Genres' },
      { href: '/about-us', label: 'About Us' },
      { href: '/contact-us', label: 'Contact Us' }
    ];
    var linksHtml = navItems.slice(1).map(function (item) {
      var isActive = currentPath === item.href || (item.href !== '/' && currentPath.indexOf(item.href) === 0);
      return '<a href="' + item.href + '" class="sp-nav-link' + (isActive ? ' active' : '') + '">' + escapeHtml(item.label) + '</a>';
    }).join('');

    return (
      '<header class="sp-header">' +
        '<div class="sp-header-inner">' +
          '<a href="/" class="sp-brand">' +
            '<img class="sp-brand-logo" src="https://snackplot-s3-bucket.s3.us-west-2.amazonaws.com/uploads/20261029/8846d35c51d8e22f8bd157f6bd7341f4.png" alt="SnackPlot" />' +
            '<span class="sp-brand-text">SnackPlot</span>' +
          '</a>' +
          '<nav class="sp-nav">' +
            '<a href="/" class="sp-nav-link' + (currentPath === '/' ? ' active' : '') + '">Home</a>' +
            linksHtml +
          '</nav>' +
        '</div>' +
      '</header>'
    );
  }

  function renderFooter() {
    return (
      '<footer class="sp-footer">' +
        '<div class="sp-footer-inner">' +
          '<div><strong>SnackPlot</strong> — Discover short dramas on SnackPlot. Explore romance, werewolf, revenge, and billionaire stories, find your next favorite series, and start watching online.</div>' +
          '<div class="sp-footer-links">' +
            '<a href="/">Home</a>' +
            '<a href="/source/">Platforms</a>' +
            '<a href="/categories">Genres</a>' +
            '<a href="/about-us">About Us</a>' +
            '<a href="/contact-us">Contact Us</a>' +
          '</div>' +
        '</div>' +
      '</footer>'
    );
  }

  function renderHome(data) {
    var modules = data.modules || [];
    var mustMod = modules.find(function (m) { return m.key === 'must'; }) || { name: 'MUST-WATCH', items: [] };
    var newsMod = modules.find(function (m) { return m.key === 'news'; }) || { name: 'NEW-WATCH', items: [] };
    var topMod = modules.find(function (m) { return m.key === 'top'; }) || { name: 'TOP OF THIS WEEK', items: [] };
    var heroItem = (mustMod.items && mustMod.items[0]) || (data.catalog && data.catalog.list && data.catalog.list[0]);

    var heroHtml = '';
    if (heroItem) {
      var heroGenres = (heroItem.genres || heroItem.home_genre || []).map(function (g) {
        return '<span class="sp-tag">' + escapeHtml(g) + '</span>';
      }).join('');
      heroHtml = (
        '<section class="sp-hero">' +
          '<div class="sp-hero-info">' +
            '<div class="sp-hero-badge">MUST-WATCH</div>' +
            '<h1 class="sp-hero-title">' + escapeHtml(heroItem.title) + '</h1>' +
            '<div class="sp-hero-genres">' + heroGenres + '</div>' +
            '<p class="sp-hero-desc">' + escapeHtml(heroItem.description) + '</p>' +
            '<div class="sp-hero-actions">' +
              '<a href="' + escapeHtml(heroItem.path) + '" class="sp-btn-primary">▶ Watch Now</a>' +
              '<a href="' + escapeHtml(heroItem.path) + '" class="sp-btn-secondary">Series Info</a>' +
            '</div>' +
          '</div>' +
          '<a href="' + escapeHtml(heroItem.path) + '" class="sp-hero-media">' +
            '<img src="' + escapeHtml(heroItem.image_h || heroItem.image) + '" alt="' + escapeHtml(heroItem.title) + '" />' +
          '</a>' +
        '</section>'
      );
    }

    var mustCards = (mustMod.items || []).map(function (item) {
      var g = (item.home_genre && item.home_genre[0]) || (item.genres && item.genres[0]) || '';
      return (
        '<a href="' + escapeHtml(item.path) + '" class="sp-card">' +
          '<div class="sp-card-poster">' +
            '<img src="' + escapeHtml(item.home_card_image || item.image) + '" alt="' + escapeHtml(item.title) + '" loading="lazy" />' +
          '</div>' +
          '<div class="sp-card-body">' +
            '<div class="sp-card-title">' + escapeHtml(item.title) + '</div>' +
            '<div class="sp-card-meta">' + escapeHtml(g) + '</div>' +
          '</div>' +
        '</a>'
      );
    }).join('');

    var newsCards = (newsMod.items || []).map(function (item) {
      var tags = (item.genres || []).map(function (g) {
        return '<span class="sp-tag">' + escapeHtml(g) + '</span>';
      }).join('');
      return (
        '<a href="' + escapeHtml(item.path) + '" class="sp-news-card">' +
          '<div class="sp-news-poster">' +
            '<img src="' + escapeHtml(item.home_card_image || item.image) + '" alt="' + escapeHtml(item.title) + '" loading="lazy" />' +
          '</div>' +
          '<div class="sp-news-info">' +
            '<div class="sp-news-title">' + escapeHtml(item.title) + '</div>' +
            '<div class="sp-news-genres">' + tags + '</div>' +
            '<p class="sp-news-desc">' + escapeHtml(item.home_description || item.description) + '</p>' +
          '</div>' +
        '</a>'
      );
    }).join('');

    var topCards = (topMod.items || []).map(function (item, idx) {
      var rank = idx + 1;
      var rankClass = rank <= 3 ? ' sp-rank-' + rank : '';
      var g = (item.home_genre && item.home_genre[0]) || (item.genres && item.genres[0]) || '';
      return (
        '<a href="' + escapeHtml(item.path) + '" class="sp-top-card">' +
          '<div class="sp-rank' + rankClass + '">' + rank + '</div>' +
          '<div class="sp-top-poster">' +
            '<img src="' + escapeHtml(item.home_card_image || item.image) + '" alt="' + escapeHtml(item.title) + '" loading="lazy" />' +
          '</div>' +
          '<div class="sp-top-info">' +
            '<div class="sp-top-title">' + escapeHtml(item.title) + '</div>' +
            '<div class="sp-top-heat">🔥 Popularity: ' + escapeHtml(item.home_heat_display || '') + '</div>' +
            '<div class="sp-top-genre">' + escapeHtml(g) + '</div>' +
          '</div>' +
        '</a>'
      );
    }).join('');

    return (
      '<div class="sp-shell">' +
        renderHeader(data.path || '/') +
        '<main class="sp-main">' +
          '<div class="sp-breadcrumbs"><a href="/">Home</a></div>' +
          heroHtml +
          '<section class="sp-section">' +
            '<div class="sp-section-header"><h2 class="sp-section-title">' + escapeHtml(mustMod.name) + '</h2></div>' +
            '<div class="sp-must-grid">' + mustCards + '</div>' +
          '</section>' +
          '<section class="sp-section">' +
            '<div class="sp-section-header"><h2 class="sp-section-title">' + escapeHtml(newsMod.name) + '</h2></div>' +
            '<div class="sp-news-grid">' + newsCards + '</div>' +
          '</section>' +
          '<section class="sp-section">' +
            '<div class="sp-section-header"><h2 class="sp-section-title">' + escapeHtml(topMod.name) + '</h2></div>' +
            '<div class="sp-top-grid">' + topCards + '</div>' +
          '</section>' +
        '</main>' +
        renderFooter() +
      '</div>'
    );
  }

  function init() {
    var bootstrapEl = document.getElementById('seo-bootstrap');
    var appEl = document.getElementById('app');
    if (bootstrapEl && appEl) {
      try {
        var data = JSON.parse(bootstrapEl.textContent || '{}');
        if (data.kind === 'home') {
          appEl.innerHTML = renderHome(data);
          document.documentElement.classList.add('sp-app-mounted');
        }
      } catch (e) {
        console.error(e);
      }
    }
    if (window.__dramaSeoFirstPaint && typeof window.__dramaSeoFirstPaint.complete === 'function') {
      window.__dramaSeoFirstPaint.complete();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
