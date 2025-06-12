  const hamburger = document.getElementById('hamburger');
  const navbar = document.getElementById('navbar');

  hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });

  document.getElementById("contactForm").addEventListener("submit", function (e) {
    setTimeout(() => {
      this.reset();
    }, 100);
  });