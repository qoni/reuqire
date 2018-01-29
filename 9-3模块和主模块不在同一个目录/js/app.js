require.config({
    //第一种:逐一指定路径
    // paths: {
    //     "jquery": "../dist/jquery-3.2.1.min",
    //     "cookie":"../dist/jquery.cookie"
    // }
    //第二种:直接改变基目录（baseUrl）
    baseUrl:"./dist",
    paths: {
        "jquery": "jquery-3.2.1.min",
        "cookie":"jquery.cookie"
    }
});
require(["jquery","cookie"],function ($,c) {
    $(".btn").on("click",function () {
        $.ajax({
            type:"get",
            url:"js/test.json",
            dataType:"json",
            success:function (data) {
                $(".div1").html(data[0].title);
                $.cookie("aaaa",3);
            }
        })
    });
});

