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
      'attr': [{'attrType': 'class', 'attrName': 'brand'}],
      'textNode': 'Web-ski'
    },
    {
      'tagName': 'div',
      'attr': [{'attrType': 'class', 'attrName': 'brand hide'}],
      'textNode': 'Blalbla'
    }
  ]);
  /*
  const nav2 = new Elem(1, 'div', 'area', {
    'text': 'P'
  });
  const nav3 = new Elem(2, 'div', 'area', {
    'text': 'O'
  });
  const nav4 = new Elem(3, 'div', 'area', {
    'text': 'R'
  });
  const nav5 = new Elem(4, 'div', 'area', {
    'text': 'T'
  });
  const nav6 = new Elem(5, 'div', 'area', {
    'text': 'F'
  });
  const nav7 = new Elem(6, 'div', 'area', {
    'text': 'O'
  });
  const nav8 = new Elem(7, 'div', 'area', {
    'text': 'L'
  });
  const nav9 = new Elem(8, 'div', 'area', {
    'text': 'I'
  });
  const nav10 = new Elem(9, 'div', 'area', {
    'text': 'O'
  });*/

  const addElemsContent = function (collection) {

    const createElem = function(tag, attr, index) {
      let elem = document.createElement(tag);
      attr && attr.map((item) => {elem.setAttribute(item.attrType, item.attrName)})
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