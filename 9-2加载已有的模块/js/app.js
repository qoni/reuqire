require.config({
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
                $.cookie("aaaa",2);
            }
        })
    });
});

