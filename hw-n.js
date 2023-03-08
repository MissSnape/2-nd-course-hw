//Задание 1
function uppercase(){
    let a=prompt("Введите слово");
    console.log(a.toUpperCase());
}
uppercase();
//задание 2

//console.log(regexp);

//задание 3
let a=32.58884;
console.log(Math.floor(a));
console.log(Math.ceil(a));
console.log(Math.round(a));
//задание 4
let arr=[ 52, 53, 49, 77, 21, 32];
const minimum = Math.min(...arr);
console.log(minimum);
const maxsimum=Math.max(...arr);
console.log(maxsimum);
//задание 5
function EnterRandom(){
    let c=Math.round(Math.random()*10);
    console.log(c);
}
EnterRandom();
//задание 6
function getRandomArrNumbers(){
let p=prompt("Введите число");
let numbers=[];
for (let i=0; i<p; i++) {
numbers.push(Math.round(Math.random()*(p)));
console.log(numbers);
}
}
getRandomArrNumbers();
//задание 7
function MinMax(min,max){
   console.log( Math.random()*(max-min));
}
MinMax(11,100);
//задание 8
let currentDate = new Date();
console.log(currentDate);
//задание 9
let newDates= new Date();
newDates.setDate(newDates.getDate() + 75);
console.log(newDates);
//задание 10
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
"Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
let myDate = new Date(); 
let fullDate = "Сегодня: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() +", " + days[myDate.getDay()];
console.log(fullDate); 
let presentTime= new Date;
console.log(presentTime.toTimeString());

//задание 11
function fruit(){
let fruits=['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин']
fruits.sort(()=>Math.random()-0.5);
alert(fruits);
let a=prompt("Чему равнялся первый элемент массива?");
let b=prompt("Чему равнялся последний элемент массива?");
if (fruits[0] === a && fruits[fruits.length - 1] === b) {
	console.log("Поздравляю, вы выиграли")
} else if (fruits[0] !== a || fruits[fruits.length - 1] !== b) {
	console.log("Вы были близки")
} else {
	console.log("Вы проиграли")
}


}

//задание hw-5
function startGameSeasons(){
    let month=prompt("Введите месяц");
    month=Number(month);
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