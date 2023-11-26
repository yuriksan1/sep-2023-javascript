 let arr;
// //     0  1    2     3 4
// //                      0  1  2
// arr= [11,22,"asa",true,[11,22,33]]; //[]-масив {}-обєкт
// console.log(arr[0]);
// arr[0]=100500;
// console.log(arr);
// console.log(arr.length);
// console.log(arr[4]);
// console.log(arr[4][0]);
// console.log(arr[4][1]);
// console.log(arr[4][2]);
//
//
// let music =[
//     ["adw","dawd","awdaq"],
//     ["123231","123123","123424"],
//     [true,true,false]
// ];
//
// console.log(music[1][1])
//
// console.log(typeof[]);
//
// let user1_age = 31;
// let user1_name ="vasa";
// let user1_status = true;

// let user1={
//     age:31,
//     name:"vasa",
//     status:true,
//     skills:[
//         {plang:"html",exp:1},
//         {plang:"css",exp:1},
//         {plang:"js",exp:2}],
//     dog:{
//         nickname:"fluffy",
//         age:2,
//         bread:"spaniel"
//     }
// }
// console.log(user1);
// console.log(user1.skills);
// console.log(user1.skills[2]);
// console.log(user1.dog.age)
// console.log(user1.skills[2])
// console.log(user1.skills[2].exp)
//
// // console.log(user1["age"]);
// // console.log(user1["skills"][0]["plang"]);
//
// user1.wife={
//     name:"olya",
//     age:19
// }
// console.log(user1);
//
// // let callToMyFriend={
// //     id:123445,
// //     to:"+38098787",
// //     doration:67
// // }
//
// user1.skills[3]={plang: "java",exp: 1}
//
// user1.skills[user1.skills.length] = {plang: "c#",exp: 1234,status:false}
// console.log(user1);
// user1.skills.push({plang: "nodejs",exp: 12});

// if (5>4){
//     console.log("!!!!!");
// }

// let color = prompt("який колір ти бачиш?");
//
// if (color === "green"){
//     console.log("go");
// }else if (color === "yellow"){
//     console.log("wait");
// }else if(color === "red"){
//     console.log("stop");
// }else {
//     console.log("call to service");
// }

// if (confirm("???????")){
//     console.log("111111")
// }else{
//     console.log("222222")
// }

// let color = prompt("який колір ти бачиш?");
// switch (color){
//     case "green":
//         console.log("go");
//         break;
//     case "yellow":
//         console.log("wait")
//         break;
//     case"red":
//         console.log("stop");
//         break;
//
//     default:
//         console.log("call to service")
//
// }
 let color = "green";
 let isRoadClear="yes";

 if (color === "green"){
     if (isRoadClear==="yes"){
         console.log("go");
     }
 }else if (color === "yellow" && isRoadClear==="yes"){
     console.log("wait");
 }else if(color === "red"|| isRoadClear==="yes"){
     console.log("stop");
 }else {
     console.log("call to service");
 }


