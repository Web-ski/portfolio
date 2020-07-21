var addSectionsRadio = function addSectionsRadio() {

  var hero = document.querySelector('.hero');
  var heroHeight = hero.offsetHeight;
  var main = document.querySelector('.main');
  var sections = Array.from(main.getElementsByClassName('section'));
  var sectionsArr = [];
  var distanceArr = [];

  //tworzenie radia
  var addRadio = function addRadio() {
    var aside = document.createElement('aside');
    aside.setAttribute('class', 'section__radio');
    main.appendChild(aside);
  };

  //tworzenie elementów 
  var addRadioElems = function addRadioElems(collection) {
    collection.map(function (item, index) {
      sectionsArr.push(item.getAttribute('id'));
      var radioElem = document.createElement('a');
      radioElem.setAttribute('class', 'radio__elem');
      radioElem.setAttribute('href', '#' + sectionsArr[index]);
      main.querySelector('.section__radio').appendChild(radioElem);
    });
  };

  //nadawanie cech radiu
  var addRadioSpecify = function addRadioSpecify(collection) {
    var radio = main.querySelector('.section__radio');
    var active = 'radio__elem--active';

    collection.map(function (item, index) {

      var sectionHeight = item.offsetHeight;
      var distance = heroHeight + sectionHeight * index;
      distanceArr.push(distance);

      var animLoad = function animLoad() {
        if (document.body.scrollTop > distance || document.documentElement.scrollTop > distance) {

          //item to właściwa sekcja z id
          Array.from(radio.children).map(function (item) {
            item.classList.contains(active) === true && item.classList.remove(active);
            radio.children[index].classList.contains(active) !== true && radio.children[index].classList.toggle(active);
          });
        }
      };

      document.addEventListener('scroll', animLoad);
    });
  };

  addRadio();
  addRadioElems(sections);
  addRadioSpecify(sections);
};

addSectionsRadio();