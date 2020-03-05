const addHeroElems = function () {

  const wrapper = document.querySelector('.wrapper');
  const hero = document.querySelector('.hero');
  const elemWidth = wrapper.offsetHeight / 10;
  const elemsInRow = Math.floor(wrapper.offsetWidth / elemWidth);
  const nmbrElems = elemsInRow * 10;
  hero.style.width = (wrapper.offsetWidth - (wrapper.offsetWidth % elemWidth)) + 'px';

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

  // dodawanie napisów
  const addPortfolioText = function (text, indx) {

    (Array.from(text)).map((item, index) => {
      let letter = new Elem(indx, [{
        'tagName': 'div',
        'attr': [{
          'attrType': 'class',
          'attrName': 'pageTitle'
        }],
        'textNode': item.toUpperCase()
      }])
    })
  }

  const lettersArr = [];
  console.log(lettersArr);
  const lettersOrder = [];
  Array.from(hero.children).map((item, index) => lettersArr.push(index));
  //lettersArr.shift();
  //console.log(lettersArr);
  const portfolioTextsArr = ['portfolio', 'paweł', 'nieczuja-', 'ostrowski', 'ux', 'ui', 'art', 'webs', 'dev']

  portfolioTextsArr.map((item, index) => addPortfolioText(item, index));


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