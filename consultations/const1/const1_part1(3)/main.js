console.log("test");

// let user = prompt("Ведіть текст","go");
//
// if (user === "go"){
//     console.log("Home");
// }else {
//     console.log("Sleep");
// }

//-----------------------------------------------------------
// let user2 = prompt("Ведіть текст","user2");
// let age = 18;
// switch (user2) {
//     case "user2":
//         if (age === 18) {
//             alert("It is USER2");
//             console.log("USERS2")
//         }
//         break;
//     case  "admin":
//         alert("It is ADMIN");
//         break;
//
//     default:
//         alert("ERROR");
// }
//-----------------------------------------------------------
let array = ["user1","user2","user3"];
let array2 = [1,2,3,4,5];
let name = 10500;
console.log(name);

let arr = [[{},{},{},{}],{name:"Ivan"},name];
console.log(arr[1].name);
console.log(arr);
//-----------------------------------------------------------
let coursesArray =[
    [
        {
            title:"JavaScript Complex",
            monthDuration:5,
            hourDuration:909,
            modules:["html","java"]
        },
        {
            title:"HTML",
            monthDuration: 111,
            hourDuration: 333,
            modules:["PHP","MySQL"]
        }
    ]
]
console.log(coursesArray[0][1]);
console.log(coursesArray[0][1].modules);
//Або 2 варіант написання
console.log(coursesArray[0][1]["title"]);
coursesArray[0][1].modules[coursesArray[0][1].modules.length] = "NEWWWW";// додаємо в кінець нове значення
console.log(coursesArray[0][1]);
console.log(coursesArray);
//-----------------------------------------------------------
let user4 = {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    address: {
        street: 'Hoeger Mall',
        suite: 'Apt. 692',
        city: 'South Elvis',
        zipcode: '53919-4257',
        geo: {
            lat: '29.4572',
            lng: '-164.2990'
        }
    }}

console.log(user4.address.geo.lng);






















