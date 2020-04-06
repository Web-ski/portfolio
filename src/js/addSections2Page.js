const addSections2Page = function () {

  const main = document.querySelector('.main2Page');

  let url = `http://localhost/my-test/portfolio/portfolio/src/js/${pageName}.json`;

  //tworzenie sekcji

  const addSections = function(collection) {
    collection.map(item => {
      console.log(item)

    })
  }

  //pobranie danych
  const getContent = function () {

    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        addSections(data)
      })
      .catch(function (error) {
        console.log('Looks like there was a problem: \n', error);
      });
  }

  getContent();

}

addSections2Page();