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

    $('.p2').click(function(e) {
        if (clickCount % 2 == 0) {
            $('.author').toggleClass('fullscreen');
        } else {
            $(".author, .p2").fadeOut(1000);
        }
        clickCount++;
    });
});

// $(document).ready(function() {
//     var toggle = false;
//     $('.p1').click(function(e) {
//         if (toggle === false) {
//             $('.title').toggleClass('fullscreen');
//             toggle = true;
//         } else {
//             $(".title, .p1").fadeOut(1000);
//         }
//     });
// });

// $(document).ready(function() {
//     var toggle = false;
//     $('.p2').click(function(e) {
//         if (toggle === false) {
//             $('.author').toggleClass('fullscreen');
//             toggle = true;
//         } else {
//             $(".author, .p2").fadeOut(1000);
//         }
//     });
// });