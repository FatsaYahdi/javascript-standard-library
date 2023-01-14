const date1 = new Date();
console.log(date1);

const date2 = new Date(2022 , 12 , 17);
console.log(date2);

const date3 = new Date(2022, 12, 17, 1, 0, 0, 0);
console.log(date3);

const timestamp = Date.now();
console.info(timestamp);

const dateUnix = new Date(timestamp);
console.info(dateUnix);
console.info(dateUnix.getTime());

const parseTimestamp = Date.parse("2022-12-17T16:16:16.123+07:00")
console.info(parseTimestamp);

const parseDate = new Date(parseTimestamp);
console.info(parseDate);

const date = new Date();
date.setFullYear(2022);

console.info(date.getFullYear());
console.info(date.getMonth());
console.info(date.getDate());
console.info(date.getHours());
console.info(date.getMinutes());
console.info(date.getSeconds());
console.info(date.getMilliseconds());
console.info(date.getTimezoneOffset());