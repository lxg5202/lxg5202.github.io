var lb=document.getElementsByClassName("lb")[0];
var left=document.getElementsByClassName("left1")[0];
var right=document.getElementsByClassName("right1")[0];
var index=0;




$(".right1").click(function(e){
    $(".lb").css({left: -1140*index})
    if(index>=3){
        index=0;
    }
    index++;
})
$(".left1").click(function(e){
    $(".lb").css({left: -1140*index})
    if(index<=0){
        index=3;
    }
    index--;
})
function move(e){
$(".lb").css({left: -1140*index})
if(index>=3){
    index=0;
        $(".lb").addClass("tran")
    setTimeout(function(e){
         $(".lb").removeClass("tran");
    },1000)
}
index++
}
move();