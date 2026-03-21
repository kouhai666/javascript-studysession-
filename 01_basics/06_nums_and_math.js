// const score = 500;

// const balance = new Number(100);

// console.log(score);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

// const otherNumber = 23.84184;
// console.log(otherNumber.toFixed(2));
// console.log(otherNumber.toPrecision(3));

// const units = 10000000;
// console.log(units.toLocaleString());
    // applies units according to us standars by default O,T,H,K,M,B,T....
// console.log(units.toLocaleString('en-IN'));
    // units according to indian standards O,T,H,K,TK,L,TL,C....


// +++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-1));
// console.log(Math.round(2.4));
// console.log(Math.ceil(2.4));
// console.log(Math.floor(2.9));
// console.log(Math.min(2, 4, 6, 8, 10));
// console.log(Math.max(2, 4, 6, 8, 10));

console.log(Math.random());
console.log((Math.random()*10) + 1 );
console.log(Math.floor(Math.random()*10) + 1 );

const min = 1;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);