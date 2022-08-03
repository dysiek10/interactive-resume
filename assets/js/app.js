let hamburger = document.querySelector(".hamburger");
let contact = document.querySelector(".contact");
let data = document.querySelector(".data");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  contact.classList.toggle("menu-open");
  data.classList.toggle("menu-open");
});
