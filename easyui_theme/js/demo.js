$(function() {
    $('#dg').datagrid({
        iconCls: 'icon-house',//图标
        loadMsg: "正在努力加载数据，请稍后...",
        
        method: "post",
        url: "http://192.168.10.62:8089/" + "api/driverinfo/PostSearch",
        pageSize: 15,
        pageList: [15, 30, 50, 100, 500, 1000],
        //width: 700,
        //height: 'auto',
        //border: false,
        //singleSelect: false,//是否单选
        striped: true,//行奇偶分色
        pagination: true,//分页控件
        rownumbers: true,//行号
        fit: true,//响应式大小
        //fixed: true, //固定
        fitColumns: true, //列适应
        nowrap: false,
        //remoteSort: false,
        frozenColumns: [[
            { field: 'ck', checkbox: true }
        ]],
        queryParams: {
            listType: "zp_report",
            cityId: 0,
            signInStatus: 0,
            module: true
        }
    });
});