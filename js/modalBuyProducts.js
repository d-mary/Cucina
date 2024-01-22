import {
  showModal,
  closeModal,
  handleCloseModalClick,
  handleFormSubmit,
} from "./common.js";

const modalOrderContent = document.querySelector(".modal_buy-products_content");
const modalOrderForm = document.querySelector(".modal_buy-products_form");
const modalOrder = document.querySelector(".modal_buy-products");
const modalOrderBtnClose = document.querySelector(
  ".modal_buy-products_btn-close"
);
const modalOrderBtnsBuy = document.querySelectorAll(".js--btn_buy");
const modalBuyProductsWrapp = document.querySelector(".modal_buy-products");
const deliveryWaysRadio = document.querySelectorAll(
  ".modal_buy-products_delivery-way_radio"
);
const deliveryAdress = document.querySelector(
  ".modal_buy-products_delivery_adress"
);

function handleRadioChange(radioEl) {
  const otherRadios = document.querySelectorAll(
    ".modal_buy-products_delivery-way_radio"
  );
  otherRadios.forEach((otherRadio) => {
    otherRadio.closest("label").classList.remove("checked");
  });

  if (radioEl.checked) {
    radioEl.closest("label").classList.add("checked");
  }
  const deliveryDetail = showAdressDeliveryDetail(radioEl);
  if (deliveryDetail === "door") {
  }
}

deliveryWaysRadio.forEach((radioEl) => {
  radioEl.addEventListener("change", () => handleRadioChange(radioEl));
});
function showAdressDeliveryDetail(radio) {
  let way = "department";
  if (radio.checked) {
    const selectValue = radio.value;
    if (selectValue === "department") {
      deliveryAdress.classList.add("none");
      document.querySelector(".js--select-department").classList.remove("none");
    } else {
      deliveryAdress.classList.remove("none");
      document.querySelector(".js--select-department").classList.add("none");
      way = "door";
    }
  }
  return way;
}

window.addEventListener("click", () =>
  handleCloseModalClick(modalBuyProductsWrapp, modalOrder, modalOrderForm)
);

modalOrderForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const inputName = document.querySelector(".user_name_buy");
  const inputPhone = document.querySelector(".user_tel_buy");
  const inputEmail = document.querySelector(".user_email_buy");
  handleFormSubmit(
    modalOrderForm,
    modalOrder,
    inputName,
    inputPhone,
    inputEmail
  );
});

modalOrderBtnsBuy.forEach((btn) =>
  btn.addEventListener("click", () => showModal(modalOrder, modalOrderContent))
);

modalOrderBtnClose.addEventListener("click", () =>
  closeModal(modalOrder, modalOrderForm)
);
