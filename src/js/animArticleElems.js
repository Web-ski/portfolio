const animArticleElems = function (name, number) {

  const hero = document.querySelector('.hero');
  const section = document.getElementById(name);
  //console.log(section)
  const heroHeight = hero.offsetHeight;
  const sectionHeight = section.offsetHeight;
  const distance = (heroHeight - (heroHeight *  0.1)) + (sectionHeight * (number));

    const animArticleTitle = function () {
      let children = Array.from(section.querySelectorAll('.article'));
      //console.log('fun', children)
      children.map(item => {
        Array.from(item.children).map((item, index) => {
          setTimeout(function () {
            item.classList.add('sectionTitle--show')
          }, index * 100)
        });
      })
    }

    const animLoad = function () {
      if (document.body.scrollTop > distance || document.documentElement.scrollTop > distance) {
        animArticleTitle();
        document.removeEventListener("scroll", animLoad);
      }
    }
    
    document.addEventListener('scroll', animLoad);  
}
