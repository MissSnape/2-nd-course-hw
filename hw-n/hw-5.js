//Задание 1
const arr=[1,5,4,10,0,3];
for (let i=0; i<arr.length; i++) {
   if (arr[i]==0) break;
    console.log(arr[i]);
};
//задание 2
const massif=[1, 5, 4, 10, 0, 3];
console.log("Индекс 4 равен "+massif.findIndex(i => i == "4"));
//задание 3
let massiv=[1, 3, 5, 10, 20];
massiv=massiv.join(' ');
console.log(massiv);
//задание 4
let nesting = [];
for (let i = 1; i<=3; i++)
{
    nesting[i] = [1,1,1];
    for (let j = 1; j<i; j++) {
        nesting[i][j] = 1;
    }
}
console.log(nesting);
//задание 5
let a=[1,1,1];
a.push(2,2,2);
console.log(a);
//задание 6
let c=[9,8,7,'a',6,5];
c.sort();
c.pop();
console.log(c);
//задание 7
const b=[9,8,7,6,5];
let d=prompt('Введите число');
d=Number(d);
const test=b.filter(el=>el===d);
console.log(test);
//задание 8
let letters='abcdf';
letters=letters.split(' ');
letters=letters.reverse();
letters=letters.join(' ');
console.log(letters);
//задание 9
let numeral=[[1,2,3],[4,5,6]];
numeral=numeral.join(',');
console.log(numeral);
//задание 10
let arbitrary=[1,5,6,8,2];
for(let i=1; i<11; i=i+1){

    const f=arbitrary.map(el=>el+1);
    console.log(f);
}
//задание 11
let w=[];
for(let i=0; i<=10;i++){
    w.push(Math.floor(Math.random()*i));
}
const even=w.filter(el=>el%2===0);
console.log("Исходный массив "+w);
console.log("Массив с четными числами "+even);
//задание 12
let m=[];
for(let i=0; i<=6;i++){
    m.push(Math.floor(Math.random()*i));

}
const result = m.reduce((a, b) => a + b, 0) / m.length;
console.log(result)
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