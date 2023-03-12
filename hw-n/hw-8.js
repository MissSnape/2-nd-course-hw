//задание 1
let arr=[3, 4, 1, 9];
function sum(){
  let s=arr.reduce((total, amount) => total * amount)
  console.log(s);
}
function mult(){
  let m=arr.reduce((total, amount) => total + amount);
  console.log(m);
}
function getResult(callback) {
    setTimeout(() => { 
      let arr=[3, 4, 1, 9]
          callback();
      }, 1000);
  }; 

getResult (sum);
getResult (mult);

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
let massif1 = [1, '4', 9, 'two'];
let massif2= [1, '4', false, 9, 'two'];
function each(retract){
    setTimeout(() => { 
        retract();
      }, 1000);
  }; 
function reversArr(){
  let reply = massif1.reverse();
  console.log(reply);
}
function toNumberArr() {
  console.log(massif2.map(string => +string));
};
each(reversArr);
each(toNumberArr);
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