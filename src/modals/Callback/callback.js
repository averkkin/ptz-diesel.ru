export default function popupCallback () {
    const modalTemplate = `
    <div class="modal-overlay" id="modal-overlay">
        <form id="login-form" class="modal">
        
            <button type="button" class="modal__close" aria-label="Закрыть"></button>

            <div class="modal--inner">
                <div class="modal__heading">
                    <h3 class="h3">Оставьте заявку</h3> 
                    <p class="p modal__p">И мы перезвоним вам в ближайшее время</p>
                </div>
                <div class="modal__inputs ">
                    <input type="text" class="input form__input form__input--light" placeholder="Ваше имя">
                    <input type="tel" class="input form__input form__input--light" placeholder="Ваш номер телефона">
                    <button type="submit" class="btn modal__btn">Отправить</button>
                </div>
            </div>
        </form>
    </div>
    `;

    // 2. Функция создания и открытия модалки
    const openModal = () => {
        // Проверяем, не создана ли она уже (чтобы не плодить дубли)
        let overlay = document.querySelector('#modal-overlay');

        if (!overlay) {
            // Если нет - вставляем HTML в конец body
            document.body.insertAdjacentHTML('beforeend', modalTemplate);
            overlay = document.querySelector('#modal-overlay');

            // Сразу после создания вешаем слушатели событий на новую модалку
            bindModalEvents(overlay);
        }

        // Блокируем скролл
        document.body.classList.add('no-scroll');

        // Небольшая задержка перед добавлением класса, чтобы браузер успел отрисовать DOM
        // и сработала CSS-анимация (opacity 0 -> 1)
        setTimeout(() => {
            overlay.classList.add('is-open');
        }, 10);
    };

    // 3. Функция закрытия
    const closeModal = (overlay) => {
        overlay.classList.remove('is-open');
        document.body.classList.remove('no-scroll');

        // Ждем пока пройдет анимация (0.3s) и удаляем из DOM (опционально)
        // Если хочешь оставить её в DOM скрытой, убери setTimeout и remove()
        setTimeout(() => {
            overlay.remove();
        }, 300);
    };

    // 4. Навешивание событий внутри модалки
    const bindModalEvents = (overlay) => {
        const closeBtn = overlay.querySelector('.modal__close');

        // Закрытие по крестику
        closeBtn.addEventListener('click', () => closeModal(overlay));

        // Закрытие по клику на фон
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closeModal(overlay);
            }
        });

        // Закрытие по ESC
        const escHandler = (e) => {
            if (e.code === 'Escape') {
                closeModal(overlay);
                document.removeEventListener('keydown', escHandler); // Убираем слушатель ESC
            }
        };
        document.addEventListener('keydown', escHandler);
    };

    // 5. Инициализация триггеров (кнопок на сайте)
    const triggers = document.querySelectorAll('.js-open-modal');
    triggers.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
        });
    });
}