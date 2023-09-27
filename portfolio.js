document.addEventListener('DOMContentLoaded', () => {
  let menuIcon = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');
  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header nav a');
  let header = document.querySelector('header'); // Declare the header variable

  menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  });

  window.addEventListener('scroll', () => {
    sections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if (top >= offset && top < offset + height) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
        });

        let activeLink = document.querySelector(`header nav a[href*="${id}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    });

    header.classList.toggle('sticky', window.scrollY > 100);
  });

  ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
  });

  ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
  ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
  ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

  const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer!', 'Web Developer', 'Software Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });
});

