const btnOpen = document.querySelector(".btn-open");
const btnClose = document.querySelector(".btn-close");
const container = document.querySelector("#container");

btnOpen.addEventListener("click", () => {
  container.classList.add("active");
});

btnClose.addEventListener("click", () => {
  container.classList.remove("active");
});
