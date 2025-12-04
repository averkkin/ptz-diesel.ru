export default function burgerMenu() {
    const burgerBtn = document.querySelector('.header__burger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileOverlay = document.querySelector('.mobile-overlay');
    const body = document.body;

    // Функция переключения меню
    const toggleMenu = () => {
        const isOpen = mobileMenu.classList.contains('is-open');

        // Переключаем классы
        burgerBtn.classList.toggle('is-active');
        mobileMenu.classList.toggle('is-open');
        mobileOverlay.classList.toggle('is-open');

        // Блокируем/разблокируем скролл
        if (!isOpen) {
            body.classList.add('no-scroll');
        } else {
            body.classList.remove('no-scroll');
        }
    };

    // Функция закрытия меню (для клика по фону или ссылкам)
    const closeMenu = () => {
        burgerBtn.classList.remove('is-active');
        mobileMenu.classList.remove('is-open');
        mobileOverlay.classList.remove('is-open');
        body.classList.remove('no-scroll');
    };

    // 1. Клик по бургеру
    burgerBtn.addEventListener('click', toggleMenu);

    // 2. Клик по затемненной области (Overlay)
    mobileOverlay.addEventListener('click', closeMenu);

    // 3. (Опционально) Закрывать меню при клике на ссылку внутри
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });
}