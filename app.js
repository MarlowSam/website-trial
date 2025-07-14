const mobileMenu = document.getElementById('mobile-menu');
const menu = document.querySelector('.navbar__menu');

mobileMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('is-active');
  menu.classList.toggle('active');
});
