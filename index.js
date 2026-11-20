const {add, sub, mult} = require("./calculator");
console.log(add(3,9));
console.log(sub(9,3));
console.log(mult(6,7));

const greetings = (name) =>{
    console.log(`Hello ${name}`);
};

greetings("Vilas");
greetings("Surya");