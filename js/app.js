/**
 * Created by Kasia on 2015-11-19.
 */
//$(document).ready(function() {
//
//
//    function hideBox() {
//        $('.images1, .images2').mouseover( function() {
//            $(this).find('.whitebox').hide();
//        });
//    }
//    hideBox();
//
//    function showBox() {
//        $('.images1, .images2').mouseleave( function() {
//            $(this).find('.whitebox').show();
//        });
//    }
//    showBox();
//
//
//});

//$(document).ready(function() {
//
//
//    function hideBox() {
//        $('.images1, .images2').mouseover( function() {
//            $(this).find('.whitebox').fadeOut(2000,'linear');
//        });
//    }
//    hideBox();
//
//    function showBox() {
//        $('.images1, .images2').mouseleave( function() {
//            $(this).find('.whitebox').fadeIn(2000,'linear');
//        });
//    }
//    showBox();
//
//
//});



$(document).ready(function() {


    function showHideBox() {
        $('.images1, .images2').mouseover( function() {
            console.log(this);
            $(this).find('.whitebox').fadeOut(2000,'linear');
        })
        $('.images1, .images2').mouseleave( function() {
            $(this).find('.whitebox').fadeIn(2000,'linear');
        });
    }
    showHideBox();



        $('.main_slider').slick({
            //dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true
        });


});



















