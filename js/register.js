$(document).ready(function(){
    $(".registerBtn").click(function(){
        var userphone = $("#phone").val();
        var username = $("#user").val();
        var pass = $("#pass").val();
        //后端用Register_User函数 POST传值！！！！，接收值，将传入的数据写入数据库中
        // $.getJSON("/Register_User/",{"Phone_number":userphone,"User_name":username,"Password":pass},function(result){
        //     if(result == 1){
        //         alert("注册成功,请登录");
        //         //后端需要login函数，进入跳转页面。
        //         $("#log_form").attr("action","/login/");    
        //         $("#log_form").submit(); 
        //     }
        // }); //调用后端注册函数，传电话，用户名，密码，返回值为布尔型
        $("#log_form").attr("action","../html/login.html");
        $("#log_form").submit();
    });
})

        