console.log("!!!")
// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
let s1 = "hello";
console.log(s1)
let s2 = "owu";
console.log(s2);
let s3 = "com";
console.log(s3);
let s4 = "ua";
console.log(s4);

let n1 = 1;
console.log(n1);
let n2 = 10;
console.log(n2);
let n3 = -999;
console.log(n3);
let n4 = 123;
console.log(n4);
let n5 = 3.14;
console.log(n5);
let n6 = 2.7;
console.log(n6);
let n7 = 16;
console.log(n7);

let b1 = true;
console.log(b1);
let b2 = false;
console.log(b2);
//
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
// З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName = "Yura";
let middleName = "Komov";
let lastName = "Oleksandrovich";
console.log(`${firstName} ${middleName} ${lastName}`)
//
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
let a = 100;
console.log(typeof a);

let b = "100";
console.log(typeof  b);

let c = true;
console.log(typeof c);
//
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
// та вивести в консоль
let name = prompt("Ваше Ім'я","name1");
let surname = prompt("Ведіть вашу фамілію","name2");
let year = prompt("Ведіть кількість років",0);
console.log(`${name} ${surname} ${year}`);
