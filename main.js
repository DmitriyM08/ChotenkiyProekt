const moment = require('moment');

function getCurrentDay() {
    return moment().format('dddd');
}
console.log(getCurrentDay());

function getCurrentMonth() {
    return moment().format('MMMM');
}
console.log(getCurrentMonth());

function getCurrentYear() {
    return moment().format('YYYY');
}
console.log(getCurrentYear());

