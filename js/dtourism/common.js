$(document).ready(function ($) {
    
    $('.navbar-toggler').on('click',function(){
        // console.log('a');
        $(this).find('.animated-menu-icon').toggleClass('open')
        $('.mobile-nav').toggleClass('active');
        $('.navbar').toggleClass('active');
    });

    if($('.tab-menu').length){
        $('.tab-menu').click(function(){
            $('.main-header').css('background-color', $(this).attr("bg-color"));
        });

        $("#mainHeader.nav-tabs li:first a").addClass("active");
        // $("#mainHeaderContent.tab-content .tab-pane").addClass("show active");

        var tabChange = function () {
            var $navStacked = $("#mainHeader.nav-tabs li a.active");
            var tabContent = $("#mainHeaderContent.tab-content .tab-pane.show.active");
            if ($navStacked.is("#mainHeader.nav-tabs li:last-child a")) {
                $navStacked.removeClass("active");
                $("#mainHeaderContent.tab-content .tab-pane").removeClass("show active");
                $("#mainHeaderContent.tab-content .tab-pane:first").addClass("show active");
                $("#mainHeader.nav-tabs li:first a").addClass("active").trigger( "click" );
                // tabContent.removeClass("show active");
                // $("div#tab1").addClass("active");
            } else {
                $navStacked.removeClass("active").parent().next().find('.nav-link').addClass("active");
                $navStacked.parent().next().find('.nav-link').trigger( "click" );
                tabContent.removeClass("show active").next().addClass("show active");
            }
        }
        setInterval(tabChange, 6000);
        // var tabCycle = setInterval(tabChange, 3000);

        // var tabChange = function () {
        //     console.log('a');
        //     var tabs = $('.nav-tabs > li');
        //     var active = tabs.filter('.active');
        //     var next = active.next('li').length ? active.next('li').find('a') : tabs.filter(':first-child').find('a');
        //     // Use the Bootsrap tab show method
        //     next.tab('show');
        // };
        // // Tab Cycle function
        // var tabCycle = setInterval(tabChange, 1000);
        
        // Tab click event handler
        // $('#mainHeader.nav-tabs li a').on('click', function (e) {
        //     e.preventDefault();
        //     // Stop the cycle
        //     clearInterval(tabCycle);
        //     // Show the clicked tabs associated tab-pane
        //     $(this).tab('show');
        //     // Start the cycle again in a predefined amount of time
        //     setTimeout(function () {
        //         // tabCycle;
        //     }, 1000);
        // });
    }
});