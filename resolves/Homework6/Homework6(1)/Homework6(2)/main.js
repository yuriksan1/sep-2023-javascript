// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let arr = ['hello world', 'lorem ipsum', 'javascript is cool'];
arr.map((item)=>console.log(item.length));

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let arr2 = ['hello world', 'lorem ipsum', 'javascript is cool'];
arr2.map((item) =>console.log(item.toUpperCase()));

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let arr3 = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
arr3.map((item) => console.log(item.toLowerCase()));

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
console.log(str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str2 = 'Ревуть воли як ясла повні';
const stringToarray = (str) => str.split(" ")

let arr4 = stringToarray(str2);
console.log(arr4);
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
const numbers = [10,8,-7,55,987,-1011,0,1050,0];
const strings = numbers.map((num) => num.toString());
console.log(strings);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11,21,3];
const sortNums = (arr,order) =>{
    switch (order){
        case"ascending":
            return arr.sort((a,b) => a-b);
        case 'descending':
            return arr.sort((a,b) => b-a);
    }
}
console.log(sortNums(nums, 'ascending')); // [3,11,21]
console.log(sortNums(nums, 'descending')); // [21,11,3]


// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
coursesAndDurationArray.sort((a,b) => b.monthDuration - a.monthDuration);
console.log(coursesAndDurationArray);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log(coursesAndDurationArray.filter((course) => course.monthDuration > 5));
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
console.log(coursesAndDurationArray.map((course, index) => ({...course,id: index + 1})));

// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
// //         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     cardSuit: '', // 'spade', 'diamond','hear clubs'
// //     color:'', // 'red','black'
// }
//

const cards = [
    {cardSuit: "spade", value: "6", color: "black"},
    {cardSuit: "spade", value: "7", color: "black"},
    {cardSuit: "spade", value: "8", color: "black"},
    {cardSuit: "spade", value: "9", color: "black"},
    {cardSuit: "spade", value: "10", color: "black"},
    {cardSuit: "spade", value: "ace", color: "black"},
    {cardSuit: "spade", value: "jack", color: "black"},
    {cardSuit: "spade", value: "queen", color: "black"},
    {cardSuit: "spade",value: "king",color:"black"},

    {cardSuit: "diamond", value: "6", color: "red"},
    {cardSuit: "diamond", value: "7", color: "red"},
    {cardSuit: "diamond", value: "8", color: "red"},
    {cardSuit: "diamond", value: "9", color: "red"},
    {cardSuit: "diamond", value: "10", color: "red"},
    {cardSuit: "diamond", value: "ace", color: "red"},
    {cardSuit: "diamond", value: "jack", color: "red"},
    {cardSuit: "diamond", value: "queen", color: "red"},
    {cardSuit: "diamond",value: "king",color:"red"},

    {cardSuit: "heart", value: "7", color: "red"},
    {cardSuit: "heart", value: "6", color: "red"},
    {cardSuit: "heart", value: "8", color: "red"},
    {cardSuit: "heart", value: "9", color: "red"},
    {cardSuit: "heart", value: "10", color: "red"},
    {cardSuit: "heart", value: "ace", color: "red"},
    {cardSuit: "heart", value: "jack", color: "red"},
    {cardSuit: "heart", value: "queen", color: "red"},
    {cardSuit: "heart",value: "king",color:"red"},

    {cardSuit: "clubs", value: "7", color: "black"},
    {cardSuit: "clubs", value: "6", color: "black"},
    {cardSuit: "clubs", value: "8", color: "black"},
    {cardSuit: "clubs", value: "9", color: "black"},
    {cardSuit: "clubs", value: "10", color: "black"},
    {cardSuit: "clubs", value: "ace", color: "black"},
    {cardSuit: "clubs", value: "jack", color: "black"},
    {cardSuit: "clubs", value: "queen", color: "black"},
    {cardSuit: "clubs",value: "king",color:"black"},


]
// - знайти піковий туз
console.log(cards.find((card) => card.cardSuit === "spade" && card.value === "ace"));

// - всі шістки
console.log(cards.filter((card) => card.value === "6"));

// - всі червоні карти
console.log(cards.filter((card) => card.color === "red"));

// - всі буби
console.log(cards.filter((card) => card.cardSuit === "diamond"));

// - всі трефи від 9 та більше
console.log(cards.filter((card) => card.cardSuit === "clubs" && ["9","10","ace","jack","queen","king","joker"].includes(card.value)));

// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
//НЕЗРОЗУМІЛО ЯК САМОМУ ЗРОБИТИ
const result = cards.reduce((acc,cur) =>{
    if (!acc[cur.cardSuit]){
        acc[cur.cardSuit] = [];
    }
    acc[cur.cardSuit].push(cur);
    return acc;
},{});
console.log(result);
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
// --написати пошук всіх об'єктів, в який в modules є sass
console.log(coursesArray.filter((item) => item.modules.includes("sass")));
// --написати пошук всіх об'єктів, в який в modules є docker
console.log(coursesArray.filter((item) => item.modules.includes("docker")));

//Є ДОДАТКОВІ РОЗВ'ЯЗКИ resolve6








