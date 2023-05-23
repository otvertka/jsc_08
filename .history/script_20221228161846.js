'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       // Creating NEW variable with same name as outer scope's variable
//       const firstName = 'Steven';

//       // Reassigning outer scope's variable
//       output = 'NEW OUTPUT!';

//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }

//     }
//     // console.log(add(2, 3));
//     // console.log(str);
//     console.log(millenial);
//     console.log(output);
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);
// // printAge();

// const myName = 'Jonas';

// if (myName === 'Jonas') {
//   const age = 2037 - 1989;
//   console.log(age);
//   const job = 'teacher';
//   console.log(`Jonas is a ${job}`);
//   console.log(x);

// Variables
// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// Functions
// console.log(addDecl(3, 3));
// console.log(addExpr);
// console.log(addArrrow(4, 4));

// function addDecl(a, b) {
//   return a + b;
// }

// var addExpr = function (a, b) {
//   return a + b;
// };

// var addArrrow = (a, b) => a + b;

//Example
console.log(numProducts);
if (!numProducts) deleteShoppingCard();

var numProducts = 10;

function deleteShoppingCard() {
  console.log('All product deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
