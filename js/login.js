$(document).ready(function(){    
    $(".loginBtn").click(function(){
        var UserName = $("#user").val();
        var Password = $("#pass").val();
        sessionStorage["username"]=UserName;
        //后端调用user_check，用POST方式提交！！对比数据库中的用户名和密码，返回result为布尔型
        // $.getJSON("/user_check/",{"UserName":UserName,"Password":Password},function(result){
        //     if(result == 1){    
        //         //后端使用home_login函数跳转到home_login界面
        //         $("#up_form").attr("action","/home_login/")
        //         $("#up_form").submit();
        //     }else{
        //         alert("用户名或密码错误");
        //         return false;
        //     }
        // });
        if(UserName == "123456" && Password == "123"){
            $("#up_form").attr("action","../html/home_login.html");
            $("#up_form").submit();
        }
    });         

    $("#btn_back").click(function(){
         //后端使用home函数跳转到home界面
        $(location).attr("href","/home/");
    }); 
    
})

        