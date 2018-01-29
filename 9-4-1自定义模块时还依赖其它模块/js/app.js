require(["ajax"],function (_) {
    _({
        type:"get",
        url:"js/test.json",
        success:function (data) {
            console.log(data);
        }
    });
    $(document).on("click",function () {
        alert(1);
    })
});

