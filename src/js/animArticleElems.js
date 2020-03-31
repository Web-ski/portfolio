const animArticleElems = function () {
  const hero = document.querySelector('.hero');
  const descriptionArr = Array.from(document.querySelectorAll('.section'));
  const heroHeight = hero.offsetHeight;
  const distanceArr = [];
  
  descriptionArr.map((item, index) => {
    let sectionHeight = item.offsetHeight;
    const distance = heroHeight + (sectionHeight * (index));
    distanceArr.push(distance);

    const animArticleTitle = function () {
      console.log(descriptionArr);
      console.log(index + ';' + distance)
    }
    
    const animLoad = function () {
      if (document.body.scrollTop > distance || document.documentElement.scrollTop > distance) {
        animArticleTitle();
        document.removeEventListener("scroll", animLoad);
      } 
    }
  
    document.addEventListener('scroll', animLoad);

  })  
}

animArticleElems();
