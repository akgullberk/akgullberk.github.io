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
      <nav>
        ${links}
      </nav>
    </div>
  `;
});


