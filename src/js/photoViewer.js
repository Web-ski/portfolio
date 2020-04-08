const photoViewer = function (name) {
  console.log(name)

  const main = document.querySelector(".main2Page");
  const photoBox = main.querySelector(`[data-viewer="${name}"]`);
  //const parentArticle = photoBox.parentElement;

  //tworzenie sekcji
  const addViewer = function (elem) {

    let parent = elem.parentElement;
    let photos = parent.children;
    console.log(photos)
    //elem.style.backgroundImage =  

  }

  addViewer(photoBox);
}

//photoViewer();