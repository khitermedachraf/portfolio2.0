// the user clicks (or taps) the hamburger button, the mobile menu appears.
const menuBtn = document.getElementById('menu-btn');
const header = document.getElementById('header');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close');
const body = document.getElementById('body');
const menuLi = document.querySelectorAll('.menu-link');

menuBtn.addEventListener('click', () => {
  header.classList.add('hidden');
  mobileMenu.classList.remove('hidden');
  body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', () => {
  header.classList.remove('hidden');
  mobileMenu.classList.add('hidden');
  body.style.overflow = 'visible';
});

for (let i = 0; i < menuLi.length; i++) {
  menuLi[i].addEventListener('click', () => {
    header.classList.remove('hidden');
    mobileMenu.classList.add('hidden');
    body.style.overflow = 'visible';
  });
}

// creat the array of project's objects:
const projectsData = [
  {
    image: 'img/demoProject.png',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
    liveLink: 'https://khitermedachraf.github.io/my-professional-portfolio/',
  },
  {
    image: 'img/demoProject.png',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
    liveLink: 'https://khitermedachraf.github.io/my-professional-portfolio/',
  },
  {
    image: 'img/demoProject.png',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
    liveLink: 'https://khitermedachraf.github.io/my-professional-portfolio/',
  },
  {
    image: 'img/demoProject.png',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
    liveLink: 'https://khitermedachraf.github.io/my-professional-portfolio/',
  },
  {
    image: 'img/demoProject.png',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
    liveLink: 'https://khitermedachraf.github.io/my-professional-portfolio/',
  },
  {
    image: 'img/demoProject.png',
    title: 'Multi-Post Stories Gain+Glory',
    technologies: ['Ruby on rails', 'css', 'Javascript', 'html'],
    liveLink: 'https://khitermedachraf.github.io/my-professional-portfolio/',
  },
];