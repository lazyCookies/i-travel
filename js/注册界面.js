$('.net').click(function(){
    var phone = $(".net-11").val();
    // console.log($(".ipone").val())
    var flag = false;
    var message = "";
    var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0]{1})|(15[0-3]{1})|(15[5-9]{1})|(18[0-9]{1}))+\d{8})$/;    
    if($(".net-11").val() == ""){
        alert("手机号码不能为空！");
    }else if(phone.length !=11){
        alert("请输入有效的手机号码！");
    }else if(!myreg.test(phone)){
        alert("请输入有效的手机号码！")
    // }else{
    //     flag = true;
    }
})
$('.net').click(function(){
    if ($('.lingg').val() == "") {
        alert('验证码不能为空')
    }
    if ($('.ling').val() == "") {
        alert('密码不能为空')
    }
})