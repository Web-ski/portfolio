const addArticlesContent = function () {

  const main = document.querySelector('.main');
  const sections = Array.from(main.getElementsByClassName('section'));
  const textsArr = [];

  class Text {
    constructor(text) {
      this.text = text;
      textsArr.push(this)
    }
  }

  //pobieranie tekstu
  // const getTexts = function() {
  // }
  

  //tworzenie artykułów
  const addText = function (collection) {
    collection.map((item, index) => {
      let article = item.querySelector('.description');
      console.log(article)

    })
  }

  addText(sections);

}

addArticlesContent();