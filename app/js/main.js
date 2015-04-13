// B.M. id-1054

$(document).ready(function() {

    $(".bxSlider").bxSlider({
        nextSelector: '.slider-next',
        prevSelector: '.slider-prev',
        pagerCustom: '#bx-pager',
        mode: 'fade'
    });

    $('.bx-viewport').css('position', 'initial');


    // popup
    $('.js-popup').on('click', function(e) {
        e.preventDefault();
        $('.popup').bPopup();
    });

})