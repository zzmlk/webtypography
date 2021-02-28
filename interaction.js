$(document).ready(function() {
    let clickCount = 0;
    $('.word').click(function(e) {
        const attr = e.target.getAttribute('clickedonce');
        const closestNode = e.target.closest('#layer');
        if (attr) {
            e.target.setAttribute('clickedonce', false);
            $(closestNode).find('.blur').fadeOut(1000);
            $(closestNode).find('.word').fadeOut(1000);
        } else {
            $(closestNode).find('.blur').toggleClass('fullscreen');
            // Set a custom attribute to the parent node
            e.target.setAttribute('clickedonce', true);
        }
    });


    $(".button").click(function() {
        location.reload(true);
    });

});