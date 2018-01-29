var t={
   get:function (opt) {
       return $.ajax({
           type:opt.type||"get",
           url:opt.url||"",
           dataType:opt.dataType||"json",
           beforeSend: function(){
               $('body').append('<div style="position:fixed;width:100%;height:100%;z-index:99;" id="loadding"><img src="images/loading.gif" style="left:48%; top:40%;position: fixed;"></div>');
           },
           success:function (data) {
               $('#loadding').remove();
               opt.success(data);
           }
       })
   }
};
