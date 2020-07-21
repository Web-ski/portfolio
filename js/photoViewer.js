var photoViewer = function photoViewer(name) {
  //console.log(name)

  var main = document.querySelector(".main2Page");
  var wrapper = document.querySelector(".wrapper2Page");
  var photoBox = main.querySelector("[data-viewer=\"" + name + "\"]");
  var parentArticle = photoBox.parentElement;
  var parentArticleChildren = Array.from(parentArticle.children);

  //tworzenie sekcji
  var addViewer = function addViewer(collection) {
    collection.shift();
    //console.log(collection[0].getAttributeNode('src').value)
    collection[0].classList.add('article__photo--active');
    photoBox.style.backgroundImage = "url(" + collection[0].getAttributeNode('src').value + ")";
    collection.map(function (item, index) {
      item.addEventListener("click", function () {
        collection.map(function (item) {
          item.classList.contains('article__photo--active') === true && item.classList.remove('article__photo--active');
        });
        item.classList.add('article__photo--active');
        photoBox.style.backgroundImage = "url(" + item.getAttributeNode('src').value + ")";
        if (photoBox.children[0] !== undefined) {
          photoBox.children[0].style.backgroundImage = "url(" + item.getAttributeNode('src').value + ")";
        }
      });
    });
  };

  //tworzenie modala
  var addModal = function addModal(parent) {
    console.log(parent);
    var modal = document.createElement('aside');
    modal.setAttribute('class', 'modal');
    modal.style.backgroundImage = parent.style.backgroundImage;
    parent.appendChild(modal);
    parent.addEventListener("click", function (event) {
      event.stopPropagation();
      modal.classList.toggle('modal--active');

      window.addEventListener("click", function (event) {
        event.stopPropagation();
        modal.classList.contains('modal--active') === true && modal.classList.remove('modal--active');
      }, false);
    }, false);
  };

  addViewer(parentArticleChildren);

  photoBox.classList.contains('modal__parent') === true && addModal(photoBox);
};

//photoViewer();
//object.addEventListener("load", function)