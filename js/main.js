(function($) {
    "use strict";


    //Page cursors


    var t = document.getElementById("cursor"),
        e = document.getElementById("cursor2"),
        i = document.getElementById("cursor3");

    function n(t) {
        e.classList.add("hover"), i.classList.add("hover")
    }

    function s(t) {
        e.classList.remove("hover"), i.classList.remove("hover")
    }
    s();
    for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
        o(r[a])
    }

    function o(t) {
        t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
    }


    //Parallax & fade on scroll	

    function scrollBanner() {
        $(document).on('scroll', function() {
            var scrollPos = $(this).scrollTop();
            $('.parallax-fade-top').css({
                'top': (scrollPos / 2) + 'px',
                'opacity': 1 - (scrollPos / 300)
            });
            $('.parallax-top-shadow').css({
                'top': (scrollPos / -2) + 'px'
            });
            $('.parallax-top').css({
                'top': (scrollPos / 2.2) + 'px'
            });
        });
    }
    scrollBanner();


    /* Scroll Animation */

    window.scrollReveal = new scrollReveal();


    /* Swiper */

    var swiper = new Swiper('.swiper-container', {
        scrollbar: {
            el: '.swiper-scrollbar',
            hide: false,
            draggable: true,
            dragSize: '19',
        },
        slidesPerView: 'auto',
        resistance: true,
        resistanceRatio: 0,
        speed: 800,
        autoplay: false,
        mousewheel: true,
        freeMode: true,
        grabCursor: true,
        touchStartPreventDefault: false,
        breakpoints: {
            // when window width is <= 1200px
            1200: {
                freeMode: false,
            }
        }
    });
    $('#hero-slider').on('mousedown touchstart', function(event) {
        $('body').addClass('scale-up');
    });
    $('#hero-slider').on('mouseup touchend', function(event) {
        $('body').removeClass('scale-up');
    });


    //Navigation

    var app = function() {
        var body = undefined;
        var menu = undefined;
        var menuItems = undefined;

        var init = function init() {
            body = document.querySelector('body');
            menu = document.querySelector('.menu-icon');
            menuItems = document.querySelectorAll('.nav__list-item');

            applyListeners();
        };

        var applyListeners = function applyListeners() {
            menu.addEventListener('click', function() {
                return toggleClass(body, 'nav-active');
            });
        };

        var toggleClass = function toggleClass(element, stringClass) {
            if (element.classList.contains(stringClass)) element.classList.remove(stringClass);
            else element.classList.add(stringClass);
        };

        init();
    }();


    $(document).ready(function() {

        //Loading page animation

        $(".animsition").animsition({
            inClass: 'fade-in-down-sm',
            outClass: 'fade-out-down-sm',
            inDuration: 400,
            outDuration: 400,
            linkElement: '.animsition-link',
            // e.g. linkElement   :   'a:not([target="_blank"]):not([href^=#])'
            loading: true,
            loadingParentElement: 'body',
            loadingClass: 'animsition-loading',
            unSupportCss: ['animation-duration',
                '-webkit-animation-duration',
                '-o-animation-duration'
            ],
            overlay: false,
            overlayClass: 'animsition-overlay-slide',
            overlayParentElement: 'body'
        });


        //Nice Select

        $('select').niceSelect();


        //Scroll back to top

        var offset = 300;
        var duration = 400;
        jQuery(window).on('scroll', function() {
            if (jQuery(this).scrollTop() > offset) {
                jQuery('.scroll-to-top').addClass('active-arrow');
            } else {
                jQuery('.scroll-to-top').removeClass('active-arrow');
            }
        });
        jQuery('.scroll-to-top').on('click', function(event) {
            event.preventDefault();
            jQuery('html, body').animate({ scrollTop: 0 }, duration);
            return false;
        })


        /* Hero Case Study Hover Effect */

        $('.case-study-name:nth-child(1)').on('mouseenter touchstart', function() {
            $('.case-study-name.active').removeClass('active');
            $('.case-study-images li.show').removeClass("show");
            $('.case-study-images li:nth-child(1)').addClass("show");
            $('.case-study-name:nth-child(1)').addClass('active');
        })
        $('.case-study-name:nth-child(2)').on('mouseenter touchstart', function() {
            $('.case-study-name.active').removeClass('active');
            $('.case-study-images li.show').removeClass("show");
            $('.case-study-images li:nth-child(2)').addClass("show");
            $('.case-study-name:nth-child(2)').addClass('active');
        })
        $('.case-study-name:nth-child(3)').on('mouseenter touchstart', function() {
            $('.case-study-name.active').removeClass('active');
            $('.case-study-images li.show').removeClass("show");
            $('.case-study-images li:nth-child(3)').addClass("show");
            $('.case-study-name:nth-child(3)').addClass('active');
        })
        $('.case-study-name:nth-child(4)').on('mouseenter touchstart', function() {
            $('.case-study-name.active').removeClass('active');
            $('.case-study-images li.show').removeClass("show");
            $('.case-study-images li:nth-child(4)').addClass("show");
            $('.case-study-name:nth-child(4)').addClass('active');
        })
        $('.case-study-name:nth-child(5)').on('mouseenter touchstart', function() {
            $('.case-study-name.active').removeClass('active');
            $('.case-study-images li.show').removeClass("show");
            $('.case-study-images li:nth-child(5)').addClass("show");
            $('.case-study-name:nth-child(5)').addClass('active');
        })

        $('.case-study-name:nth-child(6)').on('mouseenter touchstart', function() {
            $('.case-study-name.active').removeClass('active');
            $('.case-study-images li.show').removeClass("show");
            $('.case-study-images li:nth-child(6)').addClass("show");
            $('.case-study-name:nth-child(6)').addClass('active');
        })
        $('.case-study-name:nth-child(7)').on('mouseenter touchstart', function() {
            $('.case-study-name.active').removeClass('active');
            $('.case-study-images li.show').removeClass("show");
            $('.case-study-images li:nth-child(7)').addClass("show");
            $('.case-study-name:nth-child(7)').addClass('active');
        })
        $('.case-study-name:nth-child(8)').on('mouseenter touchstart', function() {
            $('.case-study-name.active').removeClass('active');
            $('.case-study-images li.show').removeClass("show");
            $('.case-study-images li:nth-child(8)').addClass("show");
            $('.case-study-name:nth-child(8)').addClass('active');
        })
        $('.case-study-name:nth-child(9)').on('mouseenter touchstart', function() {
            $('.case-study-name.active').removeClass('active');
            $('.case-study-images li.show').removeClass("show");
            $('.case-study-images li:nth-child(9)').addClass("show");
            $('.case-study-name:nth-child(9)').addClass('active');
        })
        $('.case-study-name:nth-child(10)').on('mouseenter touchstart', function() {
            $('.case-study-name.active').removeClass('active');
            $('.case-study-images li.show').removeClass("show");
            $('.case-study-images li:nth-child(10)').addClass("show");
            $('.case-study-name:nth-child(10)').addClass('active');
        })
        $('.case-study-name:nth-child(1)').trigger('mouseenter')




        /* Portfolio Sorting */

        (function($) {
            var container = $('#projects-grid');

            function getNumbColumns() {
                var winWidth = $(window).width(),
                    columnNumb = 1;
                if (winWidth > 1500) {
                    columnNumb = 2;
                } else if (winWidth > 1200) {
                    columnNumb = 2;
                } else if (winWidth > 900) {
                    columnNumb = 2;
                } else if (winWidth > 600) {
                    columnNumb = 1;
                } else if (winWidth > 300) {
                    columnNumb = 1;
                }
                return columnNumb;
            }

            function setColumnWidth() {
                var winWidth = $(window).width(),
                    columnNumb = getNumbColumns(),
                    postWidth = Math.floor(winWidth / columnNumb);

            }
            $('#portfolio-filter #filter a').on('click', function() {
                var selector = $(this).attr('data-filter');

                $(this).parent().parent().find('a').removeClass('current');
                $(this).addClass('current');

                container.isotope({
                    filter: selector
                });

                setTimeout(function() {
                    reArrangeProjects();
                }, 300);
                return false;
            });

            function reArrangeProjects() {
                setColumnWidth();
                container.isotope('reLayout');
            }
            container.imagesLoaded(function() {
                setColumnWidth();
                container.isotope({
                    itemSelector: '.portfolio-box',
                    layoutMode: 'masonry',
                    resizable: false
                });
            });
            $(window).on('debouncedresize', function() {
                reArrangeProjects();
            });
        })(jQuery);


    });

    /* DebouncedResize Function */

    (function($) {
        var $event = $.event,
            $special,
            resizeTimeout;
        $special = $event.special.debouncedresize = {
            setup: function() {
                $(this).on('resize', $special.handler);
            },
            teardown: function() {
                $(this).off('resize', $special.handler);
            },
            handler: function(event, execAsap) {
                var context = this,
                    args = arguments,
                    dispatch = function() {
                        event.type = 'debouncedresize';

                        $event.dispatch.apply(context, args);
                    };
                if (resizeTimeout) {
                    clearTimeout(resizeTimeout);
                }
                execAsap ? dispatch() : resizeTimeout = setTimeout(dispatch, $special.threshold);
            },
            threshold: 150
        };
    })(jQuery);




})(jQuery);

//scroll up btn
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}