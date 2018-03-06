/**
 * Created by karl.zheng on 2017/6/6.
 */
    //鼠标滚动切换
var addMouseWheelHandler = function () {
        if (document.addEventListener) {
            document.addEventListener('mousewheel', MouseWheelHandler, false); //IE9, Chrome, Safari, Oper
            document.addEventListener('wheel', MouseWheelHandler, false); //Firefox
            document.addEventListener('DOMMouseScroll', MouseWheelHandler, false); //Old Firefox
        } else {
            document.attachEvent('onmousewheel', MouseWheelHandler); //IE 6/7/8
        }
    },
    removeMouseWheelHandler = function () {
        if (document.addEventListener) {
            document.removeEventListener('mousewheel', MouseWheelHandler, false); //IE9, Chrome, Safari, Oper
            document.removeEventListener('wheel', MouseWheelHandler, false); //Firefox
            document.removeEventListener('DOMMouseScroll', MouseWheelHandler, false); //old Firefox
        } else {
            document.detachEvent('onmousewheel', MouseWheelHandler); //IE 6/7/8
        }
    },
    stopDefault = function (e) {
        //W3C
        if (e && e.preventDefault)
            e.preventDefault();
        //IE
        else
            window.event.returnValue = false;
        return false;
    },

    MouseWheelHandler = function (e) {//滚动后的处理函数
        stopDefault(e);
        var e = e || window.event,
            value = e.wheelDelta || -e.deltaY || -e.detail,
            delta = Math.max(-1, Math.min(1, value));
        if (delta < 0) {//scrolling down
            slideDown();
            removeMouseWheelHandler();
            setTimeout(function(){
                addMouseWheelHandler();
            }, 800);
        } else {//scrolling up
            slideUp();
            removeMouseWheelHandler();
            setTimeout(function(){
                addMouseWheelHandler();
            }, 800);
        }
    };

//调用
addMouseWheelHandler();

var page = 1;

function slideUp(){
    if(page==1){
        return;
    }else{
        page--;
    }
    $(".container").animate({
        top: (page-1)*-100+"%"
    },800);
    updateNav(page-1);
}

function slideDown(){
    if(page==4){
        return ;
    }else{
        page++;
    }
    $(".container").animate({
        top: (page-1)*-100+"%"
    },800);

    updateNav(page-1);
}

$(".box-nav div").on("click",function(){
    page = $(this).index()+1;
    console.log(page);
    $(".container").animate({
        top: (page-1)*-100+"%"
    },800);
    updateNav(page-1);
});

function updateNav(page){
    $(".box-nav div.active").removeClass("active");
    $(".box-nav div").eq(page).addClass("active");
    $(".page-num").text(page+1);
}

$(".up").on("click",function(){
    slideUp();
});

$(".down").on("click",function(){
    slideDown();
});