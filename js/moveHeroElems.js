var moveHeroElems = function moveHeroElems() {

  var hero = document.querySelector('.hero');
  var boxes = hero.getElementsByClassName('box');
  var menu = hero.getElementsByClassName('menu');
  var picture = hero.getElementsByClassName('picture');
  var menusArr = Array.from(menu);
  var boxesArr = Array.from(boxes);
  var pictureArr = Array.from(picture);

  var column = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  //obracanie i ukrywanie
  var moveRows = function moveRows(row) {
    var _loop = function _loop(i) {
      setTimeout(function () {
        var child = boxesArr[i].children[0];
        if (typeof child === 'undefined' || child.classList.contains('brand') !== true) {
          boxesArr[i].classList.contains('tile') ? boxesArr[i].classList.toggle('tileBack') : boxesArr[i].classList.toggle('tile');
          typeof boxesArr[i].children[0] !== 'undefined' && setTimeout(function () {
            boxesArr[i].children[0].classList.toggle('hide');
          }, 400);
          typeof boxesArr[i].children[1] !== 'undefined' && setTimeout(function () {
            boxesArr[i].children[1].classList.toggle('hide');
          }, 400);
        }
      }, (5 + row) * i);
    };

    for (var i = row; i < boxesArr.length; i = i + 10) {
      _loop(i);
    }
  };

  var delayedMove = function delayedMove() {
    column.map(function (item, index) {
      return setTimeout(function () {
        moveRows(index);
      }, 50 * index);
    });
  };

  menusArr.map(function (item) {
    return item.addEventListener('click', function (event) {
      delayedMove();
    });
  });
};

moveHeroElems();

window.addEventListener('resize', function () {
  moveHeroElems();
});