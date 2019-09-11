$(document).ready(function(){
    var a1 = $("#logout");
    var a2 = $("#Pri_info");
    var mname = ["流浪地球","蜘蛛侠","千与千寻"];
    $("#search_btn").click(function(){
        var movie_name = $("#movie").val();
        //后端需要movie_check函数，查询函数名是否匹配，并返回result，布尔型。
        // $.getJSON("/movie_check/",{"Movie_name":movie_name},function(result){
        //     if(result == 1){
        //         // 后端调用movie函数实现电影信息展示页面的跳转
        //         $(location).attr("href","/movie/");
        //     }else{
        //         alert("无法找到该影片，请重新输入");
        //         return false;
        //     }
        // });
        $.each(mname,function(index,value){
            if(value == movie_name){
                $(location).attr("href","../html/movie.html");
            }else{
                alert("无法找到该影片，请重新输入");
                return false;
            }
        });
    });

    $(".item").each(function(){
        $(this).click(function(){
            var name = $(this).children("span").text();
            $.session.set("Movie_Name",name);
            $(this).attr("href","../html/movie.html");
        });
        
    });
    
    // $("#movie_name1").click(function(){
    //     var movie_name = $("span_name1").val();
    //     //后端需要movie_check函数，查询函数名是否匹配，并返回result，布尔型
    //     $.getJSON("/movie_check/",{"Movie_name":movie_name},function(result){
    //         if(result == 1){
    //             // 后端调用movie函数实现电影信息展示页面的跳转
    //             $(location).attr("href","/movie/");
    //         }
    //     });
    // });

    $(".back").hide();
    $(document).scroll(function(){
        if($(this).scrollTop() != 0 ){
            $(".back").fadeIn(1000);
        }else{
            $(".back").fadeOut(1000);
        }
    });

    $("#Pri_info").text(sessionStorage["username"]);
    a2.click(function(){
        //后端使用personinfo实现个人信息界面跳转
        $("#Pri_info").attr("href","/personinfo/");
    });

    a1.click(function(){
        sessionStorage.removeItem("username");
        alert("注销成功");
    });
})



