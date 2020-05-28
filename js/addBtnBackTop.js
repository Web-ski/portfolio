document.addEventListener('DOMContentLoaded', function (event) {
  var btnBackTop = document.querySelector('.button__back-top');
  var arrowTop = document.querySelector('.arrow__top');

  var showBtn = function showBtn() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      btnBackTop.style.display = 'block';
      arrowTop.style.display = 'block';
    } else {
      btnBackTop.style.display = 'none';
      arrowTop.style.display = 'none';
    }
  };

  var scroll = function scroll() {
    btnBackTop.addEventListener('click', function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  };

  showBtn();
  window.onscroll = showBtn;
  scroll();
});