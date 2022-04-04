export default function () {
    const header = document.querySelector(".header");
    const links = header.querySelectorAll(".header__link");
    const dropdown = header.querySelector(".dropdown-menu");
    
    header.addEventListener("click", function(event) {
        if (event.target.classList.contains("header__link")) {
            event.preventDefault();
            links.forEach((item) => {
                if (item.classList.contains("header__link_active")) {
                    item.classList.toggle("header__link_active");
                }    
            });
            event.target.classList.toggle("header__link_active");
            dropdown.classList.toggle("dropdown-menu_active");
        }

        if (event.target.classList.contains("dropdown-menu__link")) {
            event.preventDefault();
        }
    });
}
