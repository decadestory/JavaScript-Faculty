jQuery.tip = {
    info: function (c) {
        var h = '<div class="tips_standard">' + c + '</div>';
        $('.tips_standard').remove();
        $('body').append(h);
        $('.tips_standard').css("margin-left", "-" + ($('.tips_standard').width() / 2) + "px");

        $('.tips_standard').animate({
            top: "50%",
            opacity: "1"
        });

        setTimeout(function () {
            $('.tips_standard').animate({
                top: "30%",
                opacity: "0"
            });
            $('.tips_standard').animate({
                top: "60%",
                opacity: "0"
            });
        }, 2000);

    },
    ok: function (c) {
        var h = '<div class="tips_ok">' + c + '</div>';
        $('.tips_ok').remove();
        $('body').append(h);
        $('.tips_ok').css("margin-left", "-" + ($('.tips_ok').width() / 2) + "px");

        $('.tips_ok').animate({
            top: "50%",
            opacity: "1"
        });

        setTimeout(function () {
            $('.tips_ok').animate({
                top: "30%",
                opacity: "0"
            });
            $('.tips_ok').animate({
                top: "60%",
                opacity: "0"
            });
        }, 2000);
    },
    error: function (c) {
        var h = '<div class="tips_error">' + c + '</div>';
        $('.tips_error').remove();
        $('body').append(h);
        $('.tips_error').css("margin-left", "-" + ($('.tips_error').width() / 2) + "px");

        $('.tips_error').animate({
            top: "50%",
            opacity: "1"
        });

        setTimeout(function () {
            $('.tips_error').animate({
                top: "30%",
                opacity: "0"
            });
            $('.tips_error').animate({
                top: "60%",
                opacity: "0"
            });
        }, 2000);
    },
    confirm: function (c,ok) {
        var h = '<div class="tips_confirm"><div class="tips_confirm_info">' + c + '</div><div class="tips_confirm_opt"><a res="1">确定</a> <a res="0">取消</a></div></div>';
        $('.tips_confirm').remove();
        $('body').append(h);
        $('.tips_confirm').css("margin-left", "-" + ($('.tips_confirm').width() / 2) + "px");

        $('.tips_confirm').animate({
            top: "70%",
            opacity: "1"
        });

        $('.tips_confirm .tips_confirm_opt a').bind("click", function () {
            if ($(this).attr("res") == "1") {
                $('.tips_confirm').remove();
                ok();
            } else {
                $('.tips_confirm').remove();
            }
        });
        
    }
};
