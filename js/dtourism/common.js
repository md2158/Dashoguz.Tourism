$(document).ready(function ($) {
    // initialize Wow.js
    new WOW().init();
    // add class to header on-scroll
    var stickyNavTop = $('#header').offset().top;
    var stickyNav = function(){
        var scrollTop = $(window).scrollTop(); 
        if (scrollTop > 10) { 
            $('#header').addClass('menu-scroll');
        } else {
            $('#header').removeClass('menu-scroll'); 
        }
    };
    stickyNav();
    $(window).scroll(function() {
        stickyNav();
    });
    // onclick add class to mobile menu icon
    $('.navbar-toggler').on('click',function(){
        $(this).find('.animated-menu-icon').toggleClass('open')
        $('.mobile-nav').toggleClass('active');
        $('.navbar').toggleClass('active');
    });
    // loop main header tabs automatically
    if($('.tab-menu').length){
        $('.tab-menu').click(function(){
            $('.main-header').css('background-color', $(this).attr("bg-color"));
            if($(window).width() < 768){
                $('.navbar').css('background-color', $(this).attr("bg-color"));
                $('.side-bar-social-icons').css('background-color', $(this).attr("bg-color"));
            }
        });
        $("#mainHeader.nav-tabs li:first a").addClass("active");
        var tabChange = function () {
            var $navStacked = $("#mainHeader.nav-tabs li a.active");
            var tabContent = $("#mainHeaderContent.tab-content .tab-pane.show.active");
            if ($navStacked.is("#mainHeader.nav-tabs li:last-child a")) {
                $navStacked.removeClass("active");
                $("#mainHeaderContent.tab-content .tab-pane").removeClass("show active");
                $("#mainHeaderContent.tab-content .tab-pane:first").addClass("show active");
                $("#mainHeader.nav-tabs li:first a").addClass("active").trigger( "click" );
            } else {
                $navStacked.removeClass("active").parent().next().find('.nav-link').addClass("active");
                $navStacked.parent().next().find('.nav-link').trigger( "click" );
                tabContent.removeClass("show active").next().addClass("show active");
            }
        }
        setInterval(tabChange, 7000);
    }
    // show footer form button on focus
    $('#footerForm').focus(function(){
        $('.btn-submit').removeClass('d-none');
        $('html, body').animate({scrollTop: $(document).height() }, 1200, 'linear');
    });

    // Back-to-top
    $('.back-to-top').click(function() {
        $('html, body').animate({scrollTop: '0px'}, 1200, 'linear');
    });
});

$(document).scroll(function(){
    var y=$(this).scrollTop();
    if(y>600){
        $('.back-to-top').addClass('active');
    }
    else{
        $('.back-to-top').removeClass('active');
    }
});