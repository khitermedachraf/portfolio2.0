// the user clicks (or taps) the hamburger button, the mobile menu appears.
const menuBtn = document.getElementById('menu-btn');
const header = document.getElementById('header');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close');
const bodyApp = document.getElementById('body'); // change name of variable to to avoid redeclaration errors in popUp.js
const menuLi = document.querySelectorAll('.menu-link');

menuBtn.addEventListener('click', () => {
  header.classList.add('hidden');
  mobileMenu.classList.remove('hidden');
  bodyApp.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', () => {
  header.classList.remove('hidden');
  mobileMenu.classList.add('hidden');
  bodyApp.style.overflow = 'visible';
});

for (let i = 0; i < menuLi.length; i++) {
  menuLi[i].addEventListener('click', () => {
    header.classList.remove('hidden');
    mobileMenu.classList.add('hidden');
    bodyApp.style.overflow = 'visible';
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

// Render the projects cards dynamically
const projectsCards = document.getElementById('projects-card');

function displayProject(projectId) {
  projectsCards.innerHTML += `
    <div class="project-placeholder">
    <img src="${projectsData[projectId].image}" alt="my ${projectId} project image" />
    <div class="properties">
      <h3 class="project-title .dark-blue">
        ${projectsData[projectId].title}
      </h3>
      <ul class="flex-div tags">
        <li><a href="#">${projectsData[projectId].technologies[0]}</a></li>
        <li><a href="#">${projectsData[projectId].technologies[1]}</a></li>
        <li><a href="#">${projectsData[projectId].technologies[2]}</a></li>
        <li><a href="#">${projectsData[projectId].technologies[3]}</a></li>
      </ul>
      <button type="button" class="see-demo-btn">See Project</button>
    </div>
    </div>
  `;
}

for (let i = 0; i < projectsData.length; i++) {
  displayProject(i);
}
