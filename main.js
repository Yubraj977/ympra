const toggleBtn = document.getElementById('toggle-btn');
const navLinks = document.querySelector('.nav-links');

toggleBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
