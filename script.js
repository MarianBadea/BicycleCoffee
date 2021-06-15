
$(document).ready(function(){
    $("#burger-container").on('click', function(){
        $(this).toggleClass("open");
        $("header nav ul").toggleClass("open");
    });
});