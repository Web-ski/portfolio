const addHeroElems = function () {

  const wrapper = document.querySelector('.wrapper');
  const hero = document.querySelector('.hero');
  const elemWidth = (wrapper.offsetHeight - (0.05 * wrapper.offsetHeight)) / 10;
  const elemsInRow = Math.floor(wrapper.offsetWidth / elemWidth);
  const nmbrElems = elemsInRow * 10;
  hero.style.width = (wrapper.offsetWidth - (wrapper.offsetWidth % elemWidth)) + 'px';

  //bg-colors
  //const bgColors = ['rgb(240, 90, 69)', 'rgb(238, 85, 65)', 'rgb(238, 94, 75)']
  const bgColors = ['rgba(5, 5, 5, 1)', 'rgba(15, 15, 15, 1)', 'rgba(10, 10, 10, 1)']

  //usuwanie poprzednich elementów hero
  const removeHeroElems = function () {
    while (typeof hero.children[0] !== 'undefined') {
      hero.removeChild(hero.children[0]);
    }
  }

  removeHeroElems();

  //tworzenie nowych elementów hero
  const addArticleElems = function (parent, index) {
    let articleElem = document.createElement('div');
    articleElem.setAttribute('class', 'box');
    articleElem.style.width = elemWidth + 'px';
    articleElem.style.backgroundColor = bgColors[Math.floor(Math.random() * bgColors.length)];
    parent.appendChild(articleElem);
  }

  const addHeroElems = function () {
    for (let i = 0; i < nmbrElems; i++) {
      //let parent = i < 20 ? navbar : jumbotron;
      addArticleElems(hero, i);
    }
  }

  addHeroElems();

  //konstruktor elementów
  const elemsArr = [];

  class Elem {
    constructor(parentIndex, elems) {
      this.parentIndex = parentIndex;
      this.elems = elems;
      elemsArr.push(this);
    }
  }

  //dodanie brand
  const brand = new Elem(0, [{
    'tagName': 'div',
    'attr': [{
      'attrType': 'class',
      'attrName': 'brand'
    }],
    'textNode': 'Nieczuja'
  }]);

  //sprawdzanie ilości kolumn 1.1.1.1
  const columnsNmbr = function (choice, indx) {
    if (choice === 'col') {
      let x = lettersArr.length;
      x = x - 10 * indx + 1;
      return x;
    }

    if (choice === 'row') {
      let x = lettersArr.length;
      x = (x - 10) + indx;
      return x;
    }
  }

  //1.1
  const addLetters = function (item, position, index, style, className) {
    let letter = new Elem(position + index, [{
      'tagName': 'div',
      'attr': [{
        'attrType': 'class',
        'attrName': className
      }],
      'textNode': `${style === 'upper' ? item.toUpperCase() : item}`
    }])
  }

  //1.1
  const addLettersLink = function (item, position, index, style, className, id) {
    let letter = new Elem(position + index, [{
      'tagName': 'a',
      'attr': [{
        'attrType': 'class',
        'attrName': className
      }, {
        'attrType': 'href',
        'attrName': `#${id}`
      }],
      'textNode': `${style === 'upper' ? item.toUpperCase() : item}`
    }])
  }

  //switch 1.1.1
  const textSwitcher = function (indx) {
    let position = 0;

    switch (indx) {
      case 0: {
        position = 1;
        break;
      }
      case 1: {
        position = columnsNmbr('col', 3);
        break;
      }
      case 2: {
        position = columnsNmbr('col', 2);
        break;
      }
      case 3: {
        position = columnsNmbr('col', 1);
        break;
      }
      case 4: {
        position = columnsNmbr('col', 4);
        break;
      }
      case 5: {
        position = columnsNmbr('col', 1) - 1;
        break;
      }
      default: {
        position = 11;
        break;
      }
    }
    return position;
  }

  // dodawanie napisów 1
  const addPortfolioText = function (text, indxArr) {

    if (portfolioTextsArr1.includes(text) === true) {
      (Array.from(text)).map((item, index) => {
        addLetters(item, textSwitcher(indxArr), index, 'upper', 'pageTitle');
      })
    }

    if (portfolioTextsArr2.includes(text) === true) {
      addLetters(text, textSwitcher(indxArr), 0, 'lower', 'textConnector');
    }

    if (portfolioTextsArr3.includes(text) === true) {
      addLetters(text, textSwitcher(indxArr), 0, 'lower', 'menu brand');
    }

    if (portfolioTextsArr4.includes(text) === true) {
      ((Array.from(text)).reverse()).map((item, index) => {
        let group;
        indxArr === indxArr && (group = text); 
        addLettersLink(item, ((index * 10) * -1), columnsNmbr('row', indxArr + 2), 'upper', `pageTitle ${group} hide`, text);
        //addLettersLink(item, (index * 10), (indxArr + 1), 'upper', `pageTitle ${group} hide`, text);
      })
    }
  }

  const lettersArr = [];
  //console.log(lettersArr);
  Array.from(hero.children).map((item, index) => lettersArr.push(index));
  //lettersArr.shift();
  //console.log(lettersArr);
  const portfolioTextsArr1 = ['portfolio', 'paweł', 'nieczuja-', 'ostrowski'];
  const portfolioTextsArr2 = ['of'];
  const portfolioTextsArr3 = ['menu'];
  const portfolioTextsArr4 = ['ux', 'ui', 'webs', 'repo', 'cv', 'find'];

  portfolioTextsArr1.map((item, index) => addPortfolioText(item, index));
  addPortfolioText(portfolioTextsArr2[0], 4);
  addPortfolioText(portfolioTextsArr3[0], 5);
  portfolioTextsArr4.map((item, index) => addPortfolioText(item, index));

  //tworzenie elementów
  const addElemsContent = function (collection) {

    collection.map(item => {
      let parent = item.parentIndex;
      
      item.elems.map((item, index) => {
        let tag = document.createElement(item.tagName);
        item.attr.map(item => tag.setAttribute(item.attrType, item.attrName));
        hero.children[parent].appendChild(tag);
        item.textNode && (tag.textContent = item.textNode);
      })
    })
  }

  addElemsContent(elemsArr);

  //dodanie data do elementów menu
  const addDataTag = function (collection) {
    collection.map(item => {
      let elem = hero.getElementsByClassName(item);
      let name = item;
      (Array.from(elem)).map(item => {
        let parent = item.parentElement;
        parent.setAttribute('data-menu', name);
      })
    })
  }

  addDataTag(portfolioTextsArr4);
}

addHeroElems();

window.addEventListener('resize', function () {
  addHeroElems();
});




/*losowanie 
const randomNmbr = function () {
  let x = lettersArr[Math.floor(Math.random() * lettersArr.length)];
  console.log(x, '0')

  if (lettersArr.includes(x) === true) {
    console.log(x, '1')
    return x;
  } else {
    randomNmbr();
  }
}

//wybieranie indexy
const indx = function () {
  let x = randomNmbr();
  console.log(x, '2');
  lettersArr.splice(lettersArr.indexOf(x), 1);
  lettersOrder.push(x);
  //console.log(lettersOrder);
  return x;
}
*/