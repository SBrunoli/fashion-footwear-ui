const btnOpen = document.getElementById("hamburguer-icon-open");
const btnClose = document.getElementById("hamburguer-icon-close");
const menu = document.querySelector(".hamburguer-menu-box");

btnOpen.addEventListener("click", (e) => {
  e.preventDefault();
  menu.classList.add("active");
});

btnClose.addEventListener("click", () => {
  menu.classList.remove("active");
});

document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !btnOpen.contains(e.target)) {
    menu.classList.remove("active");
  }
});
