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