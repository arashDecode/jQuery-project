// $(window).on('load', function(){
//     $("#status").fadeOut();
//     $("#preloader").delay(400).fadeOut("slow");
// });

//Preloader Animation
$(document).ready(function() {	
	setTimeout(function(){
		$('body').addClass('loaded');
	}, 2000);
	
});

//ScrollSpy
var spy = new ScrollSpy();
var indicator = document.getElementById('indicator');
spy.Indicator({
  element: indicator
});


//Menu Smooth Scroll
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true
});


// $(
//     function () {
//       $("a.smooth-scroll").click(function (event) {
//         event.preventDefault();
  
//         var sectionId = $(this).attr("href");
  
//         $("html, body").animate({
//           scrollTop: $(sectionId).offset().top
//         }, 1250, "easeInOutExpo");
  
  
//       });
//     }
// );


//Creating Custom Scroll
let customScroll = document.getElementById("scroll");
window.addEventListener('scroll' , function (){
    let scrollTop = window.scrollY;
    let documentHeight = document.body.clientHeight;
    let windowHeight = window.innerHeight;

    let scrollPercent = scrollTop / (documentHeight - windowHeight);
    let scrollPercentRounded = Math.round(scrollPercent * 100);
    customScroll.style.width = scrollPercentRounded + '%'
    console.log(scrollPercentRounded);
});


//Side Navbar 
let navBtn = document.getElementById("side-btn");
let sideNavBar = document.getElementById("side-nav");
sideNavBar.style.right = "-50vw";
navBtn.addEventListener("click", function(){
    navBtn.classList.toggle("change");
    if( sideNavBar.style.right == "-50vw" ){
        sideNavBar.style.right = "0";
        sideNavBar.classList.add("mobAnimation");
    }
    else{
        sideNavBar.style.right = "-50vw";
        sideNavBar.classList.remove("mobAnimation");
    }
})


//Adding active class to Navbar links
// $(function(){
//     let menuLinks = $(".nav-wrapper .menu-items li");
//     $(menuLinks).click(function(){
//         $(".nav-wrapper .menu-items").find(".nav-active-link").removeClass(".nav-active-link");
//         $(this).addClass("nav-active-link")
//     })
// })

//Menu Smooth Scroll
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true
});


//Creating Slider with Owl-Carousel
$(document).ready(function(){
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>']
    });
});


//Adding animation to progress bar with Waypoint
$(function(){
    
    $("#progress-elements").waypoint(function(){
        $(".progress-line span").each(function(){
            $(this).animate({
                width: $(this).attr("data-value") + "%"
            },2000)
        })

        $(this).destroy();

    },{
        offset: "bottom-in-view"
    }
    );  
})


//Creatin tabs with Responsive Tabs
$('#responsiveTabsDemo').responsiveTabs({
    animation: 'slide'
});



//Adding active class to Tab Links 
let tabsContainer = document.getElementById("tab-container");
let tabList = document.getElementsByClassName("tab-list");

for(var i = 0; i < tabList.length; i++){
    tabList[i].addEventListener("click", function(){
        let current = document.getElementsByClassName("active-state");
        current[0].className = current[0].className.replace(" active-state", "");
        this.className += " active-state";
    })
}


//Isotope Filtering 
$(window).on("load", function(){
    $("#isotope-container").isotope({
        //
    });

    $(".filter-button-group").on("click", "button", function(){
        var filterValue = $(this).attr("data-filter");
        $("#isotope-container").isotope({filter: filterValue});

        //Adding active class to buttons when clicked (no pre-defined active class)
        $(".filter-button-group").find(".active").removeClass("active");
        $(this).addClass("active");
    })
  
})

//Magnific Popup
$(function(){
    $("#work-section").magnificPopup({
        type: 'image',
        delegate: 'a',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        gallery:{
            enabled: true
        }
    })
})


//Creating TestimonialS Carousel (No Plugins Used)
let slideIndex = 1;
displaySlide(slideIndex);

function activeSlide(n){
    displaySlide((slideIndex=n))
}

function displaySlide(n){
    let totalSlides = $('.testimonial');
    
    let totalDots = $('.footerdot');

    for(i = 0; i < totalSlides.length; i++){
        $(totalSlides[i]).css("display", "none");
    }

    for(i = 0; i < totalDots.length; i++){
        $(totalDots[i]).removeClass("active-carousel");
    }

    $(totalSlides[slideIndex-1]).fadeIn(1000);

    $(totalDots[slideIndex-1]).addClass("active-carousel");
}

$("#carouselButtons").on("click", "span", function(){
    var carouselValue = $(this).attr("data-carousel");
    activeSlide(carouselValue);
});



//Creating Counter-Up
$(".counter").counterUp({
    delay: 10,
    time: 1000
});


//Creating slider for Clients section with Owl Carousel
$(document).ready(function(){
    $("#clients-list").owlCarousel({
        items: 4,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>']
    });
});



//Adding white-nav class to menu when window is scrolled
$(function(){
    $(window).scroll(function () { 
        if($(window).scrollTop() > 60){
            $(".nav-wrapper").addClass("white-nav");
        }
        else(
            $(".nav-wrapper").removeClass("white-nav")
        )
    });
})


//Adding Animations to Elements
$(function(){
    new WOW().init();
});


//Automatic Typing Plugin
$(window).on('load', function(){
    $("#home-title").addClass("animate__fadeInDown");
    // $(".home-txt").addClass("animate__zoomIn");
    // $(".home-btn").addClass("animate__fadeInUp");

    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 30,
        showCursor: false,
        startDelay: 2000,
    });
})


