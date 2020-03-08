'use strict';

new WOW().init();


const images = ['./img/mainvisual.png','./img/photo-1565375706248-2fd61105f01e.jpeg','./img/photo-1573495613179-848ffd29f962.jpeg','./img/photo-1571361656693-d7602246ce3c.jpeg','./img/photo-1508873699372-7aeab60b44ab.jpeg'];

let current = 0;

function changeImage(num) {
    if(current + num >= 0 && current + num < images.length) {
        current += num;
        document.getElementById('main__image').src = images[current];
    }
};

document.getElementById('prev').onclick = function() {
    changeImage(-1);

}
document.getElementById('next').onclick = function() {
    changeImage(1);

}


$(function(){

// スムーススクロール
$('a[href^="#"]').on('click',function(){
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({scrollTop:position},speed,'swing');
    return false;
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


$('.menu').on('click',function(){
    $('.menu__line').toggleClass('active');
    $('.gnav').fadeToggle();

})

$('.gnav__menu-item > a').on('click',function(){
    $('.gnav').fadeToggle();
    $('.menu__line').toggleClass('active');
})

$('.q-and-a__question').on('click',function(){
    $(this).next('.q-and-a__answer-box').slideToggle();
    $(this).toggleClass("open");
});

$('#modal__open').on('click',function() {
    $('.modal').fadeIn();
    return false;
})
$('.close__button > img,.modal__button,.modal__bg').on('click',function(){
    $('.modal').fadeOut();
    return false;
})


});

