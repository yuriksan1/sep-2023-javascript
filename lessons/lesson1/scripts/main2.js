//number
let n1;
n1 = 123;
//string
let s1;
s1 = "Hello Yura";//``-можна писати в таких лапках,лапки називаються БЕККВОТИ.
s1 = "qwertyuio";//Можна переназначати значення
//boolean
//> < >= <= != === !== булеві оператори
let b1 = 5>4;
console.log(b1);
console.log(n1);
console.log(s1);

let bool = 5 == "5";// "5" == "5" -> 0091 == 0091.Оператор не строгої еквівалентності,буде порівнювати по аскі-кодам.
console.log(bool)

//Порівнює число і стрінгу
let bool1 = 100 === "100";// строга еквівалентність оператор
console.log(bool1);

let x = null;//null можна створити заглушку і потім вписати всередину об'єкт.
console.log(typeof x);//показує який тип даних знаходиться всередині(number,string,boolean);

//number
//string
//boolean
//undefined
//null
//NaN
//Symbol
//object [] {}

let a = 10;
let b = 20;
console.log(a + b);

console.log(10 % 3);

let str1 = "Hi";
let str2 = "Yura";
console.log(str1 + " " + str2 + "!!!");
console.log(`${str1} ${str2} !!!`)

let ss1 = "100";
let ss2 = "200";
console.log(ss1 - ss2);//-100
console.log(ss1 + ss2);//100200,операція + стрінгу конкатинує

//Переведення number to string
let x1 = 100;
console.log(x1 + "");//100
console.log(300 + "");//300
console.log("" + 100 * 200);//20000

//Переведення string to number
let ns = "100500";
let nn = +ns;
console.log(nn);
let number = parseInt("123456asdfh");//Вертає число
console.log(number);

console.log(true + true);//2(true = 1/false = 0)
console.log(true + false);//1

console.log(100 + true);101
console.log(100 / true);100

//Переведення boolean to number
console.log(+true);//1
console.log(+false);//0

//Переведення number to boolean
console.log(!!100);//true
console.log(!!-100);//true
console.log(!!"qwerty");//true-перевели стрінг в буліан

console.log(!!0);//false
console.log(!!"");//false
console.log(!!null);//false
console.log(!!NaN);//false
console.log(!!undefined);//false

console.log(!!-Infinity);//true
console.log(!!Infinity);//true



