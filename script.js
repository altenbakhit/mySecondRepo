const title = prompt("Как называется ваш проект?", "Проект №1");
const screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
const currency = "rubles";
const screenPrice = prompt("Сколько будет стоить данная работа?", "1400");
const adaptive = confirm("Нужен ли адаптив на сайте?", "true");
const service1 = +prompt("Какой дополнительный тип услуги нужен?", "servicePrice1, servicePrice2");
const service2 = +prompt("Какой дополнительный тип услуги нужен?", "servicePrice1, servicePrice2");
const servicePrice1 = 1000;
const servicePrice2 = 2000;
const selectedServicePrice = (service1 === "servicePrice1" ? servicePrice1 : 0) + (service2 === "servicePrice1" ? servicePrice1 : 0) + (service1 === "servicePrice2" ? servicePrice2 : 0) + (service2 === "servicePrice2" ? servicePrice2 : 0);
const fullPrice = screenPrice + selectedServicePrice;
const percent = 10
const rollback = fullPrice * (percent / 100);
const servicePercentPrice = Math.ceil(fullPrice - rollback);

if (fullPrice > 30000) {
    console.log("Даем скидку в 10%");
} else if (fullPrice >= 15000 && fullPrice <= 30000) {
    console.log("Даем скидку в 5%");
} else if (fullPrice < 15000 && fullPrice > 0) {
    console.log("Скидка не предусмотрена");
} else {
    console.log("Что то пошло не так");
}

console.log()
console.log(title);
console.log(screens.length);
console.log(screens.toLowerCase());
console.log(screens.split(", "));
console.log(`Стоимость верстки экранов ${screenPrice} ${currency}`);
console.log(fullPrice);
console.log(`Стоимость разработки сайта ${fullPrice} ${currency}`);
console.log(fullPrice * (rollback / 100));
console.log(adaptive);
console.log(fullPrice);