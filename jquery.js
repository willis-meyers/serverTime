$(document).ready(function(){
    $('button').click(function() {
    $.get("https://hb-server-time.herokuapp.com/", function(data) {
        $("#serverTime").html(data);
    })
        .fail(function(){
            alert("There was an error");
        });
    });
});
