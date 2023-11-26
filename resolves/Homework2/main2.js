// // Масиви та об'єкти:
// // - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// let arr = [1,2,3,4,"dog","people","go","went",true,false,]
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);
// console.log(arr[6]);
// console.log(arr[7]);
// console.log(arr[8]);
// console.log(arr[9]);
// // - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// let book1={
// title:"Harry",
// pageCount:"11321",
//     genre:"horor"
// }
// console.log(book1)
//
// let book2={
//     title: "Red",
//     pageCount: "123324",
//     genre: "horor"
// }
// console.log(book2);
//
// let book3 ={
//     title:"72 hour",
//     pageCount:"123241",
//     genre:"horor"
// }
// console.log(book3);
//


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4 = {
    title:"1 hour",
    pageCount:"1233423",
    genre:"cartoon",
    autors:[{name:"Jason",age:42}]
}
console.log(book4)

let book5={
    title:"2 hour",
    pageCount:"1222342",
    autors:[{name:"Yura",age:42}]
}
console.log(book5)

let book6={
    title:"3hour",
    pageCount:"132423",
    autors:[{name:"Gosha",age:34}]
}
console.log(book6)
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let userArr=[
    {name:"yura",username:"yuriksan1",password:123423},
    {name:"misha",username:"yuriksan2",password:146346},
    {name:"artur",username:"yuriksan3",password:125235},
    {name:"oleh",username:"yuriksan4",password:1576547},
    {name:"ivan",username:"yuriksan5",password:1253274},
    {name:"vasyl",username:"yuriksan6",password:14563},
    {name:"orest",username:"yuriksan7",password:123556},
    {name:"ostap",username:"yuriksan8",password:134536},
    {name:"vova",username:"yuriksan9",password:1436436},
    {name:"igor",username:"yuriksan10",password:13636},
];
console.log(userArr[0].password);
console.log(userArr[1].password);
console.log(userArr[2].password);
console.log(userArr[3].password);
console.log(userArr[4].password);
console.log(userArr[5].password);
console.log(userArr[6].password);
console.log(userArr[7].password);
console.log(userArr[8].password);
console.log(userArr[9].password);


// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let x = -3;
// if (x !== 0){
//     console.log("Вірно")
// }else{
//     console.log("Невірно")
// }

// x!==0 ? console.log("True") : console.log("False")
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 18;
if (time > 0 && time <= 15) {
    console.log("Перша чверть")
} else if (time > 15 && time <= 30) {
    console.log("Друга чверть")
} else if (time > 30 && time <= 45) {
    console.log("Третя чверть")
} else if (time > 45 && time <= 59) {
    console.log("Четверта черть")
} else {
    console.log("неправильне число")
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 6;
if (day >= 1 && day <= 10) {
    console.log("Перша декада")
} else if (day > 10 && day <= 20) {
    console.log("Друга декада")
} else if (day > 20 && day <= 31) {
    console.log("Третя декада")
}else{
    console.log("Неправильне число")
}
// // - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// let week = +prompt("Нажміть день тижня",1)
// switch (week){
//     case 1:
//         console.log("Встав");
//         break;
//     case 2:
//         console.log("Поїв");
//         break;
//     case 3:
//         console.log("Почистив зуби");
//         break;
//     case 4:
//         console.log("Пішов в політех");
//         break;
//     case 5:
//         console.log("Прийшов з політеху");
//         break;
//     case 6:
//         console.log("Помився");
//         break;
//     case 7:
//         console.log("Ліг спати");
//         break
//
//     default:
//         console.log("EROR")
// }
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let num1 = 10;
let num2 = 20;

if (num1 === num2) {
    console.log("Числа рівні")
}else if (num1 > num2) {
    console.log("Max is " + num1)
}else{
    console.log("Max is " + num2)
}

//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
// let x = 1;
// x = x || "defauld";
// console.log(x)

let x = 1 ||"default";
console.log(x)

//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let array = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (array[0].monthDuration>=5){console.log("Супер - курс довгий")};
if (array[1].monthDuration>=5){console.log("Супер - курс довгий")};
if (array[2].monthDuration>=5){console.log("Супер - курс довгий")};
if (array[3].monthDuration>=5)
{console.log("Супер - курс довгий")
}else {
    console.log("Курс короткий")
}
if (array[4].monthDuration>=5){console.log("Супер - курс довгий")};
if (array[5].monthDuration>=5) {
    console.log("Супер - курс довгий")
}else {
    console.log("Курс короткий")
}
