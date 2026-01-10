document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const page = document.body.dataset.page || 'home';

  /** Ortak logo (her zaman ana sayfaya götürür) */
  const isProjectPage = ['film', 'cryptoradar', 'flutter-todo-app', 'fullstack-developer-case', 'crm', 'restapi', 'task-manager', 'univento-fastapi', 'univento-mobile', 'univento-web', 'usg-challenge', 'movieapp-mobile', 'digital-card-platform'].includes(page);
  const isNotesPage = ['flutter-notes'].includes(page);
  const logoHtml = `<a href="${isProjectPage || isNotesPage ? '../index.html' : 'index.html'}" class="logo">Berk Akgül</a>`;

  /** Sayfaya göre link setleri */
  let links = '';

  switch (page) {
    case 'home':
      links = [
        { href: '#about', label: 'Hakkımda' },
        { href: '#skills', label: 'Yetenekler' },
        { href: '#projects', label: 'Projeler' },
        { href: '#notes', label: 'Notlarım' },
        { href: '#contact', label: 'İletişim' }
      ]
        .map(link => `<a href="${link.href}">${link.label}</a>`)
        .join('');
      break;

    case 'film':
      links = [
        { href: '../index.html', label: 'Ana Sayfa' },
        { href: '../mobile.html', label: 'Mobil' }
      ]
        .map(link => `<a href="${link.href}">${link.label}</a>`)
        .join('');
      break;

    case 'frontend':
    case 'backend':
    case 'mobile':
    case 'notes':
      links = `<a href="index.html">Ana Sayfa</a>`;
      break;

    default:
      // Proje detay ve not sayfaları için "../" ekle
      const indexUrl = isProjectPage || isNotesPage ? '../index.html' : 'index.html';
      links = `<a href="${indexUrl}">Ana Sayfa</a>`;
  }

  navbar.innerHTML = `
    <div class="container nav-inner">
      ${logoHtml}
      <nav class="nav-menu">
        ${links}
      </nav>
    </div>
  `;

  // Anchor linklere smooth scroll ekle
  const navMenu = navbar.querySelector('.nav-menu');
  if (navMenu) {
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', (e) => {
        // Eğer anchor link ise (#about, #skills gibi)
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const targetSection = document.querySelector(href);
          
          if (targetSection) {
            // Smooth scroll
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });
  }
});


