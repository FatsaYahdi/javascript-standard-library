const original = 'Asd Kawd Awfs';
const encode = btoa(original);
console.info(encode);

const decode = atob(encode);
console.info(decode);