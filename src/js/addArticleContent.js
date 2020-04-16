const addArticlesContent = function () {

  const main = document.querySelector('.main');
  const sections = Array.from(main.getElementsByClassName('section'));
  const textsArr = [];
  const url = 'http://localhost/my-test/portfolio/portfolio/src/js/articles.json';
  //const url = 'http://192.168.0.172/my-test/portfolio/portfolio/src/js/articles.JSON';

  //tworzenie artykułów
  let sectionNumber = 0.1;

  ///tworzenie specyfiki abbrewiacji
  const addingAbbrElems = (elem, parent) => {
    let span = document.createElement("span");
    parent.lastChild.classList.contains('article__abbr--last') === true ? (span.textContent = '') : (span.textContent = ', ');    
    parent.appendChild(span);
  }

  const addSections = function (collection, parent) {
    collection.map((item, index) => {
      let elem = document.createElement(Object.keys(item)[0]);
      elem.setAttribute('class', Object.values(item)[0]);
      Object.values(item)[0] === 'sectionTitle' && (elem.textContent = sections[sectionNumber].getAttribute('id'));
      item.text !== undefined && (elem.textContent = item.text);
      item.src !== undefined && (elem.setAttribute('src', `${item.src}`));
      item.href !== undefined && (elem.setAttribute('href', `${item.href}`));
      item.target !== undefined && (elem.setAttribute('target', `${item.target}`));
      item.title !== undefined && (elem.setAttribute('title', `${item.title}`));
      item.data !== undefined && (elem.setAttribute(`data-${item.data}`, item.data + sectionNumber));
      parent.appendChild(elem);
      item.abbr !== undefined && (addingAbbrElems(elem, parent));
      item.children !== undefined && (addSections(item.children, elem));
    });
  }

  //dodanie kodu animacji do sekcji
  const addAnimArticle = (item, index) => {

      let name = item.getAttribute('id');
      let elem = document.createElement('script');
      elem.setAttribute('type', 'text/javascript');
      elem.textContent = `animArticleElems("${name}", "${index}")`;
      document.body.appendChild(elem);    
  }
  
  const getSections = function (collection) {
    collection.map((item, index) => {      
      sectionNumber = index;
      addSections(item.children, sections[index]);
      addAnimArticle(sections[index], index);
    })
  }

  //pobranie danych
  const getContent = function () {
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        getSections(data);
      })
      .catch(function (error) {
        console.log('Looks like there was a problem: \n', error);
      });
  }

  getContent();
}

addArticlesContent();