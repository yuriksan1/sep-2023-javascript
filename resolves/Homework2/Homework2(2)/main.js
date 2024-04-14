console.log("test");
console.log("------------------------------------------------------------");
// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [1,99,10500, {name:"Gosha"},"Yura","hello","world",[2,3,4],true,false];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

console.log("------------------------------------------------------------");

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title:"Gary Poter",
    pageCount:111,
    genre:"horor"
}
console.log(book1);

let book2 = {
    title:"Sherlock Holmes",
    pageCount:999,
    genre:"detectives"
}
console.log(book2);

let book3 = {
    title:"Dangerius and gragons",
    pageCount:321,
    genre:"horor"
}
console.log(book3);

console.log("------------------------------------------------------------");

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4 = {
    title:"The Thursday Murder Club",
    pageCount:222,
    genre:"action",
    authors :[
        {
            name:"Jason",
            age:42
        }
    ]
}
console.log(book4);

let book5 = {
    title:"The Culture Map",
    pageCount:444,
    genre:"horor",
    authors: [
        {
            name:"Yura",
            age:24
        }
    ]
}
console.log(book5);

let book6 = {
    title:"If We Were Villains",
    pageCount:555,
    genre:"action",
    authors: [
        {
            name:"Gosha",
            age:33
        }
    ]
}
console.log(book6);

console.log("------------------------------------------------------------");

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let arr2 = [
    {name:"Yura",username:"limon4ik",password:1},
    {name:"Oleg",username:"qwert",password:12},
    {name:"Ivan",username:"asdrt",password:123},
    {name:"Igor",username:"zxcvb",password:1234},
    {name:"Oksana",username:"qazxc",password:12345},
    {name:"Vasya",username:"asdfg",password:123456},
    {name:"Viktor",username:"pavlik",password:1234567},
    {name:"Ira",username:"edcfv",password:12345678},
    {name:"Orest",username:"qsdbg",password: 123456789},
    {name:"Olya",username:"qazxs",password:12345678910}
];
console.log(arr2[0].password);
console.log(arr2[1].password);
console.log(arr2[2].password);
console.log(arr2[3].password);
console.log(arr2[4].password);
console.log(arr2[5].password);
console.log(arr2[6].password);
console.log(arr2[7].password);
console.log(arr2[8].password);
console.log(arr2[9].password);

console.log("------------------------------------------------------------");

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x = -3;
// if (x !== 0){
//     console.log("Вірно");
// }else{
//     console.log("Невірно");
// }

// ternar orerator
// x!==0 ?  console.log(true) :  console.log(false);

console.log("------------------------------------------------------------");

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 1;
if (time >= 0 && time <= 15){
    console.log("Перша чверть");
}else if (time >=16 && time <=30){
    console.log("Друга чверть");
}else if (time>=31 && time <=45){
    console.log("Третя чверть");
}else if (time >=46 && time <= 59){
    console.log("Четверта чверть");
}else{
    console.log("Ви вели не те число,має бути від 0 до 59");
}

console.log("------------------------------------------------------------");

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 22;

if (day >= 1 && day <=10){
    console.log("Перша декада");
}else if(day >=11 && day <= 20){
    console.log("Друга декада");
}else if (day >= 20 && day <=31){
    console.log("Третя декада");
}else{
    console.log("Ви вели неправильне число,має бути від 1 до 31")
}

console.log("------------------------------------------------------------");

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа
// що заплановано на цей день (можна замість плану на день, назву дня англійською).
let dayWeek = 7;

switch (dayWeek) {
    case 1:
        console.log("8:00 - Встаю " + "11:00 - Йду в політех " + "23:00 - Лягаю спати");
        break;

    case 2:
        console.log("8:00 - Встаю 11:00 -Їм 23:00 - Лягаю спати");
        break;

    case 3:
        console.log("20:00 - Миюся");
        break;

    case 4:
        console.log("8:10 - Дивлюсь телевізор");
        break;

    case 5:
        console.log("15:00 - Займаюся спортом");
        break;

    case 6:
        console.log("16:00 - Бігаю");
        break;

    case 7:
        console.log("18:00 - Вчу англійську");
        break;

    default:
        console.log("Ваш день тижня повинен бути від 1 до 7")


}

console.log("------------------------------------------------------------");


//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let num1 = 9;
let num2 = 11;

if (num1 > num2){
    console.log("Більше є число " + num1);
}else if (num1 < num2){
    console.log("Більше є число " + num2);
}else if (num1 === num2){
    console.log("Числа рівні")
}
console.log("------------------------------------------------------------");

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні,
//         тобто ті, які приводиться до false, а це 0 null undefined і тд).
let x = 0;

if (!x){
    x = "default";
}
console.log(x)


//or

let x1 = null || "default";
console.log(x1);
//
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//     За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration >= 5){
    console.log("Супер")
}

if (coursesAndDurationArray[1].monthDuration >= 5){
    console.log("Супер")
}

if (coursesAndDurationArray[2].monthDuration >= 5){
    console.log("Супер")
}

if (coursesAndDurationArray[3].monthDuration >= 5){
    console.log("Супер");
}else {
    console.log("Курс короткий")
}

if (coursesAndDurationArray[4].monthDuration >= 5){
    console.log("Супер")
}

if (coursesAndDurationArray[5].monthDuration >=5 ){
    console.log("Супер")
}else{
    console.log("Курс короткий")
}























