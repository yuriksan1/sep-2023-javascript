console.log("TEST");

//
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div>Hello Yura</div>`)
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i2 = 0; i2 < 10; i2++) {
    document.write(`<div>Hi World ${i2}</div>`)
    // document.write(`<div>` + i2 + " "+ "Bla bla" +`</div>`)
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i3 = 0;

while (i3 < 20) {
    document.write(`<h1>Tom and Jerry</h1>`)
    i3++;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let i4 = 0;

while (i4 < 20) {
    document.write(`<h1>Oscar ${i4}</h1>`);
    i4++;
}

//
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

// for (let list of listOfItems) {
//     document.write(`<ul>
//     <li>${list}</li>
// </ul>`)
// }

document.write(`<ul>`)

for (let list2 of listOfItems){
    document.write(`<li>${list2}</li>`)
}

document.write(`</ul>`)
//
// -----------------------------------------------
//
//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://miychay.com/upload/iblock/7c6/7c664063ba5e6215cb3567de3330c187.jpg'
    },
];

document.write(`<div>`);

for (prop of products){
    document.write(`<div class="product-card">
     <h3 class="product-title">${prop.title}. Price - ${prop.price}</h3>
 <img src=${prop.image} alt="" class="product-image">
 </div>`)
}

document.write(`</div>`);

//
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту


//
//
// --------------------
//     є масив
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
// за допомоги циклу вивести:
//     - користувачів зі статусом true
for (let i6 = 0;i6 < users.length;i6++){
    if (users[i6].status === true){
        console.log(users[i6]);
    }
}

console.log("------------------");
// - користувачів зі статусом false
for (let i7 = 0;i7 < users.length;i7++){
    if (users[i7].status === false){
        console.log(users[i7]);
    }
}
console.log("---------");
// - користувачів які старші за 30 років
for (let i8 = 0;i8 < users.length;i8++){
    if (users[i8].age > 30){
        console.log(users[i8]);
    }
}
console.log("-----------");

for (let user of users){
    if (user.status){
        console.log(user);
    }
}

console.log("-----------");

for (let user of users){
    if (!user.status){
        console.log(user);
    }
}
console.log("-----------");

for (user of users){
    if (user.age < 30){
        console.log(user);
    }
}
