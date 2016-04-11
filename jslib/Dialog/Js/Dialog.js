jQuery.Dialog = {
    info: function (c) {
        var h = '<div class="dialog"><div class="dialog_title"><a href="javascript:;" title="关闭" class="close">×</a><h3>提示框</h3></div><div class="dialog_body">' + c + '</div><div class="dialog_foot"><a class="btn btn_blue">确认</a></div>';
        var cover = '<div class="dialog_cover"></div>';
        $('body').append(h);
        $('body').append(cover);
        $('.dialog_cover').fadeIn(100);
        $('.dialog').slideDown(200);
        $('.dialog_title .close').live('click', function () {
            $('.dialog_cover').fadeOut(100);
            $('.dialog').slideUp(200);
            $('.dialog').remove();
            $('.dialog_cover').remove();
        })
    },
    alert: function (c) {
        alert(c);
    },
    confirm: function (c) {
        alert(c);
    },
    login: function (c) {
        alert(c);
    }
};

        $('.dialog_title .close').live('click',function () {
            $('.dialog_cover').fadeOut(100);
            $('.dialog').slideUp(200);
            $('.dialog').remove();
            $('.dialog_cover').remove();
        })