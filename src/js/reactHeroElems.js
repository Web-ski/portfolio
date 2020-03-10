const reactHeroElems = function () {

  const hero = document.querySelector('.hero');
  const art = hero.getElementsByClassName('art');
  const ux = hero.getElementsByClassName('ux');
  const ui = hero.getElementsByClassName('ui');

  const elemsArr = [Array.from(art), Array.from(ux), Array.from(ui)];


  const reactElems = function (collection) {
    collection.map((item, index) => {
      item.parentElement.addEventListener('mouseenter', function (event) {
        //(console.log(item.classList[1]))
        let currentClass = item.classList[1];
        collection.map(item => {
          item.style.color = "black";
        })

        setTimeout(function () {  
          elemsArr.map(item => {
            item.map(item => {
              item.classList[1] !== currentClass && (item.style.color = "white");
            
            })
          })  
        }, 100)

      }, false);

    })
  }

  elemsArr.map(item => reactElems(item));
}

reactHeroElems();

window.addEventListener('resize', function () {
  reactHeroElems();
});