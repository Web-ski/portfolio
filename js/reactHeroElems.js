var reactHeroElems = function reactHeroElems() {

  var hero = document.querySelector('.hero');

  var elemsArr = [];
  var portfolioTextsArr4 = ['ux', 'ui', 'webs', 'repo', 'cv', 'find'];
  portfolioTextsArr4.map(function (item, index) {
    var elem = hero.getElementsByClassName(item);
    var arr = Array.from(elem);
    elemsArr.push(arr);
  });

  var reactElems = function reactElems(collection) {
    collection.map(function (item, index) {
      item.parentElement.style.cursor = 'pointer';
      item.parentElement.addEventListener('mouseenter', function (event) {
        //(console.log(item.classList[1]))
        var currentClass = item.classList[1];
        collection.map(function (item) {
          item.style.color = "white"; //"black";
        });

        setTimeout(function () {
          elemsArr.map(function (item) {
            item.map(function (item) {
              item.classList[1] !== currentClass && (item.style.color = "cyan");
            });
          });
        }, 0);
      }, false);
    });
  };

  elemsArr.map(function (item) {
    return reactElems(item);
  });
};

reactHeroElems();

window.addEventListener('resize', function () {
  reactHeroElems();
});