//задание 1
let arr=[1,5,4,6,2,8];
const request = (date,callback) => {
    setTimeout(() => { 
        let response = 'Ответ';
          callback(response);
      }, 1000);
  }; 

const responseProcessing = (b) => {
  console.log(b);
  let p=prompt("введите 0 или 1");
  p=Number(p);
  if (p===1) {
      result=arr.reduce((total, amount) => total * amount);
  } else if(p===0){
      result=arr.reduce((total, amount) => total + amount);
  } else{
    console.log("Не верное число")
  }
  console.log(result);
};

let response = request(arr, responseProcessing);


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
let massif = [1, '4', 9, 'two'];
const each = (myArray,retract) => {
    setTimeout(() => { 
        let reply = massif.reverse();;
        retract(reply);
      }, 1000);
  }; 

const replyProcessing = (reply) => {
  console.log(reply);
  console.log(massif.map(string => +string));
  
};
let reply = each(massif, replyProcessing);
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