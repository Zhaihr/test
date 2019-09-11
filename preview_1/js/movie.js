$(document).ready(function(){
    var mname = ["流浪地球","千与千寻","蜘蛛侠"];
    var moviename = $.session.get("Movie_Name");
    var stop = false;
    var path = ["../img/1.webp", "../img/2.webp"]
    var string = ["《流浪地球》根据刘慈欣同名小说改编，故事设定在2075年，讲述了太阳即将毁灭，已经不适合人类生存，而面对绝境，人类将开启“流浪地球”计划，试图带着地球一起逃离太阳系，寻找人类新家园的故事。","千寻和爸爸妈妈一同驱车前往新家，在郊外的小路上不慎进入了神秘的隧道——他们去到了另外一个诡异世界—一个中世纪的小镇。远处飘来食物的香味，爸爸妈妈大快朵颐，孰料之后变成了猪！这时小镇上渐渐来了许多样子古怪、半透明的人。"];

    $.each(mname,function(index,value){
        if(moviename == value){
            $(".text2").text(string[index]);
            $("#img_show").attr("src",path[index]);
            stop = true;
        }
    });
    if(stop == true){
        return false;
    }else{
        $(".info").empty();
        $(".info").text("无法找到该影片，等待更新");
    }
});