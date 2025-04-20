// console.log("TEST");
//
// --створити масив з:
//     - з 5 числових значень
let arr1 = [1,2,3,4,5];
console.log(arr1);
console.log("-------------------");

for (let i = arr1.length -1;i >= 0;i--){
    console.log(arr1[i])
}
// - з 5 стічкових значень
let arr2 = ["Hi","World","did","you","know?"];
console.log(arr2);
console.log("-------------------");

for (let i = arr2.length-1;i >=0;i--){
    console.log(arr2[i]);
}
// - з 5 значень стрічкового, числового та булевого типу
let arr3 = ["Oscar",111,999,true,false];
console.log(arr3);
console.log("-------------------");

for (let i = arr3.length -1;i >=0;i--){
    console.log(arr3[i]);
}

// - та вивести його в консоль
//
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let arr4 = [];

arr4[0] = "qwe";
arr4[1] = 222;
arr4[2] = 888;
arr4[3] = true;
arr4[4] = false;

console.log(arr4);
console.log("-------------------");

for (let i = arr4.length -1;i >= 0;i--){
    console.log(arr4[i]);
}
console.log("-------------------");

//
//
//
// - є масив
let arr5 =[2,17,13,6,22,31,45,66,100,-18];
// 1. перебрати його циклом while
let i1 = 0;

while (i1 < arr5.length){
    console.log(arr5[i1]);
    i1++;
}
console.log("-------------------");
let i3 = arr5.length -1;

while (i3 >= 0){
    console.log(arr5[i3] + "!!!");
    i3--;
}


console.log("-------------------");
    // 2. перебрати його циклом for
for (let i = 0;i < arr5.length;i++){
    console.log(arr5[i]);
}
console.log("PART2-------------------");

for(let i = arr5.length -1;i >= 0;i--){
    console.log(arr5[i]);
}


console.log("PART2-------------------");
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
let i = 0;
while (i < arr5.length){
    if (i % 2 !== 0 ){
        console.log(arr5[i]);
    }
    i++;
}
console.log("Part3-------------------");
let i4 = arr5.length -1;

while (i4 >= 0){
    if (i4 % 2 !==0){
        console.log(arr5[i4]);
    }
    i4--;
}



console.log("Part3-------------------");


// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i = 0;i < arr5.length;i++){
if (i % 2 !== 0){
    console.log(arr5[i]);
}
}


console.log("Part4-------------------");
for (let i = arr5.length -1;i >=0;i--){
if (i % 2 !== 0){
    console.log(arr5[i]);
}
}

console.log("Part4-------------------");

// 5. перебрати циклом while та вивести  числа тільки парні  значення
let i6 = 0;

while (i6 < arr5.length){
if (arr5[i6] % 2 === 0){
    console.log(arr5[i6]);
}
i6++
}

console.log("Part5-------------------");
let i7 = arr5.length -1;

while (i7 >= 0){
    if (arr5[i7] % 2 ===0){
        console.log(arr5[i7]);
    }
    i7--;
}


console.log("Part5-------------------");


// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let i = 0;i < arr5.length;i++){
    if (arr5[i] % 2 === 0){
        console.log(arr5[i]);
    }
}
console.log("Part6-------------------");
for (let i = arr5.length - 1;i >= 0;i--){
    if (arr5[i] % 2 === 0){
        console.log(arr5[i]);
    }
}

console.log("Part6-------------------");

// 7. замінити кожне число кратне 3 на слово "okten"
// let arr5 =[2,17,13,6,22,31,45,66,100,-18];

for (let i = 0;i < arr5.length;i++){
    if (arr5[i] % 3 === 0){
        console.log("okten");
    }else {
        console.log(arr5[i]);
    }
}

console.log("Part7-------------------");
for (let i = arr5.length -1;i>=0;i--){
    if (arr5[i] % 3 === 0){
        console.log("octen");
    }else{
        console.log(arr5[i])
    }
}
console.log("Part7-------------------");


