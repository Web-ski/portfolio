var animArticleElems = function animArticleElems(name, number) {

  var hero = document.querySelector('.hero');
  var section = document.getElementById(name);
  //console.log(section)
  var heroHeight = hero.offsetHeight;
  var sectionHeight = section.offsetHeight;
  var distance = heroHeight - heroHeight * 0.1 + sectionHeight * number;

  var animArticleTitle = function animArticleTitle() {
    var children = Array.from(section.querySelectorAll('.article'));
    //console.log('fun', children)
    children.map(function (item) {
      Array.from(item.children).map(function (item, index) {
        setTimeout(function () {
          item.classList.add('sectionTitle--show');
        }, index * 100);
      });
    });
  };

  var animLoad = function animLoad() {
    if (document.body.scrollTop > distance || document.documentElement.scrollTop > distance) {
      animArticleTitle();
      document.removeEventListener("scroll", animLoad);
    }
  };

  document.addEventListener('scroll', animLoad);
};