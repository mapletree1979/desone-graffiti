$(document).ready(function(){
    $('.portfolio-carousel').slick({
        dots: true,
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    });

    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 70
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

    function fadeInOnScroll() {
        $('.fade-in').each(function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();

            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('visible');
            }
        });
    }

    $(window).on('scroll', fadeInOnScroll);
    $(window).on('load', fadeInOnScroll);

    $(window).scroll(function() {
        if ($(window).scrollTop() > 50) {
            $('.navbar').css('background-color', 'rgba(0, 0, 0, 0.9)');
            $('.navbar').css('padding', '0.5rem 1rem');
        } else {
            $('.navbar').css('background-color', 'rgba(0, 0, 0, 0.8)');
            $('.navbar').css('padding', '1rem 1rem');
        }
    });

    $(window).scroll(function() {
        var scrollDistance = $(window).scrollTop();
        $('section').each(function(i) {
            if ($(this).position().top <= scrollDistance + 100) {
                $('.navbar-nav a.active').removeClass('active');
                $('.navbar-nav a').eq(i).addClass('active');
            }
        });
    }).scroll();

    $('form').submit(function(e) {
        e.preventDefault();
        var name = $('input[type="text"]').val();
        var email = $('input[type="email"]').val();
        var message = $('textarea').val();

        if (name.length < 2) {
            alert('Please enter a valid name');
            return;
        }

        if (email.indexOf('@') == -1 || email.indexOf('.') == -1) {
            alert('Please enter a valid email address');
            return;
        }

        if (message.length < 10) {
            alert('Please enter a message with at least 10 characters');
            return;
        }

        console.log('Form submitted successfully');

    });

    $('img').attr('loading', 'lazy');
});