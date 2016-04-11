(function ($) {
    $.fn.TBUI = function (options) {
        var defaults = {
            bg: "skin/bg.jpg",
            rowhover: true,
            rowline: true,
            rowheight: "35px",
            colWidth: "auto",
            fontsize: "14px"
        }
        var options = $.extend(defaults, options);
        this.each(function () {
            var thisTable = $(this);

            //表格字号
            $(thisTable).css("font-size", options.fontsize);

            //自适应宽度
            $(thisTable).css("width", "100%");

            //去除表格td间距
            $(thisTable).attr("cellspacing", "0");

            //标题样式
            $(thisTable).find("th").addClass("tb_th");

            //加背景
            $(thisTable).attr("background", options.bg);

            //设置行高
            $(thisTable).find("tr").css("height", options.rowheight);

            $(thisTable).find("td").css("width",options.colwidth);

            //添加行样式
            $(thisTable).find("tr").addClass("tb_line");
            if (options.rowline == true) {
                $(thisTable).find("td").addClass("td_line");
            }

            //添加活动行颜色
            if (options.rowhover == true) {
                $(thisTable).find("tr").bind("mouseover", function () {
                    $(this).addClass("tb_line_hover");
                });

                $(thisTable).find("tr").bind("mouseout", function () {
                    $(this).removeClass("tb_line_hover");
                });
            }
        });
    };
})(jQuery);