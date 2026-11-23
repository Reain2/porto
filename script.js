// script.js - Interaktivitas minimal dan animasi reveal yang tenang
document.addEventListener('DOMContentLoaded', () => {
  // Salin email saat klik kanan / tahan pada tautan mailto
  const emailLink = document.querySelector('a[href^="mailto:"]');
  if (emailLink) {
    emailLink.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      const email = emailLink.getAttribute('href').replace('mailto:', '');
      navigator.clipboard.writeText(email).then(() => {
        alert(`Alamat surel disalin: ${email}`);
      });
    });
  }

  // Animasi reveal saat scroll (progressive enhancement)
  if ('IntersectionObserver' in window) {
    const targets = document.querySelectorAll('.card, .section-header, .timeline-row, .profile-frame');
    
    // Jangan animasi jika user menyukai reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      });

      targets.forEach(target => {
        target.classList.add('reveal');
        observer.observe(target);
      });
    }
  }
});
