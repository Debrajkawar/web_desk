const toggleBtn = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');

  // Toggle between hamburger and cross
  if (toggleBtn.textContent === '☰') {
    toggleBtn.textContent = '✖';
  } else {
    toggleBtn.textContent = '☰';
  }
});
