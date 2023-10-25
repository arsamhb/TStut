"use strict";
let add = (a, b) => {
    return a + b;
};
const addAll = (a, b, c) => {
    //const addAll = (a: number, b: number, c: number = 0): number => {
    // you also can put default value for a paramtere
    // this is type gaurd
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
// REST PARAMETER -> using ...operator to put manu parameters in function
// CONSIDER you should put ...operator at the end all the parameter you are passing to your func
const sumAll = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
console.log(sumAll(1, 2, 3, 4, 5, 6));
// THIS IS NEVER TYPE type of throwed error
// we also have this type when the function
// or loop has infinit and endless operation
const createError = (errMsg) => {
    throw new Error(errMsg);
};
