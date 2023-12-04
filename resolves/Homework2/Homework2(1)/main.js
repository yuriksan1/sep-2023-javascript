// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let array =["Yura","Hello","Hi world",1,20,999,100500,300,true,false];
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);
console.log(array[8]);
console.log(array[9]);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title:"Harry Potter",
    pageCount: 300,
    genre:"horor"
}
console.log(book1);

let book2 = {
    title:"Sherlok Holms",
    pageCount: 432,
    genre:"detectuv"
}
console.log(book2);

let book3 ={
    title:"Robinzon Cruso",
    pageCount:123,
    genre:"prugoda"
}
console.log(book3);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4 = {
    title:"Yura",
    page:100500,
    genre:"horor",
    authors:[{
        name: "Tom",
        age: 32
    }]
}
console.log(book4);

let book5 = {
    title:"oleg",
    page:789,
    authors: [{
        name:"Jek",
        age:32
    }]
}
console.log(book5);

let book6 = {
    title:"vasya",
    page:456,
    authors:[{
        name:"Mike",
        age:22
    }]
}
console.log(book5);
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let arr = [
    {name:"Yura",username:"yuriksan",password:123},
    {name:"Oleg",username:"yuriksan1",password:1234},
    {name:"Ivan",username:"yuriksan2",password:12345},
    {name:"Ivan2",username:"yuriksan3",password:123456},
    {name:"Ivan3",username: "yuriksan4",password: 1234567},
    {name:"Ivan4",username:"yuriksan5",password: 12345678},
    {name:"Ivan5",username:"yuriksan6",password: 123456789},
    {name:"Ivan6",username:"yuriksan7",password: 1234567890},
    {name:"Ivan7",username:"yuriksan8",password:123456789101},
    {name:"Ivan8",username:"yuriksan9",password: 1234567891011},
];
console.log("pasword:" + arr[0].password);
console.log("pasword:" + arr[1].password);
console.log("pasword:" + arr[2].password);
console.log("pasword:" + arr[3].password);
console.log("pasword:" + arr[4].password);
console.log("pasword:" + arr[5].password);
console.log("pasword:" + arr[6].password);
console.log("pasword:" + arr[7].password);
console.log("pasword:" + arr[8].password);
console.log("pasword:" + arr[9].password);
//
//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = -3;
if (x !== 0){
    console.log("Вірно");
}else {
    console.log("Невірно");
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 50;
if (time >= 0 && time <= 15) {
    console.log("Перша чверть")
} else if (time >= 16 && time <= 30) {
    console.log("Друга чверть")
} else if (time >= 31 && time <= 45) {
    console.log("Третя чверть");
} else if (time >= 46 && time <= 59) {
    console.log("Четверта чверть");
}else{
    console.log("Неправильно ведене число")
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 22;
if (day >=0 && day <=10){
    console.log("Перша декада");
}else if (day >=11 && day <=20){
    console.log("Друга декада");
}else if (day >= 21 && day <= 30){
    console.log("Третя декада")
}else{
    console.log("Невирне число")
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано
// на цей день (можна замість плану на день, назву дня англійською).
let week = 4;

switch (week){
    case 1:
        console.log("Просинаюсь");
        break;
    case 2:
        console.log("Снідаю");
        break;
    case 3:
        console.log("Миюсь");
        break;
    case 4:
        console.log("Одягаюсь");
        break;
    case 5:
        console.log("Йду в політех");
        break;
    case 6:
        console.log("Вчуся");
        break;
    case 7:
        console.log("Лягаю спати");
        break;
    default:
        console.log("ERROR");

}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let a = 20;
let b = 40;

if (a > b){
    console.log(a);
}else if(a < b){
    console.log(b);
}else if(a === b){
    console.log(a+"="+b)
}
//АБО
let num1 = 10;
let num2 = 5;

if (num1 === num2){
    console.log("Числа рівні")
}else if (num1 > num2){
    console.log("MAX is "+num1)
}else{
    console.log("Max is"  + num2)
}
//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let x1 = null;// null 0 '' undefined false   - всі повертають false по замовчуванні
x1 = x1 || "default";
console.log(x1);
//АБО
//              false     true  //  || - нестрога перевірка повертає true
let x2 = null || "default";
console.log(x2);
//АБО
let x3 = "";
if (!x3) {
    x3 = "default";
    console.log(x3)
}else{
    console.log(x3)
}

console.log(!!null) // !! -перевірка,який тип данних є по замовчуваню в цій змінній
console.log(!!"null");
console.log(!!1);
console.log(!!'');
console.log(!!0);

let c = null;
console.log(!!c);
//
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//     За допомоги іф перевірити кожен його елемент на тривалість навчання.
//     У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration >= 5) {
    console.log("Супер");
}
if (coursesAndDurationArray[1].monthDuration >= 5) {
    console.log("Супер");
}
if (coursesAndDurationArray[2].monthDuration >= 5) {
    console.log("Супер");
}
if (coursesAndDurationArray[3].monthDuration >= 5) {
    console.log("Супер");
} else {
    console.log("Курс короткий!")
}
if (coursesAndDurationArray[4].monthDuration >=5){
    console.log("Супер");
}
if (coursesAndDurationArray[5].monthDuration >=5){
    console.log("Супер");
}else {
    console.log("Курс короткий!");
}