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
    collection.map((item, index) => {
      item.addEventListener("click", function () {
        collection.map((item) => {
          item.classList.contains('article__photo--active') === true && item.classList.remove('article__photo--active');
        });
        item.classList.add('article__photo--active');
        photoBox.style.backgroundImage = `url(${item.getAttributeNode('src').value})`;
        if (photoBox.children[0] !== undefined) {
          photoBox.children[0].style.backgroundImage = `url(${item.getAttributeNode('src').value})`;
        }
      })
    });
  }

  //tworzenie modala
  const addModal = function (parent) {
    console.log(parent)
    let modal = document.createElement('aside');
    modal.setAttribute('class', 'modal');
    modal.style.backgroundImage = parent.style.backgroundImage;
    parent.appendChild(modal);
    parent.addEventListener("click", function () {
      modal.classList.toggle('modal--active');
    });
  }

  addViewer(parentArticleChildren);

  photoBox.classList.contains('modal__parent') === true && (addModal(photoBox));
}

//photoViewer();
//object.addEventListener("load", function)