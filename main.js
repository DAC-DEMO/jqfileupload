$(function() {
    var serverUrl = "http://localhost:8080/baba/springs/rest/upload";

    $('#fileupload').fileupload({
        "url": serverUrl,
        "dataType": "json",

        "submit": function(e, data) {
            var formData = [{
                "name": "username",
                "value": "sana"
            }, {
                "name": "password",
                "value": "fondu"
            }];
            data.formData = formData;
        },
        "add": function(e, data) {
            $("#uploadBtn").off('click').on('click', function() {
                // server call starts here
                var jqXHR = data.submit();
                jqXHR.success(function(result, textStatus, jqXHR) {
                    console.log("SUCCESS");
                });
                jqXHR.error(function(jqXHR, textStatus, errorThrown) {
                    console.log("FAILURE");
                });
            });
        }
    });
});