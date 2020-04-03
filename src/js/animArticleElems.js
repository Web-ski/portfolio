const animArticleElems = function () {
  const hero = document.querySelector('.hero');
  const descriptionArr = Array.from(document.querySelectorAll('.section'));
  const heroHeight = hero.offsetHeight;
  const distanceArr = [];
  
  descriptionArr.map((item, index) => {
    let sectionHeight = item.offsetHeight;
    const distance = heroHeight + (sectionHeight * (index));
    distanceArr.push(distance);

    const animArticleTitle = function (item) {
      let children = Array.from(item.querySelectorAll('.article'));
      children.map(item => {
        Array.from(item.children).map((item, index) => {
          setTimeout(function() {
            item.classList.add('sectionTitle--show')
        }, index * 100) });      
      })
    }
    
    const animLoad = function () {
      if (document.body.scrollTop > distance || document.documentElement.scrollTop > distance) {
        animArticleTitle(item);
        document.removeEventListener("scroll", animLoad);
      } 
    }
  
    document.addEventListener('scroll', animLoad);

  })  
}

animArticleElems();
