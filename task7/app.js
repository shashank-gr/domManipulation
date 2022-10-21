//DOM traversal

const title = document.querySelector(".title");
console.log(title);

//parent Element

console.log(title.parentElement);
title.parentElement.style.backgroundColor = "#eee";

//child element-->use children

const list = document.querySelector(".list-group");
console.log(list.children);

list.children[0].innerText = "Hi there!";

//childNode gives the empty text node as well
//console.log(list.childNodes);

//siblings  nextElementSibling & previousElementSibling

console.log(title.nextElementSibling); //gives the form
console.log(title.nextElementSibling.children); //gives the input and submit

console.log(title.previousElementSibling); //null as there is no previous sibling element
console.log(list.previousElementSibling); //gives h2 with item list

//fistElementChild and lastElementChild

console.log(list.firstElementChild); //1st li
console.log(list.lastElementChild); //last li
console.log(list.children[2]); //gets the 3rd li

//DOM element creation
let p = document.createElement("p"); //create element

//Adding a text node to new element
p.appendChild(document.createTextNode("Thanks for filling")); //add text node

//adding the new element to DOM
list.insertAdjacentElement("afterend", p); //inset in DOM

const container = document.querySelector(".container");
//create element
const newDiv = document.createElement("div");
//add text node
newDiv.appendChild(document.createTextNode("Hello world"));
console.log(newDiv);
//adding styles to element
newDiv.style.fontSize = "18px";
newDiv.style.fontWeight = "bold";
//adding element to DOM
container.insertAdjacentElement("afterbegin", newDiv);
