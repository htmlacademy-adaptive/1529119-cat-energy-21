var navMain = document.querySelector(".navigation-main");
var navToggle = document.querySelector(".navigation-main__toggle");

navMain.classList.remove("navigation-main");

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("navigation-main--closed")) {
    navMain.classList.remove("navigation-main--closed");
    navMain.classList.add("navigation-main--opened");
  } else {
    navMain.classList.add("navigation-main--closed");
    navMain.classList.remove("navigation-main--opened");
  }
});

