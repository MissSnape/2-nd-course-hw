//задание 1
function getResult(arr,callback) {
        return callback(arr);
}; 
function sum(arr){
  return arr.reduce((acc, cur) => acc * cur, 1)
}
function mult(arr){
  return arr.reduce((acc, cur) => acc + cur,0);
}


console.log(getResult ([3, 4, 1, 9],sum));
console.log(getResult ([3, 4, 1, 9],mult));

//задание 2
function compareUser(a, b) { 
	if (a.age > b.age) return 1;
	if (a.age < b.age) return -1;
	return 0;
};

const users = [
	{name: 'Jon', age: 22},
	{name: 'Richard', age: 18},
	{name: 'Anton', age: 32},
	{name: 'Lida', age: 23},
	{name: 'Bob', age: 44}
];
console.log(users.sort(compareUser));
//задание 3
const massif1 = [1, '4', 9, 'two'];
function each(massif1,retract){
       return retract(massif1);
  }; 
function reversArr(massif1){
  return massif1.reverse();
  
}
function toNumberArr() {
  return massif1.map(string => +string);
};
console.log(each(massif1,reversArr));
console.log(each(massif1,toNumberArr));
//задание 4
let period= new Date();

let timerPeriod = setInterval(() => console.log(period), 3000);
setTimeout(() => { clearInterval(timerPeriod); 
console.log('30 секунд прошло'); }, 30000);
//задание 5
function calling() {
    console.log('Звоню!')
};

const beeps= (beep) => {
    setTimeout(() => {
        answer='Идут гудки...';
    beep(answer);
    }, 1000);
}

const talk=(answer) =>{
    console.log(answer);
    console.log('Разговор')
}

calling();
let answer=beeps(talk);
//talk();