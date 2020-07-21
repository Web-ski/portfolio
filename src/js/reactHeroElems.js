const reactHeroElems = function () {

  const hero = document.querySelector('.hero');

  const elemsArr = [];
  const portfolioTextsArr4 = ['ux', 'ui', 'webs', 'repo', 'cv', 'find'];
  portfolioTextsArr4.map((item, index) => {
    let elem = hero.getElementsByClassName(item);
    let arr = Array.from(elem);
    elemsArr.push(arr);
  })

  const reactElems = function (collection) {
    collection.map((item, index) => {
      item.parentElement.style.cursor = 'pointer';
      item.parentElement.addEventListener('mouseenter', function (event) {
        //(console.log(item.classList[1]))
        let currentClass = item.classList[1];
        collection.map(item => {
          item.style.color = "white"; //"black";
        })

        setTimeout(function () {
          elemsArr.map(item => {
            item.map(item => {
              item.classList[1] !== currentClass && (item.style.color = "cyan");

            })
          })
        }, 0)

      }, false);

    })
  }

  elemsArr.map(item => reactElems(item));
}

reactHeroElems();

window.addEventListener('resize', function () {
  reactHeroElems();
});