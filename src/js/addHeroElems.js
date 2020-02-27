const addHeroElems = function () {

  const hero = document.querySelector('.hero');

  const colorArr = ['azure', 'beige', 'gainsboro', 'lightgrey', 'lavenderblush', 'grey'];

  const randomColor = function () {
    let color = colorArr[Math.floor(Math.random() * colorArr.length)];
    return color;
  }

  const addArticles = function () {
    let article = document.createElement('article');
    article.setAttribute('class', 'article');
    //article.style.backgroundColor = randomColor();
    hero.appendChild(article);
  }

  for (let i = 0; i <= 40; i++) {
    addArticles();
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

  const brand = new Elem(0, 'div', 'brand', {'text':'Web-ski'});


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