import multiForm from "./components/MultiForm/multi-form.js";
import brandsSlider from "./blocks/Brands/brands.js";
import Support from "./blocks/Support/support.js";
import popupCallback from "./modals/Callback/callback.js";
import burgerMenu from "./components/BurgerMenu/burgerMenu.js";

document.addEventListener('DOMContentLoaded', () => {
    burgerMenu();
    multiForm();
    brandsSlider();
    Support();
    popupCallback();
})