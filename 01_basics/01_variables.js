const accountId = 369
let accountEmail = "hitagicrab@gmail.com"
var accountPassword = "Araragi"
accountCity = "Raipur"
let accountstate;


console.log(accountId, accountEmail, accountPassword, accountCity, accountstate);
console.table([accountId, accountEmail, accountPassword, accountCity, accountstate]);

//const is used to define a constant value where let a var are used to define variables that can be edited/updated layer 

//accoundId = 963 // changes are not allowed in const variable

accountEmail = "sam369@gmail.com"
accountPassword = "kamisama"
accountCity = "bhubaneswar" 

/*
prefer not to use var 
because of issues in block scope and functional scope "{}"
*/


console.log(accountId, accountEmail, accountPassword, accountCity, accountstate);
console.table([accountId, accountEmail, accountPassword, accountCity, accountstate]);