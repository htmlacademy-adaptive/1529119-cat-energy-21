
var navToggle = document.querySelector(".burger");
var navMain = document.querySelector(".navigation-main");

navMain.classList.remove("navigation-main--opened");

navToggle.addEventListener("click", function () {
  navMain.classList.toggle("navigation-main--opened");
  navToggle.classList.toggle("burger--closed");
});
