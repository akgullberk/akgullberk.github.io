document.addEventListener('DOMContentLoaded', () => {
  const bodyPage = document.body.dataset.page;
  const container = document.querySelector('.accordion[data-projects]');
  if (!container || !bodyPage) return;

  /** Sayfa bazlı proje verileri */
  const dataByPage = {
    mobile: [
      {
        title: '🦋 Flutter',
        projects: [
          {
            name: 'Flutter Todo App: Clean Architecture ve Çoklu State Management Yapısı',
            tech: 'Flutter, Clean Architecture, State Management',
            href: 'film.html',
            external: false,
            label: 'Detay →'
          },
          {
            name: 'Spotify Klonu',
            tech: 'Flutter, Clean Architecture',
            href: 'https://github.com/akgullberk',
            external: true,
            label: 'GitHub →'
          }
        ]
      },
      {
        title: '🤖 Kotlin',
        projects: [
          {
            name: 'Not Uygulaması',
            tech: 'Kotlin, Room, MVVM',
            href: 'https://github.com/akgullberk',
            external: true,
            label: 'GitHub →'
          },
          {
            name: 'Weather App',
            tech: 'Kotlin, REST API',
            href: 'https://github.com/akgullberk',
            external: true,
            label: 'GitHub →'
          }
        ]
      },
      {
        title: '⚛️ React Native',
        projects: [
          {
            name: 'Alışveriş Asistanı',
            tech: 'React Native, Zustand, REST API',
            href: 'https://github.com/akgullberk',
            external: true,
            label: 'GitHub →'
          }
        ]
      }
    ],
    frontend: [
      {
        title: 'React',
        projects: [
          {
            name: 'Portfolio Website',
            tech: 'React, Tailwind CSS',
            href: 'https://github.com/akgullberk',
            external: true,
            label: 'GitHub →'
          },
          {
            name: 'Dashboard',
            tech: 'React, Chart.js',
            href: 'https://github.com/akgullberk',
            external: true,
            label: 'GitHub →'
          }
        ]
      },
      {
        title: 'Angular',
        projects: [
          {
            name: 'CRM Paneli',
            tech: 'Angular, RxJS',
            href: 'crm.html',
            external: false,
            label: 'Detay →'
          }
        ]
      }
    ],
    backend: [
      {
        title: 'Spring Boot',
        projects: [
          {
            name: 'REST API',
            tech: 'Spring Boot, PostgreSQL',
            href: 'restapi.html',
            external: false,
            label: 'Detay →'
          },
          {
            name: 'Raporlama Servisi',
            tech: 'Spring Boot, JPA, Docker',
            href: 'https://github.com/akgullberk',
            external: true,
            label: 'GitHub →'
          }
        ]
      },
      {
        title: 'Node.js',
        projects: [
          {
            name: 'Bildirim Sistemi',
            tech: 'Node.js, Firebase Cloud Messaging',
            href: 'https://github.com/akgullberk',
            external: true,
            label: 'GitHub →'
          },
          {
            name: 'Gerçek Zamanlı Sohbet',
            tech: 'Node.js, WebSocket',
            href: 'https://github.com/akgullberk',
            external: true,
            label: 'GitHub →'
          }
        ]
      },
      {
        title: 'FastAPI',
        projects: [
          {
            name: 'ML Servis Katmanı',
            tech: 'FastAPI, Docker, Celery',
            href: 'https://github.com/akgullberk',
            external: true,
            label: 'GitHub →'
          }
        ]
      }
    ]
  };

  const sections = dataByPage[bodyPage];
  if (!sections) return;

  const html = sections
    .map(
      (section) => `
      <details open class="accordion-item">
        <summary>
          <span>${section.title}</span>
          <span class="accordion-icon">▲</span>
        </summary>
        <div class="project-list">
          <div class="projects-grid">
            ${section.projects
              .map(
                (p) => `
              <div class="project-card${bodyPage === 'mobile' ? ' tech-card' : ''}">
                <h4>${p.name}</h4>
                <p>${p.tech}</p>
                <a href="${p.href}"${p.external ? ' target="_blank"' : ''}>${p.label}</a>
              </div>`
              )
              .join('')}
          </div>
        </div>
      </details>`
    )
    .join('');

  container.innerHTML = html;
});


