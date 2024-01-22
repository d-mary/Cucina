const ERROR_BORDER = "error_input_border";
const ERROR_MSG = "error_message";
const SCROLL_HIDDEN = "scroll_hidden";
const body = document.querySelector("body");

export function showModal(modal, content) {
  modal.style.display = "flex";
  content.classList.add("animation_open_modal");
  hideScrollBody();
  event.preventDefault();
}
export function closeModal(modal, form) {
  modal.style.display = "none";
  addScrollBody();
  formReset(form);
}

function formReset(form) {
  const paragraphs = document.querySelectorAll("p");
  paragraphs.forEach((paragraph) => {
    if (paragraph.classList.contains(ERROR_MSG)) {
      paragraph.remove();
    }
  });
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => {
    if (input.classList.contains(ERROR_BORDER)) {
      input.classList.remove(ERROR_BORDER);
    }
  });
  form.reset();
}

function hideScrollBody() {
  body.classList.add(SCROLL_HIDDEN);
}

function addScrollBody() {
  body.classList.remove(SCROLL_HIDDEN);
}

function createError(input, text) {
  const parent = input.parentElement;
  const error = document.createElement("p");
  error.innerHTML = text;
  parent.appendChild(error);
  input.classList.add(ERROR_BORDER);
  error.classList.add(ERROR_MSG);
}

function removeError(input) {
  const parent = input.parentElement;
  if (input.classList.contains(ERROR_BORDER)) {
    parent.querySelector("p").remove();
    input.classList.remove(ERROR_BORDER);
  }
}

function validateField(input, regex, errorMessage) {
  event.preventDefault();
  const value = input.value;
  if (regex.test(value)) {
    removeError(input);
    return true;
  } else {
    removeError(input);
    createError(input, errorMessage);
    return false;
  }
}

function validation(name, tel, email) {
  const isNameValid = validateField(
    name,
    /^[a-zA-Z]+$/,
    "Field must contain only letters"
  );
  const isPhoneValid = validateField(
    tel,
    /^(\+380\d{9})$/,
    "Field must contain 10 digits in correct format"
  );
  const isEmailValid = validateField(
    email,
    /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/,
    "Field must contain email in correct format"
  );

  return isNameValid && isPhoneValid && isEmailValid;
}

export function handleCloseModalClick(modalWrapper, modal, form) {
  if (event.target === modalWrapper) {
    closeModal(modal, form);
  }
}

export function handleFormSubmit(
  form,
  modalWindow,
  inputName,
  inputPhone,
  inputEmail
) {
  event.preventDefault();
  if (validation(inputName, inputPhone, inputEmail)) {
    form.submit();
    closeModal(modalWindow, form);
  }
}
