const addHeroElems = function () {

  const wrapper = document.querySelector('.wrapper');
  const hero = document.querySelector('.hero');
  const elemWidth = wrapper.offsetHeight / 10;
  const nmbrElems = (wrapper.offsetWidth / elemWidth) * 10;
  hero.style.width = (wrapper.offsetWidth - (wrapper.offsetWidth % elemWidth)) + 'px';

  const addArticleElems = function (parent) {
    let articleElem = document.createElement('div');
    articleElem.setAttribute('class', 'box');
    articleElem.style.width = elemWidth + 'px';
    parent.appendChild(articleElem);
  }

  for (let i = 0; i <= nmbrElems; i++) {
    //let parent = i < 20 ? navbar : jumbotron;
    addArticleElems(hero);
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

  const addPortfolioText = function () {

    (Array.from('portfolio')).map((item, index) => {
      let letter = new Elem((index + 1), [{
        'tagName': 'div',
        'attr': [{
          'attrType': 'class',
          'attrName': 'area'
        }],
        'textNode': item.toUpperCase()
      }])
    })
  }

  addPortfolioText();


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