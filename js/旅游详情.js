$('.short2').eq(1).hide()
$('.short2').eq(2).hide()
$('.short1').click(function() {
             $(this).addClass('mm');
             $(this).siblings().removeClass('mm');
             $('.short2').eq($(this).index()).show().siblings().hide()
           })