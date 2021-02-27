$(document).ready(function() {
    let clickCount = 0;

    $('.p1').click(function(e) {
        if (clickCount % 2 == 0) {
            $('.title').toggleClass('fullscreen');
        } else {
            $(".title, .p1").fadeOut(1000);
        }
        clickCount++;
    });

    // this doent work
    $('.p2').click(function(e) {
        if (clickCount % 2 == 0) {
            $('.author').toggleClass('fullscreen');
        } else {
            $(".author, .p2").fadeOut(1000);
        }
        clickCount++;
    });
});