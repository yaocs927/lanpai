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
      'left': -dailyIndex * dailyPicWidth + 'px'
    }, 300)
  }

  function dailyPrev() {
    dailyIndex -= 1;
    if (dailyIndex == -1) {
      $('#dailySlidePic').css({
        'left': -((dailySize - 1) * dailyPicWidth) + 'px'
      })
      dailyIndex = dailySize - 2;
    }
    $('#dailySlidePic').stop().animate({
      'left': -dailyIndex * dailyPicWidth + 'px'
    }, 300)
  }

  $('.daily-slideBtn span').each(function () {
    $(this).hover(function () {
      $(this).addClass('active')
    }, function () {
      $(this).removeClass('active')
    })
  })

  // 设置介绍字段长度 
  var maxTextWidth = 100;
  $('.introduce').each(function () {
    var curTextWidth = $(this).text().length;
    if (curTextWidth > maxTextWidth) {
      $(this).text($(this).text().substring(0, maxTextWidth));
      $(this).html($(this).text() + '...');
    }
  })



  // 滚动事件
  $(window).scroll(function () {
    var windowHeight = $(this).height();
    var scrollHeight = $(this).scrollTop();

    // 回到顶部按钮出现
    if (scrollHeight >= 200) {
      $('.stick .backtop').slideDown();
    } else {
      $('.stick .backtop').slideUp();
    }

    // 页面滚动内容飞入
    function flyLeftAnimate(ele, hhh) {
      var eleHeight1 = $(ele).offset().top;
      if (eleHeight1 - scrollHeight < windowHeight - hhh) {
        $(ele).css({
          '-webkit-animation': 'flyLeftAnimate .5s ease-in-out 1 forwards',
          '-moz-animation': 'flyLeftAnimate .5s ease-in-out 1 forwards',
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


    // 设置详情弹出框在当前位置在窗口顶部
    $('.detailCover').css('top', scrollHeight + 'px');

  })


  // 回到顶部
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
  $('#placeAll').on('click', '.detailBtn', function () {
    // $('.detailBtn').on('click', function () {
    $('.detailCover').stop().animate({
      left: 0
    }, 400).show();
    $('body').css('overflow-y', 'hidden');
  })

  $('.detailBtnTouch').on('click', function () {
    $('.detailCover').stop().animate({
      left: 0
    }, 400).show();
    $('body').css('overflow-y', 'hidden');
  })

  // 设置图片宽度
  var widthaaa = $('.picSlideBox').width();
  $('.picSlideBig li').css('width', widthaaa + 'px');

  // 关闭按钮
  $('#closeBtn').on('click', function () {
    $(this).parents('.detailCover').stop().animate({
      left: '100%'
    }, 300).hide(300);
    $('body').css('overflow-y', 'auto');
  })

  // 详情轮播
  var dtIndex = 0;
  $('.picSlideSmall li').eq(0).addClass('active').siblings().removeClass('active');
  var dtClone = $('.picSlideBig li').first().clone();
  $('.picSlideBig').append(dtClone);
  var dtImgSize = $('.picSlideBig li').size();
  $('.totalNum').text(dtImgSize - 1);
  $('.curNum').text('1');

  $('#picSlideBtnNext').on('click', function () {
    dtIndex += 1;
    if (dtIndex == dtImgSize) {
      $('.picSlideBig').css('left', 0);
      dtIndex = 1;
    }
    $('.curNum').text(dtIndex + 1);
    $('.picSlideBig').stop().animate({
      'left': -dtIndex * widthaaa + 'px'
    }, 300);
    if (dtIndex == dtImgSize - 1) {
      $('.curNum').text('1');
    }
  })

  $('#picSlideBtnPrev').on('click', function () {
    dtIndex -= 1;
    if (dtIndex == -1) {
      $('.picSlideBig').css('left', -(dtImgSize - 1) * widthaaa);
      dtIndex = dtImgSize - 2;
    }
    $('.curNum').text(dtIndex + 1);
    $('.picSlideBig').stop().animate({
      'left': -dtIndex * widthaaa + 'px'
    }, 300);
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

  var thisClassIdNum;
  // 场地风格列表
  $.ajax({
    type: 'GET',
    url: 'http://www.lanpartyclub.com/lanpartyclub/class/get/child?id=1',
    dataType: 'JSONP',
    jsonp: "callback",
    success: function (data) {
      var title = data.data.class;
      $.each(title, function (i, cur) {
        thisClassIdNum = cur.id;
        $('#placeList').append('<section class="typeList clearfix" id="placeStyle-' + thisClassIdNum + '"><div class="typeList-title flyLeftAnimate"><h2>' + cur.name + '</h2><span><i></i><i></i><i></i></span></div><div class="colList clearfix flyRightAnimate"></div></section>')
        placeLists(thisClassIdNum);
      });
    }
  });

  //餐饮风格列表
  $.ajax({
    type: 'GET',
    url: 'http://www.lanpartyclub.com/lanpartyclub/class/get/child?id=2',
    dataType: 'JSONP',
    jsonp: 'callback',
    success: function (data) {
      var title = data.data.class;
      $.each(title, function (i, cur) {
        thisClassIdNum = cur.id;
        $('#foodList').append('<section class="typeList clearfix" id="foodStyle-' + thisClassIdNum + '"><div class="typeList-title flyLeftAnimate"><h2>' + cur.name + '</h2><span><i></i><i></i><i></i></span></div><div class="colList clearfix flyRightAnimate"></div></section>')
        foodLists(thisClassIdNum);
      });
    }
  })
})



/*
 *
 *
 *需调用函数部分
 */

// 场地列表
function placeLists(classId) {
  $.ajax({
    type: 'GET',
    url: 'http://www.lanpartyclub.com/lanpartyclub/item/get/class?id=' + classId,
    dataType: 'JSONP',
    jsonp: 'callback',
    success: function (data) {
      if (data.status == 200) {
        var items = data.data.item;
        $.each(items, function (i, cur) {
          console.log(items)
          $('#placeStyle-' + classId).find('.typeList-title').siblings('.colList').append('<div class="product left"><div class="productPic"><img src="http://www.lanpartyclub.com/upload/lanpartyclub/images/album/' + cur.cover + '" alt="123"></div><div class="productPic-info detailBtnTouch">' + cur.title + '</div><div class="product-content-bg"><div class="product-content"><h3>' + cur.title + '</h3><p class="introduce">' + cur.brief + '</p><span class="productStrip"></span></div></div><div class="detailBtn productBtn">VIEW</div></div>')
          // 设置分类标题高度
          $('.typeList-title').height($('.colList .product').height());
        })
      } else if (data.status == 402) {
        $('#placeStyle-' + classId).remove();
      }
    }
  });
}

// 餐饮列表
function foodLists(classId) {
  $.ajax({
    type: 'GET',
    url: 'http://www.lanpartyclub.com/lanpartyclub/item/get/class?id=' + classId,
    dataType: 'JSONP',
    jsonp: 'callback',
    success: function (data) {
      if (data.status == 200) {
        var items = data.data.item;
        $.each(items, function (i, cur) {
          console.log(items)
          $('#foodStyle-' + classId).find('.typeList-title').siblings('.colList').append('<div class="product left"><div class="productPic"><img src="http://www.lanpartyclub.com/upload/lanpartyclub/images/album/' + cur.cover + '" alt="123"></div><div class="productPic-info detailBtnTouch">' + cur.title + '</div><div class="product-content-bg"><div class="product-content"><h3>' + cur.title + '</h3><p class="introduce">' + cur.brief + '</p><span class="productStrip"></span></div></div><div class="detailBtn productBtn">VIEW</div></div>')
          // 设置分类标题高度
          $('.typeList-title').height($('.colList .product').height());
        })
      } else if (data.status == 402) {
        $('#foodStyle-' + classId).remove();
      }
    }
  });
}