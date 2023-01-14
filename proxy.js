const target = {};
const handler = {
    get: function (target, property) {
        console.info(`Access property ${property}`);
        return target[property];
    },
    set: function (target, property, value) {
        console.info(`Change property ${property} : ${value}`);
        target[property] = value;
    }
}

const proxy = new Proxy(target, handler);
proxy.firstName = "Jawir";
proxy.lastName = "Jawa";

console.info(proxy.firstName);
console.info(proxy.lastName);
