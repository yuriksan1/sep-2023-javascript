// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0;i < 10;i++){
    document.write(`<div>Hello</div>`)
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0;i < 10;i++){
    document.write(`<div>${i} Hi</div>`)
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0;

while (i<20){
    document.write(`<h1>World</h1>`)
    i++;
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let a = 0;

while (a < 20){
    document.write(`<h1>Yura ${a}</h1>`);
    a++;
}
//
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
    let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
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
        for (let item of listOfItems){
            document.write(`<ul><li>${item}</li></ul>`);
        }
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
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
        image: 'https://src.zakaz.atbmarket.com/prodwebp/catalog_product_gal/i31/catalog_product_gal_56229.webp'
    },
];
        for (let product of products){
            document.write(`<div class="product-card">
     <h3 class="product-title">${product.title}. Price - ${product.price}</h3>
 <img src="${product.image}" alt="" class="product-image">
 </div>`)
        }
//
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
//
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
    for (let user of users){
        if (user.status === true){
            console.log(user);
        }
    }
// - користувачів зі статусом false
    for (let user of users){
        if (user.status === false){
            console.log(user);
        }
    }

// - користувачів які старші за 30 років

for (let user of users){
    if (user.age > 30){
        console.log(user);
    }
}


//----------------------------

// for (let i = 0;i < users.length;i++){
//     console.log(users[i]);
// } //Це тренування моє

// let users = {
//     id : 2,
//     name :"vasya",
//     age:12
// }

// for (let userKey in users){
//     console.log(userKey);
// }
