/*
Template    :   Eternita - Onepage HTML5 Template
Author      :   separateweb
*/

(function ($) {
  "use strict";

  //Sticky Header 
  function updateScroll() {
    if ($(window).scrollTop() >=120) {
      $(".sw-header").addClass('sticky');
    } else {
      $(".sw-header").removeClass("sticky");
    }
  }
$(function () {
    $(window).scroll(updateScroll);
    updateScroll();
});


//vscroll
$(window).scroll(function() {
  var sw_rotate = $(window).scrollTop() / 5;
  $(".rotateclass").css({ transform: "rotate(" + sw_rotate + "deg)" });		
});

// Initialize parallax effect
 var timeout;
 $('.hero-content-a').mousemove(function(e){
   if(timeout) clearTimeout(timeout);
   setTimeout(callParallax.bind(null, e), 200);  
 });
 function callParallax(e){
   parallaxIt(e, '.sw1', -100);
   parallaxIt(e, '.sw2', 70); // Negative value to move in the opposite direction
   parallaxIt(e, '.sw3', 10);
   parallaxIt(e, '.sw4', -10);
 }
 function parallaxIt(e, target, movement){
   var $this = $('.hero-content-a');
   var relX = e.pageX - $this.offset().left;
   var relY = e.pageY - $this.offset().top;

   TweenMax.to(target, 1, {
     x: (relX - $this.width()/2) / $this.width() * movement,
     y: (relY - $this.height()/2) / $this.height() * movement,
     ease: Power2.easeOut
   });
 }


// slider text
$('.verticletext').slick({
  arrows: false,
  speed: 5000,
  autoplay: true,
  autoplaySpeed: 0,
  centerMode: true,
  cssEase: 'linear',
  slidesToShow: 4,
  slidesToScroll: 0.1,
  variableWidth: true,
  pauseOnHover: true,
  infinite: true,
  initialSlide: 1,
});

// logo slider 1
$('.sliderlogo-1').slick({
  arrows: false,
  speed: 5000,
  autoplay: true,
  autoplaySpeed: 0,
  centerMode: true,
  cssEase: 'linear',
  slidesToShow: 4,
  slidesToScroll: 0.1,
  variableWidth: true,
  pauseOnHover: true,
  infinite: true,
  initialSlide: 1,
});

// logo slider 2
$('.sliderlogo-2').slick({
  arrows: false,
  speed: 5000,
  autoplay: true,
  autoplaySpeed: 0,
  centerMode: true,
  cssEase: 'linear',
  slidesToShow: 4,
  slidesToScroll: 0.1,
  variableWidth: true,
  pauseOnHover: true,
  infinite: true,
  initialSlide: 1,
  rtl: true
});


//Review Slider
var swiper = new Swiper(".mySwiper-review", {
  speed: 1000,
  slidesPerView: 2,
  spaceBetween: 60, 
  loop:false,
  grabCursor: true, 
  spaceBetween: 30, 
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  breakpoints: {
    320: {
      slidesPerView: 1,     
    },
    640: {
      slidesPerView: 1,     
    },
    768: {
      slidesPerView: 1,    
    },
    1200: {
      slidesPerView: 1,    
    },
    1201: {
      slidesPerView: 2,    
    },
  },
});



//imageReveal GSAP
gsap.registerPlugin(ScrollTrigger);
function imageReveal() {
  const revealContainers = document.querySelectorAll(".reveal");
  revealContainers.forEach((container) => {
    let clipPath;
    // Left to right
    if (container.classList.contains("reveal--left")) {
      clipPath = "inset(0 0 0 100%)";
    }
    // Right to left
    if (container.classList.contains("reveal--right")) {
      clipPath = "inset(0 100% 0 0)";
    }
    // Top to bottom
    if (container.classList.contains("reveal--top")) {
      clipPath = "inset(0 0 100% 0)";
    }
    // Bottom to top
    if (container.classList.contains("reveal--bottom")) {
      clipPath = "inset(100% 0 0 0)";
    }
    const image = container.querySelector("img");  
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",       
        toggleActions: "restart none none reset"
      }
    });    
    tl.set(container, { autoAlpha: 1 });
    tl.from(container, {
      clipPath,
      duration: 1,
      delay: 0.2,
      ease: Power4.easeInOut
    });
    if (container.classList.contains("reveal--overlay")) {
      tl.from(image, { clipPath, duration: 0.6, ease: Power4.easeOut });
    }
    tl.from(image, {
      scale: 1.3,
      duration: 1.2,
      delay: -1,
      ease: Power2.easeOut
    });
  });
  ScrollTrigger.refresh();
}
imageReveal();

  
})(jQuery);

//© 2023 Separateweb



