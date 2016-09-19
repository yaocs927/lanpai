$(function () {
  $('#adminAll').on('click', '.myTab', function (e) {
    e.preventDefault()
    $(this).tab('show');
    var hrefName = $(this).attr('href');
    $('#myTab a').each(function () {
      if (hrefName == $(this).attr('href')) {
        $(this).parent().addClass('active').siblings().removeClass('active');
      }
    })
  })


  // =================================
  // 发布品项
  // =================================

  var num = 1;
  // 品项发布-详情新增一条信息
  $('#fbpx-info-add').on('click', function () {
    $('#fbpx-info-list tbody').append('<tr><td><input type="checkbox" class="checkboxStyle" name="fbpx-info-list"></td><td><input type="text" class="form-control detailsTitle"></td><td><input type="text" class="form-control detailsInfo"></td><td><button type="button" class="btn btn-warning fbpx-info-delete">删除</button></td></tr>')
  })

  // 品项发布-详情删除一条信息
  $('#fbpx-info-list tbody').on('click', 'button.fbpx-info-delete', function () {
    $(this).parents('tr').remove();
  })

  // 修改品项-详情删除选中
  $('#fbpx-info-delete-all').on('click', function () {
    $('#fbpx-info-list input[type="checkbox"]:checked').each(function () {
      $(this).parents('tr').remove();
    })
  })

  // 品项发布-图片新增一条信息
  // $('#fbpx-photo-add').on('click', function () {
  //   num++;
  //   $('#fbpx-photo-list tbody').append('<tr><td><input type="checkbox" class="checkboxStyle" name="fbpx-photo-list"></td><td><input type="text" class="form-control fbpx-inputfile-' + num + '"></td><td><label class="btn btn-primary" for="fbpx-inputfile-' + num + '">选择文件</label></td><td><input type="file" id="fbpx-inputfile-' + num + '" class="file"></td><td><button type="button" class="btn btn-warning fbpx-photo-delete">删除</button></td></tr>')
  // })

  // 品项发布-图片删除一条信息
  // $('#fbpx-photo-list tbody').on('click', 'button.fbpx-photo-delete', function () {
  //   $(this).parents('tr').remove();
  // })

  // 品项发布-详情删除选中
  // $('#fbpx-photo-delete-all').on('click', function () {
  //   $('#fbpx-photo-list input[type="checkbox"]:checked').each(function () {
  //     $(this).parents('tr').remove();
  //   })
  // })

  // 上传文件获取文件名
  // var filename = $('.fileName');
  // $('#fbpx-photo-list').on('change', '.file', function (e) {
  //e.currentTarget.files 是一个数组，如果支持多个文件，则需要遍历
  //   var name = e.currentTarget.files[0].name;
  //   var thisIdName = $(this).attr('id')
  //   $('.' + thisIdName).val(name).attr('disabled', 'disabled');
  //   console.log(thisIdName)
  // });

  // 上传文件获取文件名


  $("#file-1").fileinput({
    uploadUrl: '#',
    allowedFileExtensions: ['jpg', 'png', 'gif'],
    overwriteInitial: false,
    maxFileSize: 1000,
    maxFilesNum: 10,
    slugCallback: function (filename) {
      return filename.replace('(', '_').replace(']', '_');
    }
  });





  // =================================
  // 修改品项
  // =================================

  var numA = 1;
  // 修改品项-详情新增一条信息
  $('#xgpx-info-add').on('click', function () {
    $('#xgpx-info-list tbody').append('<tr><td><input type="checkbox" class="checkboxStyle" name="xgpx-info-list"></td><td><input type="text" class="form-control"></td><td><input type="text" class="form-control"></td><td><button type="button" class="btn btn-warning xgpx-info-delete">删除</button></td></tr>')
  })

  // 修改品项-详情删除一条信息
  $('#xgpx-info-list tbody').on('click', 'button.xgpx-info-delete', function () {
    $(this).parents('tr').remove();
  })


  // 修改品项-详情删除选中
  $('#xgpx-info-delete-all').on('click', function () {
    $('#xgpx-info-list input[type="checkbox"]:checked').each(function () {
      $(this).parents('tr').remove();
    })
  })

  // 修改品项-图片新增一条信息
  $('#xgpx-photo-add').on('click', function () {
    numA++;
    $('#xgpx-photo-list tbody').append('<tr><td><input type="checkbox" class="checkboxStyle" name="xgpx-photo-list"></td><td><input type="text" class="form-control xgpx-inputfile-' + numA + '"></td><td><label class="btn btn-primary" for="xgpx-inputfile-' + numA + '">选择文件</label></td><td><input type="file" id="xgpx-inputfile-' + numA + '" class="file"></td><td><button type="button" class="btn btn-warning xgpx-photo-delete">删除</button></td></tr>')
  })

  // 修改品项-图片删除一条信息
  $('#xgpx-photo-list tbody').on('click', 'button.xgpx-photo-delete', function () {
    $(this).parents('tr').remove();
  })

  // 修改品项-详情删除选中
  $('#xgpx-photo-delete-all').on('click', function () {
    $('#xgpx-photo-list input[type="checkbox"]:checked').each(function () {
      $(this).parents('tr').remove();
    })
  })

  // 上传文件获取文件名
  // var filename = $('.fileName');
  $('#xgpx-photo-list').on('change', '.file', function (e) {
    //e.currentTarget.files 是一个数组，如果支持多个文件，则需要遍历
    var name = e.currentTarget.files[0].name;
    var thisIdName = $(this).attr('id')
    $('.' + thisIdName).val(name).attr('disabled', 'disabled');
    console.log(thisIdName)
  });

  // =================================
  // 发布照片
  // =================================

  // 品项发布-图片新增一条信息
  $('#fbzp-photo-add').on('click', function () {
    num++;
    $('#fbzp-photo-list tbody').append('<tr><td><input type="checkbox" class="checkboxStyle" name="fbzp-photo-list"></td><td><input type="text" class="form-control fbzp-inputfile-' + num + '"></td><td><label class="btn btn-primary" for="fbzp-inputfile-' + num + '">选择文件</label></td><td><input type="file" id="fbzp-inputfile-' + num + '" class="file"></td><td><button type="button" class="btn btn-warning fbzp-photo-delete">删除</button></td></tr>')
  })

  // 品项发布-图片删除一条信息
  $('#fbzp-photo-list tbody').on('click', 'button.fbzp-photo-delete', function () {
    $(this).parents('tr').remove();
  })

  // 修改品项-详情删除选中
  $('#fbzp-photo-delete-all').on('click', function () {
    $('#fbzp-photo-list input[type="checkbox"]:checked').each(function () {
      $(this).parents('tr').remove();
    })
  })

  // 上传文件获取文件名
  // var filename = $('.fileName');
  $('#fbzp-photo-list').on('change', '.file', function (e) {
    //e.currentTarget.files 是一个数组，如果支持多个文件，则需要遍历
    var name = e.currentTarget.files[0].name;
    var thisIdName = $(this).attr('id')
    $('.' + thisIdName).val(name).attr('disabled', 'disabled');
    console.log(thisIdName)
  });


  // =================================
  // 修改照片
  // =================================

  // 修改品项-图片新增一条信息
  $('#xgzp-photo-add').on('click', function () {
    numA++;
    $('#xgzp-photo-list tbody').append('<tr><td><input type="checkbox" class="checkboxStyle" name="xgzp-photo-list"></td><td><input type="text" class="form-control xgzp-inputfile-' + numA + '"></td><td><label class="btn btn-primary" for="xgzp-inputfile-' + numA + '">选择文件</label></td><td><input type="file" id="xgzp-inputfile-' + numA + '" class="file"></td><td><button type="button" class="btn btn-warning xgzp-photo-delete">删除</button></td></tr>')
  })

  // 修改品项-图片删除一条信息
  $('#xgzp-photo-list tbody').on('click', 'button.xgzp-photo-delete', function () {
    $(this).parents('tr').remove();
  })

  // 修改品项-详情删除选中
  $('#xgzp-photo-delete-all').on('click', function () {
    $('#xgzp-photo-list input[type="checkbox"]:checked').each(function () {
      $(this).parents('tr').remove();
    })
  })

  // 上传文件获取文件名
  // var filename = $('.fileName');
  $('#xgzp-photo-list').on('change', '.file', function (e) {
    //e.currentTarget.files 是一个数组，如果支持多个文件，则需要遍历
    var name = e.currentTarget.files[0].name;
    var thisIdName = $(this).attr('id')
    $('.' + thisIdName).val(name).attr('disabled', 'disabled');
    console.log(thisIdName)
  });



  // =================================
  // 数据获取部分
  // =================================

  // 管理品项--载入时获取--分类2
  var para = $('#placeStyleLists');
  getLevelTwo(1, para);

  // 管理品项--载入时获取--列表
  getItemLists(1);

  // 管理品项--分类1改变时获取分类2
  $('#lanClass').on('change', function () {
    var leveloneCurVal = $('#lanClass option:selected').attr('value');
    $('#placeStyleLists option[value="0"]').nextAll().remove();
    $('#pxgl-lists tbody').empty();
    // 获取分类2
    var para = $('#placeStyleLists');
    getLevelTwo(leveloneCurVal, para);
    // 获取新列表
    getItemLists(leveloneCurVal);
  })

  // 管理品项--风格选择改变时列表拉取
  $('#placeStyleLists').on('change', function () {
    var leveltwoCurVal = $('#placeStyleLists option:selected').attr('value');
    $('#pxgl-lists tbody').empty();
    // 根据风格获取列表
    getItemLists(leveltwoCurVal)
  })

  // 发布品项--载入时获取分类
  $('#fbpxTab').on('click', function () {
    var leveloneCurVal = $('#lanClass1 option:selected').attr('value');
    var para = $('#placeStyleLists1');
    classifyMenu(leveloneCurVal, para)
  })

  // 发布品项--分类1改变时获取分类2
  $('#lanClass1').on('change', function () {
    var leveloneCurVal = $('#lanClass1 option:selected').attr('value');
    var para = $('#placeStyleLists1');
    classifyMenu(leveloneCurVal, para)
  })


  $('#file-1').on('change', function (e) {
    fbpxPhoto = e.currentTarget.files;
    console.log(fbpxPhoto)
  });
  $('#fbpxBtn').on('click', function () {
    var aaa = $('#fbpx-title').serialize();
    console.log(aaa);
    $.ajax({
      type: 'POST',
      url: 'http://www.lanpartyclub.com/lanpartyclub/item/post?' + aaa,
      dataType: 'JSONP',
      jsonp: 'callback',
      success: function (response) {
        if (response.status == 200) {
          var id = response.data.id;
          fbpxDetails(id);
          fbpxPhotos(id);
        } else {
          console.log(response);
        }
      },
      error: function (response) {
        console.log(response);
      }
    })

  })



});
var fbpxPhoto;


