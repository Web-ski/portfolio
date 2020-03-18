const addArticlesContent = function () {

  const main = document.querySelector('.main');
  const sections = Array.from(main.getElementsByClassName('section'));
  const textsArr = [];
 
  //tworzenie artykułów
  const addText = function (collection) {
    collection.map((item, index) => {
      let id = item.getAttribute('id');
      let article = item.querySelector('.description');
      for(let i = 0; i < 2; i++) {
        let articleText = document.createElement('p');
        articleText.setAttribute('class', 'article__text');
        article.appendChild(articleText);
      }
      let articleLink = document.createElement('a');
      articleLink.setAttribute('class', 'article__link');
      articleLink.setAttribute('href', `${id}.html`);
      articleLink.textContent = 'Go for more';
      article.appendChild(articleLink);
    })
  }
  
  addText(sections);
  
  //pobieranie tekstu
  const getTexts = function () {
    let articles = Array.from(main.getElementsByClassName('description'));
    fetch('http://localhost/my-test/portfolio/portfolio/src/js/articles.JSON')
      .then(resp => resp.json())
      .then(data => {
        let texts = data.texts;
        texts.map((item, index) => {
          articles[index].querySelectorAll('.article__text')[0].textContent = item.text;
          articles[index].querySelectorAll('.article__text')[1].textContent = item.text2;
        })
      });
  }
  
  getTexts();
}

addArticlesContent();
