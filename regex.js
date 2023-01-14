// const regex1 = /[a]/;
// const regex2 = new RegExp("[a]");
// const regex3 = new RegExp(/[a]/);

// const name = "asd poe\nasd awok\nkfs poe";
// const regex4 = /asd/g;
// const regex5 = /poe/ig;

// let res = regex4.exec(name);
// console.info(res);

// let test = regex4.test(name);
// console.info(test);

// let result;
// while ((result = regex4.exec(name)) !== null) {
//     console.info(result);
// }

// while ((result = regex5.exec(name)) !== null) {
//     console.info(result);
// }

const regex6 = /ek[aiueo]/ig;
const text = "eko ado eki eka ejo emi elo eke";

// while ((result = regex6.exec(text)) !== null) {
//     console.info(result);
// }

console.info(text.match(/ek[aiueo]/ig));
console.info(text.search(/ek[aiueo]/ig));
console.info(text.replace(/ek[aiueo]/ig, "keren"));
console.info(text.replaceAll(/ek[aiueo]/ig, "keren"));
console.info(text.split(/e/ig));