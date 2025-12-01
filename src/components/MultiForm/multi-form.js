export default function multiForm () {
    let step = 1;

    const steps = document.querySelectorAll('.form-step');
    const dots = document.querySelectorAll('.dot');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');

    nextBtn.addEventListener("click", () => {
        if (step === 1) {

            // переключаем видимость шагов
            steps[0].classList.remove("active");
            steps[1].classList.add("active");

            // переключаем точки
            dots[0].classList.remove("active");
            dots[1].classList.add("active");

            // меняем кнопки
            nextBtn.classList.add("hidden");
            submitBtn.classList.remove("hidden");

            step = 2;
        }
    });
}
