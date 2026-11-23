// Interaktivitas minimal: smooth scroll dan copy email feedback
document.addEventListener('DOMContentLoaded', () => {
  const emailLink = document.querySelector('a[href^="mailto:"]');
  if (emailLink) {
    emailLink.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      const email = emailLink.getAttribute('href').replace('mailto:', '');
      navigator.clipboard.writeText(email).then(() => {
        alert(`Email tersalin: ${email}`);
      });
    });
  }
});
