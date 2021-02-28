// $(document).ready(function() {
//     let clickCount = 0;

//     $('#move').click(function(e) {
//         if (clickCount % 2 == 0) {
//             $('.title').toggleClass('fullscreen');
//         } else {
//             $(".p1, .title").fadeOut(1000);
//         }
//         clickCount++;
//         console.log(clickCount);
//     });


// $(document).ready(function() {


//     $('#move').click(function(e) {

//         $('.title').toggleClass('fullscreen').addClass('max');

//         // if ($(".title").hasClass('max')) {

//         $('.p1, .title').delay(2000).fadeOut(1000);

//         $('.author').toggleClass('fullscreen').addClass('max');
//         $('.p2, .author').delay(2000).fadeOut(1000);


//         // }


//     });


// });

$(document).ready(function() {
    let clickCount = 0;
    $('.word').click(function(e) {
        const attr = e.target.getAttribute('clickedonce');
        const closestNode = e.target.closest('.layer');
        if (attr) {
            e.target.setAttribute('clickedonce', false);
            $(closestNode).find('.blur').fadeOut(1000);
            $(closestNode).find('.word').fadeOut(1000);
            // $(closestNode).find('.blur').css('z-index', -10);
            // $(closestNode).find('.word').css('z-index', -10);




        } else {
            $(closestNode).find('.blur').toggleClass('fullscreen');
            // Set a custom attribute to the parent node
            e.target.setAttribute('clickedonce', true);
        }
    });

    // $('.p2').click(function(e) {
    //     const attr = e.target.getAttribute('clickedonce');
    //     const closestNode = e.target.closest('.container');
    //     if (attr) {
    //         e.target.setAttribute('clickedonce', false);
    //         $(closestNode).find('.author').fadeOut(1000);
    //         $(closestNode).find('.p2').fadeOut(1000);


    //     } else {
    //         $(closestNode).find('.author').toggleClass('fullscreen');
    //         // Set a custom attribute to the parent node
    //         e.target.setAttribute('clickedonce', true);
    //     }
    // });
});