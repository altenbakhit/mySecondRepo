'use strict';

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    services: {},
    start: function () {
        appData.asking(); // Вызываем метод asking
        appData.addPrices();
        appData.getFullPrice(); // Вызываем метод getFullPrice
        appData.getServicePercentPrice(); // Вызываем метод getServicePercentPrice
        appData.getTitle(); // Вызываем метод getTitle
        appData.logger(); // Вызываем метод logger
    },
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },
    isText: function (text) {
        return /^[a-zA-Zа-яА-Я\s]+$/.test(text);
    },
    asking: function () {
        do {
            appData.title = prompt("Как называется ваш проект?");
        } while (!appData.isText(appData.title));

        for (let i = 0; i < 2; i++) {
            let name = ''
            let price = 0

            do {
                name = prompt("Какие типы экранов нужно разработать?");
            } while (!appData.isText(name));

            do {
                price = prompt("Сколько будет стоить данная работа?");
            } while (!appData.isNumber(price));

            appData.screens.push({ id: i, name: name, price: price })

        }

        for (let i = 0; i < 2; i++) {
            let name = '';
            let price = 0;

            do {
                name = prompt("Какой дополнительный тип услуги нужен?");
            } while (!appData.isText(name));

            do {
                price = prompt("Сколько это будет стоить?");
            } while (!appData.isNumber(price));

            appData.services[name] = +price

        };

        appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },
    addPrices: function () {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price
        }

        for (let key in appData.services) {
            appData.allServicePrices += appData.services[key]
        }
    },
    getFullPrice: function () {
        appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
    },
    getServicePercentPrice: function () {
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    },
    getTitle: function () {
        appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substring(1).toLowerCase();
    },
    getRollbackMassage: function (price) {
        if (price >= 30000) {
            return "Даем скидку в 10%";
        } else if (price >= 15000 && price < 30000) {
            return "Даем скидку в 5%";
        } else if (price >= 0 && price < 15000) {
            return "Скидка не предусмотрена";
        } else {
            return "Что-то пошло не так";
        }
    },
    logger: function () {
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
        console.log(appData.screens);
    }
}

appData.start(); // Вызываем метод start для выполнения всех действий