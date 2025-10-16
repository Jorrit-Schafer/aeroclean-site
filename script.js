// Handle mobile navigation toggle
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('primary-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      const expanded =
        navToggle.getAttribute('aria-expanded') === 'true' || false;
      navToggle.setAttribute('aria-expanded', !expanded);
      navMenu.classList.toggle('active');
    });
  }
});

// Note: Contact form functionality removed.
// Visitors can now reach you directly via the mailto link in the Contact section:
// <a href="mailto:info@aeroclean.eu.com">info@aeroclean.eu.com</a>
