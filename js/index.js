window.onload = function () {
  var slideAd = document.getElementById('slideAd');
  var slideAdList = slideAd.getElementsByTagName('li');
  var slidePoint = document.getElementById('slidePoint');
  var slidePointList = slidePoint.getElementsByTagName('li');
  var prevBtn = document.getElementById('prevBtn');
  var nextBtn = document.getElementById('nextBtn');
  var curIndex = 1;  //当前展示图片
  var timer;

  //设置初始样式
  slideAdList[curIndex - 1].style.opacity = 1;
  slidePointList[curIndex - 1].className = 'active';

  // 自动
  // timer = setInterval(function () {
  //   nextBtn.onclick();
  // },2000)

  // 点击切换
  prevBtn.onclick = function () {
    if (curIndex == 1) {
      curIndex = 3
    } else {
      curIndex--;
    }
    pointSlide();
    slideAnimate();
  }

  nextBtn.onclick = function () {
    if (curIndex == 3) {
      curIndex = 1
    } else {
      curIndex++;
    }
    pointSlide();
    slideAnimate();
  }

  for (var n = 0; n < slidePointList.length; n++) {
    slidePointList[n].onclick = function () {
      slidePointList[n].className = 'active';
      return;
    }
  }

  // 图片切换
  function slideAnimate() {
    for (var i = 0; i < slideAdList.length; i++) {
      if (slideAdList[i].style.opacity == 1) {
        slideAdList[i].style.opacity = 0;
      }
      slideAdList[curIndex - 1].style.opacity = 1;
    }
  }

  // 圆点切换
  function pointSlide() {
    for (var j = 0; j < slidePointList.length; j++) {
      if (slidePointList[j].className == 'active') {
        slidePointList[j].className = '';
      }
      slidePointList[curIndex - 1].className = 'active';
    }
  }
}