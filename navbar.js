document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const page = document.body.dataset.page || 'home';

  /** Ortak logo (her zaman ana sayfaya götürür) */
  const logoHtml = '<a href="index.html" class="logo">Berk Akgül</a>';

  /** Sayfaya göre link setleri */
  let links = '';

  switch (page) {
    case 'home':
      links = [
        { href: '#about', label: 'Hakkımda' },
        { href: '#skills', label: 'Yetenekler' },
        { href: '#projects', label: 'Projeler' },
        { href: '#contact', label: 'İletişim' }
      ]
        .map(link => `<a href="${link.href}">${link.label}</a>`)
        .join('');
      break;

    case 'film':
      links = [
        { href: 'index.html', label: 'Ana Sayfa' },
        { href: 'mobile.html', label: 'Mobil' }
      ]
        .map(link => `<a href="${link.href}">${link.label}</a>`)
        .join('');
      break;

    case 'frontend':
    case 'backend':
    case 'mobile':
      links = `<a href="index.html">Ana Sayfa</a>`;
      break;

    default:
      links = `<a href="index.html">Ana Sayfa</a>`;
  }

  navbar.innerHTML = `
    <div class="container nav-inner">
      ${logoHtml}
      <button class="nav-toggle" aria-label="Menüyü aç/kapat" aria-expanded="false">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav class="nav-menu">
        ${links}
      </nav>
    </div>
  `;

  // Hamburger menü toggle
  const navToggle = navbar.querySelector('.nav-toggle');
  const navMenu = navbar.querySelector('.nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('active');
      navToggle.classList.toggle('active');
      navToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Menü dışına tıklandığında kapat
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target) && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });

    // Linklere tıklandığında mobil menüyü kapat
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }
});


