// javascript wizardry
$(document).ready(function() {
  var viewportWidth = $(window).width();
  var viewportHeight = $(window).height();

  $('body').css('height', viewportHeight + 'px');
  $('body').css('width', viewportWidth + 'px');
  $('.logo-container').css('position','absolute');
  $('.logo-container').css('top', Math.max(0, ((viewportHeight - $('.logo-container').outerHeight()) / 2) + $(window).scrollTop()) + "px");
  $('.logo-container').css('left', Math.max(0, ((viewportWidth - $('.logo-container').outerWidth()) / 2) + $(window).scrollLeft()) + "px");

  $(window).resize(function() {
      var viewportWidth = $(window).width();
      var viewportHeight = $(window).height();

      $('body').css('height', viewportHeight + 'px');
      $('body').css('width', viewportWidth + 'px');
      $('.logo-container').css('position','absolute');
      $('.logo-container').css('top', Math.max(0, ((viewportHeight - $('.logo-container').outerHeight()) / 2) + $(window).scrollTop()) + "px");
      $('.logo-container').css('left', Math.max(0, ((viewportWidth - $('.logo-container').outerWidth()) / 2) + $(window).scrollLeft()) + "px");

  });
});
