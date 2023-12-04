// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function sRec(a,b){
    return a * b;
}
console.log(sRec(10,20));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function sRound(r){
    return 2 * Math.PI * r;
}
console.log(sRound(11));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function sCelinder(r,h){
    return 2 * Math.PI * r * h;
}
console.log(sCelinder(2,3));
// - створити функцію яка приймає масив та виводить кожен його елемент
function logger(array){
    for (const item of array){
        console.log(item);
    }
}
logger([11,32,"hello"])
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createP(text) {
    document.write(`<p>${text}</p>`)

}
createP("Hello World!!!")

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createUL(text){
    document.write(`<ul>
        <li>${text}</li>
        <li>${text}</li>
        <li>${text}</li>
    </ul>`)
}
createUL("Hi Tomas")

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createUl2(text,count){
    document.write(`<ul>`)
    for(let i = 0;i < count;i++){
        document.write(`<li>${text}</li>`)
    }

    document.write(`</ul>`)
}
createUl2("Yura",4);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function createLi(array){
    document.write(`<ul>`);
    for ( const item of array){
        document.write(`<li>${item}</li>`)
    }

    document.write(`</ul>`);
}
createLi([11,"tomas",false]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const users = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28},
    {id: 5, name: 'max', age: 30},
    {id: 6, name: 'anya', age: 31},
    {id: 7, name: 'oleg', age: 28},
    {id: 8, name: 'andrey', age: 29},
    {id: 9, name: 'masha', age: 30},
    {id: 10, name: 'olya', age: 31},
    {id: 11, name: 'max', age: 31}
];

function objArr(arr){
    for (const user of arr){
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)
    }
}
objArr(users)


// - створити функцію яка повертає найменьше число з масиву
const numbers = [-3434, 234, 55, 45, -432, 765, 3, 2, 6, 0];

function minOfArr(arr){
let min = arr[0];
for (const num of arr){
    if(min > num) min = num;
}
return min;
}
console.log(minOfArr(numbers));

//АБО

function minOfArr1(arr){
    let min = arr[0];
    for (let i = 1;i < arr.length;i++){
        if (min > arr[i]){
            min = arr[i]
        }
    }
    return min;
}
console.log(minOfArr1(numbers))
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr){
    let result = 0;
    for (const num of arr){
        result += num;
    }
    return result;
}

console.log(sum([1,2,10]));


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr,index1,index2){
    const num1 = arr[index1];
    const num2 = arr[index2];
    arr[index1] = num2;
    arr[index2] = num1;
    return arr;
}
console.log(swap([11,22,33,44],0,1));


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH,currencyValues,exchangeCurrency){
    for (const currency of currencyValues){
        if (currency.currency === exchangeCurrency){
            return sumUAH / currency.value
        }
    }
}

const result = exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD')
console.log(result)














