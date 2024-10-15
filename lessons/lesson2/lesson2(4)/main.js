// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr1 = [1, 33, 123, 3121, "Hello", "Yura", "now", "!!!", true, false];
console.log(arr1[0],arr1[1],arr1[2],arr1[3],arr1[4],arr1[5],arr1[6],arr1[7],arr1[8],arr1[9]);

console.log(arr1[0]);
console.log(arr1[1]);
console.log(arr1[2]);
console.log(arr1[3]);
console.log(arr1[4]);
console.log(arr1[5]);
console.log(arr1[6]);
console.log(arr1[7]);
console.log(arr1[8]);
console.log(arr1[9]);
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: "Harry Potter",
    pageCount: 111,
    genre: "horor"
}
console.log(book1);

let book2 = {
    title: "Sherlok",
    pageCount: 222,
    genre: "detective"
}
console.log(book2);

let book3 = {
    title: "Alan Wake",
    pageCount: 333,
    genre: "smile"
}
console.log(book3);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
// Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4 = {
    title: "Shrek",
    pageCount: 444,
    genre: "smile",
    autors: [{
        name: "Ostin",
        age: 23
    }]
}
console.log(book4);

let book5 = {
    title: "Avatar",
    pageCount: 555,
    genre: "horor",
    autors: [{
        name: "Aang",
        age: 14
    }]
}
console.log(book5);

let book6 = {
    title: "Batman",
    pageCount: 666,
    genre: "detective",
    autors: [{
        name: "Bruce",
        age: "35"
    }]
}
console.log(book6);

// - Створити масив з 10 об'єктами які описують сутніть "користувач".
// Поля: name, username,password. Вивести в консоль пароль кожного користувача
let arr = [
    {name: "yura", username: "yurkasan", password: 1},
    {name: "oleg", username: "olegsan", password: 2},
    {name: "ivan", username: "ivansan", password: 3},
    {name: "nasty", username: "nastysan", password: 4},
    {name: "igor", username: "igorsan", password: 5},
    {name: "seba", username: "sebasan", password: 6},
    {name: "ilona", username: "ilonasan", password: 7},
    {name: "glib", username: "glibsan", password: 8},
    {name: "mukola", username: "mukolasan", password: 9},
    {name1: "stefa", username: "stefasan", password: 10},

]
console.log(arr[0].password);
console.log(arr[1].password);
console.log(arr[2].password);
console.log(arr[3].password);
console.log(arr[4].password);
console.log(arr[5].password);
console.log(arr[6].password);
console.log(arr[7].password);
console.log(arr[8].password);
console.log(arr[9].password);


//
//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 0;
if (x !== 0) {
    console.log("Вірно");
} else {
    console.log("Невірно");
}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
// до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 46;

if (time >= 0 && time <= 15) {
    console.log("Перша чверть");
} else if (time >= 16 && time <= 30) {
    console.log("Друга чверть");
} else if (time >= 31 && time <= 45) {
    console.log("Третя чверть");
} else if (time >= 46 && time <= 59) {
    console.log("Четверта чверть");
} else {
    console.log("Ви ввели невірне значення");
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду)
// місяця потрапляє це число (у першу, другу чи третю).
let day = 25;

if (day >= 1 && day <= 10) {
    console.log("Перша декада");
} else if (day >= 11 && day <= 20) {
    console.log("Друга декада");
} else if (day >= 21 && day <= 31) {
    console.log("Третя декада");
} else {
    console.log("Невірно введене число");
}


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на
// екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// let week = 2;
//
// switch (week){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//
//     default :
//         console.log("Неправельний номер дня тижня");
// }
let week = "Sunday";

switch (week) {
    case "Monday":
        console.log("1.Підйом 7.30\n" +
            "2.Ранкова гімнастика 7.30–7.45\n" +
            "3.Водні процедури 7.45–8.00\n");
        break;
    case "Tuesday":
        console.log("4.Сніданок 8.00–8.15\n" +
            "5. Дорога до школи 8.15–8.30\n" +
            "6. Уроки та перерви 8.30–13.30\n");
        break;
    case "Wednesday":
        console.log("7.Другий сніданок 12.15–12.30\n" +
            "8. Дорога зі школи додому 13.30–13.45");
        break;
    case "Thursday":
        console.log("9.Обід 14.00–14.15\n" +
            "10.Відпочинок на свіжому повітрі 14.15–15.15");
        break;
    case "Friday":
        console.log("11.Виконання домашніх завдань 15.15–16.30\n" +
            "12.Дорога до центру дитячої творчості 16.30–17.00");
        break;
    case "Saturday":
        console.log("13.Участь у гуртках за інтересами 17.00–18.30\n" +
            "14.Дорога додому 18.30–19.00\n");
        break;
    case "Sunday":
        console.log("15.Вечеря 19.00–19.15\n" +
            "16.Вільний час для хобі та спілкування 19.15–21.15\n" +
            "17.Водні процедури 21.15–21.30\n" +
            "18.Сон 21.30–7.00");
        break;

    default :
        console.log("Ви ввели неправельний день тижня,спробуйте щераз");


}

//
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let x2 = 50;
let y2 = 200;

if (x2 > y2) {
    console.log(x2)
} else if (y2 > x2) {
    console.log(y2);
} else {
    console.log("Числа рівні");
}
//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
//     Напишіть код який,буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в
//     неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
let x3 = 0;

if (!x3) {
    console.log("default")
}

let x4 = 0 && "default2";// && - чекає на 2 true
console.log(x4);
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
} else {
    console.log("Курс менший 5 місяців");
}

if (coursesAndDurationArray[1].monthDuration >= 5) {
    console.log("Супер");
} else {
    console.log("Курс менший 5 місяців");
}

if (coursesAndDurationArray[2].monthDuration >= 5) {
    console.log("Супер");
} else {
    console.log("Курс менший 5 місяців");
}

if (coursesAndDurationArray[3].monthDuration >= 5) {
    console.log("Супер");
} else {
    console.log("Курс менший ніж 5 місяців");
}

if (coursesAndDurationArray[4].monthDuration >= 5) {
    console.log("Супер");
}else {
    console.log("Курс менший ніж 5 місяців");
}

if (coursesAndDurationArray[5].monthDuration>=5){
    console.log("Супер");
}else {
    console.log("Курс менший ніж 5 місяців");
}