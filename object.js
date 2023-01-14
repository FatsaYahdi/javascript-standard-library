const person = {
    firstName : "Lander",
    lastName : "Saki"
};

Object.freeze(person);
// Object.seal(person);

person.firstName = "Hola";
person.lastName = "Mejik";
delete person.lastName;
console.info(person);

console.info("");

const target = {firstName : "Lander"};
const source = {lastName : "Saki"};

Object.assign(target,source);
console.info(target);
console.info(source);

console.info("");

const name = {firstName : "lander", lastName: "saki"};

console.info(Object.values(name));
console.info(Object.getOwnPropertyNames(name));