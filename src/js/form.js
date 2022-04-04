import IMask from "imask"; //интерфейс для создания масок

export default function () {
    const timeMask = IMask(document.querySelector(".subscribe-form__time"), {
        mask: "00{:}00",
    });
    const emailMask = IMask(document.querySelector(".subscribe-form__email"), {
        mask: "example{@}mail{.}ru",
    });
    const phoneMask = IMask(document.querySelector(".subscribe-form__tel"), {
        mask: "+{7}(000)000-00-00",
    });
    const dateMask = IMask(
        document.querySelector(".subscribe-form__date"),
        {
          mask: Date,
          min: new Date(1990, 0, 1),
          max: new Date(2020, 0, 1),
          lazy: false
        });

    document.querySelector(".subscribe-form__submit").onclick = function () {
        return false;
    };
}
