const addHeroElems = function () {

  const wrapper = document.querySelector('.wrapper');
  const hero = document.querySelector('.hero');
  const elemWidth = wrapper.offsetHeight / 10;
  const nmbrElems = (wrapper.offsetWidth / elemWidth) * 10;
  hero.style.width = (wrapper.offsetWidth - (wrapper.offsetWidth % elemWidth)) + 'px';

  const removeHeroElems = function() {
    while(typeof hero.children[0] !== 'undefined') {
      hero.removeChild(hero.children[0]);
    }
  }

  removeHeroElems();
  
  const addArticleElems = function (parent, index) {
    let articleElem = document.createElement('div');
    articleElem.setAttribute('class', 'box');
    articleElem.style.width = elemWidth + 'px';
    parent.appendChild(articleElem);
  }

  for (let i = 0; i <= nmbrElems + 1; i++) {
    //let parent = i < 20 ? navbar : jumbotron;
    addArticleElems(hero, i);
  }

  //tworzenie elementów
  const elemsArr = [];

  class Elem {
    constructor(parentIndex, elems) {
      this.parentIndex = parentIndex;
      this.elems = elems;
      elemsArr.push(this);
    }
  }

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

  /* dodawanie napisów */
  const addPortfolioText = function (text) {

    let nmbr = function() {
      let x = lettersArr[Math.floor(Math.random() * lettersArr.length)];
      lettersArr.splice(x, 1);
      //x !== 0 ? x : nmbr();
      return x;
    }

    (text.split('')).map((item, index) => {
      let letter = new Elem(nmbr, [{
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
  Array.from(hero.children).map((item, index) => lettersArr.push(index));
  const portfolioTextsArr = ['portfolio', 'paweł', 'nieczuja-', 'ostrowski', 'ux', 'ui', 'art', 'web', 'dev']

  portfolioTextsArr.map(item => addPortfolioText(item));
 

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