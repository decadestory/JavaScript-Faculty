(function ($) {
    $.fn.citypicker = function (options) {
        var defaults = {
            url: "http://localhost:372/Home/GetOpenCities"
        }
        var options = $.extend(defaults, options);
        var input = this;
        var retJson;
        var html = {};
        var tc = {};

        var offleft = input.offset().left;
        var offtop = input.offset().top + input.height;

        html.head = '<div adj-citypicker><div adj-citypicker-header>爱代驾开放城市选择插件'
        + '<a adj-citypicker-header-icon href="javascript:void(0);">关闭</a>'
        + '</div><div adj-citypicker-body>';
        html.foot = '</div></div>';
        html.body = "";


        $(document).on("click", "[adj-citypicker-header-icon]", function () {
            $('[adj-citypicker]').css("display", "none");
        });

        $(document).on("click", "[adj-citypicker-item]", function () {
            input.val($(this).html());
            input.attr("rid", $(this).attr("rid"));
            $('[adj-citypicker]').css("display", "none");
        });

        html.init = function () {
            tc.a = []; tc.b = []; tc.c = []; tc.d = []; tc.e = []; tc.f = [];
            tc.g = []; tc.h = []; tc.i = []; tc.j = []; tc.k = []; tc.l = [];
            tc.m = []; tc.n = []; tc.o = []; tc.p = []; tc.q = []; tc.r = [];
            tc.s = []; tc.t = []; tc.u = []; tc.v = []; tc.w = []; tc.x = [];
            tc.y = []; tc.z = [];
        }

        html.getData = function () {
            $.ajax({
                url: options.url,
                type: "post",
                async: false,
                success: function (data) {
                    //[{"Id":110000,"Text":"北京市","Py":"beijing","Jp":"bj"},{"Id":120000,"Text":"天津市","Py":"tianjin","Jp":"tj"}]
                    retJson = eval(data);
                }
            });
        }

        html.add = function (searched) {
            html.getbody(searched);
            if($('[adj-citypicker]').size()==0)
                $('body').append(html.head + html.body + html.foot);
            else
                $('[adj-citypicker-body]').html(html.body);
            $('[adj-citypicker]').css("top", offtop + "px");
            $('[adj-citypicker]').css("left", offleft + "px");
        }

        html.group = function (searched) {
            if (retJson == null) html.getData();
            var cs = retJson;

            if (searched != undefined) cs = searched;

            html.init();

            for (var i in cs) {
                var fi = cs[i].Jp.substr(0, 1).toLowerCase();
                if (fi === "") continue;
                tc[fi].push(cs[i]);
            }
            return tc;
        }

        html.getbody = function (searched) {
            var g = html.group(searched);
            html.body = "";
            for (var i = 97; i < 122; i++) {
                var list = g[String.fromCharCode(i)];
                if (list.length == 0) continue;
                var h = '<table adj-citypicker-row><tr><td adj-citypicker-sign-td>'
                    + '<a adj-citypicker-sign>' + String.fromCharCode(i).toUpperCase()
                    + '</div></td><td adj-citypicker-items>';

                for (var j = 0; j < list.length; j++) {
                    h += '<a adj-citypicker-item rid="' + list[j].Id + '">' + list[j].Text + '</a>';
                }
                h += '</td></tr></table>';
                html.body += h;
            }
        }

        html.search = function (keyworld) {
            var res = [];
            for (var i in retJson) {
                if (retJson[i].Jp != null && retJson[i].Jp.indexOf(keyworld) >= 0)
                    res.push(retJson[i]);
            }
            return res;
        }

        this.on('click', function () {
            if ($('[adj-citypicker]').size() == 0) html.add();
            $('[adj-citypicker]').css("display", "block");
        });

        this.on('keyup', function () {
            var v = input.val();
            var searched = html.search(v);
            html.add(searched);
            $('[adj-citypicker]').css("display", "block");
            if($('[adj-citypicker-body]').html()=="")
                $('[adj-citypicker-body]').html("<br/>很遗憾,没有搜索到相应城市")
        });

    };
})(jQuery);


