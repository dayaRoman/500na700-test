export default function () {
    let carousel = document.querySelector(".carousel");
    let list = carousel.querySelector("ul");
    let listElems = carousel.querySelectorAll("li");
    let width = list.querySelector("img").offsetWidth;

    let position = 0;
    let count = 1;

    carousel.querySelector(".carousel__prev").onclick = function () {
        position += width;
        position = Math.min(position, 0);
        list.style.marginLeft = position + "px";
    };

    carousel.querySelector(".carousel__next").onclick = function () {
        position -= width;
        position = Math.max(position, -width * (listElems.length - count));
        list.style.marginLeft = position + "px";
    };
}
