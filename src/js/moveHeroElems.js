const moveHeroElems = function () {

  const hero = document.querySelector('.hero');
  const boxes = hero.getElementsByClassName('box');
  const boxesArr = Array.from(boxes);

  boxesArr.map((item, index) => {
    item.addEventListener('mouseover', function (event) {
      //item.classList.contains('tile') ? item.classList.toggle('tileBack');
      item.classList.toggle('tile');
      //item.classList.toggle('red');
      //item.children[0] && item.children[0].classList.toggle('hide');
      console.log(item.children[0] && item.children[0]);
    }, false);

    item.addEventListener('mouseleave', function (event) {
      setTimeout(function () {
        item.classList.toggle('tile');
      }, 1000)
    });
  })
}

moveHeroElems();