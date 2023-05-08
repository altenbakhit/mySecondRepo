const title = "mySecondProject"
const screens = "Простые, Сложные, Интерактивные"
const currency = "tenge"
const screenPrice = 1400
const rollback = 99
const fullPrice = 1000000
const adaptive = true

console.log(title);

console.log(screens.length);
console.log(screens.toLowerCase());
console.log(screens.split(", "));

console.log(`Стоимость верстки экранов ${screenPrice} ${currency}`);

console.log(fullPrice);
console.log(`Стоимость разработки сайта ${fullPrice} ${currency}`);
console.log(fullPrice * (rollback / 100));

console.log(adaptive);