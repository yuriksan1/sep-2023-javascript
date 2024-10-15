console.log("TEST");

let arr;
arr = [11, 22, "awesdf", true, [11, 22, 33]];
console.log(arr[0]);

arr[0] = 12345;
console.log(arr);
console.log(arr.length);

console.log(arr[4]);
console.log(arr[4][0]);
console.log(arr[4][1]);
let arrElement = arr[4][2];
console.log(arrElement);

let music = [
    ["qwe", "asf", "zxv"],
    ["1234", "4221", "5312"],
    [true, false, true]
];
console.log(music[2][2]);
console.log(music[0][1]);
console.log(music[1][0]);

console.log(typeof []);

let use1_age = 31;
let user1_name = "vasya";
let user1_status = true;

let user1 = {
    age: 25,
    name: "Yura",
    status: false,
    skills: [
        {plang: "html", exp: 0.1},
        {plang: "java", exp: 2},
        {plang: "js", exp: 4321}
    ],
    dog: {
        nickname: "flafy",
        age: 2,
        bread: "spaniel"
    }
}
console.log(user1);
console.log(user1.skills);
console.log(user1.skills[1]);
console.log(user1.skills[2].exp);
console.log(user1.dog);
console.log(user1.dog.bread);

console.log(user1["age"]);
console.log(user1['skills'][1].plang);

user1.wife = {
    name: "Olya",
    age: 23
}
console.log(user1);
console.log(user1.wife.age);

user1.skills[user1.skills.length] = {plang: "noda", exp: 2};
console.log(user1);

user1.skills.push({plang: "ruby", exp: 321, status: false});
console.log(user1);

console.log(typeof []);
console.log(typeof {});

let XXX = [];


console.log(typeof XXX);
console.log(Array.isArray(XXX));

let users = [
    {name: "vasya", age: 31, status: false},
    {name: "petya", age: 30, status: true},
    {name: "kolya", age: 29, status: true},
    {name: "olya", age: 28, status: false},
    {name: "max", age: 30, status: true},
    {name: "anya", age: 31, status: false},
    {name: "oleg", age: 28, status: false},
    {name: "andrey", age: 28, status: true},
    {name: "masha", age: 30, status: true},
    {name: "olya", age: 31, status: false},
    {name: "max", age: 31, status: true}
]

let a = 0;
let b = a;
console.log(b);

b = 100500;

console.log(a, b);

let obj1 = {};
let obj2 = obj1;
console.log(obj1, obj2);

obj2.id = 123;
obj2.name = "abrukos";
console.log(obj2);

console.log(obj1);

let arr1 = [];
let arr2 = arr1;

arr2[arr2.length] = 100500;
arr2[arr2.length] = 324322;

console.log(arr1);

let color ="red";

if (color === "red"){
    console.log("stop");
}else if (color === "yellow"){
    console.log("wait");
}else if (color === "green"){
    console.log("go");
}else {
    console.log("call to service");
}

// if (confirm("????")){
//     console.log("11111");
// }else {
//     console.log("22222");
// }

let color2 = "?";
switch (color2){
    case "green":
        console.log("go");
        break;
    case "yellow":
        console.log("wait");
        break;
    case "red":
        console.log("stop");
        break;

    default:
        console.log("call to service");
}

let color3 = "red";
let isRoadClear = "no";

if (color3 === "green" && isRoadClear === "yes"){
    console.log("go");
}else if (color3 === "yellow" && "yes"){
    console.log("wait");
}else if (color3 === "red" || isRoadClear === "yes"){
    console.log("stop");
}else {
    console.log("call to service!!!");
}












