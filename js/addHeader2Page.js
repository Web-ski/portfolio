function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var addHeader = function addHeader() {

  //konstruktor elementów
  var header = document.querySelector('.header2Page');
  var headerElemsArr = [];

  var Elem = function Elem(parent, text, tagName, attr, children) {
    _classCallCheck(this, Elem);

    this.parent = parent;
    this.text = text;
    this.tagName = tagName;
    this.attr = attr;
    this.children = children;
    headerElemsArr.push(this);
  };

  var brand = new Elem(header, 'Nieczuja', 'a', [{ attrType: 'class', attrName: 'brand' }, { attrType: 'href', attrName: 'index.html' }], []);
  var pageTitle = new Elem(header, pageName, 'h1', [{ attrType: 'class', attrName: 'pageTitle' }], []);

  var addHeaderElems = function addHeaderElems(collection) {
    collection.map(function (item) {
      var elem = document.createElement(item.tagName);
      item.attr.map(function (item) {
        elem.setAttribute(item.attrType, item.attrName);
      });
      item.text !== undefined && (elem.textContent = item.text);
      item.parent.appendChild(elem);
    });
  };

  addHeaderElems(headerElemsArr);
};

addHeader();