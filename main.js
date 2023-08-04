// "use strict";

// Exercise 1
// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements between a and b in it and returns an array of them.
// The function should not modify the array. It should return the new array. For instance:

// let arr = [5, 3, 8, 1];

// function filterRange(arr, a, b) {
//   let result = arr.filter((e) => a <= e && e <= b);

//   return result;
// }

// console.log(filterRange(arr, 1, 4)); // [3, 1]
// console.log(arr); // [5, 3, 8, 1]

// Exercises 2
// You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

// For instance:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [john, pete, mary];

// let getNames = (arr) => {
//   let result = [];

//   for (const obj of arr) {
//     result.push(obj.name);
//   }

//   return result.join();
// };

// console.log(getNames(users)); // John, Pete, Mary

// Exercises 3
// Write the function getAverageAge(users) that gets an array of objects with property age and gets the average.
// The formula for the average is (age1 + age2 + ... + ageN) / N. For instance:

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [john, pete, mary];

// let getAverageAge = (arr) => {
//   let result = null;

//   for (const obj of arr) {
//     result += obj.age;
//   }

//   return result / arr.length;
// };

// console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
