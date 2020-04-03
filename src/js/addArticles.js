const addArticles = function () {

  const main = document.querySelector('.main');
  const sections = Array.from(main.getElementsByClassName('section'));
  const sectionsArr = [];

  //tworzenie artykułów
  const createIdArr = function (collection) {
    collection.map(item => {
      sectionsArr.push(item.getAttribute('id'));

      //tworzenie radia
      let aside = document.createElement('aside');
      aside.setAttribute('class', 'section__radio');
      item.appendChild(aside);

      for (let i = 0; i < 2; i++) {
        let article = document.createElement('article');
        article.setAttribute('class', 'article');
        item.appendChild(article);
      }
    })
  }

  //nadawanie cech radiu
  const addRadioSpecify = function (collection) {
    collection.map((item, index) => {
      for (let i = 0; i < collection.length; i++) {
        let radioElem = document.createElement('a');
        radioElem.setAttribute('class', 'radio__elem');
        radioElem.setAttribute('href', `#${sectionsArr[i]}`);
        index === i && radioElem.classList.add('radio__elem--active');
        item.children[0].appendChild(radioElem);
      }
  })}

  //nadawanie cech artykułom
  const addArticleSpecify = function (collection) {
    collection.map((item, index) => {
      let sepcify1 = 'description';
      let sepcify2 = 'photos';

      if (index % 2 === 0) {
        item.children[1].classList.add(sepcify1);
        item.lastElementChild.classList.add(sepcify2);
      } else {
        item.children[1].classList.add(sepcify2);
        item.lastElementChild.classList.add(sepcify1);
      }
    })
  }

  //nadawanie treści artykułom-description
  const addTextContent = function (collection) {
    collection.map((item) => {
      let title = item.getAttribute('id');
      let article = item.querySelector('.description');
      let articleTitle = document.createElement('h2');
      articleTitle.setAttribute('class', 'sectionTitle');
      articleTitle.textContent = title;
      article.appendChild(articleTitle);      
    })
  }

  createIdArr(sections);
  addRadioSpecify(sections);
  addArticleSpecify(sections);
  addTextContent(sections);
}

addArticles();