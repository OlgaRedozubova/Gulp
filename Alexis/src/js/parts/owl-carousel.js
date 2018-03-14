$(document).ready(function(){
  $('.owl-carousel').owlCarousel(
    {
      animateOut: 'flipInX',
      animateIn: 'flipInX',
      items: 1,
      smartSpeed: 450,
      dots: true,
      autoplay: true
    });
  new WOW().init();
  $(".header__toggleBtn").on("click", function(){
    /*alert ("Hello");*/
    $('.header__nav').toggleClass('open');  
    return false;  
  });
  $(function() {
    $(document).click(function(){
      $('.header__nav').removeClass('open');
    });
  });

 /* $(".nav-item") .on("click", function(){
    $(".nav-item").toggleClass('active');
  });*/
});
