const url = 'http://www.contoh.com/?name=Asd Jsdw Wsdwf';
console.info(url);

const encode = encodeURI(url);
console.info(encode);

const decode = decodeURI(encode);
console.info(decode);

const value = "Awok&Kekw=Awikwok";
const url1 = 'http://www.contoh.com/?name=';

const encoded = encodeURIComponent(value);
console.info(url1 + encoded);

const decoded = decodeURIComponent(encoded);
console.info(url1 + decoded);