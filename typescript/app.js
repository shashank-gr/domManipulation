"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ip1 = document.querySelector(".num1");
const ip2 = document.querySelector(".num2");
const btn = document.querySelector("button"); // or use ! at the end if u are sure
const add = (num1, num2) => {
  console.log(num1 + num2);
};
btn.addEventListener("click", () => {
  add(+ip1.value, +ip2.value);
});
