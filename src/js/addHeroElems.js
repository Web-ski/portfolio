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
    article.style.backgroundColor = randomColor();
    hero.appendChild(article);
  }

  for (let i = 0; i <= 40; i++) {
    addArticles();
  }

}

addHeroElems();