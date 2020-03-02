const moveHeroElems = function () {

  const hero = document.querySelector('.hero');
  const boxes = hero.getElementsByClassName('box');
  const boxesArr = Array.from(boxes);

  boxesArr.map((item, index) => {
    item.addEventListener('mouseover', function (event) {
      //item.classList.contains('tile') ? item.classList.toggle('tileBack');
      //event.stopPropagation();
      //event.preventDefault();
      item.classList.toggle('tile');
      //item.classList.toggle('red');
      //item.children[0] && (Array.from(item.children).map((item) => item.classList.toggle('hide')));
      //console.log(item.children[0] && item.children[0]);
    }, false);
    
    item.addEventListener('mouseleave', function (event) {
      setTimeout(function () {
        //event.stopPropagation();
        //event.preventDefault();
        item.classList.toggle('tile');
      }, 1000)
    }, false);
  })
}

moveHeroElems();