const darkToggele = document.querySelector("#dark");

const darkMode = (e) => {
  console.log("clicked");
  document.querySelector("body").classList.toggle("dark", e.target.checked);
};

darkToggele.addEventListener("change", darkMode);
