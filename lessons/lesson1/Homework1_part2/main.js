// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
let str1 = "hello";
console.log(str1);
let str2 = "owu";
console.log(str2);
let str3 = "com";
console.log(str3);
let str4 = "ua";
console.log(str4);

let num1 = 1;
console.log(num1);
let num2 = 10;
console.log(num2);
let num3 = -999;
console.log(num3);
let num4 = 123;
console.log(num4);
let num5 = 3.14;
console.log(num5);
let num6 = 2.7;
console.log(num6);
let num8 = 16;
console.log(num8);

bool1 = true;
console.log(bool1);
bool2 = false;
console.log(bool2);
//
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName = "Yura";
let middleName = "Komow";
let lastName = "Oleksandrovich";
console.log(`${firstName} ${middleName} ${lastName}`)
//
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
let a = 100;
console.log(typeof a,a)

let b = "100";
console.log(typeof b,b)

let c = true;
console.log(typeof c,c)
//
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
// Отримання ім'я, по батькові та роки користувача через prompt()

// let firstName2 = prompt("Введіть ваше ім'я:");
// let lastName2 = prompt("Введіть ваше по-батькові:");
// let age = prompt("Введіть ваш вік:");
//
// // Виведення даних у консоль
// console.log("Ім'я:", firstName2);
// console.log("По-батькові:", lastName2);
// console.log("Вік:", age);
//-----------------------------------------
let firstName3 = prompt("Ведіть ваше ім'я","name1");
let lastName3 = prompt("Ведіть вашу фамілію","name2");
let age = prompt("Ведіть ваш вік",10);
console.log(`Ім'я ${firstName3}
Прізвище ${lastName3}
Вік ${age}
`);








