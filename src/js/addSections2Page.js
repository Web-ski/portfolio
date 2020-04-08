const addSections2Page = function () {

  const main = document.querySelector('.main2Page');

  let url = `http://localhost/my-test/portfolio/portfolio/src/js/${pageName}.json`;

  //dodawanie elementów
  const addElems = function (parent, elem, name) {
    elem = document.createElement(elem);
    elem.setAttribute('class', name);
    parent.appendChild(elem);
    return elem;
  }

  //dodawanie data-viewer
  const addPhotoViewer = (item,index) => {
    let name = item + index;
    let elem = document.createElement('script');
    elem.setAttribute('type', 'text/javascript');
    elem.textContent = `photoViewer("${name}")`;
    document.body.appendChild(elem);
  }

  //tworzenie sekcji
  const addSections = function (collection, parent) {
    collection.map((item, index) => {
      let elem = document.createElement(Object.keys(item)[0]);
      elem.setAttribute('class', Object.values(item)[0]);
      item.text !== undefined && (elem.textContent = item.text);
      item.src !== undefined && (elem.setAttribute('src', `./images/photos/${item.src}`));
      item.data !== undefined && (elem.setAttribute(`data-${item.data}`, item.data + index));
      parent.appendChild(elem);
      item.children !== undefined && (addSections(item.children, elem));
      parent.children[0].getAttribute(`data-${item.data}`) !== null && (addPhotoViewer(item.data, index));
    });
  }

  //pobranie danych
  const getContent = function () {
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        addSections(data, main);
      })
      .catch(function (error) {
        console.log('Looks like there was a problem: \n', error);
      });
  }

  getContent();
}

addSections2Page();