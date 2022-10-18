$(document).ready(function(){
    // menu
    $('.nav_1 > li > a').mouseenter(function(){
        $(this)
            .addClass('active')
            .next('ul').stop().slideDown(500);
    });
    $('.nav_1 > li').mouseleave(function(){
        $(this)
            .children('a')
            .removeClass('active')
            .next('ul').stop().slideUp(300);
    });

    // slider
    var imgs = 2;
    var now = 0;
    var width = $('#slider .photo li').width();
    setInterval(function(){
        now = now == imgs ? 0 : now += 1;
        $('#slider .photo').animate({
            left : now * -width
        });
    }, 3000);

    $('.menu').click(function(){
        if($('#header .main_nav .nav_1').hasClass('on')) {
            $('#header .main_nav .nav_1').animate({
                left: '-400px'
            }).removeClass('on')
        }
        else {
            $('#header .main_nav .nav_1').animate({
                left: '0'
            }).addClass('on')
        }        
    })

});