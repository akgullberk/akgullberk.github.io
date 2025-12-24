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
            name: 'MovieApp: Clean Architecture ile Modern Film ve TV Dizisi Uygulaması',
            tech: 'Flutter, Clean Architecture, Bloc',
            href: 'movieapp-mobile.html',
            external: false,
            label: 'Detay →'
          },
          {
            name: 'Flutter Todo App: Clean Architecture ve Çoklu State Management Yapısı',
            tech: 'Flutter, Clean Architecture, State Management',
            href: 'flutter-todo-app.html',
            external: false,
            label: 'Detay →'
          },
        ]
      },
      {
        title: '🤖 Kotlin',
        projects: [
          {
            name: 'USG Challenge Mobil Uygulama: Clean Architecture ile Türkiye Şehir Rehberi',
            tech: 'Kotlin, Jetpack Compose, Clean Architecture',
            href: 'usg-challenge.html',
            external: false,
            label: 'Detay →'
          },
          {
            name: 'CryptoRadar: Clean Architecture ile Modern Android Kripto Para Takip Uygulaması',
            tech: 'Kotlin, Jetpack Compose, Clean Architecture',
            href: 'cryptoradar.html',
            external: false,
            label: 'Detay →'
          },
          {
            name: 'Jetpack Compose Task Manager: MVVM Mimarisi ve Firebase Entegrasyonu',
            tech: 'Kotlin, Android, MVVM Architecture',
            href: 'task-manager.html',
            external: false,
            label: 'Detay →'
          }
        ]
      },
      {
        title: '⚛️ React Native',
        projects: [
          {
            name: 'UniVento: Üniversite Kulüp Etkinlik Yönetim Mobil Uygulaması',
            tech: 'React Native, Firebase Authentication, Firebase Firestore',
            href: 'univento-mobile.html',
            external: false,
            label: 'Detay →'
          }
        ]
      }
    ],
    frontend: [
      {
        title: 'React',
        projects: [
          {
            name: 'UniVento: Üniversite Etkinlik ve Kulüp Yönetim Platformu',
            tech: 'React, Firebase Authentication,CSS',
            href: 'univento-web.html',
            external: false,
            label: 'Detay →'
          },
        ]
      },
      {
        title: 'Angular',
        projects: [
          {
            name: 'Digital Card Platform: Clean Architecture ile Modern Web Uygulaması',
            tech: 'Angular 19, RxJS, Standalone Components',
            href: 'digital-card-platform.html',
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
            name: 'Fullstack Developer Case – Spring Boot Digital Card & Portfolio Backend',
            tech: 'Spring Boot, PostgreSQL',
            href: 'fullstack-developer-case.html',
            external: false,
            label: 'Detay →'
          }
        ]
      },
      {
        title: 'FastAPI',
        projects: [
          {
            name: 'UniVento FastAPI: Üniversite Kulüp ve Etkinlik Yönetim Sistemi',
            tech: 'FastAPI, MongoDB, Google Gemini AI',
            href: 'univento-fastapi.html',
            external: false,
            label: 'Detay →'
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


