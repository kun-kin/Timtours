$('.banner-slide').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'linear'
});
$('.contact-support-slider').owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    dots: false,
    nav: true,
    // animateOut: "fadeOut",
    navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 1000,
})
$('.promotion-slider').owlCarousel({
    loop: true,
    margin: 10,
    items: 2.5,
    dots: false,
    nav: false,
    // animateOut: "fadeOut",
    navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 1000,
})
$('.typetours-slider').owlCarousel({
    loop: true,
    margin: 10,
    items: 2.5,
    dots: false,
    nav: false,
    // animateOut: "fadeOut",
    navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 1000,
})
$('.tours-list-slider').owlCarousel({
    loop: true,
    margin: 10,
    items: 1.2,
    dots: false,
    nav: false,
    // animateOut: "fadeOut",
    navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 1000,
})
$('.whychoose-list-slider').owlCarousel({
    loop: true,
    margin: 10,
    items: 1.2,
    dots: false,
    nav: false,
    // animateOut: "fadeOut",
    navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 1000,
})
$('.news-list-slider').owlCarousel({
    loop: true,
    margin: 10,
    items: 1.2,
    dots: false,
    nav: false,
    // animateOut: "fadeOut",
    navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 1000,
})
$('.list-tours-slider').owlCarousel({
    loop: true,
    margin: 10,
    items: 1.2,
    dots: false,
    nav: false,
    // animateOut: "fadeOut",
    navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 1000,
})
$('.blogs-list-slider').owlCarousel({
    loop: true,
    margin: 10,
    items: 1.2,
    dots: false,
    nav: false,
    // animateOut: "fadeOut",
    navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 1000,
})
$('.other-blogs-slide').owlCarousel({
    loop: true,
    margin: 10,
    items: 1.2,
    dots: false,
    nav: false,
    // animateOut: "fadeOut",
    navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 1000,
})
$('.about-style-slider').owlCarousel({
    loop: true,
    margin: 10,
    items: 1.2,
    dots: false,
    nav: false,
    // animateOut: "fadeOut",
    navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 1000,
})
$('.about-legal-slide').owlCarousel({
    loop: true,
    margin: 10,
    items: 2.5,
    dots: false,
    nav: false,
    // animateOut: "fadeOut",
    navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 1000,
})

/*=============================================================*/
$('.slide__banner').owlCarousel({
    loop: true,
    margin: 0,
    dots: true,
    nav: true,
    // animateOut: "fadeOut",
    navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],
    // autoplay: true,
    // autoplayTimeout: 4000,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        820: {
            items: 1
        },
        1300: {
            items: 1
        }
    }
})
$('.slide__tour').owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    animateOut: "fadeOut",
    navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        820: {
            items: 1
        },
        1300: {
            items: 1
        }
    }
})
$('.slide__destinations').owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 2
        },
        820: {
            items: 2
        },
        1300: {
            items: 3
        }
    }
})
$('.slide__similar__tour').owlCarousel({
    loop: true,
    margin: 15,
    dots: false,
    nav: true,
    navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1.2
        },
        820: {
            items: 3
        },
        1300: {
            items: 4
        }
    }
})
$('.slide__top__destinations').owlCarousel({
    loop: true,
    margin: 15,
    dots: false,
    nav: true,
    navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],
    // autoplay: true,
    // autoplayTimeout: 5000,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 3.3
        },
        820: {
            items: 4
        },
        1300: {
            items: 6
        }
    }
})
$('.slide__destinations__items').owlCarousel({
    loop: true,
    margin: 15,
    dots: false,
    nav: true,
    navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],
    // autoplay: true,
    // autoplayTimeout: 5000,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        820: {
            items: 1
        },
        1300: {
            items: 2
        }
    }
})
$('.slide__destinations__post').owlCarousel({
    loop: true,
    margin: 15,
    dots: false,
    nav: true,
    navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1
        },
        820: {
            items: 2
        },
        1300: {
            items: 3
        }
    }
})



// $('.promotion-slide').slick({
//     rows: 2,
//     dots: true,
//     arrows: false,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     responsive: [{
//             breakpoint: 577,
//             settings: {
//                 rows: 2,
//                 slidesToShow: 1,
//                 slidesToScroll: 1,
//             },
//         },
//         {
//             breakpoint: 576,
//             settings: {
//                 rows: 1,
//             },
//         }
//     ],
// });

