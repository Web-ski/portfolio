const stainText = document.getElementsByClassName("text__stain");
const stainPage = document.getElementsByClassName("page__stain");
const stainsTextArr = Array.from(stainText);
const stainsPageArr = Array.from(stainPage);

function addStains(collection) {

  collection.map((item, index) => {
    addSmallStain(item, 'AliceBlue')
  })

  function addSmallStain(item, color) {

    let x = item.offsetWidth;
    let y = item.offsetHeight;
    console.log(x, y)

    const ctx = item.getContext("2d");
    const grd = ctx.createRadialGradient(x*0.5, y*0.5, x, x*0.6, y*0.5, 0);
    grd.addColorStop(0,"red");
    grd.addColorStop(1, color);
    ctx.fillStyle = grd;
    //ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x*0.2, y*0.4);
    ctx.quadraticCurveTo(x*0.9, y*(-0.2), x*0.9, y*0.4);
    ctx.quadraticCurveTo(x*0.9, y*1.30, x*0.2, y*0.6);
    ctx.quadraticCurveTo(x*0.1, y*0.5, x*0.2, y*0.4);
    ctx.fill();
  }
}

addStains(stainsTextArr);
addStains(stainsPageArr);




/*
const stainBox = document.getElementsByClassName("text__stain");
const ctx = stainBox[0].getContext("2d");
ctx.fillStyle = "#FF0000"; 
ctx.fillRect(0, 0, 10, 10); 
*/