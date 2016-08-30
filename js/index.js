$(document).ready(function () {
  // =======
  // 首页轮播
  // =======

  var curIndex = 1;
  var timer;
  // 初始状态
  $('#slideAd li').eq(0).show();
  $('#slidePoint li').eq(0).addClass('active');

  // 按钮切换 
  $('#nextBtn').on('click', function () {
    if (curIndex == 3) {
      curIndex = 1;
    } else {
      curIndex++;
    }
    $('#slideAd li').eq(curIndex - 1).stop().fadeIn(800).siblings().stop().fadeOut(800);
    $('#slidePoint li').eq(curIndex - 1).addClass('active').siblings().removeClass('active');
  })

  $('#prevBtn').on('click', function () {
    if (curIndex == 1) {
      curIndex = 3;
    } else {
      curIndex--;
    }
    $('#slideAd li').eq(curIndex - 1).stop().fadeIn(800).siblings().stop().fadeOut(800);
    $('#slidePoint li').eq(curIndex - 1).addClass('active').siblings().removeClass('active');
  })

  $('#slidePoint li').each(function () {
    $(this).on('click', function () {
      var myIndex = $(this).index();
      curIndex = myIndex + 1;
      $('#slideAd li').eq(myIndex).stop().fadeIn(800).siblings().stop().fadeOut(800);
      $(this).addClass('active').siblings().removeClass('active');
    })
  })

  timer = setInterval(function () {
    if (curIndex == 3) {
      curIndex = 1;
    } else {
      curIndex++;
    }
    $('#slideAd li').eq(curIndex - 1).stop().fadeIn(800).siblings().stop().fadeOut(800);
    $('#slidePoint li').eq(curIndex - 1).addClass('active').siblings().removeClass('active');
  },3000)


})