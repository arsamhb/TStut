"use strict";
// index signature
const todayTransactions = {
    coffee: -50,
    food: -100,
    clothes: -500,
};
const sum = (obj) => {
    let total = 0;
    for (const transaction in obj) {
        total += obj[transaction];
    }
    return total;
};
console.log(sum(todayTransactions));
console.log(Object.keys(todayTransactions));
