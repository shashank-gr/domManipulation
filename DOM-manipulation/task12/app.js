//Local Storage
//localStoraget-->setItem(key:value),getItem(key) all in strings, removeItem(key)

const form = document.querySelector("#new-form");

if (JSON.parse(localStorage.getItem("userDetails")).length) {
  const userDetailsDeserialized = JSON.parse(
    localStorage.getItem("userDetails")
  );
  userDetailsDeserialized.forEach((obj) => {
    display(obj);
  });
}

//let arr = []; //used for storing userObj
const onsubmit = (e) => {
  //e.target is the form
  e.preventDefault();
  const userDetails = JSON.parse(localStorage.getItem("userDetails")) || []; //important
  const userName = document.querySelector("#userName");
  const email = document.querySelector("#email");
  if (userName.value == "" || email.value == "") {
    const msg = document.querySelector(".msg");
    msg.appendChild(document.createTextNode("Please enter all details"));
    msg.className = "msg-text";
    setTimeout(() => {
      msg.style.display = "none";
    }, 2000);
  } else {
    console.log("going to local");
    const usrObj = {
      name: userName.value,
      email: email.value,
    };
    userDetails.push(usrObj);
    let arr_Serialized = JSON.stringify(userDetails); // serialized-->convert the object to JSON
    localStorage.setItem("userDetails", arr_Serialized);

    display(usrObj);
    userName.value = "";
    email.value = "";
  }
};

function display(obj) {
  console.log(obj);
  const ul = document.querySelector(".unordered-list");
  const li = document.createElement("li");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");
  btnEdit.className = "edit";
  btnDel.className = "del";
  btnEdit.innerText = "Edit";
  btnDel.innerText = "Delete";

  li.className = "list";
  li.appendChild(document.createTextNode(`${obj.name}: ${obj.email}`));
  li.appendChild(btnDel);
  li.appendChild(btnEdit);
  ul.insertAdjacentElement("beforeend", li);
}

form.addEventListener("submit", onsubmit);
// console.log(JSON.parse(localStorage.getItem("userDetails")));
