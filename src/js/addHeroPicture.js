const addHeroPicture = function () {

  const wrapper = document.querySelector('.wrapper');
  const hero = document.querySelector('.hero');
  const boxes = hero.getElementsByClassName('box');
  let elemsInRow = boxes.length / 10;

  //znajdź 9 elementów w środku
  const pictureElems = function () {
    //console.log(nmbrElems + ' ' + elemsInRow)   
    console.log(boxes.length)
    let nmbr = (Math.floor(elemsInRow / 4) * 10) + 2;

    //7 x 7
    let boxesArr = [0, 1, 2, 3, 4, 5, 6, 7];

    class Photos {
      constructor(tagName, className, picture) {
        this.tagName = tagName;
        this.className = className;
        this.picture = picture;
      }
    }

    const position = function (axis, i) {

    }

    boxesArr.map((item, index) => {

      for (let i = 0; i < boxesArr.length; i++) {

        let parent = boxes[nmbr + i + index * 10];

        //let img = new Photos('div', 'picture', `./images/ostry01bBLUE_0${i + 1}_0${index + 1}.png`);
        let img = new Photos('div', 'picture', `./images/ostry01bBLUE.png`);
        console.log(img);
        let child = document.createElement(img.tagName);
        child.classList.add(img.className);
        child.style.backgroundImage = 'url(' + img.picture + ')';
        child.style.left = `-${index * 100}%`;
        child.style.top = `-${i * 100}%`;
        parent.appendChild(child);
      }
    })
  }

  pictureElems();
}

addHeroPicture();

window.addEventListener('resize', function () {
  addHeroPicture();
});