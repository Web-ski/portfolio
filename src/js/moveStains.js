const moveStains = function () {
    const hero = document.querySelector('.hero');
    const stainBox = document.getAttribute("data-stain");
    console.log(stainBox)
    const stainsBoxArr = Array.from(stainBox);

    const heroHeight = hero.offsetHeight;
    const heroWidth = hero.offsetWidth;

    console.log(heroWidth + '/' + heroHeight);

    let deltaX = 1;
    let deltaY = 1;

    const mover = function (collection) {
                
        collection.map((item, index) => {
            itemWidth = item.offsetWidth;
            let x = (Math.ceil(Math.random()*100))
            console.log(x);
            //item.setAttribute("style", `left: ${x}px`);
            
            setInterval(function() {
                item.style.left = x + 'px';
                x = x + deltaX/10;

                if(item.style.left === heroWidth - itemWidth + 'px') {
                    deltaX = -1;
                }

                if(item.style.left === 0 + 'px') {
                    deltaX = 1;
                }
            }, 10)
        })
    }

    

    mover(stainsBoxArr);
}

moveStains();