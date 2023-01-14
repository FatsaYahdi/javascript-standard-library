const person = {
    firstName : "Lander",
    middleName : "rrr",
    lastName : "Saki",
    address : {
        country : "Indonesia",
        city : "Sunda"
    }
};

const json = JSON.stringify(person);
const personAgain = JSON.parse(json);

console.info(json);
console.info(personAgain);