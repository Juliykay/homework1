let password = prompt (`Введите пароль`);
 if (password === `пароль`) {
    alert(`Пароль введен верно`);
 } else {
    alert(`Пароль введен не верно`);
 }
 

let c = 2
if (c>0 && c<10) {
    alert(`верно`);
} else {
    alert(`не верно`);
}

let d = 124
let e = 18
if (d > 100 || e > 100) {
    console.log(`верно`);
} else {
    console.log(`Не верно`);
}

let a = `2`;
let b = `3`;
alert( Number(a)+ Number(b));

let monthNumber =Number(prompt(`Введите номер месяца`));
switch (monthNumber) {
    case 3:
    case 4:
    case 5:
        console.log(`это весна`);
        break;
    case 6:
    case 7:
    case 8:       
        console.log(`это лето`);
        break;
    case 9:
    case 10:
    case 11:
        console.log(`это осень`);
        break;
     case 12:
     case 1:
     case 2:
        console.log(`это зима`);
        break;
    default: 
        console.log(`нет такого месяца`);
        break;

}