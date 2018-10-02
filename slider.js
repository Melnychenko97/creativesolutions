jQuery(document).ready(function($) {
    $('#lightSlider').lightSlider({

        item:1,
        adaptiveHeight:true,
        slideMove:1,
        slideMargin:30,
        loop:true,
        rtl:true,
        auto: true,
        pause: 5000,
        speed: 1000, //ms'
        slideEndAnimation: true,
        addClass: '',
        mode: "slide",
        useCSS: true,
        cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
        easing: 'linear', //'for jquery animation',////
    });
});