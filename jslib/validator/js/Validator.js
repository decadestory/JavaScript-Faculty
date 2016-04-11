/// <reference path="../../table/Index.html" />
$(document).ready(function () {
    //邮箱验证
    var mailreg = /^\w{3,}@\w+(\.\w+)+$/;
    $('.Email').bind('blur', function () {
        if ($(this).val().trim().length == 0) {
            $(this).parent().next().html("<img align='absmiddle' style='width:22px; height:22px; vertical-align:middle;' src='skin/error.png' /><font color='red'> 此项不能为空</font>");
            $(this).css("border", "1px solid red");
        } else if (!mailreg.test($(this).val())) {
            $(this).parent().next().html("<img align='absmiddle' style='width:22px; height:22px; vertical-align:middle;' src='skin/error.png' /><font color='red'> 请输入正确的邮箱格式</font>");
            $(this).css("border", "1px solid red");
        }else {
            $(this).parent().next().html("<img align='absmiddle' style='width:22px; height:22px; vertical-align:middle;' src='skin/ok.png' /><font color='green'> 输入正确</font>");
            $(this).css("border", "1px solid green");
        }
    });

    $('.Email').bind('focus', function () {
        $(this).parent().next().html("<img align='absmiddle' style='width:22px; height:22px; vertical-align:middle;' src='skin/info.png' /><font color='gray'> 请输入注册的邮箱</font>");
    });

    //密码验证
    var passwordreg = /^(\w){6,20}$/;
    $('.Password').bind('blur', function () {
        if ($(this).val().trim().length == 0) {
            $(this).parent().next().html("<img align='absmiddle' style='width:22px; height:22px; vertical-align:middle;' src='skin/error.png' /><font color='red'> 此项不能为空</font>");
            $(this).css("border", "1px solid red");
        } else if (!passwordreg.test($(this).val())) {
            $(this).css("border", "1px solid red");
            $(this).parent().next().html("<img align='absmiddle' style='width:22px; height:22px; vertical-align:middle;' src='skin/error.png' /><font color='red'> 密码为6-20位字母与数字的组合</font>");
        } else {
            $(this).css("border", "1px solid green");
            $(this).parent().next().html("<img align='absmiddle' style='width:22px; height:22px; vertical-align:middle;' src='skin/ok.png' /><font color='green'> 输入正确</font>");
        }
    });

    $('.Password').bind('focus', function () {
        $(this).parent().next().html("<img align='absmiddle' style='width:22px; height:22px; vertical-align:middle;' src='skin/info.png' /><font color='gray'> 请输入密码</font>");
    });

    $('.CPassword').bind('blur', function () {
        if ($(this).val().trim().length == 0) {
            $(this).css("border", "1px solid red");
            $(this).parent().next().html("<img align='absmiddle' style='width:22px; height:22px; vertical-align:middle;' src='skin/error.png' /><font color='red'> 此项不能为空</font>");
        } else if (!passwordreg.test($(this).val())) {
            $(this).css("border", "1px solid red");
            $(this).parent().next().html("<img align='absmiddle' style='width:22px; height:22px; vertical-align:middle;' src='skin/error.png' /><font color='red'> 密码为6-20位字母与数字的组合</font>");
        } else if ($(this).val() != $('.Password').val()) {
            $(this).parent().next().html("<img align='absmiddle' style='width:22px; height:22px; vertical-align:middle;' src='skin/error.png' /><font color='red'> 两次输入密码不相同</font>");
        } else {
            $(this).css("border", "1px solid green");
            $(this).parent().next().html("<img align='absmiddle' style='width:22px; height:22px; vertical-align:middle;' src='skin/ok.png' /><font color='green'> 输入正确</font>");
        }
    });

    $('.CPassword').bind('focus', function () {
        $(this).parent().next().html("<img align='absmiddle' style='width:22px; height:22px; vertical-align:middle;' src='skin/info.png' /><font color='gray'> 请输入密码</font>");
    });

    //手机验证
    var phonereg = /^([0-9]{11})?$/;
    $('.Phone').bind('blur', function () {
        if ($(this).val().trim().length == 0) {
            $(this).parent().next().html("<img align='absmiddle' style='width:22px; height:22px; vertical-align:middle;' src='skin/error.png' /><font color='red'> 此项不能为空</font>");
            $(this).css("border", "1px solid red");
        } else if (!phonereg.test($(this).val())) {
            $(this).parent().next().html("<img align='absmiddle' style='width:22px; height:22px; vertical-align:middle;' src='skin/error.png' /><font color='red'> 请输入正确的手机号</font>");
            $(this).css("border", "1px solid red");
        } else {
            $(this).parent().next().html("<img align='absmiddle' style='width:22px; height:22px; vertical-align:middle;' src='skin/ok.png' /><font color='green'> 输入正确</font>");
            $(this).css("border", "1px solid green");
        }
    });

    $('.Phone').bind('focus', function () {
        $(this).parent().next().html("<img align='absmiddle' style='width:22px; height:22px; vertical-align:middle;' src='skin/info.png' /><font color='gray'> 请输入手机号码</font>");
    });

    //身份证验证
    var idreg = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/;
    $('.IdCard').bind('blur', function () {
        if ($(this).val().trim().length == 0) {
            $(this).parent().next().html("<img align='absmiddle' style='width:22px; height:22px; vertical-align:middle;' src='skin/error.png' /><font color='red'> 此项不能为空</font>");
            $(this).css("border", "1px solid red");
        } else if (!idreg.test($(this).val())) {
            $(this).parent().next().html("<img align='absmiddle' style='width:22px; height:22px; vertical-align:middle;' src='skin/error.png' /><font color='red'> 请输入正确的身份证号码</font>");
            $(this).css("border", "1px solid red");
        } else {
            $(this).parent().next().html("<img align='absmiddle' style='width:22px; height:22px; vertical-align:middle;' src='skin/ok.png' /><font color='green'> 输入正确</font>");
            $(this).css("border", "1px solid green");
        }
    });

    $('.IdCard').bind('focus', function () {
        $(this).parent().next().html("<img align='absmiddle' style='width:22px; height:22px; vertical-align:middle;' src='skin/info.png' /><font color='gray'> 请输入身份证号码</font>");
    });

    //提交验证
    $('#submit').bind('click', function () {
        if ($('.Email').length!=0&&$('.Email').val().trim().length == 0) {
            $('.Email').parent().next().html("<img align='absmiddle' style='width:22px; height:22px; vertical-align:middle;' src='skin/error.png' /><font color='red'> 此项不能为空</font>");
            $('.Email').css("border", "1px solid red");
            return false;
        }

        if ($('.Email').length != 0 && !mailreg.test($('.Email').val())) {
            $(this).parent().next().html("<img align='absmiddle' style='width:22px; height:22px; vertical-align:middle;' src='skin/error.png' /><font color='red'> 请输入正确的邮箱格式</font>");
            $(this).css("border", "1px solid red");
        }

        if ($('.Password').length!=0&&$('.Password').val().trim().length == 0) {
            $('.Password').parent().next().html("<img align='absmiddle' style='width:22px; height:22px; vertical-align:middle;' src='skin/error.png' /><font color='red'> 此项不能为空</font>");
            $('.Password').css("border", "1px solid red");
            return false;
        }

        if ($('.Password').length != 0 && !passwordreg.test($('.Password').val())) {
            $('.Password').css("border", "1px solid red");
            $('.Password').parent().next().html("<img align='absmiddle' style='width:22px; height:22px; vertical-align:middle;' src='skin/error.png' /><font color='red'> 密码为6-20位字母与数字的组合</font>");
            return false;
        }

        if ($('.Password').length != 0 && !passwordreg.test($('.Password').val())) {
            $('.Password').css("border", "1px solid red");
            $('.Password').parent().next().html("<img align='absmiddle' style='width:22px; height:22px; vertical-align:middle;' src='skin/error.png' /><font color='red'> 密码为6-20位字母与数字的组合</font>");
            return false;
        }

        if ($('.CPassword').length != 0 && $('.CPassword').val().trim().length == 0) {
            $('.CPassword').css("border", "1px solid red");
            $('.CPassword').parent().next().html("<img align='absmiddle' style='width:22px; height:22px; vertical-align:middle;' src='skin/error.png' /><font color='red'> 此项不能为空</font>");
            return false;
        }

        if ($('.CPassword').length != 0 && !passwordreg.test($('CPassword').val())) {
            $('.CPassword').css("border", "1px solid red");
            $('.CPassword').parent().next().html("<img align='absmiddle' style='width:22px; height:22px; vertical-align:middle;' src='skin/error.png' /><font color='red'> 密码为6-20位字母与数字的组合</font>");
            return false;
        }

        if ($('.CPassword').length != 0 && $('.CPassword').val() != $('.Password').val()) {
            $('.CPassword').parent().next().html("<img align='absmiddle' style='width:22px; height:22px; vertical-align:middle;' src='skin/error.png' /><font color='red'> 两次输入密码不相同</font>");
            return false;
        }

        if ($('.Phone').length != 0 && $('.Phone').val().trim().length == 0) {
            $('.Phone').parent().next().html("<img align='absmiddle' style='width:22px; height:22px; vertical-align:middle;' src='skin/error.png' /><font color='red'> 此项不能为空</font>");
            $('.Phone').css("border", "1px solid red");
            return false;
        }

        if ($('.Phone').length != 0 && !phonereg.test($('.Phone').val())) {
            $('.Phone').parent().next().html("<img align='absmiddle' style='width:22px; height:22px; vertical-align:middle;' src='skin/error.png' /><font color='red'> 请输入正确的手机号</font>");
            $('.Phone').css("border", "1px solid red");
            return false;
        }

        if ($('.IdCard').length != 0 && $('.IdCard').val().trim().length == 0) {
            $('.IdCard').parent().next().html("<img align='absmiddle' style='width:22px; height:22px; vertical-align:middle;' src='skin/error.png' /><font color='red'> 此项不能为空</font>");
            $('.IdCard').css("border", "1px solid red");
            return false;
        }

        if ($('.IdCard').length != 0 && !idreg.test($('.IdCard').val())) {
            $('.IdCard').parent().next().html("<img align='absmiddle' style='width:22px; height:22px; vertical-align:middle;' src='skin/error.png' /><font color='red'> 请输入正确的身份证号</font>");
            $('.IdCard').css("border", "1px solid red");
            return false;
        }

        window.location.href = "../table/Index.html";

    });

});