export default function brandsSlider () {

    const brandsSwiper = new Swiper('.brands__slider', {
        slidesPerView: 4,
        spaceBetween: 0,
        loop: true,

        navigation: {
            nextEl: '.brands-slider__nav--next',
            prevEl: '.brands-slider__nav--prev',
        },

        breakpoints: {

            320: {
                slidesPerView: 3,
            },

            480: {
                slidesPerView: 4,
            },

            640: {
                slidesPerView: 5,
            },

        },

    });
}