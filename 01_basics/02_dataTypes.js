"use strict"; // treat all js code as newer version

// https://262.ecma-international.org/5.1/#sec-11.4.3 

// alert( 2 + 2 ) // we are using node.js, not browser

// console.log( 2 * 5) 
// console.log("apple");

    // code redability should be high

let name = "Kouhai"
let age = 21
let isLoggedIn = false 
const bigNumber = 342765132621254654n

// object 
// console.log(typeof undefined); // undefined
// console.log(typeof null); // object

// Symbol
const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId);
// console.log(id , anotherId);


// *************** Premative Datatypes, 7 types :- ***************
    // Number => 2^53
    // Bigint => bigger numbers
    // String => ""
    // Boolean => true/false 
    // null => standalone value 
    // undefined => not assigined
    // Symbol => unique

// JavaScript is Static or Dynamic type language?
// ANS) ??

// *************** Reference (NonPrimitive) Datatypes ***************
    // Arrat
    // Objects   (WebEvents??)
    // Functions

const languages = ["HTML", "CSS", "Pythos", "C"];

let myObj= {
    name: "Kouhai",
    age: 21,
}

const myFunction = function(){
    console.log("Hey Kouhai");
}


// ++++++++++++++++++++++++++++++++++++++++++ MEMORIES +++++++++++++++++++++++++++++++++++++++++++++++

    // There are two types of memories 
    // Stack (Primitive), Heap (Non-Primitive)
    // Stack give a copy of the variable where as in Heap we operate on the referance/original value