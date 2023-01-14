const array = ["all","ave","khn"];
array.forEach(function (value, index) {
    console.info(`${index} : ${value}`);
});
array.forEach((value, index) => console.info(`${index} : ${value}`));
array.forEach(value => console.info(value));

console.info("\n");

const queue = [];
queue.push("nah");
queue.push("ikn");
queue.push("khn");

console.info(queue.shift());
console.info(queue.shift());
console.info(queue.shift());
console.info(queue.shift());

console.info("\n");

const stack = [];
stack.push("nah");
stack.push("ikn");
stack.push("khn");

console.info(stack.pop());
console.info(stack.pop());
console.info(stack.pop());
console.info(stack.pop());

console.info("\n");

const source = [1,2,3,4,5,1,2,3,4,5];

console.info(source.find(value => value > 3)); // 4
console.info(source.findIndex(value => value > 3)); // 3
console.info(source.includes(7)); // false
console.info(source.indexOf(5)); // 4
console.info(source.lastIndexOf(5)); // 9

console.info("\n");

const numbers = [1,2,3,4,5,6,7,8,9,10];
console.info(numbers);
console.info(numbers.filter(value => value % 2 === 1));
console.info(numbers.filter(value => value % 2 === 0));

console.info("\n");

const names = "Lander Saki Khhunt".split(" ");
console.info(names.map(value => value.toUpperCase()));
console.info(names.reduce((result, value) => result + " "+ value));
console.info(names.reduceRight((result, value) => result + " " + value));

const angka = [1,2,3,4,5,6,7,8,9,10];
console.info(angka.reduce((result, value) => result + value));
console.info(angka.reduceRight((result, value) => result + value));