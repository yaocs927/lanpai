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


  var num = 1;
  // 品项发布-详情新增一条信息
  $('#fbpx-info-add').on('click', function () {
    $('#fbpx-info-list tbody').append('<tr><td class="col-md-1"><input type="checkbox" class="checkboxStyle"></td><td class="col-md-2"><input type="text" class="form-control"></td><td class="col-md-6"><input type="text" class="form-control"></td><td class="col-md-1"><button type="button" class="btn btn-warning fbpx-info-delete">删除</button></td></tr>')
  })

  // 品项发布-详情删除一条信息
  $('#fbpx-info-list tbody').on('click', 'button.fbpx-info-delete', function () {
    $(this).parents('tr').remove();
  })

  // 品项发布-详情新增一条信息
  $('#fbpx-photo-add').on('click', function () {
    num ++;
    $('#fbpx-photo-list tbody').append('<tr><td class="col-md-1"><input type="checkbox" class="checkboxStyle"></td><td class="col-md-6"><input type="text" class="form-control inputfile-'+ num +'"></td><td class="col-md-1"><label class="btn btn-primary" for="inputfile-'+ num +'">选择文件</label></td><td class="col-md-1"><input type="file" id="inputfile-'+ num +'" class="file"></td><td class="col-md-1"><button type="button" class="btn btn-warning fbpx-photo-delete">删除</button></td></tr>')
  })

  // 品项发布-详情删除一条信息
  $('#fbpx-photo-list tbody').on('click', 'button.fbpx-photo-delete', function () {
    $(this).parents('tr').remove();
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




});