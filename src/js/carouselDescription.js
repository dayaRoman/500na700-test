export default function () {
    const slides = document.querySelectorAll(".carousel__slide");

    for (let i = 0; i < slides.length; i++) {
        let p = document.createElement("p");
        p.classList.add("carousel__descr");
        p.innerHTML = `Слайд ${i + 1}`;
        slides[i].append(p);
    }
}
