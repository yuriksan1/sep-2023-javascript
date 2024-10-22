// console.log("TEST");
//  let a = 0;
//  a = a + 1;
//  a += 1;
//  a++;
//  ++a;
// console.log(a);
//
// let x = 0;
// let y = x++;
// console.log(x, y);

// for (let i = 0;i < 10;i++){
// console.log(i);
// }

// let users = [
//     {name: "vasya", age: 31, status: false},
//     {name: "petya", age: 30, status: true},
//     {name: "kolya", age: 29, status: true},
//     {name: "olya", age: 28, status: false},
//     {name: "max", age: 30, status: true},
//     {name: "anya", age: 31, status: false},
//     {name: "oleg", age: 28, status: false},
//     {name: "andrey", age: 29, status: true},
//     {name: "masha", age: 30, status: true},
//     {name: "olya", age: 31, status: false},
//     {name: "max", age: 31, status: true}
// ];
//
// for(let i = 0;i < users.length;i++){//для того щоб зробити більший крок i+=2
//     if (i % 2 === 0 ){ // тут видасть парні індекси в масиві
//         console.log(users[i]);
//     }
// }

// let users = [
//     {name: "vasya", age: 31, status: false},
//     {name: "petya", age: 30, status: true},
//     {name: "kolya", age: 29, status: true},
//     {name: "olya", age: 28, status: false},
//     {name: "max", age: 30, status: true},
//     {name: "anya", age: 31, status: false},
//     {name: "oleg", age: 28, status: false},
//     {name: "andrey", age: 29, status: true},
//     {name: "masha", age: 30, status: true},
//     {name: "olya", age: 31, status: false},
//     {name: "max", age: 31, status: true}
// ];

// for (let i = 0;i < users.length;i++){
//     const user = users[i];
//     if (user.status === true){ //можна скоротити до user.status(буде значення true) або !user.status(бо буде значення false)
//         console.log(user);
//     }
// }

// for (const u of users){
//     if (u.age <= 30){
//         console.log(u);
//     }
// }
// const x = [];
// // x = [1, 2, 3]; error//це приклад як змінити константу,можна записати в квартиру(в масив) мешканця(якесь значення)
// x[0] = 'asdasd';
// console.log(x);

// let users = [
//     {skills: ['html', 'js', 'java'], name: 'vasya', age: 31, status: false},
//     {skills: ['html', 'js', 'C#'], name: 'petya', age: 30, status: true},
//     {skills: ['html', 'js'], name: 'kolya', age: 29, status: true},
//     {skills: ['html', 'js', 'node'], name: 'olya', age: 28, status: false},
//     {skills: ['html', 'js'], name: 'max', age: 30, status: true},
//     {skills: ['html', 'js', 'react'], name: 'anya', age: 31, status: false},
//     {skills: ['html', 'js', 'react', 'node'], name: 'oleg', age: 28, status: false},
//     {skills: ['html', 'js', 'react', 'node'], name: 'andrey', age: 29, status: true},
//     {skills: ['html', 'js', 'react', 'node'], name: 'masha', age: 30, status: true},
//     {skills: ['html', 'js', 'react', 'node'], name: 'olya', age: 31, status: false},
//     {skills: ['html', 'js', 'react', 'node'], name: 'max', age: 31, status: true}
//  ];
//
// for (let user of users){
//     for (let skill of user.skills){
//         console.log(skill);
//     }
//     console.log("--------------");
// }

for (let day = 0;day < 2;day++){
    for (let hours = 0;hours < 24;hours++){
        console.log(day, hours);
    }
}

let car = {
    id: 934,
    model:"subaru",
    power:234,
    status:true,
    parts:[111,222,333]
}

console.log(car["id"]);
console.log(car["model"]);

for (let carKey in car){
    console.log(carKey,car[carKey]);
}

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true,qwe:'kjsghsjgfdsj'},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true,asd:'qwe'},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

document.write('<ul>');

for (const user of users){
    document.write('<li>');

    for (const userKey in user){
        document.write(`${userKey} - ${user[userKey]} `)
    }

    document.write('</li>');
}

document.write('</ul>');

let i = 0;
while (i < users.length){
    console.log(users[i]);
    i++
}

do {
    console.log("Hello Yura");
}while (false) // перше виводить Hello Yura,потім робить перевірку

//---------------------------------------------------------------------------------
let users2 = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true,qwe:'kjsghsjgfdsj'},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true,asd:'qwe'},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
    for (let i = 0;i < users2.length;i++){
        console.log(users2[i]);
    }

    //--------------------------------
for (let i = 0;i < 5;i++){
    console.log(i);
}
//------------------------------------
let i3 = 0;
while (i3 < users2.length){
    console.log(users2[i3]);
    i3++;
}

//------------------------------------
let i2 = 0;
while (i2<7){
    console.log(i2);
    i2++;
}

console.log("------------------------");
//------------------------------------
let i4 = 0;

do{
    console.log(i4);
    i4++;
}while (i4<8);
//-------------------------------------
let obj = {a:1,b:2,c:3};

for (prop in obj){
    console.log(prop + ":" + obj[prop]);
}
//-------------------------------
let arr = [111,222,333];

for (let value of arr){
    console.log(value);
}














