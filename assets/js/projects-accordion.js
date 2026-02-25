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
            name: 'Flutter Gerçek Zamanlı Mesajlaşma Uygulaması: Firebase Tabanlı Modern Chat Deneyimi',
            tech: 'Flutter, Firebase Authentication, Cloud Firestore, Cubit, get_it',
            href: 'projects/flutter-realtime-chat.html',
            external: false,
            label: 'Detay →'
          },
          {
            name: 'Flutter E-Ticaret Uygulaması: Clean Architecture ile Ölçeklenebilir Mobil Çözüm',
            tech: 'Flutter, Clean Architecture, BLoC/Cubit, Firebase, Stripe',
            href: 'projects/flutter-ecommerce.html',
            external: false,
            label: 'Detay →'
          },
          {
            name: 'MovieApp: Clean Architecture ile Modern Film ve TV Dizisi Uygulaması',
            tech: 'Flutter, Clean Architecture, Bloc',
            href: 'projects/movieapp-mobile.html',
            external: false,
            label: 'Detay →'
          },
          {
            name: 'Flutter Todo App: Clean Architecture ve Çoklu State Management Yapısı',
            tech: 'Flutter, Clean Architecture, State Management',
            href: 'projects/flutter-todo-app.html',
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
            href: 'projects/usg-challenge.html',
            external: false,
            label: 'Detay →'
          },
          {
            name: 'CryptoRadar: Clean Architecture ile Modern Android Kripto Para Takip Uygulaması',
            tech: 'Kotlin, Jetpack Compose, Clean Architecture',
            href: 'projects/cryptoradar.html',
            external: false,
            label: 'Detay →'
          },
          {
            name: 'Jetpack Compose Task Manager: MVVM Mimarisi ve Firebase Entegrasyonu',
            tech: 'Kotlin, Android, MVVM Architecture',
            href: 'projects/task-manager.html',
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
            href: 'projects/univento-mobile.html',
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
            name: 'Fitness App Frontend: React ile Modern Fitness Takip Uygulaması',
            tech: 'React, Redux Toolkit, Material-UI, Keycloak OAuth2 PKCE, React Router, Axios, Vite',
            href: 'projects/fitness-app-frontend.html',
            external: false,
            label: 'Detay →'
          },
          {
            name: 'UniVento: Üniversite Etkinlik ve Kulüp Yönetim Platformu',
            tech: 'React, Firebase Authentication,CSS',
            href: 'projects/univento-web.html',
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
            href: 'projects/digital-card-platform.html',
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
            name: 'Spring Boot Gemini AI Microservice Project: Eureka, Gateway, Keycloak, RabbitMQ',
            tech: 'Spring Boot, Spring Cloud Gateway, Eureka, Keycloak, RabbitMQ, Google Gemini AI, MongoDB, PostgreSQL',
            href: 'projects/spring-boot-gemini-ai-microservice.html',
            external: false,
            label: 'Detay →'
          },
          {
            name: 'Gallerist: Spring Boot ile Geliştirilmiş Modern Oto Galeri Yönetim Sistemi ve Finansal Entegrasyon',
            tech: 'Spring Boot, Spring Security, JWT, PostgreSQL, TCMB API',
            href: 'projects/gallerist.html',
            external: false,
            label: 'Detay →'
          },
          {
            name: 'Fullstack Developer Case – Spring Boot Digital Card & Portfolio Backend',
            tech: 'Spring Boot, PostgreSQL',
            href: 'projects/fullstack-developer-case.html',
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
            href: 'projects/univento-fastapi.html',
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


