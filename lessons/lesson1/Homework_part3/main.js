console.log("TEST");

// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
let s1 = "Hello";
let s2 = "owu";
let s3 = "com";
let s4 = "ua";
console.log(s1, s2, s3, s4);

let n1 = 1;
let n2 = 10;
let n3 = -999;
let n4 = 123;
let n5 = 3.14;
let n6 = 2.7;
let n7 = 16;
console.log(n1, n2, n3, n4, n5, n6, n7);

let b1 = true;
let b2 = false;
console.log(b1, b2);


//
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
//
let firstName = "Yura";
let middleName = "Komov";
let lastName = "Oleksandrovich";
console.log(firstName + " " + middleName + " " + lastName);


// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
let a = 100;
console.log(typeof a);

let b = "100";
console.log(typeof b);

let c = true;
console.log(typeof c);


//
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям,
// По-Батькові та роками. та вивести в консоль

let firstName2 = prompt("Ведіть ваше ім'я", "Jason");
let middleName2 = prompt("Ведіть вашу фамілію", "Stathem");
let lastName2 = prompt("Ведіть скільки вам років", "40");
console.log(firstName2, middleName2, lastName2);



