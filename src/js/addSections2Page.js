const addSections2Page = function () {

  const main = document.querySelector('.main2Page');

  let url = `http://localhost/my-test/portfolio/portfolio/dist/js/${pageName}.json`;

  //dodawanie data-viewer
  let viewerNumber = 0.1;

  const setPhotoViewer = function (item) {
    let dataName = Object.keys(item)[1];
    let viewerName = Object.values(item)[1];
    let name = viewerName + viewerNumber;
    let elem = document.createElement('script');
    elem.setAttribute('type', 'text/javascript');
    elem.textContent = `photoViewer("${name}")`;
    document.body.appendChild(elem);
  }

  const addPhotoViewer = (collection, parent) => {
    collection.map((item, index) => {
      if (item.section !== undefined) {
        viewerNumber = index;
      }
      item.section !== undefined && (addPhotoViewer(item.children, item.section));
      item.article !== undefined && (addPhotoViewer(item.children, item.article));
      item.data !== undefined && (setPhotoViewer(item));
      //item.section !== undefined && (console.log(viewerNumber));
    })
  }

  //tworzenie sekcji
  let sectionNumber = 0.1;

  ///tworzenie specyfiki abbrewiacji
  const addingAbbrElems = (elem, parent) => {
    let span = document.createElement("span");
    parent.lastChild.classList.contains('article__abbr--last') === true ? (span.textContent = '') : (span.textContent = ', ');    
    parent.appendChild(span);
  }

  const addSections = function (collection, parent) {
    collection.map((item, index) => {
      if (item.section !== undefined) {
        sectionNumber = index;
      }
      let elem = document.createElement(Object.keys(item)[0]);
      elem.setAttribute('class', Object.values(item)[0]);
      item.text !== undefined && (elem.textContent = item.text);
      item.src !== undefined && (elem.setAttribute('src', `./images/photos/${item.src}`));
      item.href !== undefined && (elem.setAttribute('href', `${item.href}`));
      item.title !== undefined && (elem.setAttribute('title', `${item.title}`));
      item.data !== undefined && (elem.setAttribute(`data-${item.data}`, item.data + sectionNumber));
      parent.appendChild(elem);
      item.abbr !== undefined && (addingAbbrElems(elem, parent));
      item.children !== undefined && (addSections(item.children, elem));
    });
  }

  //pobranie danych
  const getContent = function () {
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        addSections(data, main);
        addPhotoViewer(data, main);
      })
      .catch(function (error) {
        console.log('Looks like there was a problem: \n', error);
      });
  }

  getContent();
}

addSections2Page();