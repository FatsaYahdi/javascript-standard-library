const map = new Map();
map.set("Name" , "Lander saki");
map.set("Address","Jawir");

console.info(map);
console.info(map.get("Name"));
console.info(map.get("Address"));

for (const element of map) {
    console.info(`${element[0]} : ${element[1]}`);
}