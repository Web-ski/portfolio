const addArticles = function () {

  const main = document.querySelector('.main');
  const sections = Array.from(main.getElementsByClassName('section'));
  const sectionsArr = [];

  //tworzenie artykułów
  const createIdArr = function (collection) {
    collection.map(item => {
      sectionsArr.push(item.getAttribute('id'));
      for (let i = 0; i < 2; i++) {
        let article = document.createElement('article');
        article.setAttribute('class', 'article');
        item.appendChild(article);
      }
    })
  }
  
  //nadawanie cech artykułom
  const addSpecify = function (collection) {
    collection.map((item, index) => {
      console.log(item);
      let sepcify1 = 'description';
      let sepcify2 = 'photos';

      if (index % 2 === 0) {
        item.firstElementChild.classList.add(sepcify1);
        item.lastElementChild.classList.add(sepcify2);
      } else {
        item.firstElementChild.classList.add(sepcify2);
        item.lastElementChild.classList.add(sepcify1);
      }
    })    
  }
  
  createIdArr(sections)
  addSpecify(sections);
}

addArticles();