const carousel = document.querySelector(".carrossel-container");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const cardWidth = document.querySelector(".card").offsetWidth;

let currentIndex = 0;

nextButton.addEventListener("click", () => {
    if (currentIndex < carousel.children.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});

prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

function updateCarousel() {
    const offset = -currentIndex * cardWidth;
    carousel.style.transform = `translateX(${offset}px)`;
}
