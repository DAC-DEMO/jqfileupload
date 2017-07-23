$(function() {
    /*$('#fileupload').fileupload({
        url: "/server/upload",
        dataType: 'json',
        send: function(e, data) {
            console.log("send");
        }
    });*/

    $('#fileupload').fileupload({
        dataType: 'json',
        add: function(e, data) {
            $("#uploadBtn").off('click').on('click', function() {
                data.submit();
            });
        }
    });
});