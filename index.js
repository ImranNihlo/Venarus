let next = document.querySelector("#next");
next.style.marginBottom = "29px";
next.onclick = function btn1 () {
  let img1 = document.querySelector("#img1");
  let img2 = document.querySelector("#img2");

  return function () {
      let tmp = img1.src;
      img1.src = img2.src;
      img2.src = tmp;
      prev.removeAttribute("disabled");
      next.setAttribute("disabled", false);
      prev.style.opacity = "1";
      next.style.opacity = "0.2";
    }
}();

let prev = document.querySelector("#prev");
prev.setAttribute("disabled", false)
prev.style.opacity = "0.2";
prev.onclick = function btn2 () {
  let img1 = document.querySelector("#img1");
  let img2 = document.querySelector("#img2");

  return function () {
      let tmp = img2.src;
      img2.src = img1.src;
      img1.src = tmp;
      next.removeAttribute("disabled");
      prev.setAttribute("disabled", false)
      next.style.opacity = "1";
      prev.style.opacity = "0.2";
    }
}();

const btn = document.querySelector("#btn");
const btnInfo = document.querySelector("#btn-info");
const modal = document.querySelector(".venarus-modal");
const closeModal = document.querySelector("#btn-close");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");

btn.onclick = function () {
  modal.style.display = "flex";
  body.classList = "no-scrool";
}

btnInfo.onclick = function () {
  modal.style.display = "flex";
  body.classList = "no-scrool";
}

overlay.onclick = function () {
  modal.style.display = "none";
  body.classList = "scrool";
}

closeModal.onclick = function () {
  modal.style.display = "none";
  body.classList = "scrool";
}

const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu");
const menuActive = document.querySelector(".menu-active");
const searchImg = document.querySelector(".search");
const locationImg = document.querySelector(".location");

menu.onclick = function () {
  nav.style.display = "block";
  menu.style.display = "none";
  searchImg.style.display = "none";
  locationImg.style.display = "none";
  body.classList = "no-scrool";
}

menuActive.onclick = function () {
  nav.style.display = "none";
  menu.style.display = "block";
  searchImg.style.display = "block";
  locationImg.style.display = "block";
  body.classList = "scrool";
}