// $('.about-slide').slick({
//     dots: true,
//     arrows: false,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     pauseOnFocus: false,
//     pauseOnHover: false,
//     pauseOnDotsHover: false,
// });
// $('.gallery-insta-slide').slick({
//     dots: true,
//     arrows: false,
//     infinite: false,
//     speed: 300,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     responsive: [{
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 4,
//             },
//         },
//         {
//             breakpoint: 768,
//             settings: {
//                 slidesToShow: 3,
//                 dots: false,
//             },
//         },
//         {
//             breakpoint: 576,
//             settings: {
//                 slidesToShow: 2,
//                 dots: true,
//             },
//         }
//     ],
// });

$('.banner-slide').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'linear'
});

// $('.room-detail__image-slide').slick({
//     dots: true,
//     arrows: true,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     responsive: [{
//         breakpoint: 576,
//         settings: {
//             dots: false,
//         },
//     }],
// });

// $('.offers-more__list').slick({
//     dots: true,
//     arrows: false,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: false,
//     autoplaySpeed: 2000,
//     mobileFirst: true,
//     responsive: [{
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 4,
//             },
//         },
//         {
//             breakpoint: 768,
//             settings: {
//                 slidesToShow: 3,
//             },
//         },
//         {
//             breakpoint: 576,
//             settings: {
//                 slidesToShow: 2,
//                 arrows: true,
//             },
//         }
//     ],
// });

/*=====================================================================*/
/*=====================================================================*/

$(document).ready(function(){
    $('.slide__banner').owlCarousel({
        loop: true,
        margin: 0,
        dots: true,
        nav: true,
        // animateOut: "fadeOut",
        navText: ["<i class='fa-solid fa-chevron-left'></i>","<i class='fa-solid fa-chevron-right'></i>"],
        // autoplay: true,
        // autoplayTimeout: 4000,
        smartSpeed: 1000,
        responsive:{
            0:{
                items: 1
            },
            820:{
                items: 1
            },
            1300:{
                items: 1
            }
        }
    })
    $('.slide__tour').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        nav: true,
        animateOut: "fadeOut",
        navText: ["<i class='fa-solid fa-chevron-left'></i>","<i class='fa-solid fa-chevron-right'></i>"],
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        responsive:{
            0:{
                items: 1
            },
            820:{
                items: 1
            },
            1300:{
                items: 1
            }
        }
    })
    $('.slide__destinations').owlCarousel({
        loop: true,
        margin: 20,
        dots: false,
        nav: true,
        navText: ["<i class='fa-solid fa-chevron-left'></i>","<i class='fa-solid fa-chevron-right'></i>"],
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        responsive:{
            0:{
                items: 2
            },
            820:{
                items: 2
            },
            1300:{
                items: 3
            }
        }
    })
    $('.slide__similar__tour').owlCarousel({
        loop: true,
        margin: 15,
        dots: false,
        nav: true,
        navText: ["<i class='fa-solid fa-chevron-left'></i>","<i class='fa-solid fa-chevron-right'></i>"],
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        responsive:{
            0:{
                items: 1.2
            },
            820:{
                items: 3
            },
            1300:{
                items: 4
            }
        }
    })
    $('.slide__top__destinations').owlCarousel({
        loop: true,
        margin: 15,
        dots: false,
        nav: true,
        navText: ["<i class='fa-solid fa-chevron-left'></i>","<i class='fa-solid fa-chevron-right'></i>"],
        // autoplay: true,
        // autoplayTimeout: 5000,
        smartSpeed: 1000,
        responsive:{
            0:{
                items: 3.3
            },
            820:{
                items: 4
            },
            1300:{
                items: 6
            }
        }
    })
    $('.slide__destinations__items').owlCarousel({
        loop: true,
        margin: 15,
        dots: false,
        nav: true,
        navText: ["<i class='fa-solid fa-chevron-left'></i>","<i class='fa-solid fa-chevron-right'></i>"],
        // autoplay: true,
        // autoplayTimeout: 5000,
        smartSpeed: 1000,
        responsive:{
            0:{
                items: 1
            },
            820:{
                items: 1
            },
            1300:{
                items: 2
            }
        }
    })
    $('.slide__destinations__post').owlCarousel({
        loop: true,
        margin: 15,
        dots: false,
        nav: true,
        navText: ["<i class='fa-solid fa-chevron-left'></i>","<i class='fa-solid fa-chevron-right'></i>"],
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        responsive:{
            0:{
                items: 1.5
            },
            820:{
                items: 2
            },
            1300:{
                items: 3
            }
        }
    })
    $('.slide__food').owlCarousel({
        loop: true,
        margin: 15,
        dots: false,
        nav: false,
        navText: ["<i class='fa-solid fa-chevron-left'></i>","<i class='fa-solid fa-chevron-right'></i>"],
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        responsive:{
            0:{
                items: 1.5
            },
            820:{
                items: 2
            },
            1300:{
                items: 3
            }
        }
    })
})
/*=====================================================================*/