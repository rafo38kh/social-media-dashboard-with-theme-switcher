const body = document.body;
const box = document.querySelector(".js-checkbox");
const title = document.querySelector(".theme__title");
const span = document.querySelector(".theme__span");

box.addEventListener("click", () => {
  if (!body.classList.contains("dark__mode")) {
    body.classList.remove("light__mode");
    body.classList.add("dark__mode");
    box.setAttribute("checked", true);
    span.classList.add("switch__active");
    title.innerHTML = "Go Light";
  } else {
    body.classList.remove("dark__mode");
    body.classList.add("light__mode");
    box.removeAttribute("checked");
    span.classList.remove("switch__active");

    title.innerHTML = "Go Dark";
  }
});

const preference_query = window.matchMedia("(prefers-color-scheme: dark)");

function checkPreference() {
  if (preference_query.matches && window.matchMedia) {
    body.classList.remove("light__mode");
    body.classList.add("dark__mode");
    title.innerHTML = "Go Light";
    span.classList.add("switch__active");
  } else {
    body.classList.remove("dark__mode");
    body.classList.add("light__mode");
    title.innerHTML = "Go Dark";
    span.classList.remove("switch__active");
  }
}
preference_query.addEventListener("change", checkPreference);
window.addEventListener("DOMContentLoaded", checkPreference);
