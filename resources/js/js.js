$(function() {
    $(".rslides").responsiveSlides({
        nav:true,
        speed: 1000,
        prevText: '<i class="fa fa-chevron-left"></i>',
        nextText: '<i class="fa fa-chevron-right"></i>'
    });
});
function menu() {
    if ($(window).scrollTop()>30) {
        $(".navbar-fixed-top").css({"height": "60px", "padding": "5px 0px", "background-color": "rgba(0,0,0,0.8)", "border": "none"});
        $('#up').fadeIn(100);
    }
    else {
        $(".navbar-fixed-top").css({"height": "80px", "padding": "15px 0px", "background-color": "rgba(0,0,0,0.5)"});
        $('#up').fadeOut(100);
    }
}
function animateit(){
    var position = window.pageYOffset;
    var offset = 350;
    var about = $('#about').offset().top - offset;
    var process = $('#process').offset().top - offset;
    var team = $('#team').offset().top - offset;
    var work = $('#work').offset().top - offset;
    var skills = $('#skills').offset().top - offset;
    if(position > about) {
        $('#about .animated').addClass('fadeIn').css('opacity', '1');
    }
    if(position > process) {
        $('#process .animated').attr('class', 'animated fadeIn').css('opacity', '1');
    }
    if(position > team) {
        $('#team .animated').addClass('fadeIn').css('opacity', '1');
    }
    if(position > skills) {
        $('#skills > > .animated').addClass('fadeIn').css('opacity', '1');
    }
    if(position > work) {
        $('#work .animated').addClass('fadeIn').css('opacity', '1');
    }

    $('.skill').hover(
        function() {
            $(this).children('.fa.visible').removeClass("fadeIn").addClass("fadeOut").css("display", "none");
            $(this).children('.fa.hid').removeClass("fadeOut").addClass("fadeIn").css("display", "block");
        },
        function() {
            $(this).children('.fa.visible').removeClass("fadeOut").addClass("fadeIn").css("display", "block");
            $(this).children('.fa.hid').removeClass("fadeIn").addClass("fadeOut").css("display", "none");
        });
}
<!-- Smooth scrolling script -->
$(function () {

    $('a[href^="#"]').click(function(event) {
        var id = $(this).attr("href");
        var offset = 150;
        var target = $(id).offset().top - offset;

        $('html, body').animate({scrollTop:target}, 800);
        event.preventDefault();
    });

});

$(function(){
    $('.navbar-nav > li > a').click(function(){
        $('.navbar-toggle').toggleClass('collapsed').attr('aria-expanded', 'false');
        $('.navbar-collapse').toggleClass('in');
    });
});

$(window).load(function(){
    if($(this).width()>768){
        animateit();
        menu();
    }
});
$(window).on('scroll', function(){
    if($(this).width()>768){
        animateit();
        menu();
    }
});

$('body').scrollspy({ target: '#navigation', offset: 200 });	