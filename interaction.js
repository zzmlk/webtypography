$(document).ready(function() {

    $('.p1').click(function(e) {
        $('.title').toggleClass('fullscreen');
    });

    $(".p1").click(function(e) {
        $(".title, .p1").fadeOut(1000);

    });

});