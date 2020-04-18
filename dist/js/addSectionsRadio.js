const addSectionsRadio = function () {

  const hero = document.querySelector('.hero');
  const heroHeight = hero.offsetHeight;
  const main = document.querySelector('.main');
  const sections = Array.from(main.getElementsByClassName('section'));
  const sectionsArr = [];
  const distanceArr = [];

  //tworzenie radia
  const addRadio = function () {
    let aside = document.createElement('aside');
    aside.setAttribute('class', 'section__radio');
    main.appendChild(aside);
  }

  //tworzenie elementów 
  const addRadioElems = function (collection) {
    collection.map((item, index) => {
      sectionsArr.push(item.getAttribute('id'));
      let radioElem = document.createElement('a');
      radioElem.setAttribute('class', 'radio__elem');
      radioElem.setAttribute('href', `#${sectionsArr[index]}`);
      main.querySelector('.section__radio').appendChild(radioElem);
    })
  }

  //nadawanie cech radiu
  const addRadioSpecify = function (collection) {
    const radio = main.querySelector('.section__radio');
    const active = 'radio__elem--active';

    collection.map((item, index) => {

      let sectionHeight = item.offsetHeight;
      const distance = heroHeight + (sectionHeight * (index));
      distanceArr.push(distance);

      const animLoad = function () {
        if (document.body.scrollTop > distance || document.documentElement.scrollTop > distance) {

          //item to właściwa sekcja z id
          Array.from(radio.children).map((item) => {
            item.classList.contains(active) === true && item.classList.remove(active);
            radio.children[index].classList.contains(active) !== true && radio.children[index].classList.toggle(active);          
          })
        }
      }

      document.addEventListener('scroll', animLoad);

    })
  }

  addRadio();
  addRadioElems(sections);
  addRadioSpecify(sections);
}

addSectionsRadio();