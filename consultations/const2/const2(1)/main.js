// 1000000 pdv warTax
function percentage(sum,per){
    return sum / 100 * per;
}
function tax(sum){
    let pdv = percentage(sum,20);
    let warTax = percentage(sum,1.5);
    return sum - pdv - warTax;
}
let number = tax(10000);
console.log(number);
//-----------------------------------------------------
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

for (const user of users) {

    for (const fieldName in user) {
        console.log(fieldName, user[fieldName]);

    }
    console.log('');


}














