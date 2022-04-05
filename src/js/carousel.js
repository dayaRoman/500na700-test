export default function () {
    const $ = require("jquery");
    $(".carousel__gallery").slick({
        centerMode: true,
        centerPadding: "20px",
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 1,
                },
            },
        ],
    });

    $(".news__wrapper").slick({
        responsive: [
            {
                breakpoint: 2560,
                settings: "unslick",
            },
            {
                breakpoint: 767,
                settings: {
                    dots: false,
                    arrows: false,
                    infinite: false,
                    centerMode: true,
                    centerPadding: '20px',
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });
}
