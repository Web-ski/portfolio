document.addEventListener('DOMContentLoaded', function (event) { 
  const btnBackTop = document.querySelector('.button__back-top');
  const arrowTop = document.querySelector('.arrow__top');

  const showBtn = () =>  {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      btnBackTop.style.display = 'block';
      arrowTop.style.display = 'block';
    } else {
      btnBackTop.style.display = 'none';
      arrowTop.style.display = 'none';
    }
  }

  const scroll = () => {
    btnBackTop.addEventListener('click', function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  }

  showBtn();
  window.onscroll = showBtn;  
  scroll();
});