const form = document.querySelector("#new-form");
const displayOnPage = (obj) => {
  // console.log(obj);
  const ul = document.querySelector(".unordered-list");
  const li = document.createElement("li");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");
  btnEdit.className = "edit";
  btnDel.className = "del";
  btnEdit.innerText = "Edit";
  btnDel.innerText = "Delete";
  li.addEventListener("click", (e) => {
    if (e.target.className == "del") {
      const userDetails = e.target.parentElement.childNodes[0].textContent; //get the string inside the li
      Object.keys(localStorage).forEach((key) => {
        if (userDetails.indexOf(`${key}`) != -1) {
          localStorage.removeItem(key);
          e.target.parentElement.remove();
        }
      });
    } else if (e.target.className == "edit") {
      const name = document.querySelector("#userName");
      const email = document.querySelector("#email");
      const userDetails = e.target.parentElement.childNodes[0].textContent;
      // console.log(userDetails);
      Object.keys(localStorage).forEach((key) => {
        if (userDetails.indexOf(`${key}`) != -1) {
          name.value = JSON.parse(localStorage.getItem(key)).name;
          email.value = JSON.parse(localStorage.getItem(key)).email;
          localStorage.removeItem(key);
          e.target.parentElement.remove();
        }
      });
    }
  });

  li.className = "list";
  li.appendChild(document.createTextNode(`${obj.name} : ${obj.email}`));
  li.appendChild(btnDel);
  li.appendChild(btnEdit);
  ul.insertAdjacentElement("beforeend", li);
};

const pageReload = () => {
  const userDetailsKeys = Object.keys(localStorage);
  userDetailsKeys.forEach((key) => {
    displayOnPage(JSON.parse(localStorage.getItem(key))); //each user object
  });
};

const onsubmit = (e) => {
  e.preventDefault();
  const name = document.querySelector("#userName");
  const email = document.querySelector("#email");
  if (name.value == "" || email.value == "") {
    const msg = document.querySelector(".msg");
    msg.style.display = "block";
    setTimeout(() => {
      msg.style.display = "none";
    }, 2000);
  } else {
    const ul = document.querySelector(".unordered-list");
    Array.from(ul.children).forEach((li) => {
      if (li.childNodes[0].textContent.indexOf(email.value) > -1) {
        li.remove();
      }
    });
    const user = { name: name.value, email: email.value };
    localStorage.setItem(`${email.value}`, JSON.stringify(user));
    name.value = "";
    email.value = "";

    displayOnPage(user);
  }
};

document.addEventListener("DOMContentLoaded", pageReload); //DOMContentLoaded is fired when page is reloded
form.addEventListener("submit", onsubmit);
