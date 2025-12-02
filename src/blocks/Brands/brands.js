export default function brandsSlider () {

    const brandsSwiper = new Swiper('.brands__slider', {
        slidesPerView: 5,      // Сколько СТОЛБЦОВ в одном ряду
        spaceBetween: 40,
        loop: true,

        grid: {
            rows: 2,             // Сколько РЯДОВ
            fill: 'row',         // заполнять по рядам (row) или по колонкам (column)
        },

        navigation: {
            nextEl: '.brands-slider__nav--next',
            prevEl: '.brands-slider__nav--prev',
        },

        breakpoints: {
            320: {
                slidesPerView: 2,
                grid: { rows: 2 },
            },
            768: {
                slidesPerView: 3,
                grid: { rows: 2 },
            },
            1024: {
                slidesPerView: 5,
                grid: { rows: 2 },
            },
        },

    });
}