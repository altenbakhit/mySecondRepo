'use strict';

const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    service1: '',
    service2: '',
    asking: function () {
        this.title = prompt("Как называется ваш проект?", "Проект");
        this.screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные");

        do {
            this.screenPrice = prompt("Сколько будет стоить данная работа?");
        } while (!this.isNumber(this.screenPrice));

        this.adaptive = confirm("Нужен ли адаптив на сайте?");
    },
    start: function () {
        this.asking(); // Вызываем метод asking
        this.allServicePrices = this.getAllServicePrice(); // Вызываем метод getAllServicePrice
        this.fullPrice = this.getFullPrice(); // Вызываем метод getFullPrice
        this.servicePercentPrice = this.getServicePercentPrice(); // Вызываем метод getServicePercentPrice
        this.title = this.getTitle(); // Вызываем метод getTitle
        this.logger(); // Вызываем метод logger
    },
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },
    getAllServicePrice: function () {
        let sum = 0;

        for (let i = 0; i < 2; i++) {
            let price = 0;

            if (i === 0) {
                this.service1 = prompt("Какой дополнительный тип услуги нужен?");
            } else if (i === 1) {
                this.service2 = prompt("Какой дополнительный тип услуги нужен?");
            }

            do {
                price = prompt("Сколько это будет стоить?");
            } while (!this.isNumber(price));

            sum += +price;
        }

        return sum;
    },
    getFullPrice: function () {
        return +this.screenPrice + this.allServicePrices;
    },
    getServicePercentPrice: function () {
        return this.fullPrice - (this.fullPrice * (this.rollback / 100));
    },
    getTitle: function () {
        return this.title.trim()[0].toUpperCase() + this.title.trim().substring(1).toLowerCase();
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
        for (let key in this) {
            console.log(key + ": " + this[key]);
        }
    }
};

appData.start(); // Вызываем метод start для выполнения всех действий