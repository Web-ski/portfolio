const addHeroPicture = function () {

  const wrapper = document.querySelector('.wrapper');
  const hero = document.querySelector('.hero');
  const boxes = hero.getElementsByClassName('box');
  let elemsInRow = boxes.length / 10;

  //znajdź 9 elementów w środku
  const pictureElems = function () {
    //console.log(nmbrElems + ' ' + elemsInRow)   
    console.log(boxes.length)
    let nmbr = (Math.floor(elemsInRow / 2) * 10) + 4;
    let box = boxes[nmbr];
    let box1 = boxes[nmbr - 10];
    let boxesArr = [box, box1];

    class Dottes {
      constructor(tagName, className) {
        this.tagName = tagName;
        this.className = className;
      }
    }

    const position = function (axis, i) {


    }

    boxesArr.map(item => {
      for (let i = 0; i < 4; i++) {
        let dott = new Dottes('div', 'picture')
        console.log(item);
        let child = document.createElement(dott.tagName);
        child.classList.add(dott.className);
        child.style.top = position('y', i) + '%';
        child.style.left = position('x', i) + '%';
        item.appendChild(child);
      }
    })
  }

  pictureElems();
}

addHeroPicture();

window.addEventListener('resize', function () {
  addHeroPicture();
});