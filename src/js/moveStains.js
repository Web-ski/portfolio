const moveStains = function () {
  const hero = document.querySelector('.hero');
  const stainBox = document.querySelectorAll("[data-stain]");
  console.log(stainBox)
  const stainsBoxArr = Array.from(stainBox);
  const speedsArr = ['15', '16', '17', '18', '19'];
  const animationsArr = ['move1', 'move2'];


  const heroHeight = hero.offsetHeight;
  const heroWidth = hero.offsetWidth;

  console.log(heroWidth + '/' + heroHeight);

  let deltaX = 1;
  let deltaY = 1;

  const mover = function (collection) {

    collection.map((item, index) => {
      let x = (Math.ceil(Math.random() * (heroWidth - 0.7 * heroWidth)))
      let y = (Math.ceil(Math.random() * (heroHeight - 0.8 * heroHeight)))
      item.style.left = `${x}px`;
      item.style.top = `${y}px`;
      //item.style.animationName = animationsArr[Math.floor(Math.random() * animationsArr.length)];
      //item.style.animationDuration = speedsArr[Math.floor(Math.random() * speedsArr.length)];
      //item.style.animationIterationCount = "infinite";
      //item.style.animationTimingFunction = 'linear';

      item.animate([{
          transform: 'translateX(0px)'
        },
        {
          transform: `translateX(${heroWidth}px)`
        }
      ], {
        duration: speedsArr[Math.floor(Math.random() * speedsArr.length)] * 10000,
        iterations: Infinity
      })
      //item.style.animationDirection = "alternate-reverse";
      //item.style.animationFillMode = 'both';
      
    })
  }

  mover(stainsBoxArr);
}

moveStains();



// const mover = function (collection) {

//     collection.map((item, index) => {
//         itemWidth = item.offsetWidth;
//         let x = (Math.ceil(Math.random()*100))
//         console.log(x);
//         //item.setAttribute("style", `left: ${x}px`);

//         setInterval(function() {
//             item.style.left = x + 'px';
//             x = x + deltaX/30;

//             if(item.style.left === heroWidth - itemWidth + 'px') {
//                 deltaX = -1;
//             }

//             if(item.style.left === 0 + 'px') {
//                 deltaX = 1;
//             }
//         }, 10)
//     })
// }