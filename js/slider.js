export class Slider {
  constructor() {
    this.btnNext = document.querySelector(".slider_btn-next");
    this.btnPrev = document.querySelector(".slider_btn-previos");
    this.slides = document.querySelectorAll(".js--slides");
    this.slideIndex = 0;

    this.init();
  }

  init() {
    this.btnNext.addEventListener("click", () => this.showSlide(1));
    this.btnPrev.addEventListener("click", () => this.showSlide(-1));
  }

  showSlide(direction) {
    this.slideIndex = this.showItem(this.slideIndex, direction);
  }

  showItem(index, direction) {
    index = (index + direction + this.slides.length) % this.slides.length;
    this.slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
      slide.classList.toggle("none", i !== index);
    });
    return index;
  }
}
