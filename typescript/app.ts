const ip1 = document.querySelector(".num1") as HTMLInputElement;
const ip2 = document.querySelector(".num2") as HTMLInputElement;
const btn = document.querySelector("button") as HTMLButtonElement; // or use ! at the end if u are sure

const add = (num1: number, num2: number) => {
  console.log(num1 + num2);
};
btn.addEventListener("click", () => {
  add(+ip1.value, +ip2.value);
});

export {};

// npm install -g typescript
// create app.ts
// tsc app.ts  created a app.js from app.ts
//tsc --init   to create a config for TS
//use tsc now to run app.ts instead of tsc app.ts
