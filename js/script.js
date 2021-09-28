$(document).ready(function(){
    $(window).scroll(function(){
    // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('header').addClass("sticky");
        }else{
            $('header').removeClass("sticky");
        }
    });

    $('header .navbar__menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Coolize.css", "Free Library"],
        typeSpeed: 100,
        backSpeed: 70,
        loop: true
    });
});