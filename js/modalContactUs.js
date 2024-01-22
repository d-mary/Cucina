import {
  showModal,
  closeModal,
  handleCloseModalClick,
  handleFormSubmit,
} from "./common.js";

const modalContactBtnClose = document.querySelector(
  ".modal_contact-us_btn-close"
);
const modalContactBtnContactUs = document.querySelectorAll(
  ".js--btn_contact_us"
);
const modalContact = document.querySelector(".modal_contact-us");
const modalContactWrapp = document.querySelector(".modal_contact-us");
const modalContactForm = document.querySelector(".modal_contact-us_form");
const modalContactContent = document.querySelector(".modal_contact-us_content");

modalContactBtnClose.addEventListener("click", () =>
  closeModal(modalContact, modalContactForm)
);

modalContactBtnContactUs.forEach((btn) =>
  btn.addEventListener("click", () =>
    showModal(modalContact, modalContactContent)
  )
);

window.addEventListener("click", () =>
  handleCloseModalClick(modalContactWrapp, modalContact, modalContactForm)
);

modalContactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputName = document.querySelector(".user_name_contact");
  const inputPhone = document.querySelector(".user_tel_contact");
  const inputEmail = document.querySelector(".user_email_contact");
  handleFormSubmit(
    modalContactForm,
    modalContact,
    inputName,
    inputPhone,
    inputEmail
  );
});