/*
 *
 * 
 * 函数调用部分
 */

// 分类2获取
function getLevelTwo(url, ele) {
  $.ajax({
    type: 'GET',
    url: 'http://www.lanpartyclub.com/lanpartyclub/class/get/child?id=' + url,
    dataType: 'JSONP',
    jsonp: 'callback',
    success: function (data) {
      var iclass = data.data.class;
      $.each(iclass, function (i, cur) {
        ele.append('<option value="' + cur.id + '">' + cur.name + '</option>');
      });
    }
  })
}

// 管理品项获取列表
function getItemLists(url) {
  $.ajax({
    type: 'GET',
    url: 'http://www.lanpartyclub.com/lanpartyclub/item/get/class?id=' + url,
    dataType: 'JSONP',
    jsonp: 'callback',
    success: function (data) {
      if (data.status == 200) {
        var item = data.data.item;
        var q = 0;
        $.each(item, function (i, cur) {
          q++;
          $('#pxgl-lists tbody').append('<tr><td class="text-primary">' + q + '</td><td>' + cur.id + '</td><td>' + cur.pclass.name + '</td><td>' + cur.class.name + '</td><td>' + cur.title + '</td><td><button type="button" class="btn btn-sm btn-warning" data-toggle="modal" data-target="#delete-px">删除</button><button type="button" class="btn btn-sm btn-primary myTab ml10" href="#xgpx">修改</button></td></tr>')
        })
      } else {
        $('#pxgl-lists tbody').append('<tr><td colspan="6" class="text-center text-danger">该分类暂无数据!</td></tr>')
      }
    }
  })
}

