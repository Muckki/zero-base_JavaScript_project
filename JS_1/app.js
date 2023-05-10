// do something!
document.body.style.visibility = "inherit";
const body = document.querySelector(".preload");

window.addEventListener("load", function () {
  body.classList.remove("preload");
});

const navI = document.querySelector("main i");
const nav = document.querySelector(".container nav");
function onClick() {
  nav.classList.toggle("active");
  sessionStorage.setItem("navActive", nav.classList.contains("active"));
  localStorage.setItem("navActive", nav.classList.contains("active"));
}

if (sessionStorage.getItem("navActive") === "true") {
  nav.classList.add("active");
}
if (localStorage.getItem("navActive") === "true") {
  nav.classList.add("active");
}

navI.addEventListener("click", onClick);
