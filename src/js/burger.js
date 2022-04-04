export default function () {
    const burger = document.querySelector(".burger-menu");
    const burgerButton = burger.querySelector(".burger-menu__button");
    const dropdown = burger.querySelector(".dropdown-menu__list");

    burger.addEventListener("click", function (event) {
        event.preventDefault();

        if (event.target.classList.contains("burger-menu__button") || event.target.closest(".burger-menu__button")) {
            burger.classList.toggle("burger-menu_active");
        }

        if (event.target.classList.contains("burger-menu__link")) {
            dropdown.classList.toggle("dropdown-menu__list_active");
            event.target.append(dropdown);
            event.target.scrollIntoView();
        }
    });
}
