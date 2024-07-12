$(function(){
    $(".main > li").hover(function(){
        $(".sub").stop().slideDown();
    }, function(){
        $(".sub").stop().slideUp();
    })/* main li hover */

    var n=0;
    setInterval(function(){
        if(n==2){
            n=0;
        }
        else{
            n++;
        }
        console.log(n);

        $(".top_move").animate({top : n*(-300) + "px"}, 500);
    }, 2500)/* setInterval */

    $(".cont1 h2").click(function(){
        $(".container .cont1 h2").addClass("on");
        $(this).removeClass("on");

        $(".cont1 ul").hide();
        $(this).next().css({display : "flex"});
    })/* cont1 h2 click */

    $(".pop").click(function(){
        $(".popup").show();
    })

    $(".close").click(function(){
        $(".popup").hide();
    })
})/* jQ ends */