// 8. вивести масив в зворотньому порядку.
// let arr5 =[2,17,13,6,22,31,45,66,100,-18];


for (let i = arr5.length -1;i >=0;i--){
    console.log(arr5[i]);
}
console.log("-------------------");


// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let array = [1,2,3,4,5,6,7,8,9,10];
for (let i = 0;i < array.length;i++){
    console.log(array[i]);
}
console.log("-------------------");

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let array2 = ["Hello","Yura","nice","to","meat","you","how","are","you","???"];
for (let i = 0;i < array2.length;i++){
    console.log(array2[i]);
}
console.log("-------------------");

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let array3 = ["Hi","World",1,2,3,4,5,6.66,true,false];
for (let i = 0;i< array3.length;i++){
    console.log(array3[i]);
}
console.log("-------------------");

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let array4 = ["qwe","rtu",99,88,77,66,55,44,true,false];
for (let i = 0;i < array4.length;i++){
    if (typeof array4[i] === "boolean"){
        console.log(array4[i]);
    }
}
console.log("-------------------");

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let array5 = ["asd","zxc",111,222,333,444,555,666,true,false];

for (let i = 0;i < array5.length;i++){
    if (typeof array5[i] === "number"){
        console.log(array5[i]);
    }
}
console.log("-------------------");

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let array6 = ["Call","me","kadzima",1,2,3,4,5,true,false];

for (let i = 0;i < array6.length;i++){
    if (typeof array6[i] === "string"){
        console.log(array6[i]);
    }
}
console.log("-------------------");

//
// - Створити порожній масив.
// Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
let arr = [];

arr[0] = "tyu";
arr[1] = "zxc";
arr[2] = "fed";
arr[3] = "plo";
arr[4] = 1;
arr[5] = 33;
arr[6] = 555.55;
arr[7] = 1111.12345;
arr[8] = true;
arr[9] = false;

for (let i = 0;i < arr.length;i++){
    console.log(arr[i]);
}
console.log("-------------------");

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0;i < 10;i++){
    console.log("Крок № " + i);
    document.write("Крок № " + i + "<br>");
}
console.log("-------------------");

document.write("-------------------------------------"+ "<br>")
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0;i < 100;i++){
console.log("Крок №" + i);
document.write("Крок № " + i +"<br>");
}
console.log("-------------------");
document.write("-------------------------------------"+ "<br>")
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 0;i < 100;i+=2){
    console.log("Крок №"+ i);
    document.write("Крок № " + i +"<br>")
}

console.log("-------------------");
document.write("-------------------------------------"+ "<br>")
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (i = 0;i < 100;i++){
if (i % 2 ===0){
    console.log("Парний крок №" + i + "!!!");
    document.write("Парний крок №" + i + " !!!" + "<br>");
}
}
console.log("-------------------");
document.write("-------------------------------------"+ "<br>")
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (i = 0;i<100;i++){
    if (i % 2 !==0){
        console.log("Непарний крок №" + i + "!?!?!?!");
        document.write("Непарний крок №" + i + "!?!?!!?" + "<br>");
    }
}
//
//
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [
    {
        name: "Harry Potter",
        page: 111,
        avtors: ["Ron","Germiona"],
        genre: "horor"
    },

    {
        name:"20 lie pid vodoyu",
        page:333,
        avtors:"Yura Komov" ,
        genre: "fantazy"
    },
    {
        name:"Sherlok Holmes",
        page:999,
        avtors: "Artur Konan Doyle",
        genre: ["detective","fantazy"]
    }

];
// -знайти наібльшу книжку.

let largestBook = books[0];

for (let i = 1;i < books.length;i++){
    if (books[i].page > largestBook.page){
        largestBook = books[i];
    }
}
console.log("Найбільша книга:" + largestBook.name + " "+ largestBook.page);
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор