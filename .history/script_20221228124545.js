'use strict';

function calcAge(birthYear) {
  const vor = 2037 - birthYear;

  function printAge() {
    const output = `You are ${age}, born in ${birthYear}`;
    console.log(output);
  }
  printAge();
  return age;
}

const age = 2022;
const firstName = 'Jonas';
calcAge(1991);