function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var addSections = function addSections() {

  var hero = document.querySelector('.hero');
  var main = document.querySelector('.main');
  var menuArr = [];

  var boxArr = Array.from(hero.querySelectorAll('.box'));

  boxArr.map(function (item, index) {
    var elemNumber = index;

    if (item.getAttribute('data-menu') !== null) {
      var number = parseInt([].concat(_toConsumableArray(elemNumber.toString())).slice(-1)) - 2;
      var dataMenu = item.getAttribute('data-menu');
      menuArr[number] = dataMenu;
    }
  });

  var createSections = function createSections(collection) {
    collection.map(function (item) {
      var elem = document.createElement('section');
      elem.setAttribute('id', item);
      elem.setAttribute('class', 'section');
      main.appendChild(elem);
    });
  };

  createSections(menuArr);
};

addSections();