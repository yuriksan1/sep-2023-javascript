// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function circle(a,b) {
let res = a * b;
return res;
}

console.log(circle(3, 5));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circle2(r) {
    let res = Math.PI * r * r;
    return res;
}

console.log(circle2(3));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cilinder(r,h) {
    let res = 2 * Math.PI * r *(h + r);
    return res;
}

console.log(cilinder(2, 3));
// - створити функцію яка приймає масив та виводить кожен його елемент
function printOfArray(array) {
   for (const item of array){
       console.log(item)
   }
}

printOfArray([11,222,3333,true,"qwerty"]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraf(text) {
    document.write(`<p>${text}</p>`)
}

paragraf("Hello Yura");
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function foo(text) {
    document.write(`
<ul>
<li>${text}</li>
<li>${text}</li>
<li>${text}</li>
</ul>
`)
}

foo("World");
//АБО
function foo2(text) {
    document.write(`<ul>`);
    for (let i = 0;i < 3;i++){
        document.write(`<li>${text}</li>`)
    }

    document.write(`</ul>`);
}
foo2("This is a car");


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function foo3(text,number) {
    document.write(`<ul>`);
    for (let i = 0;i < number;i++){
        document.write(`<li>${text}</li>`);
    }

    document.write(`/<ul>`);
}
foo3("TV",3);
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250