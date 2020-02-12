function addSmallStain() {
  const stainText = document.getElementsByClassName("text__stain");
  const ctx = stainText[0].getContext("2d");
  ctx.fillStyle = "#FF0000";
  ctx.beginPath();
  ctx.moveTo(12, 10);
  ctx.quadraticCurveTo(20, 5, 40, 10);
  ctx.lineTo(40, 40);
  ctx.lineTo(10, 40);
  ctx.lineTo(12, 10);
  ctx.stroke();
}

addSmallStain();

function addBigStain() {
  const stainPage = document.getElementsByClassName("page__stain");
  const ctx = stainPage[0].getContext("2d");
  const grd = ctx.createRadialGradient(250, 250, 500, 300, 250, 0);
  grd.addColorStop(0,"transparent");
  grd.addColorStop(1,"blue");
  ctx.fillStyle = grd;
  ctx.beginPath();
  ctx.moveTo(100, 200);
  ctx.quadraticCurveTo(450, -100, 450, 200);
  ctx.quadraticCurveTo(450, 650, 100, 300);
  ctx.quadraticCurveTo(50, 250, 100, 200);
  //ctx.stroke();
  ctx.fill(); 

}

addBigStain();



/*
const stainBox = document.getElementsByClassName("text__stain");
const ctx = stainBox[0].getContext("2d");
ctx.fillStyle = "#FF0000"; 
ctx.fillRect(0, 0, 10, 10); 
*/