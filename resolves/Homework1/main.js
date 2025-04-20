// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
 let string1 = "hello";
console.log(string1);

let string2 = "owu";
console.log(string2);

let string3 = "com";
console.log(string3);

let string4 = "ua";
console.log(string4);

let number1 = 1;
console.log(number1);

let number2 = 10;
console.log(number2);

let number3 = -999;
console.log(number3);

let number4 = 123;
console.log(number4);

let number5 = 3.14;
console.log(number5);

let number6 = 2.7;
console.log(number6);

let number7 = 16;
console.log(number7);

let boolean1 = true;
console.log(boolean1);

let boolean2 = false;
console.log(boolean2);


//
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
// З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = "Yura";
let middleName = "Komov";
let lastName = "Olecsandrovich";

console.log(firstName + " " + middleName + " " + lastName);

//
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let a = 100;
console.log(typeof a);

let b = "100";
console.log(typeof b);

let c = true;
console.log(c);
//
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям,
// По-Батькові та роками. та вивести в консоль

let name1 = prompt("Ваше ім'я");
let name2 = prompt("Ваша фамілія");
let name3 = prompt("По батькові");

console.log(name1 +" "+ name2 + " " + name3);