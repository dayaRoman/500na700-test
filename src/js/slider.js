export default function () {
    const $ = require("jquery");
    $(".carousel__gallery").slick({
        centerMode: true,
        infinite: false,
        variableWidth: true,
        slidesToShow: 1,
        prevArrow: $(".carousel__prev"),
        nextArrow: $(".carousel__next"),
    });

    $(".news__wrapper").slick({
        settings: {
            arrows: false,
        },
        responsive: [
            {
                breakpoint: 2560,
                settings: "unslick",
            },
            {
                breakpoint: 767.98,
                settings: {
                    dots: false,
                    arrows: false,
                    infinite: false,
                    centerMode: true,
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
}
