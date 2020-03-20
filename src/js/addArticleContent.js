const addArticlesContent = function () {

  const main = document.querySelector('.main');
  const sections = Array.from(main.getElementsByClassName('section'));
  const textsArr = [];

  //tworzenie artykułów
  const addText = function (collection) {
    collection.map((item, index) => {
      let id = item.getAttribute('id');
      let article = item.querySelector('.description');
      //paragrafy
      for (let i = 0; i < 2; i++) {
        let articleText = document.createElement('p');
        articleText.setAttribute('class', 'article__text');
        article.appendChild(articleText);
      }
      //link do strony z więcej
      let articleLink = document.createElement('a');
      articleLink.setAttribute('class', 'article__link');
      articleLink.setAttribute('href', `${id}.html`);
      articleLink.textContent = 'Go for more';
      article.appendChild(articleLink);
      //moje technologie
      let articleIcons = document.createElement('div');
      articleIcons.setAttribute('class', 'article__icons');
      article.appendChild(articleIcons);
    })
  }

  addText(sections);

  //pobieranie tekstu i ikon
  const createIcons = function(parent, link) {
    let icon = document.createElement('img');
    icon.setAttribute('class', 'article__icon');
    icon.setAttribute('src', `./images/icons/${link}`);
    parent.appendChild(icon);
  }

  const getTexts = function () {
    let articles = Array.from(main.getElementsByClassName('description'));
    fetch('http://localhost/my-test/portfolio/portfolio/src/js/articles.JSON')
      .then(resp => resp.json())
      .then(data => {
        let texts = data.texts;
        let icons = data.icons;
        texts.map((item, index) => {
          articles[index].querySelectorAll('.article__text')[0].textContent = item.text;
          articles[index].querySelectorAll('.article__text')[1].textContent = item.text2;
        });
        icons.map((item, index) => {
          let parent = articles[index].querySelector('.article__icons');       
          for (let i = 1; i < 9; i++) {
            item[`icon${i}`] !== undefined && (createIcons(parent, item[`icon${i}`]));
          }
        });
      });
  }

  getTexts();
}

addArticlesContent();