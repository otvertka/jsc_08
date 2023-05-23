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
// console.log(numProducts);
// if (!numProducts) deleteShoppingCard();

// var numProducts = 10;

// function deleteShoppingCard() {
//   console.log('All product deleted');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

/// THIS
// const jonas = {
//   name: 'Jonas',
//   year: 1989,
//   calcAge: function () {
//     return 2037 - this.year;
//   },
// };
// console.log(jonas.calcAge());

//
// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   // console.log(this);
// };
// calcAgeArrow(1980);
// var firstName = 'Matilda';

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const self = this;
    const isMillenial = function () {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: function () {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();

// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };
// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;
// f();

// let user = {
//   name: 'John',
//   age: 30,

//   sayHi() {
//     console.log(this.name);
//   },
// };

// let admin = user;
// user = null;

// admin.sayHi();

// let user = { name: 'John' };
// let admin = { name: 'Admin' };

// function sayHi() {
//   console.log(this.name);
// }

// user.f = sayHi;
// admin.f = sayHi;

// user.f();
// admin.f();

// admin['f']();

// function sayHi() {
//   alert(this);
// }

// sayHi();
