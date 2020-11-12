$(function(){
  var setImg = '#header-img';
  var fadeSpeed = 1600;
  var switchDelay = 5000;

  $(setImg).children('img').css({opacity:'0'});
  $(setImg + ' img:first').stop().animate({opacity:'1'},fadeSpeed);

  setInterval(function(){
      $(setImg + ' :first-child').animate({opacity:'0'},fadeSpeed).next('img').animate({opacity:'1'},fadeSpeed).end().appendTo(setImg);
  },switchDelay);
});