//这里是js常用函数
//收集：Jerry

$(function () {
    //还能输入xx个字
    $('.txt-rest').bind("keyup", function () {
        $('.txt-rest-info').html("还可以输入" + (50 - $(this).val().length) + "个字");
        if ((50 - $(this).val().length) < 0) {
            $('.txt-rest').val($('.txt-rest').val().substr(0, 50));
        }
    });

});

//判断哪种移动平台的浏览器
function JudgeMobileBrower() {
    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i) ? true : false;
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i) ? true : false;
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i) ? true : false;
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows());
        }
    };
    if (isMobile.Android()) {
        return "android";
    } else if (isMobile.iOS()) {
        return "ios";
    } else if (isMobile.Windows()) {
        return "windows";
    } else if (isMobile.BlackBerry()) {
        return "blackberry";
    }
    else {
        return "PC";
    }
}

//判断是不是支持flash
function IsSupportFlash() {
    var has = 0, ver = 0;
    try {
        has = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
        if (has) {
            ver = ver + 1;
        }
    }
    catch (e) {
        has = navigator.plugins["Shockwave Flash"];
        if (has) {
            ver = ver + 1;
        }
    }
    if (ver == 0) return false; else return true;
}

//单双字节字符截取
function substr(str, len)
{
    if(!str || !len) { return ''; }
 
    //预期计数：中文2字节，英文1字节
    var a = 0;
 
    //循环计数
    var i = 0;
 
    //临时字串
    var temp = '';
 
    for (i=0;i<str.length;i++)
    {
        if (str.charCodeAt(i)>255)
        {
            //按照预期计数增加2
            a+=2;
        }
        else
        {
            a++;
        }
        //如果增加计数后长度大于限定长度，就直接返回临时字符串
        if(a > len) { return temp; }
 
        //将当前内容加到临时字符串
        temp += str.charAt(i);
    }
    //如果全部是单字节字符，就直接返回源字符串
    return str;
}