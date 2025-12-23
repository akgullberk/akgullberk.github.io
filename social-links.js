document.addEventListener('DOMContentLoaded', () => {
  const containers = document.querySelectorAll('.contact-links[data-variant="main"]');
  if (!containers.length) return;

  const links = [
    {
      href: 'https://github.com/akgullberk',
      label: 'GitHub',
      icon: 'github.png',
      alt: 'GitHub'
    },
    {
      href: 'https://www.linkedin.com/in/akgullberk/',
      label: 'LinkedIn',
      icon: 'linkedin.png',
      alt: 'LinkedIn'
    },
    {
      href: 'https://medium.com/@akgullberk',
      label: 'Medium',
      icon: 'medium.png',
      alt: 'Medium'
    }
  ];

  const html = links
    .map(
      link => `
      <a href="${link.href}" target="_blank">
        <span class="icon-box">
          <img src="${link.icon}" alt="${link.alt}">
        </span>
        ${link.label}
      </a>`
    )
    .join('');

  containers.forEach((el) => {
    el.innerHTML = html;
  });
});


