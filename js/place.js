$(document).ready(function () {
  // 设置首屏高度
  var height = $(window).height();
  $('.topBox').css('height', height);

  // 每日推荐轮播
  var dailyIndex = 0;
  var clone = $('#dailySlidePic li').first().clone();
  $('#dailySlidePic').append(clone);
  var dailySize = $('#dailySlidePic li').size();
  var dailyPicWidth = $('.dailyPic li').outerWidth();
  $('.daily-slideBtn .next').on('click', function () {
    dailyNext();
  })
  $('.daily-slideBtn .prev').on('click', function () {
    dailyPrev();
  })

  function dailyNext() {
    dailyIndex += 1;
    if (dailyIndex == dailySize) {
      $('#dailySlidePic').css({
        'left': 0
      })
      dailyIndex = 1;
    }
    $('#dailySlidePic').stop().animate({
      'left': -dailyIndex * dailyPicWidth
    }, 300)
  }

  function dailyPrev() {
    dailyIndex -= 1;
    if (dailyIndex == -1) {
      $('#dailySlidePic').css({
        'left': -(dailySize - 1) * dailyPicWidth
      })
      dailyIndex = dailySize - 2;
    }
    $('#dailySlidePic').stop().animate({
      'left': -dailyIndex * dailyPicWidth
    }, 300)
  }

  $('.daily-slideBtn span').each(function () {
    $(this).hover(function () {
      $(this).addClass('active')
    }, function () {
      $(this).removeClass('active')
    })
  })

  // 设置字段长度 
  var maxTextWidth = 100;
  $('.introduce').each(function () {
    var curTextWidth = $(this).text().length;
    if (curTextWidth > maxTextWidth) {
      $(this).text($(this).text().substring(0, maxTextWidth));
      $(this).html($(this).text() + '...');
    }
  })

  // 设置分类标题高度 
  $('.typeList-title').height($('.colList .product').height());

  // 页面滚动内容飞入
  $(window).scroll(function () {
    var windowHeight = $(window).height();
    var scrollHeight = $(window).scrollTop();
    function flyLeftAnimate(ele, hhh) {
      var eleHeight1 = $(ele).offset().top;
      if (eleHeight1 - scrollHeight < windowHeight - hhh) {
        $(ele).css({
          '-webkit-animation': 'flyLeftAnimate .5s ease-in-out 1 forwards',
          '-moz-animation': 'flyLeftAnimate .5s ease-in-out 1 forwards',
          '-o-animation': 'flyLeftAnimate .5s ease-in-out 1 forwards',
          'animation': 'flyLeftAnimate .5s ease-in-out 1 forwards'
        })
      }
    }
    function flyRightAnimate(ele, hhh) {
      var eleHeight2 = $(ele).offset().top;
      if (eleHeight2 - scrollHeight < windowHeight - hhh) {
        $(ele).css({
          '-webkit-animation': 'flyRightAnimate .5s ease-in-out 1 forwards',
          '-moz-animation': 'flyRightAnimate .5s ease-in-out 1 forwards',
          '-o-animation': 'flyRightAnimate .5s ease-in-out 1 forwards',
          'animation': 'flyRightAnimate .5s ease-in-out 1 forwards'
        })
      }
    }

    $('.container .flyLeftAnimate').each(function () {
      flyLeftAnimate(this, 30);
    })
    $('.container .flyRightAnimate').each(function () {
      flyRightAnimate(this, 30);
    })
    $('.about-container .flyLeftAnimate').each(function () {
      flyLeftAnimate(this, 20);
    })
    $('.about-container .flyRightAnimate').each(function () {
      flyRightAnimate(this, 20);
    })


    // 回到顶部按钮出现
    if (scrollHeight > windowHeight - 100) {
      $('.stick .backtop').slideDown();
    } else {
      $('.stick .backtop').slideUp();
    }

  })


  // =================
  // 回到顶部
  // =================
  $('.stick .backtop').on('click', function () {
    $('body').animate({
      scrollTop: 0
    }, 300);
    return false;
  })

  // 显示二维码
  var stickH = $('.stick').outerHeight();
  var erweimaH = $('.erweima').outerHeight();
  var erweimaH1 = erweimaH / 2 - stickH / 2;
  $('.erweima').css('bottom', 80 - erweimaH1 + 'px');
  $('.stick .wechat').hover(function () {
    $('.erweima').show();
  }, function () {
    $('.erweima').hide();
  })

  // =================
  // 详情部分
  // =================

  // 详情弹出
  // $('.detailBtn').each(function () {
  //   $(this).on('click', function () {
  //     $('.detailCover').animate({ left: 0}, 500);
  //   })
  // })

  // 关闭按钮
  $('#closeBtn').on('click', function () {
    $(this).parents('.detailCover').animate({left: '100%'}, 500)
  })

})