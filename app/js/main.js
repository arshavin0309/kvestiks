const swiper = new Swiper('.swiper1', {
    breakpoints: {
        320: {
            slidesPerView: 1.13,
            spaceBetween: 20
        },
        500: {
            slidesPerView: 1.5,
            spaceBetween: 25
        },
        900: {
            slidesPerView: 2.5,
            spaceBetween: 25
        },
        900: {
            slidesPerView: 2,
            spaceBetween: 25
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 25
        }
    },

    pagination: {
        el: '.swiper-pagination',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
});