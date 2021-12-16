const body = document.body;
const box = document.querySelector(".js-checkbox");
// const mode = document.querySelector(".social__mode");
const span = document.querySelector(".social__span");

box.addEventListener("click", () => {
  if (!body.classList.contains("dark__mode")) {
    body.classList.remove("light__mode");
    body.classList.add("dark__mode");
    box.setAttribute("checked", true);
    span.classList.add("switch__active");
  } else {
    body.classList.remove("dark__mode");
    body.classList.add("light__mode");
    box.removeAttribute("checked");
    span.classList.remove("switch__active");
  }
});

const preference_query = window.matchMedia("(prefers-color-scheme: dark)");

function checkPreference() {
  if (preference_query.matches && window.matchMedia) {
    body.classList.remove("light__mode");
    body.classList.add("dark__mode");
    span.classList.add("switch__active");
  } else {
    body.classList.remove("dark__mode");
    body.classList.add("light__mode");

    span.classList.remove("switch__active");
  }
}
preference_query.addEventListener("change", checkPreference);
window.addEventListener("DOMContentLoaded", checkPreference);
