const btn = document.querySelector(".btn");
const container = document.querySelector("#container");

const createNotification = () => {
  const msg = document.createElement("div");
  msg.className = "msg";
  msg.textContent = "The Toast Notification !";
  container.insertAdjacentElement("afterbegin", msg);
  setTimeout(() => {
    msg.remove();
  }, 2000);
};
btn.addEventListener("click", () => {
  createNotification();
});
