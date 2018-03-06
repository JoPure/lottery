/**
 * Created by karl.zheng on 2017/6/6.
 */
var pg_config = {
    "status": {
        "100": "ไม่มีกิจกรรมนี้",
        "101": "เงื่อนไขกิจกรรมไม่พอ",
        "102": "เงื่อนไขกิจกรรมไม่พอหรือจำนวนลงคะแนนใช้หมดแล้ว",
        "103": "ยืนยันเลขนำโชคล้มเหลว",
        "104": "รางวัลcodeไม่พอแล้ว",
        "105": "กิจกรรมนี้ไม่มีรางวัล",
        "106": "กิจกรรมยังไม่เริ่มต้น",
        "107": "กิจกรรมสิ้นสุดแล้ว",
        "108": "ปัญชีนี้ได้voteไปแล้ว",
        "109": "ลงคะแนนได้เพียง2ภาพเท่านั้น",
        "150": "ไม่มี APP",
        "160": "ไม่มีเซิร์ฟนี้",
        "170": "หาปัญชีFBนี้ไม่เจอ",
        "201": "ไม่มีข้อมูล",
        "300": " เชื่อมติดด่อล้มเหลว",
        "301": "บัญชีหรือรหัสไม่ถูกต้อง รบกวนตรวจเช็คอีกครั้ง หรือไปโหลดเกมส์แล้วลองบัญชีของเกมเรา",
        "302": "ในเซิฟนี้ไม่มีตัวละคร",//区服没有角色
        "400": "บัญชีหรือรหัสไม่สามารถว่าง",
        "401": "version error",
        "403": "ยังไม่ล็อกอิน",
        "500": "เซิร์ฟเวอร์ล้มเหลว",
        "600": "กรุณาดาวน์โหลดเกมก่อนนะ",
        "700": "ในเซิฟนี้ไม่มีตัวละคร"
    },
    fb_app_id: 548408708701703,
    fb_redirect_uri: 'http://10.10.19.12:81/gcld-th/',
    // fb_redirect_uri: 'http://pokesaga.pocketgamesol.com/activity/version/',
    api_url: 'http://172.16.1.171:8012',
    // api_url: 'http://54.255.175.55:8680',
    actId: '100060',
    // actId: 100010,
    appId: '10052',
    ticketNum: "",
    shareLink: "",
    notUser: false
};

$(".wrap").on("click",function(){
    $(".win").hide();
    $(this).hide();
});

$(".btn-close").on("click",function(){
    $(".wrap").hide();
    $(".win").hide();
});

$(".btn-login").on("click",function(){
    $(".wrap").show();
    $(".win-login").show();
});


$(".login").on("click",function(){
    var username = $(".username").val();
    var password = $(".password").val();
    if(username&&password){
        $.ajax({
            type: "GET",
            url: url,
            dataType: 'jsonp',
            jsonp: "jsonCallback",
            data: {
                userName: username,
                password: md5(password),
                version: 'v3'
            },
            success: function (result) {
                handleLogin(result);
            },
            error: function (error) {
                console.log(error);
            }
        });
    }else{
        console.log("zhanghao mima buneng weikong");
    }
});

function handleLogin(){
    if(result.code==200){
        //保存用户名和token


    }else{

    }
}

function isLogin(){
    var username = localStorage.getItem("userId");
    var token = localStorage.getItem("token");
    if (username && token) {
        var active = new Date().getTime();
        active -= 1600000;
        if (active < parseInt(localStorage.getItem("activetime"))) {
            return true;
        } else {
            return false;
        }
    }
    return false;
}

function showLogin(){
    $(".wrap").show();
    $(".win-login").show();
}

function clearStorage(){
    localStorage.clear();
}

$(".logout").on("click", function(){
    clearStorage();
    $(".name").text("xxx");
    $(".server-num").text("xxx");
});

$(".btn_run").on("click", function(){
    $(this).attr("disabled", "disabled");
    setTimeout(function(){
        $(".btn_run").removeAttr("disabled");
    }, 3000);
    var index = 2;
    $(".btn-start").rotate({
        duration: 3000, //转动时间
        angle: 0, //默认角度
        animateTo: 360 * 6 + 72*index - 36, //转动角度
        callback: function () {
            $(".win-result img").attr("src", "img/award-"+(index+1)+".png");
            $(".win-result p").text("code"+index);
            showResult();
        }
    });
});

function showResult(){
    $(".wrap").show();
    $(".win-result").show();
}

