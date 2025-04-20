// console.log("test");
//
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
    function rectangle (a,b){
    return a * b;
    }

    console.log(rectangle(2, 5));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
    function circle (r){
        return Math.PI * Math.pow(r,2);
    }
    console.log(circle(4));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
    function cilinder(r,h) {
        return 2 * Math.PI * r * h;
    }
    console.log(cilinder(3,6));
// - створити функцію яка приймає масив та виводить кожен його елемент
//     let users = [1,2,3,"hi","world",true,false];
//
//     function array(users) {
//         for (let arr of users){
//             console.log(arr);
//         }
//     }
//     array(users);

//or

    function loger(array){
        for (arr of array){
            console.log(arr);
        }
    }
    loger([32131,"Hello",true]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragrafText(text) {
    document.write(`<p>${text}</p>`);
}
paragrafText("Bla-bla-bla");
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function create(text) {
    document.write(`<ul>
<li>${text}</li>
<li>${text}</li>
<li>${text}</li>
</ul>`)
}
create("Hello world");
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
    function create2(text,count2) {
        document.write(`<ul>`)
            for (let i = 0;i < count2;i++){
                document.write(`<li>${text}</li>`)
            }
        document.write(`</ul>`)
    }
    create2("Hello people",5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function primitiveElement(array2){
    document.write(`<ul>`)
        for  (let key of array2){
            document.write(`<li>${key}</li>`)
        }
    document.write(`</ul>`)
}
   primitiveElement([1233,"kokos",false])
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
    let spisok = [
        {id:1,name:"Yura",age:22},
        {id:2,name:"Oleg",age:32},
        {id:3,name:"Vasya",age:44}
    ];

    function name1(array) {
        for (let key of array){
            document.write(`<div>${key.id} - ${key.name} - ${key.age}</div>`)
        }
    }
    name1(spisok);

// - створити функцію яка повертає найменьше число з масиву
    let arrayNumber = [12,33,454,3,45];

    function minNumber(array) {
        for (let i = 0;i < arrayNumber;i++){

        }
    }
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250