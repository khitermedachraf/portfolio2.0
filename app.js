/* eslint-disable linebreak-style */
// Implement the logic of the mobile menu
// the user clicks (or taps) the hamburger button, the mobile menu appears.
const menuBtn = document.getElementById('menu-btn');
const header = document.getElementById('header');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close');
const body = document.getElementById('body');
const menuLi = document.querySelectorAll('.menu-link');
body.style.overflow = 'scroll';

menuBtn.addEventListener('click', () => {
  header.classList.add('invisible');
  mobileMenu.classList.remove('hidden');
  body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', () => {
  header.classList.remove('invisible');
  mobileMenu.classList.add('hidden');
  body.style.overflow = 'visible';
});

menuLi.addEventListener('click', () => {
  header.classList.remove('invisible');
  mobileMenu.classList.add('hidden');
  body.style.overflow = 'visible';
});