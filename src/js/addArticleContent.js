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

  const createPhotos = function(parent, src) {
    let box = document.createElement('a');
    let photo = document.createElement('img');
    box.setAttribute('class', 'photo__link');
    box.setAttribute('href', `${src[0]}`);
    box.setAttribute('target', `_blank`);
    parent.appendChild(box);
    photo.setAttribute('class', 'article__photo');
    photo.setAttribute('src', `./images/photos/${src[1]}`);
    box.appendChild(photo);
  }

  const getTextsAndIcons = function () {
    let articles1 = Array.from(main.getElementsByClassName('description'));
    let articles2 = Array.from(main.getElementsByClassName('photos'));
    fetch('http://localhost/my-test/portfolio/portfolio/src/js/articles.JSON')
      .then(resp => resp.json())
      .then(data => {
        let texts = data.texts;
        let icons = data.icons;
        let photos = data.photos;
        texts.map((item, index) => {
          articles1[index].querySelectorAll('.article__text')[0].textContent = item.text;
          articles1[index].querySelectorAll('.article__text')[1].textContent = item.text2;
        });
        icons.map((item, index) => {
          let parent = articles1[index].querySelector('.article__icons');       
          for (let i = 1; i < 9; i++) {
            item[`icon${i}`] !== undefined && (createIcons(parent, item[`icon${i}`]));
          }
        });
        photos.map((item, index) => {
          let parent = articles2[index]; 
          item.photo1 !== undefined && (createPhotos(parent, item.photo1));
          item.photo2 !== undefined && (createPhotos(parent, item.photo2));
        })
      });
  }

  getTextsAndIcons();
}

addArticlesContent();