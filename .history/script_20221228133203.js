'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
      add(2, 3);

      function add(a, b) {
        return a + b;
      }
    }
    // add(2, 3);
    // console.log(str);
    console.log(millenial);
  }
  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);
// printAge();
