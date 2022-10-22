//Local Storage
//localStoraget-->setItem(key:value),getItem(key) all in strings, removeItem(key)

const userName = document.querySelector("#userName");
const email = document.querySelector("#email");
const form = document.querySelector("#new-form");

const onsubmit = (e) => {
  //e.target is the form
  e.preventDefault();
  if (userName.value == "" || email.value == "") {
    const msg = document.querySelector(".msg");
    msg.appendChild(document.createTextNode("Please enter all details"));
    msg.className = "msg-text";
    setTimeout(() => {
      msg.style.display = "none";
    }, 2000);
  } else {
    console.log("going to local");
    localStorage.setItem(`${userName.value}`, `${email.value}`);
    userName.value = "";
    email.value = "";
  }
};

form.addEventListener("submit", onsubmit);
