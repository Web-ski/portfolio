const photoViewer = function (name) {
  //console.log(name)

  const main = document.querySelector(".main2Page");
  const photoBox = main.querySelector(`[data-viewer="${name}"]`);
  const parentArticle = photoBox.parentElement;
  const parentArticleChildren = Array.from(parentArticle.children);

  //tworzenie sekcji
  const addViewer = function (collection) {
    collection.shift();

    //console.log(collection[0].getAttributeNode('src').value)
    collection[0].classList.add('article__photo--active');
    photoBox.style.backgroundImage = `url(${collection[0].getAttributeNode('src').value})`;
    //elem.style.backgroundImage =  

    collection.map((item, index) => {
      item.addEventListener("click", function () {
        collection.map((item) => {
          item.classList.contains('article__photo--active') === true && item.classList.remove('article__photo--active');
        });
        item.classList.add('article__photo--active');
        photoBox.style.backgroundImage = `url(${item.getAttributeNode('src').value})`;
      })
    });
  }


  addViewer(parentArticleChildren);

  // function addPopup(elem) {
  //   elem.addEventListener("click", function () {
  //     alert(elem)
  //   })
  // }

  // addPopup(photoBox)
}

//photoViewer();
//object.addEventListener("load", function)