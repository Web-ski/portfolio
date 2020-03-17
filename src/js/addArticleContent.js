const addArticlesContent = function () {

  const main = document.querySelector('.main');
  const sections = Array.from(main.getElementsByClassName('section'));
  const textsArr = [];
 
  //tworzenie artykułów
  const addText = function (collection) {
    collection.map((item, index) => {
      let article = item.querySelector('.description');
      let articleText = document.createElement('p');
      articleText.setAttribute('class', 'article__text');
      article.appendChild(articleText);
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
          articles[index].querySelector('.article__text').textContent = item.text;
        })
      });
  }
  
  getTexts();
}

addArticlesContent();