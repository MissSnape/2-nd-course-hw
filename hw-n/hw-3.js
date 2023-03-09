//задание 1
let password='пароль';
let entry=prompt('Введите пароль:');
if (password==entry) {
    alert('Пароль введен верно');

} else {
    alert('Пароль введен неправильно');
}
//задание 2
let c=prompt('Введите число:');
if (c>0 && c<10) {
    console.log("Верно");
} else {
    console.log("Неверно")
}
//задание 3
let d=prompt('Введите число:');
let e=prompt('Введите число:');
if (100<e || 100<d) {
    console.log("Верно")
} else {
    console.log("Неверно")
}
//задание 4
let a = '2';
a = Number(a);
let b = '3';
b = Number(b);
alert(a + b);

//задание 5
let month=prompt('Введите месяц');
switch(month){
    case '1':
        console.log("Это зимний месяц");
    break;
    case "2":
        console.log("Это зимний месяц");
    break;
    case "3":
        console.log("Это весений месяц");
    break;
    case "4":
        console.log("Это весений месяц");
    break;
    case "5":
        console.log("Это весений месяц");
    break;
    case "6":
        console.log("Это летний месяц");
    break;
    case "7":
        console.log("Это летний месяц");
    break;
    case "8":
        console.log("Это летний месяц");
    break;
    case "9":
        console.log("Это осенний месяц");
    break;
    case "10":
        console.log("Это осенний месяц");
    break;
    case "11":
        console.log("Это осенний месяц");
    break;
    case '12':
        console.log("Это зимний месяц");
    break;
    default:
        console.log('Такого месяца не существует');
    break;
}
//задание 7
let p=prompt("Пожалуйста, введите любое число");
console.log(isNaN(p));
    if (p % 2 == 0) {
        alert('Число четное');
     } else {
         alert('Число нечетное');
     }


//задание 8
let clientOS=prompt('Введите число');
switch(clientOS){
case "1":
    console.log("Установите версию приложения для Android по ссылке");
break;
case '0':
    console.log("Установите версию приложения для iOS по ссылке");
break;
default:
    console.log('Вы используете пк');
break;
}