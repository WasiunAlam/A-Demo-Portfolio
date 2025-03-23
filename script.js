// Toggle the mobile navigation menu
const toggleBtn = document.querySelector('.toggle-btn');
const navLinks = document.querySelector('.nav-links');

toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

function handleTilt() {
    const isPortrait = window.matchMedia("(orientation: portrait)").matches;
    const tiltElements = document.querySelectorAll(".tilt");
  
    if (isPortrait) {
      tiltElements.forEach((el) => {
        el.vanillaTilt?.destroy(); // Destroy Tilt.js if it exists
      });
    } else {
      VanillaTilt.init(tiltElements, {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
      });
    }
  }
  
  // Run on load and resize
  window.addEventListener("load", handleTilt);
  window.addEventListener("resize", handleTilt);


  ScrollReveal().reveal('.identity-section',{ 
    origin: 'top', 
    distance: '50px', 
    duration: 1000, 
    easing: 'ease-out',
    opacity: 0 
  });

  // Reveal other elements with different settings if needed
  ScrollReveal().reveal('.skill-card', {
    origin: 'bottom',
    distance: '20px',
    duration: 1000,
    delay: 200,
    opacity: 0,
    interval: 100
  });

  ScrollReveal().reveal('.thanks-message', {
    origin: 'top',
    distance: '50px',
    duration: 1200,
    delay: 500,
    opacity: 0
  });

  ScrollReveal().reveal('.hero-section', {
    origin: 'right',
    distance: '500px',
    duration: 1000,
    delay: 200,
    easing: 'ease-in-out',
    reset: true
  });

  ScrollReveal().reveal('.card', {
    origin: 'bottom',
    distance: '50px',
    duration: 1000,
    delay: 300,
    easing: 'ease-in-out',
    interval: 200, // Staggered effect
    reset: true
  });

  ScrollReveal().reveal('.contact-me', {
    opacity: 0,
    duration: 1000,
    delay: 200,
    easing: 'ease-in-out',
    reset: true
  });


    // Identity section - slides in from left
    ScrollReveal().reveal('.identity-section', {
      origin: 'left',
      distance: '500px',
      duration: 1000,
      delay: 200,
      easing: 'ease-in-out',
      reset: true
    });
  
    // Project cards - slide up with staggered effect
    ScrollReveal().reveal('.project-card', {
      origin: 'bottom',
      distance: '100px',
      duration: 1000,
      delay: 200,
      easing: 'ease-in-out',
      interval: 150, // Staggered effect for each card
      reset: true
    });
  