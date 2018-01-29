require.config({
    shim: {
        'cmmn':{
            deps:["jquery-3.2.1.min"],
            exports: 't'
        }
    }
});
require(["cmmn"],function (cm) {
    cm.get({
        type:"post",
        url:"js/test.json",
        success:function (data) {
            console.log(data);
        }
    })
});

