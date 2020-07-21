var addSections2Page = function addSections2Page() {

  var main = document.querySelector('.main2Page');

  var url = 'content/' + pageName + '.json';

  //dodawanie data-viewer
  var viewerNumber = 0.1;

  var setPhotoViewer = function setPhotoViewer(item) {
    var dataName = Object.keys(item)[1];
    var viewerName = Object.values(item)[1];
    var name = viewerName + viewerNumber;
    var elem = document.createElement('script');
    elem.setAttribute('type', 'text/javascript');
    elem.textContent = 'photoViewer("' + name + '")';
    document.body.appendChild(elem);
  };

  var addPhotoViewer = function addPhotoViewer(collection, parent) {
    collection.map(function (item, index) {
      if (item.section !== undefined) {
        viewerNumber = index;
      }
      item.section !== undefined && addPhotoViewer(item.children, item.section);
      item.article !== undefined && addPhotoViewer(item.children, item.article);
      item.data !== undefined && setPhotoViewer(item);
      //item.section !== undefined && (console.log(viewerNumber));
    });
  };

  //tworzenie sekcji
  var sectionNumber = 0.1;

  ///tworzenie specyfiki abbrewiacji
  var addingAbbrElems = function addingAbbrElems(elem, parent) {
    var span = document.createElement("span");
    parent.lastChild.classList.contains('article__abbr--last') === true ? span.textContent = '' : span.textContent = ', ';
    parent.appendChild(span);
  };

  var addSections = function addSections(collection, parent) {
    collection.map(function (item, index) {
      if (item.section !== undefined) {
        sectionNumber = index;
      }
      var elem = document.createElement(Object.keys(item)[0]);
      elem.setAttribute('class', Object.values(item)[0]);
      item.text !== undefined && (elem.textContent = item.text);
      item.src !== undefined && elem.setAttribute('src', './images/photos/' + item.src);
      item.href !== undefined && elem.setAttribute('href', '' + item.href);
      item.title !== undefined && elem.setAttribute('title', '' + item.title);
      item.data !== undefined && elem.setAttribute('data-' + item.data, item.data + sectionNumber);
      parent.appendChild(elem);
      item.abbr !== undefined && addingAbbrElems(elem, parent);
      item.children !== undefined && addSections(item.children, elem);
    });
  };

  //pobranie danych
  var getContent = function getContent() {
    fetch(url).then(function (resp) {
      return resp.json();
    }).then(function (data) {
      addSections(data, main);
      addPhotoViewer(data, main);
    }).catch(function (error) {
      console.log('Looks like there was a problem: \n', error);
    });
  };

  getContent();
};

addSections2Page();