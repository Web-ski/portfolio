var addArticlesContent = function addArticlesContent() {

  var main = document.querySelector('.main');
  var sections = Array.from(main.getElementsByClassName('section'));
  var textsArr = [];
  var url = 'content/articles.json';

  //tworzenie artykułów
  var sectionNumber = 0.1;

  ///tworzenie specyfiki abbrewiacji
  var addingAbbrElems = function addingAbbrElems(elem, parent) {
    var span = document.createElement("span");
    parent.lastChild.classList.contains('article__abbr--last') === true ? span.textContent = '' : span.textContent = ', ';
    parent.appendChild(span);
  };

  var addSections = function addSections(collection, parent) {
    collection.map(function (item, index) {
      var elem = document.createElement(Object.keys(item)[0]);
      elem.setAttribute('class', Object.values(item)[0]);
      Object.values(item)[0] === 'sectionTitle' && (elem.textContent = sections[sectionNumber].getAttribute('id'));
      item.text !== undefined && (elem.textContent = item.text);
      item.src !== undefined && elem.setAttribute('src', '' + item.src);
      item.href !== undefined && elem.setAttribute('href', '' + item.href);
      item.target !== undefined && elem.setAttribute('target', '' + item.target);
      item.title !== undefined && elem.setAttribute('title', '' + item.title);
      item.data !== undefined && elem.setAttribute('data-' + item.data, item.data + sectionNumber);
      parent.appendChild(elem);
      item.abbr !== undefined && addingAbbrElems(elem, parent);
      item.children !== undefined && addSections(item.children, elem);
    });
  };

  //dodanie kodu animacji do sekcji
  var addAnimArticle = function addAnimArticle(item, index) {

    var name = item.getAttribute('id');
    var elem = document.createElement('script');
    elem.setAttribute('type', 'text/javascript');
    elem.textContent = 'animArticleElems("' + name + '", "' + index + '")';
    document.body.appendChild(elem);
  };

  var getSections = function getSections(collection) {
    collection.map(function (item, index) {
      sectionNumber = index;
      addSections(item.children, sections[index]);
      addAnimArticle(sections[index], index);
    });
  };

  //pobranie danych
  var getContent = function getContent() {
    fetch(url).then(function (resp) {
      return resp.json();
    }).then(function (data) {
      getSections(data);
    }).catch(function (error) {
      console.log('Looks like there was a problem: \n', error);
    });
  };

  getContent();
};

addArticlesContent();