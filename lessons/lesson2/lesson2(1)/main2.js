arr = [11,22,"qwer",true,[11,22,33]];
console.log(arr[0]);
arr[0]= 100500;
console.log(arr);
console.log(arr.length);
console.log(arr[4]);
console.log(arr[4][0]);
console.log(arr[4][1]);
console.log(arr[4][2]);


let music=[
    ["qwr","wer","zxc"],
    ["123","432",12456],
    [true,true,false]
];

console.log(music[1][1]);


let user_age1 = 31;
let user_name1 = "Yura";
let user_status1 = true;

let user1={
    age:31,
    name:"Yura",
    status:true,
    skills:[
        {plang:"css",exp:1},
        {plang:"html",exp:2},
        {plang:"js",exp:5}],
    dog:{
        nickname:"flufi",
        age:8,
        breed:"spaniels"
    }
}
console.log(user1);
console.log(user1.skills);
console.log(user1.skills[2]);
console.log(user1.skills[2].exp)
console.log(user1.dog.age);

console.log(user1["age"]);
console.log(user1["skills"][0]["plang"]);

user1.wife = {
    name:"olya",
    age:19
}
console.log(user1);

user1.skills[3] = {plang:"java",exp: 9}//Додаєм в масив
console.log(user1);
//АБО
// user1.skills.push({plang:"nodejs",exp:12})
// console.log(user1);
//АБО
user1.skills[user1.skills.length]= {plang: "c#",exp: 1234,status:false}


let callToMyFriend = {
    id:123456,
    to:"+380567890",
    duration:67
}

console.log(typeof []);
console.log(typeof {});

let XXX = [];
console.log(typeof XXX);
console.log(Array.isArray(XXX));//Якщо true - це масив,якщо false-це обє'кт


let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
    ];

console.log(users[1].status);


// let color = "yellow";
// if (color === "green"){
//     console.log("Go");
// }else if (color === "yellow"){
//     console.log("Wait")
// }else if (color === "red"){
//     console.log("Wait");
// }else{
//     console.log("Call to service")
// }


// if (confirm("????")){
//     console.log("111");
// }else{
//     console.log("222");
// }

// let color = "???";
// switch (color){
//     case "green":
//         console.log("go");
//         break;
//     case "yellow":
//         console.log("wait");
//         break;
//     case "red":
//         console.log("stop");
//         break;
//
//     default:
//         console.log("call to service");
// }


let color = "red";
let isRoadClear = "no";

if (color === "green" && isRoadClear === "yes") {
    console.log("go");
} else if (color === "yellow" && isRoadClear === "yes") {
    console.log("wait");
} else if (color === "red" || isRoadClear === "yes") {
    console.log("stop");
} else {
    console.log("call to service");
}


