// Implement the logic of the mobile menu
// the user clicks (or taps) the hamburger button, the mobile menu appears.
const menuBtn = document.getElementById('menu-btn');
const header = document.getElementById('header');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  header.classList.add('invisible');
  mobileMenu.classList.remove('hidden');
});
