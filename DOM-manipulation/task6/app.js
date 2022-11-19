// //queryselector--single element

// const secondli = document.querySelector(".list-group-item:nth-child(2)");
// console.log(secondli);
// secondli.style.backgroundColor = "green";

// document.querySelector(".list-group-item:nth-child(3)").style.display = "none";

// const input = document.querySelector("input");
// input.setAttribute("placeholder", "enter item");

// const submit = document.querySelector("input[type='submit']"); // or can use input:last-child
// submit.value = "Add item";
// console.log(submit);

// const li = document.querySelector(".list-group-item"); //selecs the first li only since it is querySelector
// li.style.color = "red";
// console.log(li);

//querSelectorAll--multiple elements

const ul = document.querySelectorAll("ul li"); // .list-group-item
console.log(ul);

ul[1].style.color = "red";

//change the color for all even elements
for (let i = 1; i < ul.length; i = i + 2) {
  ul[i].style.backgroundColor = "yellow";
}

//choosing only the odd elements of ul and then adding style
const oddUl = document.querySelectorAll(".list-group-item:nth-child(odd)");
for (const li of oddUl) {
  li.style.backgroundColor = "green";
}
console.log(oddUl);
