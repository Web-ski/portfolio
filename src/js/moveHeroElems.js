const moveHeroElems = function () {

  const hero = document.querySelector('.hero');
  const articles = hero.getElementsByClassName('article');
  const articlesArr = Array.from(articles);

  articlesArr.map((item, index) => {
    item.addEventListener('mouseover', function(event) {
      item.classList.toggle('red');
    });
    item.addEventListener('mouseleave', function(event) {
      item.classList.toggle('red');
    });
  })

}

moveHeroElems();