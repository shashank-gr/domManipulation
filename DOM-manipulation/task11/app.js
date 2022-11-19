//Local Storage
//localStoraget-->setItem(key:value),getItem(key) all in strings, removeItem(key)

const userName = document.querySelector("#userName");
const email = document.querySelector("#email");
const form = document.querySelector("#new-form");
let arr = []; //used for storing userObj
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
    const usrObj = {
      name: userName.value,
      email: email.value,
    };
    arr.push(usrObj);
    let arr_serialized = JSON.stringify(); // serialized-->convert the object to JSON
    localStorage.setItem("userDetails", arr_serialized);
    userName.value = "";
    email.value = "";
  }
};

form.addEventListener("submit", onsubmit);

/*
for sharpner task:
const usrObj = {
  name: userName.value,
  email: email.value,
};
const userObjSerialized=SON.stringify(usrObj);
localStorage.setItem("users", arr_serialized);

to convert object to JSON object--->JSON.stringify(userObj)
to convert JSON to regular object--->JSON.parse(userObjSerialized)
*/
