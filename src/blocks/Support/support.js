export default function Support() {
    const items = document.querySelectorAll('.support__item');

    items.forEach(item => {
        const trigger = item.querySelector('.support__question');

        trigger.addEventListener('click', () => {

            const isOpen = item.classList.contains('is-active');

            items.forEach(i => i.classList.remove('is-active'));

            if (!isOpen) {
                item.classList.add('is-active');
            }
        });
    });
}