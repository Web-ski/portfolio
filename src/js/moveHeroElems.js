const moveHeroElems = function () {

  const hero = document.querySelector('.hero');
  const boxes = hero.getElementsByClassName('box');
  const boxesArr = Array.from(boxes);

  const column = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  //obracanie i ukrywanie
  const moveRows = function (row) {
    for (let i = row; i < boxesArr.length; i = i + 10) {
      setTimeout(function () {
        boxesArr[i].classList.contains('tile') ? boxesArr[i].classList.toggle('tileBack') : boxesArr[i].classList.toggle('tile');
        boxesArr[i].children[0].classList.toggle('hide');
      }, (5 + row) * i)
    }
  }

  const delayedMove = function () {
    column.map((item, index) => setTimeout(function () {
      moveRows(index);
    }, 50 * index));
  }

  setTimeout(function () {delayedMove();}, 3000)
  setTimeout(function () {delayedMove();}, 3000 *2)

}

moveHeroElems();
/*
boxesArr.map((item, index) => {
  item.addEventListener('mouseenter', function (event) {
    item.classList.toggle('tile');
    item.children[0] && (Array.from(item.children).map((item) => item.classList.toggle('hide')));
  }, false);
  
  item.addEventListener('mouseleave', function (event) {
    setTimeout(function () {
      item.classList.toggle('tile');
    }, 1000)
  }, false);
})
*/