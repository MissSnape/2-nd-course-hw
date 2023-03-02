//Задание 1
let a=prompt("Введите число");
let b=prompt("Введите второе число");
function mostNumber(a,b){
    
    if (a>b) {
        console.log(a);
    } else {
        console.log(b);
    }
}
mostNumber(a,b);
//задание 2
"use strict";
let number = prompt("Введите число");

let printMessage;

if (number%2===0) {

    printMessage = function () {
        console.log("Число четное");
    }

} else {

    printMessage = function () {
        console.log("Число нечетное");
    }

}

printMessage();

//задание 3
let p=4;
function squareReturn(p) { 
    return p**2 
}
let result1 = squareReturn(4); 
alert(result1);

//задание 4
"use strict";
let age = prompt("Введите возраст",13);

let printReport;


if (age>12) {

    printReport = function () {
        console.log("Добро пожаловать");
    }

} else if (age<0){

    printReport = function () {
        console.log("Вы ввели неправильное значение");
    }
    

} else {
    printReport= function(){
        console.log("Привет,друг!");
    }

}

printReport();
//задание 5
let r=prompt("Введите число")
let t=prompt("Введите второе число")
function sum(r,t) {
    if (typeof r === 'number' && typeof t === 'number') {
        t=Number(any_string_number);
        r=Number(any_string_number);
        console.log(r+t);
    } else {
    console.log("Одно или оба значения не являются числом");

    }
}
sum(r,t);
//задание 6
let numeric=prompt("Введите число");
function cube(numeric) {
    if (numeric==='number' && !isNaN(numeric)) {
        cube(numeric)=pow(numeric,3)
       console.log(cube(numeric));
    } else {
    console.log("Переданный параметр не является числом");
    }
}
cube(numeric);
//задание 7
function startGameSeasons(){
    let month=prompt("Введите месяц");
    if (month === 1 || month === 2 || month === 12) {
        console.log("Зима")
    } else if(month >= 3 && month <6 ){
        console.log("Весна")
    } else if(month >= 7 && month < 9){
        console.log("Лето")
    } else if(month >= 9 && month < 12){
        console.log("Зима")
    } else{
        console.log("Такого месяца несуществует")
    }

}