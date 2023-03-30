"use strict";
let list = ['a', 'b', 'c'];
let list2 = ['a', 'b', 'c'];
list.push("23");
list2.push('d');
const manager = ['Federica', 33];
const manager2 = ['Juan', 35];
const manager3 = ['Olga', 30];
let randomNumbers = [];
let nextNumber;
for (let i = 0; i < 10; i++) {
    nextNumber = Math.floor(Math.random() * (100 - 1)) + 1;
    randomNumbers.push(nextNumber);
}
console.log(randomNumbers);
