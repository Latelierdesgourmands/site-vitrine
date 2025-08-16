const burger = document.getElementById('burger');
const nav = document.querySelector('nav ul');
const navLinks = document.querySelectorAll('nav ul li a');

// Toggle menu + icône croix
burger.addEventListener('click', () => {
  nav.classList.toggle('active');
  burger.classList.toggle('open');
});

// Fermer menu après clic sur un lien
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    burger.classList.remove('open');
  });
});
window.addEventListener('scroll', () => {
    const banner = document.querySelector('.hero-banner img');
    if (banner) {
      const scrollY = window.scrollY;
      banner.style.transform = `translateY(${scrollY * 0.2}px)`; // effet doux de défilement
    }
  });
  
