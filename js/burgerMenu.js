export const btnBurgerMenuOpen = document.querySelector(
  ".btn-open-burger-menu"
);
export const burgerMenu = document.querySelector(".burger_menu_wrap");
export const btnBurgerMenuClose = document.querySelector(
  ".burger_menu_close_btn"
);
export const burgerItems = Array.from(
  document.querySelector(".header_nav_list_burger").children
);

export function openBurgerMenu(menu) {
  menu.style.display = "block";
}

export function closeBurgerMenu(menu) {
  menu.style.display = "none";
}

export function addCloseEventListeners() {
  burgerItems.forEach((item) => {
    item.addEventListener("click", () => closeBurgerMenu(burgerMenu));
  });
}

// burgerItems.forEach((item) => {
//   item.addEventListener("click", () => closeBurgerMenu(burgerMenu));
// });

// btnBurgerMenuOpen.addEventListener("click", () => openBurgerMenu(burgerMenu));
// btnBurgerMenuClose.addEventListener("click", () => closeBurgerMenu(burgerMenu));
