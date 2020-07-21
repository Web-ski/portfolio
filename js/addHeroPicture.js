function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var addHeroPicture = function addHeroPicture() {

  var wrapper = document.querySelector('.wrapper');
  var hero = document.querySelector('.hero');
  var boxes = hero.getElementsByClassName('box');
  var elemsInRow = boxes.length / 10;

  //znajdź 9 elementów w środku
  var pictureElems = function pictureElems() {
    //console.log(nmbrElems + ' ' + elemsInRow)   
    //console.log(boxes.length)
    var nmbr = Math.floor(elemsInRow / 4) * 10 + 2;

    //7 x 7
    var boxesArr = [0, 1, 2, 3, 4, 5, 6, 7];

    var Photos = function Photos(tagName, className, picture) {
      _classCallCheck(this, Photos);

      this.tagName = tagName;
      this.className = className;
      this.picture = picture;
    };

    var position = function position(axis, i) {};

    boxesArr.map(function (item, index) {

      for (var i = 0; i < boxesArr.length; i++) {

        var parent = boxes[nmbr + i + index * 10];

        var img = new Photos('div', 'picture', './images/ostry01bBLUE.png');
        //console.log(img);
        var child = document.createElement(img.tagName);
        child.classList.add(img.className);
        child.style.backgroundImage = 'url(' + img.picture + ')';
        child.style.left = '-' + index * 100 + '%';
        child.style.top = '-' + i * 100 + '%';
        parent.appendChild(child);
      }
    });
  };

  pictureElems();
};

addHeroPicture();

window.addEventListener('resize', function () {
  addHeroPicture();
});