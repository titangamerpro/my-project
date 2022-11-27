$(document).ready(function () {
    $(".burger-menu").click(function(){
        $(".burger-menu").toggleClass("active");
        $(".nav").toggleClass("active");
        $("body").toggleClass("hidden");

    });

    let header = $(".header-block")
    $(window).scroll(function () { 
        // console.log("scroll");
        if ($(window).scrollTop() > 1) {
            header.addClass("fixed");
        } else{
            header.removeClass("fixed");
        }
    });
});
