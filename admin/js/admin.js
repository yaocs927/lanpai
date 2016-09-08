$(function () {
  // 删除确认
  $('.myTab').click(function (e) {
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
    $('#fbpx-info-list tbody').append('<tr><td class="col-md-1"><input type="checkbox" class="checkboxStyle" name="fbpx-info-list"></td><td class="col-md-2"><input type="text" class="form-control"></td><td class="col-md-6"><input type="text" class="form-control"></td><td class="col-md-1"><button type="button" class="btn btn-warning fbpx-info-delete">删除</button></td></tr>')
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
  $('#fbpx-photo-add').on('click', function () {
    num++;
    $('#fbpx-photo-list tbody').append('<tr><td class="col-md-1"><input type="checkbox" class="checkboxStyle" name="fbpx-photo-list"></td><td class="col-md-6"><input type="text" class="form-control fbpx-inputfile-' + num + '"></td><td class="col-md-1"><label class="btn btn-primary" for="fbpx-inputfile-' + num + '">选择文件</label></td><td class="col-md-1"><input type="file" id="fbpx-inputfile-' + num + '" class="file"></td><td class="col-md-1"><button type="button" class="btn btn-warning fbpx-photo-delete">删除</button></td></tr>')
  })

  // 品项发布-图片删除一条信息
  $('#fbpx-photo-list tbody').on('click', 'button.fbpx-photo-delete', function () {
    $(this).parents('tr').remove();
  })

  // 修改品项-详情删除选中
  $('#fbpx-photo-delete-all').on('click', function () {
    $('#fbpx-photo-list input[type="checkbox"]:checked').each(function () {
      $(this).parents('tr').remove();
    })
  })

  // 上传文件获取文件名
  // var filename = $('.fileName');
  $('#fbpx-photo-list').on('change', '.file', function (e) {
    //e.currentTarget.files 是一个数组，如果支持多个文件，则需要遍历
    var name = e.currentTarget.files[0].name;
    var thisIdName = $(this).attr('id')
    $('.' + thisIdName).val(name).attr('disabled', 'disabled');
    console.log(thisIdName)
  });


  // =================================
  // 修改品项
  // =================================

  var numA = 1;
  // 修改品项-详情新增一条信息
  $('#xgpx-info-add').on('click', function () {
    $('#xgpx-info-list tbody').append('<tr><td class="col-md-1"><input type="checkbox" class="checkboxStyle" name="xgpx-info-list"></td><td class="col-md-2"><input type="text" class="form-control"></td><td class="col-md-6"><input type="text" class="form-control"></td><td class="col-md-1"><button type="button" class="btn btn-warning xgpx-info-delete">删除</button></td></tr>')
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
    $('#xgpx-photo-list tbody').append('<tr><td class="col-md-1"><input type="checkbox" class="checkboxStyle" name="xgpx-photo-list"></td><td class="col-md-6"><input type="text" class="form-control xgpx-inputfile-' + numA + '"></td><td class="col-md-1"><label class="btn btn-primary" for="xgpx-inputfile-' + numA + '">选择文件</label></td><td class="col-md-1"><input type="file" id="xgpx-inputfile-' + numA + '" class="file"></td><td class="col-md-1"><button type="button" class="btn btn-warning xgpx-photo-delete">删除</button></td></tr>')
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


});