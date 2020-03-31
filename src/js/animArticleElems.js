const animArticleElems = function () {
  const hero = document.querySelector('.hero');
  const description = Array.from(document.querySelectorAll('.description'));
  
  const animArticleTitle = function () {
    console.log(description);
    const heroHeigth = hero.offsetHeight;
    console.log(heroHeigth)
  }

  const animLoad = () =>  {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
      animArticleTitle();
      document.removeEventListener("scroll", animLoad);
    } 
  }
  
  document.addEventListener('scroll', animLoad);
}

animArticleElems();
