$(document).ready(function () {
  var height = $(window).height();
  $('.topBox').css('height', height);

  var maxTextWidth = 100;
  var curTextWidth = $('.dailyContent').text().length;
  if (curTextWidth > maxTextWidth) {
    $('.dailyContent').text($('.dailyContent').text().substring(0, maxTextWidth));
    $('.dailyContent').html($('.dailyContent').text() + '...');
  }
})