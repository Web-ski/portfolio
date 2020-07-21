function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var addHeroElems = function addHeroElems() {

  var wrapper = document.querySelector('.wrapper');
  var hero = document.querySelector('.hero');
  var elemWidth = (wrapper.offsetHeight - 0.05 * wrapper.offsetHeight) / 10;
  var elemsInRow = Math.floor(wrapper.offsetWidth / elemWidth);
  var nmbrElems = elemsInRow * 10;
  hero.style.width = wrapper.offsetWidth - wrapper.offsetWidth % elemWidth + 'px';

  //bg-colors
  //const bgColors = ['rgb(240, 90, 69)', 'rgb(238, 85, 65)', 'rgb(238, 94, 75)']
  var bgColors = ['rgba(5, 5, 5, 1)', 'rgba(15, 15, 15, 1)', 'rgba(10, 10, 10, 1)'];

  //usuwanie poprzednich elementów hero
  var removeHeroElems = function removeHeroElems() {
    while (typeof hero.children[0] !== 'undefined') {
      hero.removeChild(hero.children[0]);
    }
  };

  removeHeroElems();

  //tworzenie nowych elementów hero
  var addArticleElems = function addArticleElems(parent, index) {
    var articleElem = document.createElement('div');
    articleElem.setAttribute('class', 'box');
    articleElem.style.width = elemWidth + 'px';
    articleElem.style.backgroundColor = bgColors[Math.floor(Math.random() * bgColors.length)];
    parent.appendChild(articleElem);
  };

  var addHeroElems = function addHeroElems() {
    for (var i = 0; i < nmbrElems; i++) {
      //let parent = i < 20 ? navbar : jumbotron;
      addArticleElems(hero, i);
    }
  };

  addHeroElems();

  //konstruktor elementów
  var elemsArr = [];

  var Elem = function Elem(parentIndex, elems) {
    _classCallCheck(this, Elem);

    this.parentIndex = parentIndex;
    this.elems = elems;
    elemsArr.push(this);
  };

  //dodanie brand


  var brand = new Elem(0, [{
    'tagName': 'a',
    'attr': [{
      'attrType': 'class',
      'attrName': 'brand'
    }, {
      'attrType': 'href',
      'attrName': 'index.html'
    }],
    'textNode': 'Nieczuja'
  }]);

  //sprawdzanie ilości kolumn 1.1.1.1
  var columnsNmbr = function columnsNmbr(choice, indx) {

    function evenTest(nmbr) {
      if (nmbr % 2 === 0) {
        return nmbr;
      } else {
        return nmbr + 5;
      }
    }

    if (choice === 'col') {
      var x = lettersArr.length;
      x = x - 10 * indx + 1;
      return x;
    }

    if (choice === 'row') {
      var _x = evenTest(lettersArr.length / 2);
      // console.log(x)
      _x = _x - 20 + indx;
      return _x;
    }
  };

  //1.1
  var addLetters = function addLetters(item, position, index, style, className) {
    var letter = new Elem(position + index, [{
      'tagName': 'div',
      'attr': [{
        'attrType': 'class',
        'attrName': className
      }],
      'textNode': '' + (style === 'upper' ? item.toUpperCase() : item)
    }]);
  };

  //1.1
  var addLettersLink = function addLettersLink(item, position, index, style, className, id) {
    //console.log(position, index)
    var letter = new Elem(position + index, [{
      'tagName': 'a',
      'attr': [{
        'attrType': 'class',
        'attrName': className
      }, {
        'attrType': 'href',
        'attrName': '#' + id
      }],
      'textNode': '' + (style === 'upper' ? item.toUpperCase() : item)
    }]);
  };

  //switch 1.1.1
  var textSwitcher = function textSwitcher(indx) {
    var position = 0;

    switch (indx) {
      case 0:
        {
          position = 1;
          break;
        }
      case 1:
        {
          position = columnsNmbr('col', 3);
          break;
        }
      case 2:
        {
          position = columnsNmbr('col', 2);
          break;
        }
      case 3:
        {
          position = columnsNmbr('col', 1);
          break;
        }
      case 4:
        {
          position = columnsNmbr('col', 4);
          break;
        }
      case 5:
        {
          position = columnsNmbr('col', 1) - 1;
          break;
        }
      default:
        {
          position = 11;
          break;
        }
    }
    return position;
  };

  // dodawanie napisów 1
  var addPortfolioText = function addPortfolioText(text, indxArr) {

    if (portfolioTextsArr1.includes(text) === true) {
      Array.from(text).map(function (item, index) {
        addLetters(item, textSwitcher(indxArr), index, 'upper', 'pageTitle');
      });
    }

    if (portfolioTextsArr2.includes(text) === true) {
      addLetters(text, textSwitcher(indxArr), 0, 'lower', 'textConnector');
    }

    if (portfolioTextsArr3.includes(text) === true) {
      addLetters(text, textSwitcher(indxArr), 0, 'lower', 'menu brand');
    }

    if (portfolioTextsArr4.includes(text) === true) {
      Array.from(text).map(function (item, index) {
        var group = void 0;
        indxArr === indxArr && (group = text);
        if (text.length < 3) {
          var choosePosition = function choosePosition() {
            //console.log(elemsInRow);
            var x = void 0;
            elemsInRow === 5 ? x = 2 : x = 1;
            return x;
          };

          addLettersLink(item, (index + choosePosition()) * 10, columnsNmbr('row', indxArr + 2), 'upper', 'pageTitle ' + group + ' hide', text);
        }
        if (text.length >= 3) {
          addLettersLink(item, index * 10, columnsNmbr('row', indxArr + 2), 'upper', 'pageTitle ' + group + ' hide', text);
        }
      });
    }
  };

  var lettersArr = [];
  //console.log(lettersArr);
  Array.from(hero.children).map(function (item, index) {
    return lettersArr.push(index);
  });
  //lettersArr.shift();
  //console.log(lettersArr);
  var portfolioTextsArr1 = ['portfolio', 'paweł', 'nieczuja-', 'ostrowski'];
  var portfolioTextsArr2 = ['of'];
  var portfolioTextsArr3 = ['menu'];
  var portfolioTextsArr4 = ['webs', 'ux', 'ui', 'repo', 'cv', 'find'];

  portfolioTextsArr1.map(function (item, index) {
    return addPortfolioText(item, index);
  });
  addPortfolioText(portfolioTextsArr2[0], 4);
  addPortfolioText(portfolioTextsArr3[0], 5);
  portfolioTextsArr4.map(function (item, index) {
    return addPortfolioText(item, index);
  });

  //tworzenie elementów
  var addElemsContent = function addElemsContent(collection) {

    collection.map(function (item) {
      //console.log(item.parentIndex)
      var parent = item.parentIndex;

      item.elems.map(function (item, index) {
        var tag = document.createElement(item.tagName);
        item.attr.map(function (item) {
          return tag.setAttribute(item.attrType, item.attrName);
        });
        hero.children[parent].appendChild(tag);
        item.textNode && (tag.textContent = item.textNode);
      });
    });
  };

  addElemsContent(elemsArr);

  //dodanie data do elementów menu
  var addDataTag = function addDataTag(collection) {
    collection.map(function (item) {
      var elem = hero.getElementsByClassName(item);
      var name = item;
      Array.from(elem).map(function (item) {
        var parent = item.parentElement;
        parent.setAttribute('data-menu', name);
      });
    });
  };

  addDataTag(portfolioTextsArr4);
};

addHeroElems();

window.addEventListener('resize', function () {
  addHeroElems();
});