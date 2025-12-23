function initParticlesBackground() {
  if (!window.particlesJS) return;

  const target = document.getElementById('particles-js');
  if (!target) return;

  particlesJS('particles-js', {
    particles: {
      number: { value: 60, density: { enable: true, value_area: 800 } },
      color: { value: '#60a5fa' },
      shape: { type: 'circle' },
      opacity: { value: 0.4, random: true },
      size: { value: 3, random: true },
      line_linked: { enable: true, distance: 140, color: '#60a5fa', opacity: 0.25, width: 1 },
      move: { enable: true, speed: 0.6, direction: 'none', random: true, straight: false, out_mode: 'out', bounce: false }
    },
    interactivity: {
      detect_on: 'canvas',
      events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: false }, resize: true },
      modes: { repulse: { distance: 80, duration: 0.3 } }
    },
    retina_detect: true
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initParticlesBackground);
} else {
  initParticlesBackground();
}


