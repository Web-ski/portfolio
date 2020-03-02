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

  for (let i = 0; i <= 100; i++) {
    let parent = i < 20 ? navbar : jumbotron;
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
  const nav2 = new Elem('navbar', 2, 'div', 'area', {
    'text': 'P'
  });
  const nav3 = new Elem('navbar', 4, 'div', 'area', {
    'text': 'O'
  });
  const nav4 = new Elem('navbar', 6, 'div', 'area', {
    'text': 'R'
  });
  const nav5 = new Elem('navbar', 8, 'div', 'area', {
    'text': 'T'
  });
  const nav6 = new Elem('navbar', 10, 'div', 'area', {
    'text': 'F'
  });
  const nav7 = new Elem('navbar', 12, 'div', 'area', {
    'text': 'O'
  });
  const nav8 = new Elem('navbar', 14, 'div', 'area', {
    'text': 'L'
  });
  const nav9 = new Elem('navbar', 16, 'div', 'area', {
    'text': 'I'
  });
  const nav10 = new Elem('navbar', 18, 'div', 'area', {
    'text': 'O'
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