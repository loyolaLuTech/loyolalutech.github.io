// javascript wizardry
$(function(){
  $('.logo-container').css('position','absolute');
  $('.logo-container').css('top', Math.max(0, (($(window).height() - $('.logo-container').outerHeight()) / 2) + $(window).scrollTop()) + "px");
  $('.logo-container').css('left', Math.max(0, (($(window).width() - $('.logo-container').outerWidth()) / 2) + $(window).scrollLeft()) + "px");

  $(window).resize(function() {
    $('.logo-container').css('position','absolute');
    $('.logo-container').css('top', Math.max(0, (($(window).height() - $('.logo-container').outerHeight()) / 2) + $(window).scrollTop()) + "px");
    $('.logo-container').css('left', Math.max(0, (($(window).width() - $('.logo-container').outerWidth()) / 2) + $(window).scrollLeft()) + "px");
  });
});

$(function(){
  var viewportWidth = $(window).width();
  var viewportHeight = $(window).height();

  $('body').css('height', viewportHeight + 'px');
  $('body').css('width', viewportWidth + 'px');

  $(window).resize(function() {
      var viewportWidth = $(window).width();
      var viewportHeight = $(window).height();

      $('body').css('height', viewportHeight + 'px');
      $('body').css('width', viewportWidth + 'px');
  });
});
