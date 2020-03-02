const addHeroElems = function () {

  const wrapper = document.querySelector('.wrapper');
  const hero = document.querySelector('.hero');
  const elemWidth = wrapper.offsetHeight / 10;
  const nmbrElems = (wrapper.offsetWidth / elemWidth) * 10;
hero.style.width = (wrapper.offsetWidth - (wrapper.offsetWidth % elemWidth)) + 'px';
  console.log(wrapper.offsetWidth - (wrapper.offsetWidth % elemWidth));
  //const navbar = hero.querySelector('.navbar');
  //const jumbotron = hero.querySelector('.jumbotron');


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
    constructor(parentIndex, tagName, className, content) {
      this.parentIndex = parentIndex;
      this.tagName = tagName;
      this.className = className;
      this.content = content;
      elemsArr.push(this);
    }
  }

  const brand = new Elem(0, 'div', 'brand', {
    'text': 'Web-ski'
  });
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
  });

  const addElemsContent = function (collection) {

    const addElem = function (item) {
      let parent = hero.children[item.parentIndex];
      let child = document.createElement(item.tagName);
      parent.appendChild(child);
      child.setAttribute('class', item.className);
      item.content && (child.textContent = item.content.text);
      console.log(child)
    }

    collection.map((item) => {      
        item.tagName && addElem(item);
    })
  }

  addElemsContent(elemsArr);
  
}

addHeroElems();