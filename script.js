// script.js - Interaktivitas minimal dan fungsional tanpa bloat
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
});
