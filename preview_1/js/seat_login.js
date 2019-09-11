var btn_1 = document.getElementById("bookNowButton");
btn_1.onclick = function(){
    if(sessionStorage["username"]!=null){
        alert("成功");
        window.location.href="../html/home_login.html?username="+sessionStorage["username"];
    }
    else{
        alert("请登录");
        window.location.href="../html/login.html";
    }
}

