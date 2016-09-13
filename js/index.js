$(document).ready(function () {
  // =============
  // 首页轮播
  // =============

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

  timer = setInterval(autoGo, 4000);
  $('.slideBtn').hover(function () {
    clearInterval(timer);
  }, function () {
    timer = setInterval(autoGo, 4000);
  })

  // 自动播放
  function autoGo() {
    if (curIndex == 3) {
      curIndex = 1;
    } else {
      curIndex++;
    }
    $('#slideAd li').eq(curIndex - 1).stop().fadeIn(800).siblings().stop().fadeOut(800);
    $('#slidePoint li').eq(curIndex - 1).addClass('active').siblings().removeClass('active');
  }

  // ============================
  // 显示二维码
  // ============================

  var stickH = $('.stick').outerHeight();
  var erweimaH = $('.erweima').outerHeight();
  var erweimaH1 = erweimaH / 2 - stickH / 2;
  $('.erweima').css('bottom', 80 - erweimaH1 + 'px');
  $('.stick .wechat').hover(function () {
    $('.erweima').show();
  }, function () {
    $('.erweima').fadeOut(150);
  })


  // =================
  // 照片墙
  // =================

  var windowWidth = $(window).width();


  // 弹出
  // $('.viewPhotos').each(function () {
  //   $(this).on('click', function () {
  //     $('.detailCover').animate({
  //       left: 0
  //     }, 400).show();
  //     $('body').css('overflow-y', 'hidden');
  //   })
  // })

  $('.photoList ul').on('click', '.viewPhotos', function () {
    $('.detailCover').animate({
      left: 0
    }, 400).show();
    $('body').css('overflow-y', 'hidden');
  })

  // 关闭按钮
  $('#closeBtn').on('click', function () {
    $(this).parents('.detailCover').animate({
      left: '100%'
    }, 300).hide(300);
    $('body').css('overflow-y', 'auto');
  })

  // 设置宽度弹出层照片宽度
  $('.picSlideBox .picSlideBig li').css('width', .9 * windowWidth + 'px');
  // 轮播
  var dtIndex = 0;
  var dtImgSize = $('.picSlideBig li').size();
  $('.picSlideBig li').eq(0).show();
  $('.totalNum').text(dtImgSize);
  $('.curNum').text('1');

  $('#picSlideBtnNext').on('click', function () {
    dtIndex += 1;
    if (dtIndex == dtImgSize) {
      dtIndex = 0;
      $('.curNum').text('1');
    }
    $('.curNum').text(dtIndex + 1);
    $('.picSlideBig li').eq(dtIndex).fadeIn().siblings().fadeOut();
  })

  $('#picSlideBtnPrev').on('click', function () {
    dtIndex -= 1;
    if (dtIndex < 0) {
      dtIndex = dtImgSize - 1;
      $('.curNum').text('8');
    }
    $('.curNum').text(dtIndex);
    $('.picSlideBig li').eq(dtIndex).fadeIn().siblings().fadeOut();
  })


  // =================
  // 响应菜单弹出
  // =================
  var height = $(window).height();
  $('.responsiveNav-list').css('height', height);
  var responsiveNav = document.getElementById('responsiveNav');
  responsiveNav.ontouchstart = function () {
    // $('.responsiveNav').on('click', function () {
    if ($('.responsiveNav-list').css('left') != '0px') {
      $('.responsiveNav-list').animate({
        left: 0
      }, 500);
      $('#responsiveNav .line-1').removeClass('hamburgerAa').addClass('hamburgerA');
      $('#responsiveNav .line-2').removeClass('hamburgerBb').addClass('hamburgerB');
      $('#responsiveNav .line-3').removeClass('hamburgerCc').addClass('hamburgerC');
    } else {
      $('.responsiveNav-list').animate({
        left: '-40rem'
      }, 500);
      $('#responsiveNav .line-1').removeClass('hamburgerA').addClass('hamburgerAa');
      $('#responsiveNav .line-2').removeClass('hamburgerB').addClass('hamburgerBb');
      $('#responsiveNav .line-3').removeClass('hamburgerC').addClass('hamburgerCc');
    }
  }

  // =================
  // 页面数据获取部分
  // =================  

  // 照片墙
  function photoAjax() {
    $.ajax({
      type: 'GET',
      url: 'http://www.lanpartyclub.com/lanpartyclub/photowall/get/random',
      dataType: 'JSONP',
      jsonp: 'callback',
      success: function (data) {
        var photos = data.data.photo;
        var numZ = 0;
        $.each(photos, function (i, cur) {
          numZ++;
          $('.photoList ul').append('<li class="viewPhotos ani-' + numZ + '"><i class="photostyle"><img src="http://www.lanpartyclub.com/upload/lanpartyclub/images/album/' + cur.url + '" alt="' + cur.id + '"></i><i class="line topLine"></i><i class="line rightLine"></i><i class="line bottomLine"></i><i class="line leftLine"></i><span class="teamName">某团队活动<em>观看相册</em></span></li>')
        });
        // 相册页面
        $('.photoList li').hover(function () {
          $(this).find('span').stop().fadeIn(300);
        }, function () {
          $(this).find('span').stop().fadeOut(300);
        })
        var eleWidth = $('.photoList .viewPhotos').outerWidth(true);
        var numaaa = parseInt(windowWidth / eleWidth);
        $('.photoList').width(numaaa * eleWidth + 'px');
      }
    })
  }
  photoAjax();

  $('#changePhoto').on('click', function () {
    $('.photoList ul').children().remove();
    photoAjax();
  });
})