// 发布品项--分类菜单获取
function classifyMenu(url, ele) {
  ele.empty();
  getLevelTwo(url, ele);
}

// 发布品项--详细信息
function fbpxDetails(id) {
  var detailsTitle = [];
  var detailsInfo = [];

  $('.detailsTitle').each(function () {
    detailsTitle.push($(this).val());
  })
  $('.detailsInfo').each(function () {
    detailsInfo.push($(this).val());
  })

  $.each(detailsTitle, function (i, cur) {
    $.ajax({
      type: 'POST',
      url: 'http://www.lanpartyclub.com/lanpartyclub/item/detail/post?id=' + id + '&title=' + detailsTitle[i] + '&content=' + detailsInfo[i],
      dataType: 'JSONP',
      jsonp: 'callback',
      success: function (response) {
        console.log(response);
      },
      error: function (response) {
        console.log(response);
      }
    })
  })
}

// 发布品项--照片
function fbpxPhotos(id) {
  $.each(fbpxPhoto, function (i, cur) {
    var iformData = new FormData();
    iformData.append('id', id)
    iformData.append('file', fbpxPhoto[i])
    $.ajax({
      type: 'POST',
      url: 'http://www.lanpartyclub.com/lanpartyclub/item/photo/post',
      dataType: 'JSON',
      data: iformData,
      processData: false,
      contentType: false,
      success: function (response) {
        console.log(response);
      },
      error: function (response) {
        console.log(response);
      }
    })
  })
}