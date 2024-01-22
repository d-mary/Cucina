import { Gallery } from "./js/gallery.js";
import { Slider } from "./js/slider.js";
const gallery = new Gallery();
const slider = new Slider();

import {
  btnBurgerMenuOpen,
  btnBurgerMenuClose,
  burgerMenu,
  addCloseEventListeners,
  openBurgerMenu,
  closeBurgerMenu,
} from "./js/burgerMenu.js";

btnBurgerMenuOpen.addEventListener("click", () => openBurgerMenu(burgerMenu));
btnBurgerMenuClose.addEventListener("click", () => closeBurgerMenu(burgerMenu));
addCloseEventListeners();

import "./js/modalBuyProducts.js";
import "./js/modalContactUs.js";
