const firstName = Symbol();
const lastName = Symbol();

const person = {};
person[Symbol.for("firstName")] = "ASD";
person[Symbol.for("lastName")] = "SAD";

console.info(person);
console.info(person[Symbol.for("firstName")]);
console.info(person[Symbol.for("lastName")]);