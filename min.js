$(function(){
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
    });



    var pagetop = $('#page_top');
  // ボタン非表示
  pagetop.hide();
  //  スクロールしたらボタン表示
  $(window).scroll(function () {
     if ($(this).scrollTop() > 2000) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 800);
     return false;
  });
});

