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
let one=prompt("Введи число");
let two=prompt("Введи число");
function mult (one, two) { 
    if(!isNaN(one) && !isNaN(two)) { 
       return alert(one * two); 
}    else { 
        alert ("Одно или оба значения не являются числом"); 
}
}
mult (one, two);
//задание 6
let num=prompt("Введите число");
function cube(num) {
    if (!isNaN(num)) {
    return alert("n в кубе равняется "+Math.pow(num,3));
    } else {
    console.log('Переданный параметр не является числом');
    }
}
cube(num);
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