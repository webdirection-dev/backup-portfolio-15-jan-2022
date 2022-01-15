"use strict";

// Slider of Header
const imgs = document.querySelectorAll(".double-slider__images");
let currentIndex = 0;

function slide(direction) {
  currentIndex += direction;
  if (currentIndex >= imgs.length) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = imgs.length - 1;
  }
  updateSlid(currentIndex);
}

function updateSlid(n) {
  for (let img of imgs) {
    img.classList.remove("activeSlide");
  }
  imgs[n].classList.add("activeSlide");
}

// Slider of Recipes
const arrayRecipes = document.querySelectorAll(".recipe");
let indexRecipes = 0;

function slideRecipes(count) {
  indexRecipes += count;
  if (indexRecipes >= arrayRecipes.length) {
    indexRecipes = 0;
  } else if (indexRecipes < 0) {
    indexRecipes = arrayRecipes.length - 1;
  }
  updateRecipes(indexRecipes);
}

function updateRecipes(i) {
  for (let item of arrayRecipes) {
    item.classList.remove("activeRecipes");
  }
  arrayRecipes[i].classList.add("activeRecipes");
}

// Slider of Social Cards
const arrayInsta = document.querySelectorAll(".social-card__insta");
let indexInsta = 0;

function slideInsta(count) {
  indexInsta += count;
  if (indexInsta >= arrayInsta.length) {
    indexInsta = 0;
  } else if (indexInsta < 0) {
    indexInsta = arrayInsta.length - 1;
  }
  updateInsta(indexInsta);
}

function updateInsta(i) {
  for (let item of arrayInsta) {
    item.classList.remove("activeSlide");
  }
  arrayInsta[i].classList.add("activeSlide");
}
