// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr = [11, 22, 33, 3.14, "Hello", "Hi", "world", 0, true, false];

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


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: "Harry",
    pageCount: 1,
    genre: "Horor"
}
console.log(book1);

let book2 = {
    title: "Orvel",
    pageCount: 222,
    genre: "detective",
}
console.log(book2);

let book3 = {
    title: "war",
    pageCount: 333,
    genre: "opovid"
}
console.log(book3);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4 = {
    title: "Shrek",
    pageCount: 444,
    genre: "smisno",
    authors: [
        {name : "Oleh",
        age : 32}
    ]
}
console.log(book4)

let book5 = {
    title: "Ono",
    pageCount: 555,
    genre: "strahno",
    authors: [
        {name : "Georgiy",
        age : 22}
    ]
}
console.log(book5);

let book6 = {
    title: "viy",
    pageCount: 666,
    genre: "action",
    authors: [
        {name : "olya",
        age : 11}
    ]
}
console.log(book6);
// - Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username,password. Вивести в консоль пароль кожного користувача
let arr2 = [
    {nameA1: 1, username1: "Oleg", password: "q"},
    {nameA2: 2, username2: "Ivan", password: "w"},
    {nameA3: 3, username3: "Olya", password: "e"},
    {nameA4: 4, username4: "Kolya", password: "r"},
    {nameA5: 5, username5: "Ira", password: "t"},
    {nameA6:6 ,username6: "Kot",password: "y"},
    {nameA7:7,username7: "Vin",password: "u"},
    {nameA8:8,username8: "Jeremi",password: "i"},
    {nameA9:9,username9: "Viktor",password: "o"},
    {nameA10: 10,username10:"Gosha",password: "p" }
];
console.log(arr2[0]["password"]);
console.log(arr2[1]["password"]);
console.log(arr2[2]["password"]);
console.log(arr2[3]["password"]);
console.log(arr2[4]["password"]);
console.log(arr2[5]["password"]);
console.log(arr2[6]["password"]);
console.log(arr2[7]["password"]);
console.log(arr2[8]["password"]);
console.log(arr2[9]["password"]);


//
//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 0;
if (x !== 0){
    console.log("Вірно")}
    else {
        console.log("Невірно")
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код,
// який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 15; //до 59
if (time >= 0 && time <=15){
    console.log("Перша чверть")
}else if (time >=16 && time <= 30){
    console.log("Друга чверть");
}else if (time >= 31 && time <=45){
    console.log("Третя чверть")
}else if (time >= 46 && time <=59){
    console.log("Четверта чверть")
}



// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 31;
if (day >=1 && day <=10){
    console.log("У першу декаду")
}else if (day >=11 && day <=20){
    console.log("У другу декаду");
}else if (day >= 21 && day <= 31){
    console.log("У третю декаду")
}else{
    console.log("Неправильне число")
}

////////////////////////////////

let age = 7;
if (age >= 0 && age <= 17){
    console.log("Не показувати відео,бо воно 18+ а вам тільки " + age + " рік")
}else if (age >= 18){
    console.log("Показати відео якому 18+")
}



// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано
// на цей день (можна замість плану на день, назву дня англійською).

let dayName = 2;

switch(dayName){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("???")
}


//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
        let a = 7;
        let b = 7;

        if (a > b){
            console.log("Число a більше за b |" + " a = " + a);
        }else if (a < b){
            console.log("Число b більше за а |" + " b = " + b);
        }else {
            console.log("Числа рівні | " + a + " = " + b);
        }
//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
//     Напишіть код який,буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в
//     неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

    let x2 = null;
        x2 = x2 || "default";
        console.log(x2);

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
if (coursesAndDurationArray[0]["monthDuration"] >= 5){
    console.log("Супер");
}
if (coursesAndDurationArray[1]["monthDuration"] >= 5){
    console.log("Супер")
}
if (coursesAndDurationArray[2]["monthDuration"] >= 5){
    console.log("Super");
}
if (coursesAndDurationArray[3]["monthDuration"] >= 5){
    console.log("Super");
}else {
    console.log("Курс короткий і менше 5 місяців");
}
if (coursesAndDurationArray[4]["monthDuration"] >= 5){
    console.log("Super");
}
if (coursesAndDurationArray[5]["monthDuration"] >= 6){
    console.log("Super")
}else {
    console.log("Курс короткий і менше 5 місяців")
}
