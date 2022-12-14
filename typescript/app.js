"use strict";
const ip1 = document.querySelector(".num1");
const ip2 = document.querySelector(".num2");
const btn = document.querySelector("button"); // or use ! at the end if u are sure
//array as generic type
const numsArr = [];
const stringArr = [];
const add = (num1, num2) => {
    //union of 2 datatypes
    if (typeof num1 === "number" && typeof num2 === "number") {
        //need to use this to specify how the different datatypes will be used
        return num1 + num2;
    }
    else if (typeof num1 === "string" && typeof num2 === "string") {
        return num1 + num2;
    }
    return +num1 + +num2;
};
//usage of Objects can define it is object and also the keys and there types
function result(resultObj) {
    console.log(`result ${resultObj.val} at ${resultObj.timeStamp}`);
}
btn.addEventListener("click", () => {
    const numSum = add(+ip1.value, +ip2.value);
    console.log("numbers sum", numSum);
    numsArr.push(numSum);
    const stringConcat = add(ip1.value, ip2.value);
    console.log("string sum", stringConcat);
    stringArr.push(stringConcat);
    result({ val: numSum, timeStamp: new Date() });
    console.log("nums arr", numsArr);
    console.log("string arr", stringArr);
});
//telling TS that promise is always going to resolve a sting value
//hence we can use result.split which is string method
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise fullfilled");
    }, 1000);
});
promise.then((result) => {
    console.log(result.split(" "));
});
// npm install -g typescript
// create app.ts
// tsc app.ts  created a app.js from app.ts
//tsc --init   to create a config for TS
//use tsc now to run app.ts instead of tsc app.ts
