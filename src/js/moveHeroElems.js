const moveHeroElems = function () {

  const hero = document.querySelector('.hero');
  const boxes = hero.getElementsByClassName('box');
  const boxesArr = Array.from(boxes);


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