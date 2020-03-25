const addSections = function () {

  const hero = document.querySelector('.hero');
  const main = document.querySelector('.main');
  const menuArr = [];

  Array.from(hero.children).map(item => {
    let dataMenu = item.getAttribute('data-menu');
    dataMenu !== null && (menuArr.includes(dataMenu) !== true && menuArr.push(dataMenu));
  })

  const createSections = function (collection) {
    collection.map(item => {
      let elem = document.createElement('section');
      elem.setAttribute('id', item);
      elem.setAttribute('class', 'section');
      main.appendChild(elem);
    })
  }

  createSections(menuArr);
}

addSections();