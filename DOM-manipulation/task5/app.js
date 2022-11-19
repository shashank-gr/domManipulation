//multiple selctor -->TagName

// const li = document.getElementsByTagName("li");
// console.log(li);

// for (const x of li) {
//   x.style.backgroundColor = "yellow";
// }
const ul = document.querySelector(".list-group");
const node = document.createElement("li");
node.innerText = "New node";
ul.appendChild(node);

//created a new li node and appended it to ul

const li = document.getElementsByTagName("li");
console.log(li);

for (const x of li) {
  x.style.backgroundColor = "yellow";
}
