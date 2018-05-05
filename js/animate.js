$(function() {
    winH = $(window).width();

    if (winH < 767) {
        $('.dots').click(function(event) {
            var getSrc = $(this).data('src');
            var getContent = $(this).data('content');
            $('.logo_appear .inner_info small').text(getContent);
            console.log(getSrc);
            $('.circle_content h2').hide();
            var getAnimate = $('.show_img').attr('src', getSrc);
            var t = new TimelineMax();
            t.fromTo('.logo_appear', 0.5, {
                display: 'none',
                opacity: 0,
                y: 50
            }, {
                display: 'block',
                opacity: 1,
                y: 0

            }).fromTo(getAnimate, 0.5, {
                display: 'block',
                scale: 0,
                ease: Back.easeOut
            }, {
                scale: 1,
            });
        });
        // mouse leave animation
    } else {
        // mouse enter naimation
        $('.dots').mouseenter(function(event) {
            var getSrc = $(this).data('src');
            console.log(getSrc);
            $('.circle_content h2').hide();
            var getAnimate = $('.show_img').attr('src', getSrc);
            var getContent = $(this).data('content');
            $('.logo_appear .inner_info small').text(getContent);
            var t = new TimelineMax();
            t.fromTo('.logo_appear', 0.3, {
                display: 'none',
                opacity: 0,
                y: 50
            }, {
                display: 'block',
                opacity: 1,
                y: 0

            }).fromTo(getAnimate, 0.3, {
                display: 'block',
                scale: 0,
                ease: Back.easeOut
            }, {
                scale: 1,
            });
        });

        // mouse leave animation
        $('.dots').mouseleave(function(event) {

            var t = new TimelineMax();
            t.fromTo('.logo_appear', 0.3, {
                display: 'block',
                opacity: 1,
                y: 0
            }, {
                display: 'none',
                opacity: 0,
                y: 50

            }).fromTo('.show_img', 0.3, {
                scale: 1,
            }, {
                scale: 0,
                display: 'none',
                ease: Back.easeIn
            }).fromTo('.circle_content h2', 0.3, {
                scale: 0,
                display: 'none'
            }, {
                display: 'block',
                scale: 1,
                ease: Back.easeOut
            });

        });
    }


});
$(window).load(function() {
    winH = $(window).width();

    // set items for opacity
    if (winH > 767) {
        TweenMax.set('.dots, .circle_content h2, .sidebar-menu, footer, .logo, .social_icons li, .search, .enquiry_btn, .corporate-sec, .corporate-sec h2, .corporate_container, .project-map-sec, .project-sec h2, .career-sec h2, .career_container, .contact_container, .map_area, .slick-prev, .slick-next', {
            css: {
                opacity: 0
            }
        });
        // set items for scale
        TweenMax.set('.navbar-nav li, .circle_container, .project-img ', {
            css: {
                scale: 0,
            }
        });
        TweenMax.to('.loader_overlay, .spinner', 1.5, {
            scale: 0,
            opacity: 0,
            ease: Back.easeIn,
            display: 'none',
            onComplete: animationCall
        });
    } else {
        TweenMax.to('.loader_overlay, .spinner', 1.5, {
            scale: 0,
            opacity: 0,
            ease: Back.easeIn,
            display: 'none',
        });
    }

});

function animationCall() {
    /*===header footer====*/
    var t = new TimelineMax();
    t.fromTo('.sidebar-menu', 0.5, {
        opacity: 0,
        x: -300,
    }, {
        opacity: 1,
        x: 0,
        ease: Power4.easeOut,
    }).fromTo('.logo', 0.5, {
        opacity: 0,
        y: 100,
    }, {
        opacity: 1,
        y: 0,
        ease: Back.easeOut,
    }).staggerFromTo('.navbar-nav li', 0.2, {
        scale: 0,
    }, {
        scale: 1,
        ease: Linear.easeNone,
    }, 0.2).staggerFromTo('.social_icons li', 0.2, {
        opacity: 0,
        y: 50,
    }, {
        opacity: 1,
        y: 0,
        ease: Back.easeOut,
    }, 0.2).fromTo('.search', 0.2, {
        opacity: 0,
        x: -50,
    }, {
        opacity: 1,
        x: 0,
        ease: Linear.easeNone,
    }).fromTo('.enquiry_btn', 0.2, {
        opacity: 0,
        x: 50,
    }, {
        opacity: 1,
        x: 0,
        ease: Linear.easeNone,
    }).fromTo('footer', 0.5, {
        opacity: 0,
    }, {
        opacity: 1,
        ease: Linear.easeNone,
    });

    /*===home page animation====*/

    var t2 = new TimelineMax();
    t2.fromTo('.circle_container', 1, {
        scale: 0,
    }, {
        scale: 1,
        ease: Back.easeOut,
    }).staggerFromTo('.dots', 0.2, {
        opacity: 0,
    }, {
        opacity: 1,
        ease: Linear.easeNone,
    }, 0.2).fromTo('.circle_container h2', 0.5, {
        opacity: 0,
        y: 100,
    }, {
        opacity: 1,
        y: 0,
        ease: Back.easeOut,
    });


    /*===corporate page animation====*/

    var t3 = new TimelineMax()
    t3.fromTo('.corporate-sec', 1, {
        opacity: 0,
    }, {
        opacity: 1,
    }).fromTo('.corporate-sec h2', 1, {
        opacity: 0,
        y: 50
    }, {
        opacity: 1,
        y: 0,
        ease: Back.easeOut
    }).fromTo('.corporate_container, .blog_container', 1, {
        opacity: 0,
        y: 100
    }, {
        opacity: 1,
        y: 0,
        ease: Back.easeOut
    });

    /*===project page animation====*/

    var t4 = new TimelineMax()
    t4.fromTo('.project-map-sec', 1, {
        opacity: 0,
        y: 100
    }, {
        opacity: 1,
        y: 0,
        ease: Back.easeOut
    }).fromTo('.project-sec h2', 1, {
        opacity: 0,
        y: 100
    }, {
        opacity: 1,
        y: 0,
        ease: Back.easeOut
    }).staggerFromTo('.project-img', 0.2, {
        scale: 0,
    }, {
        scale: 1,
        ease: Linear.easeNone,
    }, 0.2).fromTo('.slick-prev, .slick-next', 0.5, {
        opacity: 0,
        y: 50
    }, {
        opacity: 1,
        y: 0,
        ease: Back.easeOut
    });

    /*===career page animation====*/

    var t5 = new TimelineMax()
    t5.fromTo('.career-sec h2', 1, {
        opacity: 0,
        y: 100
    }, {
        opacity: 1,
        y: 0,
        ease: Back.easeOut
    }).fromTo('.career_container', 1, {
        opacity: 0,
        y: 100
    }, {
        opacity: 1,
        y: 0,
        ease: Back.easeOut
    });

    /*===contact page animation====*/

    var t6 = new TimelineMax()
    t6.fromTo('.map_area', 1, {
        opacity: 0,
        y: 100
    }, {
        opacity: 1,
        y: 0,
        ease: Back.easeOut
    }).fromTo('.contact_container', 1, {
        opacity: 0,
        y: 100
    }, {
        opacity: 1,
        y: 0,
        ease: Back.easeOut
    });

    /*===blog page animation====*/


}