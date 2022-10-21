//addinf filter functionality

//selecting form
const form = document.querySelector(".form-inline");
//selecting ul
const list = document.querySelector("#items");

//selcect the serach input
const search = document.querySelector("#input-search");

const filter = (e) => {
  const searchText = e.target.value.toLowerCase();
  const listArr = list.querySelectorAll("li"); //nodelist of li
  console.log(listArr);
  listArr.forEach((el) => {
    const liItem = el.firstChild.textContent.toLowerCase().trim(); //important
    const liDescription = el.childNodes[1].textContent.toLowerCase().trim();
    // console.log(liItem, liDescription);
    //liItem.indexOf(searchText) != -1 can use when the below way of appending is done---*** since it has both liItem and liDescription in one text node
    if (
      liItem.indexOf(searchText) != -1 ||
      liDescription.indexOf(searchText) != -1
    ) {
      el.style.display = "block";
    } else {
      el.style.display = "none";
    }
  });
};

const onsubmit = (e) => {
  e.preventDefault();
  console.log(e.target);
  const item = document.querySelector("#input-item").value;
  const description = document.querySelector("#input-description").value;
  if (item != "" && description != "") {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.appendChild(document.createTextNode(`${item}:`));
    li.appendChild(document.createTextNode(`${description}`));
    //li.appendChild(document.createTextNode(`${item}: ${description}`)); //better way since first child will be the entire text when searching---***

    const removeBtn = document.createElement("button");
    removeBtn.appendChild(document.createTextNode("X"));
    removeBtn.className = "del btn btn-danger btn-sm rounded-0 float-right";
    li.insertAdjacentElement("beforeend", removeBtn);

    const editBtn = document.createElement("button");
    editBtn.appendChild(document.createTextNode("Edit"));
    editBtn.className = "edit btn btn-light btn-sm rounded-0 float-right mr-3";
    li.insertAdjacentElement("beforeend", editBtn);

    list.insertAdjacentElement("beforeend", li);
    e.target.children[0].value = "";
    e.target.children[1].value = "";
  } else {
    const msg = document.querySelector(".msg");
    msg.style.display = "block";
    setTimeout(() => {
      msg.style.display = "none";
    }, 2000);
  }
};

// console.log(list.classList.contains("del"));
const deleteList = (e) => {
  e.preventDefault();
  //deleting only when the delete button is clicked ;
  //e.target gives the node which is clicked here it is the delete button
  // console.log(e.target.classList);-->gives array of class names used for the e.target
  if (e.target.classList.contains("del")) {
    //confirm()-->popup display
    if (confirm("are you sure?")) {
      const li = e.target.parentElement;
      li.remove();
    }
  }

  //for edditing the list item in future
  if (e.target.classList.contains("edit")) {
    console.log("editting");
  }
};
form.addEventListener("submit", onsubmit);
list.addEventListener("click", deleteList);
search.addEventListener("keyup", filter);
