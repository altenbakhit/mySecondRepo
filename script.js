'use strict'

// Объявили переменные
let title = prompt("Как называется ваш проект?")
let screens = prompt("Какие типы экранов нужно разработать?")
let screenPrice = +prompt("Сколько будет стоить данная работа?")
let adaptive = confirm("Нужен ли адаптив на сайте?")

let rollback = 10
let allServicePrice
let fullPrice
let servicePercentPrice

let service1 = prompt("Какой дополнительный тип услуги нужен?")
let servicePrice1 = +prompt("Сколько это будет стоить?")
let service2 = prompt("Какой дополнительный тип услуги нужен?")
let servicePrice2 = +prompt("Сколько это будет стоить?")

// Описали функции с которыми мы будет работать
const getAllServicePrices = function () {
    return servicePrice1 + servicePrice2
}

const getFullPrice = function () {
    return screenPrice + allServicePrice
}

const getTitle = function () {
    return title.trim()[0].toUpperCase() + title.trim().substring(1).toLowerCase()
}

const getServicePercentPrices = function () {
    return fullPrice - (fullPrice * (rollback / 100))
}

const showTypeOf = function (variable) {
    console.log(variable, typeof varigiable);
}

const getRollbackMassage = function (price) {
    if (price >= 30000) {
        return "Даем скидку в 10%"
    } else if (price >= 15000 && price < 30000) {
        return "Даем скидку в 5%"
    } else if (price >= 0 && price < 15000) {
        return "Скидка не предусмотрена"
    } else {
        return "Что то пошло не так"
    }
}

// Переопределили значение определенным переменным, мы назначили значением данных переменных результат выполнения определенных функции
allServicePrice = getAllServicePrices()
fullPrice = getFullPrice()
servicePercentPrice = getTitle()
title = getTitle()

// Запускаем функцию showTypeOf и передаем туда некоторые переменные
showTypeOf(title)
showTypeOf(screenPrice)
showTypeOf(adaptive)

// Вызываем все необходимое в консоли
console.log(getRollbackMassage(fullPrice));
console.log(typeof title);
console.log(typeof screenPrice);
console.log(typeof adaptive);

console.log(screens.length);
console.log(servicePercentPrice);

console.log("Стоимость верстки экранов " + screenPrice + " юаней" + " и " + "Стоимость разработки сайта " + fullPrice + " юаней")