$(document).ready(function(){
    $('.about_img').slick({
        prevArrow: false,
        nextArrow: '<button type="button" class="slick-next"><img src="icons/switch.svg"></img></button>',
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                  dots: true,
                  arrows: false
                }
            }
        ]
      });
  });

