const body = document.querySelector('body');
const overlay = document.getElementById('overlay')
const workData = [{
    name: 'Keeping track of hundreds of components',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque aperiam, laudantium repellat maiores rerum id recusandae ratione error, fuga modi sapiente sequi minima vitae similique voluptas perferendis, eum possimus aut.',
    technologies: ['Codekit', 'Github', 'Javascript', 'Bootsrap', 'Terminal', 'Codepen'],
    liveLink: 'https://khitermedachraf.github.io/my-professional-portfolio/',
    source: 'https://github.com/khitermedachraf/my-professional-portfolio',
},

{
    name: 'Keeping track of hundreds of components',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque aperiam, laudantium repellat maiores rerum id recusandae ratione error, fuga modi sapiente sequi minima vitae similique voluptas perferendis, eum possimus aut.',
    technologies: ['Codekit', 'Github', 'Javascript', 'Bootsrap', 'Terminal', 'Codepen'],
    liveLink: 'https://khitermedachraf.github.io/my-professional-portfolio/',
    source: 'https://github.com/khitermedachraf/my-professional-portfolio',
},

{
    name: 'Keeping track of hundreds of components',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque aperiam, laudantium repellat maiores rerum id recusandae ratione error, fuga modi sapiente sequi minima vitae similique voluptas perferendis, eum possimus aut.',
    technologies: ['Codekit', 'Github', 'Javascript', 'Bootsrap', 'Terminal', 'Codepen'],
    liveLink: 'https://khitermedachraf.github.io/my-professional-portfolio/',
    source: 'https://github.com/khitermedachraf/my-professional-portfolio',
},

{
    name: 'Keeping track of hundreds of components',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque aperiam, laudantium repellat maiores rerum id recusandae ratione error, fuga modi sapiente sequi minima vitae similique voluptas perferendis, eum possimus aut.',
    technologies: ['Codekit', 'Github', 'Javascript', 'Bootsrap', 'Terminal', 'Codepen'],
    liveLink: 'https://khitermedachraf.github.io/my-professional-portfolio/',
    source: 'https://github.com/khitermedachraf/my-professional-portfolio',
},

{
    name: 'Keeping track of hundreds of components',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque aperiam, laudantium repellat maiores rerum id recusandae ratione error, fuga modi sapiente sequi minima vitae similique voluptas perferendis, eum possimus aut.',
    technologies: ['Codekit', 'Github', 'Javascript', 'Bootsrap', 'Terminal', 'Codepen'],
    liveLink: 'https://khitermedachraf.github.io/my-professional-portfolio/',
    source: 'https://github.com/khitermedachraf/my-professional-portfolio',
},

{
    name: 'Keeping track of hundreds of components',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque aperiam, laudantium repellat maiores rerum id recusandae ratione error, fuga modi sapiente sequi minima vitae similique voluptas perferendis, eum possimus aut.',
    technologies: ['Codekit', 'Github', 'Javascript', 'Bootsrap', 'Terminal', 'Codepen'],
    liveLink: 'https://khitermedachraf.github.io/my-professional-portfolio/',
    source: 'https://github.com/khitermedachraf/my-professional-portfolio',

}];

const projectBtn = document.querySelectorAll('.see-demo-btn');
const popUp = document.createElement('div');
popUp.classList.add('popUp');
const btnName = Array.from(projectBtn);
function showPopUp(projectNumber) {
    popUp.style.display = 'block';
    overlay.style.display = 'block';
    body.appendChild(popUp);
    popUp.innerHTML = `
    <span class="close"><i class="fas fa-times popUp-close" id="close-popUp"></i></span>
        <div class="popup-image"></div>
        <div class="lateral">
          <div class="above">
            <h3 class="popUp-title">${workData[projectNumber].name}</h3>
            <ul class="popUp-list">
              <li class="popUp-items">${workData[projectNumber].technologies[0]}</li>
              <li class="popUp-items">${workData[projectNumber].technologies[1]}</li>
              <li class="popUp-items">${workData[projectNumber].technologies[2]}</li>
              <li class="popUp-items desk">${workData[projectNumber].technologies[3]}</li>
              <li class="popUp-items desk">${workData[projectNumber].technologies[4]}</li>
              <li class="popUp-items desk">${workData[projectNumber].technologies[5]}</li>
            </ul>
          </div>
            <p class="popUp-descr">${workData[projectNumber].description}</p>
            <div class="popUp-btn">
              <a href="${workData[projectNumber].liveLink}"><button type="button" class="p-btn">See Live <img src="/img/live.png" alt="" class="live"></button></a>
              <a href="${workData[projectNumber].source}"><button type="button" class="p-btn btn2">See Source <i class="fab fa-github"></i></button></a>
            </div>
        </div>
        <p class="pop-pDesk">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias minus autem dolorum? Accusamus dolor sit nesciunt amet facere necessitatibus rem quae officia neque sed, exercitationem provident, impedit modi placeat soluta nemo illo quisquam maiores non dolores quibusdam aliquam aperiam ut.
        </p>
    `;

    document.addEventListener('click', (action) => {
        if (action.target.id === 'close-popUp') {
      popUp.style.display = 'none';
      overlay.style.display = 'none';
    }
  });
}

for (let i = 0; i < btnName.length; i +=1) {
     btnName[i].addEventListener('click', () => {
         showPopUp(i)
     })
};
