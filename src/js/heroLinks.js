// <div class="project__link">
// <canvas class="text__stain" width="100" height="100"></canvas>
// </div>
// <div class="project__link">
//   <canvas class="text__stain" width="100" height="100"></canvas>
// </div>

const hero = document.getElementsByClassName('hero')[0];
const container = hero.getElementsByClassName('article')[1];

const heroLinksArr = ["Art", "UX", "Webs", "Dev"];

heroLinksArr.map((item, index) => {
  let projectLink = document.createElement('div');
  projectLink.setAttribute("class", "project__link");
  container.appendChild(projectLink);

  let canvas = document.createElement('canvas');
  canvas.setAttribute("class", "text__stain");
  canvas.setAttribute("width", "200");
  canvas.setAttribute("height", "200");
  projectLink.appendChild(canvas);
})