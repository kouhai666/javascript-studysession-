// singleton or constructor
// Object.create


// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Kouhai",
    "full name": "Kouhai Sid",
    [mySym]: "myKey1",
    age: 21,
    location: "Raipur",
    email:"kouhai@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Fryday"],
}

// console.log(jsUser.email); // cant acess "full name"
// console.log(jsUser["email"]);
// console.log(jsUser[mySym]); // used for Symbols
// console.log(typeof jsUser.mySym);

jsUser.email = "kouhai@nintendo.com"
// Object.freeze(jsUser)
jsUser.email = "kouhai@google.com"

// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hellow jsUser");
}

jsUser.greeting2 = function(){
    console.log(`Hellow jsUser ${this.name} `);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());
