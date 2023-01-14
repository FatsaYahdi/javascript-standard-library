const person = {};

Reflect.set(person, 'firstName', 'Jawir');
Reflect.set(person, 'lastName', 'Jawir');

console.info(person);

console.info(Reflect.has(person, 'firstName'));
console.info(Reflect.has(person, 'middleName'));