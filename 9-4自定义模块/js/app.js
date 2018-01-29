require(["ajax"],function (_) {
        var btn=document.getElementsByClassName("btn")[0];
        var div1=document.getElementsByClassName("div1")[0];
        btn.onclick=function () {
            _.Ajax({
                async:true,
                method:"get",
                url:"js/test.json",
                success:function (data) {
                    div1.innerHTML=data.responseText;
                }
            })
        };
});

