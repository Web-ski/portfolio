const stainText = document.getElementsByClassName("text__stain");
const stainPage = document.getElementsByClassName("page__stain");
const stainsTextArr = Array.from(stainText);
const stainsPageArr = Array.from(stainPage);


//deklaracja klasy
class Stain {
  constructor(item, index) {
    this.item = item;
    this.index = index;
  }
  

  //addAnimations(item, index);
}


//kontrukcja funcji rysującej
/*function addAnimations(item, index) {
  item.style.animationName = "move2";
  item.style.animationDelay = "10s";
  item.style.animationIterationCount = "infinite"; 
  item.style.animationFillMode = "backwards";
}*/

//kontrukcja funcji rysującej
function addSmallStain(item, index, startX, startY, startX2, startY2) {

  let color1 = function () {
    let x = 'rgba(255, 0, 0, 0.5)';
    return x;
  };
  let color2 = function () {
    let x = 'rgba(240, 248, 255, 0.5)';
    return x;
  };

  let x = item.offsetWidth;
  let y = item.offsetHeight;
  
  console.log(startX, startY)

  //points
  /* boki a-b, b-c itd. i proporcje do nich */
  let pointA = x * startX;
  let pointB = y * startY;


  // setInterval(function() {
  //   let nmbr = Math.floor(Math.random() *10);
  //   nmbr > 6 ? startX = startX++ *1 : startX = startX-- * 1; 

  //   console.log(startX)

  const ctx = item.getContext("2d");

  ctx.fillStyle = color1();
  ctx.beginPath();
  ctx.moveTo(pointA, pointB);
  //ctx.quadraticCurveTo(x * 0.9, y * (-0.2), x * (startX + 0.4), y * (startY + startY2));
  //ctx.quadraticCurveTo(x * 0.9, y * 1.30, x * startX, y * 0.6);
  //ctx.quadraticCurveTo(x * (startX - 0.1), y * 0.5, x * startX, y * startY);
  ctx.lineTo(x * (startX + 0.4), y * (startY + startY2));
  ctx.lineTo(x * (startX + 0.4), y * (startY + 0.4));
  ctx.lineTo(x * (startX + startX2), y * (startY + 0.4));
  ctx.lineTo(pointA, pointB);
  ctx.fill();


  //}, 50)


}


function addStains(collection) {

  collection.map((item, index) => {

    function loteryX() {
      let startX = Math.floor(Math.random()*(10-5)) / 10;
      return startX;
    }
    
    function loteryY() {
      let startY = Math.floor(Math.random()*(10-5)) / 10;
      return startY;
    }

    function loteryX2() {
      let startX2 = Math.floor(Math.random()*(10-7)) / 10;
      return startX2;
    }
    
    function loteryY2() {
      let startY2 = Math.floor(Math.random()*(10-7)) / 10;
      return startY2;
    }

    let elem = new Stain(item, index);
    addSmallStain(elem.item, elem.index, loteryX(), loteryY(), loteryX2(), loteryY2());
  })
}

addStains(stainsTextArr);
addStains(stainsPageArr);


/*
const stainBox = document.getElementsByClassName("text__stain");
const ctx = stainBox[0].getContext("2d");
ctx.fillStyle = "#FF0000"; 
ctx.fillRect(0, 0, 10, 10); 
*/

/* radial*/
  // const grd = ctx.createRadialGradient(x * 0.5, y * 0.5, x, x * 0.6, y * 0.5, 0);
  // grd.addColorStop(0, color1());
  // grd.addColorStop(1, color2());
  // ctx.fillStyle = grd;