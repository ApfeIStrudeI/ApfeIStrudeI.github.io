$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 900,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron-left-solid.svg"></img></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron-right-solid.svg"></img></button>',
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

      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

      function toggleSlide(item){
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catolog-item__content').eq(i).toggleClass('catolog-item__content_active');
                $('.catolog-item__list').eq(i).toggleClass('catolog-item__list_active');
            })
          })
      };

      toggleSlide('.catolog-item__link');
      toggleSlide('.catolog-item__back');

      //modal windows

      $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });

    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catolog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });

    function validateForms(form){
      $(form).validate({
          rules: {
              name: {
                  required: true,
                  minlength: 2
              },
              phone: "required",
              email: {
                  required: true,
                  email: true
              }
          },
          messages: {
              name: {
                  required: "Пожалуйста, введите свое имя",
                  minlength: jQuery.validator.format("Введите {0} символа!")
                },
              phone: "Пожалуйста, введите свой номер телефона",
              email: {
                required: "Пожалуйста, введите свою почту",
                email: "Неправильно введен адрес почты"
              }
          }
      });
  };
  validateForms('#consultation-form');
  validateForms('#consultation form');
  validateForms('#order form');
  validateForms('.feed-form');

  $('input[name=phone]').mask("+7 (999) 999-99-99");
});