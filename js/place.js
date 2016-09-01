$(document).ready(function () {
  // 设置首屏高度
  var height = $(window).height();
  $('.topBox').css('height', height);

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
    $('.typeList-title').each(function () {
      var eleHeight1 = $(this).offset().top;
      if (eleHeight1 - scrollHeight < windowHeight - 30) {
        $(this).css({
          '-webkit-animation': 'flyLeftAnimate 1s ease-in-out 1 forwards',
          '-moz-animation': 'flyLeftAnimate 1s ease-in-out 1 forwards',
          '-o-animation': 'flyLeftAnimate 1s ease-in-out 1 forwards',
          'animation': 'flyLeftAnimate 1s ease-in-out 1 forwards'
        })
      }
    })
    $('.colList').each(function () {
      var eleHeight2 = $(this).offset().top;
      if (eleHeight2 - scrollHeight < windowHeight - 30) {
        $(this).css({
          '-webkit-animation': 'flyRightAnimate 1s ease-in-out 1 forwards',
          '-moz-animation': 'flyRightAnimate 1s ease-in-out 1 forwards',
          '-o-animation': 'flyRightAnimate 1s ease-in-out 1 forwards',
          'animation': 'flyRightAnimate 1s ease-in-out 1 forwards'
        })
      }
    })

    if (scrollHeight > windowHeight - 100) {
      $('.stick .backtop').slideDown();
    } else {
      $('.stick .backtop').slideUp();
    }


  })


  // =======
  // 回到顶部
  // =======
  $('.stick .backtop').on('click', function () {
    $('body').animate({ scrollTop: 0 }, 300);
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


})