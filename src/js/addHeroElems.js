const addHeroElems = function () {

  const hero = document.querySelector('.hero');
  const navbar = hero.querySelector('.navbar');
  const jumbotron = hero.querySelector('.jumbotron');

  const colorArr = ['azure', 'beige', 'gainsboro', 'lightgrey', 'lavenderblush', 'grey'];

  const randomColor = function () {
    let color = colorArr[Math.floor(Math.random() * colorArr.length)];
    return color;
  }

  const addArticleElems = function (parent) {
    let articleElem = document.createElement('div');
    articleElem.setAttribute('class', 'box');
    //articleElem.style.backgroundColor = randomColor();
    parent.appendChild(articleElem);
  }

  for (let i = 0; i <= 48; i++) {
    let parent = i < 12 ? navbar : jumbotron;
    addArticleElems(parent);
  }

  //tworzenie elementów
  const elemsArr = [];

  class Elem {
    constructor(superParent, parentIndex, tagName, className, content) {
      this.superParent = superParent;
      this.parentIndex = parentIndex;
      this.tagName = tagName;
      this.className = className;
      this.content = content;
      elemsArr.push(this);
    }
  }

  const brand = new Elem('navbar', 0, 'div', 'brand', {
    'text': 'Web-ski'
  });

  const addElemsContent = function (collection, superParent) {

    const addElem = function (item) {
      let parent = superParent.children[item.parentIndex];
      let child = document.createElement(item.tagName);
      parent.appendChild(child);
      child.setAttribute('class', item.className);
      item.content && (child.textContent = item.content.text);
      console.log(child)
    }

    collection.map((item) => {
      item.superParent === superParent.className && (
        item.tagName && addElem(item)
      );
    })
  }

  Array.from(hero.children).map(item => addElemsContent(elemsArr, item));
  
}

addHeroElems();