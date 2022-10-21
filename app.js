//selecting form
const form = document.querySelector(".form-inline");
//selecting ul
const list = document.querySelector("#items");

const onsubmit = (e) => {
  e.preventDefault();
  //getting the value of input
  const input = document.querySelector("#input-item").value;
  //creating li
  const li = document.createElement("li");
  //creating text node for li
  li.appendChild(document.createTextNode(input));
  //adding class name
  li.className = "list-group-item";
  //creating delete button
  const delButn = document.createElement("button");
  //adding text
  delButn.innerText = "X";
  //adding class
  delButn.className = "del btn btn-danger btn-sm rounded-0 float-right";
  //creating edit button
  const editButn = document.createElement("button");
  //adding text node to edit
  editButn.appendChild(document.createTextNode("Edit"));
  //adding class to edit
  editButn.className = "edit btn btn-light btn-sm rounded-0 float-right mr-3";
  //appending the delButn to end of li
  li.insertAdjacentElement("beforeend", delButn);
  //appending the editButn to end of li
  li.insertAdjacentElement("beforeend", editButn);
  //appending the li to the fist
  list.insertAdjacentElement("beforeend", li);
  //seting the first child i.e input value to ""
  e.target.children[0].value = "";
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
