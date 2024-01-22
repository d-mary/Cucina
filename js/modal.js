// modal.js
import { hideScrollBody, addScrollBody } from "./common.js";

export class Modal {
  constructor(btnOpen, btnClose, modal, form) {
    this.btnOpen = document.querySelector(btnOpen);
    this.btnClose = document.querySelector(btnClose);
    this.modal = document.querySelector(modal);
    this.form = document.querySelector(form);
    this.btnOpen.addEventListener("click", () => this.showModal());
    this.btnClose.addEventListener("click", () => this.closeModal());
    window.addEventListener("click", (event) =>
      this.closeModalByClickAnywhere(event)
    );

    this.initFormSubmit();
  }

  showModal() {
    this.modal.style.display = "flex";
    hideScrollBody();
  }

  closeModal() {
    this.modal.style.display = "none";
    addScrollBody();
    this.formReset();
  }

  closeModalByClickAnywhere(event) {
    if (event.target === this.modal) {
      this.closeModal();
    }
  }

  initFormSubmit() {
    this.form.addEventListener("submit", (event) =>
      this.handleFormSubmit(event)
    );
  }

  handleFormSubmit(event) {
    // Default implementation, to be overridden by child classes
    event.preventDefault();
    console.warn("handleFormSubmit() should be overridden in child classes.");
  }

  formReset() {
    const paragraphs = this.form.querySelectorAll("p");

    paragraphs.forEach((paragraph) => {
      if (paragraph.classList.contains("error")) {
        paragraph.remove();
      }
    });

    const inputs = this.form.querySelectorAll("input");
    inputs.forEach((input) => {
      if (input.classList.contains("error_input")) {
        input.classList.remove("error_input");
      }
    });

    this.form.reset();
  }

  validation(name, tel, email) {
    // Default implementation, to be overridden by child classes
    console.warn("validation() should be overridden in child classes.");
    return false;
  }

  createError(input, text) {
    const parent = input.parentElement;
    const error = document.createElement("p");
    error.innerHTML = text;
    parent.appendChild(error);
    input.classList.add("error_input");
    error.classList.add("error");
  }

  removeError(input) {
    const parent = input.parentElement;
    if (input.classList.contains("error_input")) {
      parent.querySelector("p").remove();
      input.classList.remove("error_input");
      input.classList.remove("error_input");
    }
  }
}
