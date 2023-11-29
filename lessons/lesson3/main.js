// let a = 0;
// a = a + 1; // a = 0 + 1 = 1
// a += 1; //a = 1 + 1 = 2
// a++;//3
// ++a;//4
//
// let x = 0;
// let y = x++;
// console.log(x,y);

// debugger;
// for (let i = 0;i<10; i++){
//  console.log(i);
// }

// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];

// console.log(users[0])
// console.log(users[1])
// console.log(users[2])
// console.log(users[3])
// console.log(users[4])
// console.log(users[5])
// console.log(users[6])
// console.log(users[7])
// console.log(users[8])
// console.log(users[9])
// console.log(users[10])

// for (let i = 0;i<users.length; i++){
// console.log(users[i])
// }

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
// ];

// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     if (!user.status){
// console.log(user);
//     }
// }

//

// const x = [];
// //x = [1,2,3]; error
// x[0] = "wrrw";
// console.log(x)

// for (const user of users){
//     let skills = user.skills;
//     for (const skill of skills) {
//         console.log(skill);
//     }
//     console.log("------------");
// }

// for (let minutes = 0; minutes < 2; minutes++) {
//     for (let seconds = 0; seconds < 60; seconds++) {
//         console.log(minutes, seconds);
//     }
// }

// let car = {id:1,model:"subaru",power:234,status:true,parts:[111,222,333]};
//
// // console.log(car["id"]);
// // console.log(car["model"]);
// for (let carKey in car) {
//     console.log(carKey,car[carKey])
// }

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

// document.write(`<ul>`)
//
// for (const user of users) {
//     document.write(`<li>`)
//
//     for (const userKey in user) {
//         document.write(`${userKey} - ${user[userKey]} `);
//     }
//     document.write(`</li>`)
// }
// document.write(`</ul>`)

let i = 0;
while (i < users.length){
    console.log(users[i]);
    i++;
}

do {
console.log(`wwqeqeq`)
}while (false)
