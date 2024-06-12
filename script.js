$(document).ready(function() {
  const $place = $('.place');
  const $background = $('.background');
  const $open = $('.button');
  const $close = $('.close');

  $open.on('click', function() {
      $background.addClass('active');
      $place.addClass('active');
  });

  $close.on('click', function() {
      $background.removeClass('active');
      $place.removeClass('active');
  });

  $background.on('click', function() {
      $background.removeClass('active');
      $place.removeClass('active');
  });
});
