//задание 1
let i = 0;
while (i < 2) {
    console.log("Привет");
    i++;
}
//задание 2
for(let p = 1; p <= 5; p++) {
    console.log(p);
  }


//задание 3
for(let m= 1; m <= 22; m++) {
    console.log(m);
  }
//задание 4
const Name = {
    Коля: '200',
    Вася: '300',
    Петя: '400'
};
for (let Salary in Name) {
    alert('${Name} -зарплата ${Name[Salary]} долларов');
}
//задание 5
for(let n=1000;n<=50;n/2){
    console.log(n);

}

//задание 6
for (let dayNumber = 1; dayNumber <= 31; dayNumber++) { 
    if (dayNumber % 5 == 0) {
    console.log("Сегодня пятница "+dayNumber+"-е число. Необходимо подготовить отчет."); 
    }
}
