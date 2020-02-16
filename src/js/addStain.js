const stainText = document.getElementsByClassName("text__stain");
const stainPage = document.getElementsByClassName("page__stain");
const stainsTextArr = Array.from(stainText);
const stainsPageArr = Array.from(stainPage);

const colorsArr = ['rgba(255, 0, 0, 0.3)', 'rgba(255, 55, 0, 0.3)', 'rgba(255, 0, 50, 0.3)', 'rgba(155, 0, 150, 0.3)']
const speedsArr = ['11s', '12s', '13s', '14s'];
const animationsArr = ['move1', 'move2'];

//deklaracja klasy
class Stain {
  constructor(item, index) {
    this.item = item;
    this.index = index;
  }

  color1() {
    let nmbr = Math.floor(Math.random() * (10 - 6));
    return colorsArr[nmbr];
  }
}

//kontrukcja funcji rysującej

function addAnimations(item) {
  item.style.animationName = animationsArr[Math.floor(Math.random() * animationsArr.length)];
  item.style.animationDuration = speedsArr[Math.floor(Math.random() * speedsArr.length)];
  item.style.animationIterationCount = "infinite";
  item.style.animationTimingFunction = 'linear';
  item.style.animationFillMode = "both";
}

//kontrukcja funcji rysującej
function addSmallStain(item, index, startX, startY, colorM) {

  let color1 = colorM;

  let x = item.offsetWidth;
  let y = item.offsetHeight;

  let pointX = Math.ceil(Math.random() * (10 - 8) + 2) / 10;
  let pointY = pointX; //Math.ceil(Math.random() * (10 - 8) + 1.8) / 10;

  //points
  let pointA = x * startX;
  let pointB = y * startY;
  let pointC = x * (pointX + pointX);
  let pointD = y * (startY);
  let pointE = x * (pointX + pointX);
  let pointF = y * (pointY + pointY);
  let pointG = x * (startX);
  let pointH = y * (pointY + pointY);

  /*koordynaty łuków*/
  let AB = (pointC - pointA);
  let FD = (pointF - pointD);
  let EG = (pointE - pointG);
  let HB = (pointH - pointB);


  //setInterval(function () {
  //   let nmbr = Math.floor(Math.random() *10);
  //   nmbr > 6 ? startX = startX++ *1 : startX = startX-- * 1; 
  //}, 50)
  const ctx = item.getContext("2d");

  let pPlus = 1; //x / 100 * 20;
  let z = -1;

  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    let arc1X = ((pointA + pointC) / 2);
    let arc1Y = (pointD - FD / 2) - ((pointD - FD / 2) / 200) * pPlus;

    let arc2X = (pointC + AB / 2) - ((pointD - FD / 2) / 200) * pPlus;
    let arc2Y = ((pointH + pointD) / 2);

    let arc3X = (pointE) - ((pointE - pointG) / 2);
    let arc3Y = (pointH + HB / 2) + ((pointD - HB / 2) / 200) * pPlus;

    let arc4X = (pointG - (EG) / 2) + ((pointD - FD / 2) / 200) * pPlus;
    let arc4Y = (pointH) - ((pointH - pointB) / 2);

    ctx.fillStyle = 'rgba(255, 10, 50, 0.3)';
    ctx.beginPath();
    ctx.moveTo(pointA, pointB);
    ctx.quadraticCurveTo(arc1X, arc1Y, pointC, pointD);
    ctx.quadraticCurveTo(arc2X, arc2Y, pointE, pointF);
    ctx.quadraticCurveTo(arc3X, arc3Y, pointG, pointH);
    ctx.quadraticCurveTo(arc4X, arc4Y, pointA, pointB);
    ctx.fill();
    /*shadows*/
    /*var gr = ctx.createLinearGradient(0, 0, 50, 50); 
    gr.addColorStop("0", "red"); 
    gr.addColorStop("1", "rgba(255, 0, 0, 0.3)");
    ctx.strokeStyle = gr;
    ctx.lineWidth = "5"; 
    ctx.stroke(); */

    switch (z) {
      case -1:
        if (pPlus < 140) {
          pPlus = pPlus - z;
        } else if (pPlus === 140) {
          z = 1;
        };
        break;
      case 1:
        if (pPlus > 1) {
          pPlus = pPlus - z;
        } else if (pPlus === 1) {
          z = -1;
        };
        break;
    }

    console.log(pPlus)
  }

  animate();
}


function addStains(collection) {

  collection.map((item, index) => {

    addAnimations(item);

    function randomX() {
      let startX = Math.floor(Math.random() * (10 - 8) + 2) / 10;
      return startX;
    }

    function randomY() {
      let startY = Math.floor(Math.random() * (10 - 8) + 2) / 10;
      return startY;
    }

    let color2 = function () {
      let x = 'rgba(240, 248, 255, 0.5)';
      return x;
    };

    let elem = new Stain(item, index);
    addSmallStain(elem.item, elem.index, randomX(), randomY(), elem.color1);
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