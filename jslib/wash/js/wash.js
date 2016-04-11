$(function () {
    var n = 0;
    var recol;
    var dtime = 0;
    $(window).resize(function () {
        if (n % 2 == 0) {
            $('.container').css("width", "0");
            $('.container').css("width", "80%");
            $('.wash-item').css("opacity", "0");
            for (var i = 1; i <= recol; i++) {
                $('.col' + i).removeAttr('col');
                $('.col' + i).removeClass('col' + i);
            }
            wash();
        }
        n++;
    });
    setTimeout(function () {
        wash();
    }, 100);


    function wash() {
        var col = Math.floor($('.container').width() / 200);
        recol = col;
        $('.container').width(col * 200);
        var leftpos = Math.floor($('.container').offset().left);
        var toppos = Math.floor($('.container').offset().top);
        var wcount = $('.wash-item').length;
        $('.container').css("height", toppos + "px");
        for (var i = 0; i < wcount; i++) {
            if (i > col - 1) {
                var obj = $(getpre(col)).last();
                toppos = obj.offset().top + obj.height() + 25;
                leftpos = obj.offset().left - 5;

                $('.wash-item').eq(i).addClass(obj.attr("col"));
                $('.wash-item').eq(i).attr("col", obj.attr("col"));
                $('.wash-item').eq(i).css("left", leftpos + "px");
                $('.wash-item').eq(i).css("top", toppos + "px");
                $('.wash-item').eq(i).css("opacity", "1");
            } else {
                $('.wash-item').eq(i).addClass("col" + (i + 1));
                $('.wash-item').eq(i).attr("col", "col" + (i + 1));
                $('.wash-item').eq(i).css("left", leftpos + "px");
                $('.wash-item').eq(i).css("top", toppos + "px");
                $('.wash-item').css("opacity", "1");
                leftpos += 200;
            }
        }
    }

    function getpre(col) {
        var precol;
        var minvalue = 99999;
        for (var i = 1; i <= col; i++) {
            if ($('.col' + i).last().offset().top < minvalue) {
                minvalue = $('.col' + i).last().offset().top;
                precol = '.col' + i;
            }
        }
        return precol;
    }


    function washpage(objs) {
        setTimeout(function () {
            var col = Math.floor($('.container').width() / 200);
            var obj = $(getpre(col)).last();
            var toppos = obj.offset().top + obj.height() + 25;
            var leftpos = obj.offset().left - 5;
            objs.addClass(obj.attr("col"));
            objs.attr("col", obj.attr("col"));
            objs.css("left", leftpos + "px");
            objs.css("top", toppos + "px");
            objs.css("opacity", "1");
        }, 100);

    }

    //在这里获取分页
    $(window).scroll(function (e) {
        if ($(window).scrollTop() >= ($(document).height() - $(window).height())) {
            for (var i = 1; i <= 40; i++) {
                var html = '<div class="wash-item"><a class="wash-item-imga" href="#"><img class="wash-item-img" src="imgs/130294746143851755.jpg" /></a><p class="wash-item-sum">讲了飘摇江山人心慌和数十年尔虞我诈,小城旧事念念谁不忘（念念不忘谁念念不忘,南楼古巷人人道寻常（人道寻常人人道寻常）,远方更远的地方,从来没到过的村庄,有着珍草奇花香和为爱坚贞不渝的姑娘.</p><p class="wash-item-title"><span class="wash-item-title-img">T：</span><a href="#">小城旧事念念谁不忘</a></p><p class="wash-item-info"><span>★</span>500 <span>◆</span>550</p><p class="wash-item-tip"><span>◎</span>常州北站</p></div>';
                $('.container').append(html);
                washpage($('.wash-item').last());
            }


        }
    });

});