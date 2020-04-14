const addSections = function () {

  const hero = document.querySelector('.hero');
  const main = document.querySelector('.main');
  const menuArr = [];

  const boxArr = Array.from(hero.querySelectorAll('.box'));
  
  boxArr.map((item, index) => {
    let elemNumber = index;

    if(item.getAttribute('data-menu') !== null) {      
      let number = (parseInt([...(elemNumber.toString())].slice(-1))) - 2;
      let dataMenu = item.getAttribute('data-menu');
      menuArr[number] = dataMenu;
    }
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
