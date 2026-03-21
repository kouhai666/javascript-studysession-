const name = "Kouhai"
const repoCount = 2

// console.log(name + repoCount + " verified");

// ++++++++++++++++++++++ String Interpolation ++++++++++++++++++++++++
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// ************************* String Functions/Methods ****************************
const gameName = new String('Pokemon-FireRed-.gba')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt('4'));
console.log(gameName.indexOf('m'));

const newString = gameName.substring(0,4); 
    // creates a substring of given string
console.log(newString);

const anotherString = gameName.slice(-3,7);
    // same as substring but also supports -ve indexing
console.log(anotherString);

const newStringOne ="    hello    ";
console.log(newStringOne);
console.log(newStringOne.trim()); 
    // trims out useless spaces in a string

const url = "https://youtube.com/pokemon%20eng";
console.log(url.replace('%20' , '-'));
    // allows to replace certain sagments of a string

console.log(url.includes('.com'));
    // allows to check if a character exists on a string or not

console.log(gameName.split('-'));
    // returns a array of string elements split on the basis of given character