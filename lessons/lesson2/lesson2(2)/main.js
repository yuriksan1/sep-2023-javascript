let arr;
//      0  1  2     3       4       5
//                               0  1  2
arr = [11,22,33,"qwertyu",true,[44,55,66]];
console.log(arr[0]);
arr[0]=11111;
console.log(arr);
console.log(arr.length);
console.log(arr[5]);
console.log(arr[5][0]);
console.log(arr[5][1]);
console.log(arr[5][2]);
let arrElementElement = arr[5][2];
console.log(arrElementElement);
//-----------------------------------------------------
let music = [
    ["qwe","asd","zxc"],
    [123,456,"789"],
    [true,true,false]
]
console.log(music[1][1]);
//-----------------------------------------------------

let user1_age =31;
let user1_name = "vasa";
let user1_status = true;

let user1 ={
    age:22,
    name:"Yura",
    status:true,
    skills:[
        {plang:"java",exp:2},
        {plang:"js",exp:3},
        {plang:"html",exp:4}
    ],
    dog:{
        nickname: "flafy",
        age:3,
        bread:"spaniel"
    }
}
console.log(user1);
console.log(user1.skills);
console.log(user1.skills[2]);
console.log(user1.skills[2].exp);
console.log(user1.dog.bread);

console.log(user1["age"]);
console.log(user1["skills"][0]["plang"]);

user1.wife = {
    name : "olya",
    age: 19
}

console.log(user1);
console.log(user1.wife.name);

// user1.skills[3] = {plang: "java",exp: 3};
// console.log(user1);
// user1.skills.push({plang: "node",exp:2});
// console.log(user1);

user1.skills[user1.skills.length] = {plang: "kotlin",exp: 11};
console.log(user1);

// let callToMyFriend = {
//     id:12345,
//     to:"+38067890",
//     duration:67
// }
//-----------------------------------------------------

console.log(typeof []);
console.log(typeof {});

let XXX = {};
console.log(typeof XXX);
console.log(Array.isArray(XXX));
//-----------------------------------------------------

let users = [
    {name: "vasya", age: 31, status: false},
    {name: "petya", age: 30, status: true},
    {name: "kolya", age: 29, status: true},
    {name: "olya", age: 28, status: false},
    {name: "max", age: 30, status: true},
    {name: "anya", age: 31, status: false},
    {name: "oleg", age: 28, status: false},
    {name: "andrey", age: 29, status: true},
    {name: "masha", age: 30, status: true},
    {name: "olya", age: 31, status: false},
    {name: "max", age: 31, status: true}
];

console.log(users[1].status);

let a = 0;
let b = a;
console.log(b);

b = 100500;
console.log(a,b);

//--------------------------------------------------------
let obj1 = {};
let obj2 = obj1;//{}
console.log(obj1,obj2);

obj2.id = 100500;
console.log(obj2);

console.log(obj1);//Два obj посилаються на одну комірку пам'яті.

let arr1 = [];
let arr2 = arr1;

arr2[arr2.length] = 100500;
arr2[arr2.length] = 200600;

console.log(arr1);
//--------------------------------------------------------
let color = "red";

if(color === "red"){
    console.log("stop");
}else if (color === "yellow"){
    console.log("wait");
}else if (color === "green"){
    console.log("go")
} else {
    console.log("call to service")
}

// if(confirm("???")){
//     console.log("11111")
// } else {
//   console.log("22222")
// }


// let color2 = prompt("Який колір ти бачиш на світлофорі?");
//
// switch (color2) {
//     case "red":
//         console.log("stop");
//         break;
//     case "yellow":
//         console.log("wait");
//         break;
//     case "green":
//         console.log("go");
//         break;
//
//     default:
//         console.log("call to service");
// }


let color3 = "yellow";
let isRoadClear = "yes";

if (color3 === "red" && isRoadClear === "yes"){
    console.log("stop");
}else if (color3 === "yellow" && isRoadClear === "yes"){
    console.log("wait");
}else if (color3 === "green" || isRoadClear ==="yes"){
    console.log("go")
}else{
    console.log("call to service")
}
















