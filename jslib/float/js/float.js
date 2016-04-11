$(function () {
    var html = '<span class="float-span"></span>';
    $('body').append(html);
    $('.float-span').bind("mouseover", function () {
        $(this).addClass("float-span-hover");
    });
    $('.float-span').bind("mouseleave", function () {
        $(this).removeClass("float-span-hover");
    });
    $('.float-span').bind("click", function () {
        $('body,html').animate({ scrollTop: 0 }, 500);
    });

    $(window).scroll(function (e) {
        $(window).scrollTop() > 100 ?
        $(".float-span").fadeIn(100) :
        $(".float-span").fadeOut(100);
    });


});