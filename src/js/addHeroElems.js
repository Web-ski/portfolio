const addHeroElems = function () {

  const wrapper = document.querySelector('.wrapper');
  const hero = document.querySelector('.hero');
  const elemWidth = (wrapper.offsetHeight - (0.05 * wrapper.offsetHeight)) / 10;
  const elemsInRow = Math.floor(wrapper.offsetWidth / elemWidth);
  const nmbrElems = elemsInRow * 10;
  hero.style.width = (wrapper.offsetWidth - (wrapper.offsetWidth % elemWidth)) + 'px';

  //bg-colors
  const bgColors = ['rgb(243, 102, 82)', 'rgb(238, 85, 65)', 'rgb(238, 94, 75)']

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
      'textNode': 'Web-ski'
    },
    {
      'tagName': 'div',
      'attr': [{
        'attrType': 'class',
        'attrName': 'brand hide'
      }],
      'textNode': 'Blalbla'
    }
  ]);

  /*
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

  //sprawdzanie ilości kolumn 1.1.1.1
  const columnsNmbr = function (indx) {
    let x = lettersArr.length;
    x = x - 10 * indx + 1;
    return x;
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

  //switch 1.1.1
  const textSwitcher = function (indx) {
    let position = 0;

    switch (indx) {
      case 0: {
        position = 1;
        break;
      }
      case 1: {
        position = columnsNmbr(3);
        break;
      }
      case 2: {
        position = columnsNmbr(2);
        break;
      }
      case 3: {
        position = columnsNmbr(1);
        break;
      }
      case 4: {
        position = columnsNmbr(4);
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
  const addPortfolioText = function (text, indx) {

    if (portfolioTextsArr1.includes(text) === true) {
      (Array.from(text)).map((item, index) => {
        addLetters(item, textSwitcher(indx), index, 'upper', 'pageTitle');
      })
    }

    if (portfolioTextsArr2.includes(text) === true) {
      addLetters(text, textSwitcher(indx), 0, 'lower', 'textConnector');
    }
  }

  const lettersArr = [];
  console.log(lettersArr);
  Array.from(hero.children).map((item, index) => lettersArr.push(index));
  //lettersArr.shift();
  //console.log(lettersArr);
  const portfolioTextsArr1 = ['portfolio', 'paweł', 'nieczuja-', 'ostrowski']; //, 'ux', 'ui', 'art', 'webs', 'dev']
  const portfolioTextsArr2 = ['of'];

  portfolioTextsArr1.map((item, index) => addPortfolioText(item, index));
  addPortfolioText(portfolioTextsArr2[0], 4);


  const addElemsContent = function (collection) {

    const createElem = function (tag, attr, index) {

      let elem = document.createElement(tag);
      attr && attr.map((item) => {
        elem.setAttribute(item.attrType, item.attrName)
      })
      hero.children[index].appendChild(elem);
    }

    const addElem = function (parentIndex, elems) {

      elems.map((item, index) => {

        item.tagName && createElem(item.tagName, item.attr, parentIndex);
        item.textNode && (hero.children[parentIndex].children[index].textContent = item.textNode);

      })
    }

    collection.map((item) => {
      item.elems && addElem(item.parentIndex, item.elems);
    })
  }

  addElemsContent(elemsArr);
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