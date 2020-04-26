var items = document.getElementsByClassName("item");
var right = document.getElementsByClassName("right")[0];
var left = document.getElementsByClassName("left")[0];
var index = 0;
var z = function () {
    for (var i = 0; i < items.length; i++) {
        items[i].className = "item "
    }
}
var goindex = function () {
    z();
    items[index].className = "item z";
}
var goNext = function () {
    if (index < 1) {
        index++;
    } else {
        index = 0;
    }

    goindex()
}
var gopre = function () {
    if (index == 0) {
        index = 1;
    } else {
        index--;
    }

    goindex()
}
function play() {
    // 添加定时器
    timer = setInterval(goNext, 4000);
}
play();
right.addEventListener("click", function () {
    goNext()
})
left.addEventListener("click", function () {
    gopre()
})