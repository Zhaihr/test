$(document).ready(function(){
    $(".info-movie").hide();
    $("#search_btn").click(function(){
        var movie_name = $("#movie").val();
        //后端需要movie_check函数，查询函数名是否匹配，并返回result，布尔型。
        // $.getJSON("/movie_check/",{"Movie_name":movie_name},function(result){
        //     if(result == 1){
        //         //后端调用movie函数实现电影信息展示页面的跳转
        //         $(location).attr("href","/movie/");
        //     }else{
        //         alert("无法找到该影片，请重新输入");
        //         return false;
        //     }
        // });
        $.session.set("Movie_Name",movie_name);
        $(".form_inp").attr("action","../html/movie.html");
        $(".form_inp").submit();
    });
 

    $(".item").each(function(){
        $(this).click(function(){
            var name = $(this).children("span").text();
            $.session.set("Movie_Name",name);
            alert($.session.get("Movie_Name"));
            $(this).attr("href","../html/movie.html");
        });
        
    });

    // $("#movie_name1").click(function(){
    //     var movie_name = $("span_name1").val();
    //     //后端需要movie_check函数，查询函数名是否匹配，并返回result，布尔型。
    //     // $.getJSON("/movie_check/",{"Movie_name":movie_name},function(result){
    //     //     if(result == 1){
    //     //         //后端调用movie函数实现电影信息展示页面的跳转
    //     //         $(location).attr("href","/movie/");
    //     //     }
    //     // });
    //     $.session.set("Movie_Name",movie_name);
    //     $(location).attr("href","../html/movie.html");
    // });

    $(".back").hide();
    $(document).scroll(function(){
        if($(this).scrollTop() != 0 ){
            $(".back").fadeIn(1000);
        }else{
            $(".back").fadeOut(1000);
        }
    });
})