$(document).ready(function(){

    var seat_num ;
    var total_bill      = 0 ;
    var pricePerTicked  = 10;//单价
    var maximumSeats    =   5;//预定座位数目的最大限制

    $('#bookNowButton').hide(); // 隐藏预定按钮

    $('.seat').each(function() {       
        var column_num = parseInt( $(this).index() ) + 1;
        var row_num = parseInt( $(this).parent().index() )+1;    
        seat_num = row_num+"-"+column_num ;  
        $(this).text(seat_num); // 座位号
        $(this).addClass("seat"+seat_num);  // 个座位加css
    });

    $("#seats .seat").click(function() {  
            $('#errMsg').html('');
            if($(this).hasClass('select')){ // 检查是否被选中
                $(this).removeClass('select'); //如果选中了，移除选中的css
                $(this).css('background-color','#D8D8D8'); // 重新加个背景

                var currentSeatClass = $(this).attr('class').split(' ')[1]; 

                console.log(currentSeatClass);
                 $( "#selected_seat ."+currentSeatClass ).remove();

            }else if($(".your_selected_seat").length<maximumSeats && !$(this).hasClass('select')){ // 检查预定的座位数目是否超出限制
                $(this).css('background-color','#71DCAA'); // 加背景颜色
                $(this).addClass("select"); // 添加选中css


                var column_num = parseInt( $(this).index() ) + 1;
                var row_num = parseInt( $(this).parent().index() )+1;    
                $( "#selected_seat" ).append("<span class='your_selected_seat seat"+row_num+"-"+column_num+" '> 座位号: <b style='color:#EAABFF'>" + row_num+"-"+column_num +"</b> </br></span>");
            }else {
                $('#errMsg').html('您选中的座位已经超过限制.');    
            }

            if($(".your_selected_seat").length){
                $('#bookNowButton').fadeIn(1000);
            }else {
                $('#bookNowButton').fadeOut(1000);
            }
            //计算总价
            total_bill = $(".your_selected_seat").length * pricePerTicked;
            $('#total > span').html(total_bill);
    });


//}


});