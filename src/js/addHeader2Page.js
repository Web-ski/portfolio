const addHeader = function () {

  //konstruktor elementów
  const header = document.querySelector('.header2Page');
  const headerElemsArr = [];

  class Elem {
    constructor(parent, text, tagName, attr, children) {
      this.parent = parent;
      this.text = text;
      this.tagName = tagName;
      this.attr = attr;
      this.children = children;
      headerElemsArr.push(this);
    }
  }

  const brand = new Elem(header, 'Nieczuja', 'a', [{attrType: 'class', attrName: 'brand'}, {attrType: 'href', attrName: 'index.html'}], []);
  const pageTitle = new Elem(header, pageName, 'h1', [{attrType: 'class', attrName: 'pageTitle'}], []);

  const addHeaderElems = function (collection) {
    collection.map((item) => {
      let elem = document.createElement(item.tagName);
      item.attr.map(item => {
        elem.setAttribute(item.attrType, item.attrName);
      })
      item.text !== undefined && (elem.textContent = item.text);
      item.parent.appendChild(elem);
    })
  }

  addHeaderElems(headerElemsArr);
}

addHeader();