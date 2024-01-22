// gallery.js
export class Gallery {
  constructor() {
    this.galleryBtnNext = document.querySelector(".js--gallery_btn-next");
    this.galleryBtnPrev = document.querySelector(".js--gallery_btn-prev");
    this.galleryItems = document.querySelectorAll(".gallery_img");
    this.pagination = document.querySelector(".js--gallery_pagination");
    this.currentGalleryItem = 0;
    this.paginationCircles = [];

    this.init();
  }

  init() {
    this.addPagination();
    this.galleryBtnNext.addEventListener("click", () => this.showItem(1));
    this.galleryBtnPrev.addEventListener("click", () => this.showItem(-1));
  }

  createPaginationCircle() {
    const div = document.createElement("div");
    div.classList.add("gallery_pagination_circle");
    this.pagination.appendChild(div);
    this.paginationCircles.push(div);
  }

  addPagination() {
    this.galleryItems.forEach(() => this.createPaginationCircle());
    this.paginationCircles[0].classList.add("circle_active");

    this.paginationCircles.forEach((circle, index) => {
      circle.addEventListener("click", () => {
        this.currentGalleryItem = this.showItem(index, 0);
        this.updatePaginationCircles();
      });
    });
  }

  showItem(direction) {
    this.currentGalleryItem =
      (this.currentGalleryItem + direction + this.galleryItems.length) %
      this.galleryItems.length;
    this.galleryItems.forEach((item, index) => {
      const isActive = index === this.currentGalleryItem;
      item.classList.toggle("active", isActive);
      item.classList.toggle("none", !isActive);
    });

    this.updatePaginationCircles();

    return this.currentGalleryItem;
  }

  updatePaginationCircles() {
    this.paginationCircles.forEach((circle, index) => {
      circle.classList.toggle(
        "circle_active",
        index === this.currentGalleryItem
      );
    });
  }
}
