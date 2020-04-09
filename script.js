//- создать массив с 20 числами.
// -- при помощи метода sort отсортировать массив.
// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// -- при помощи filter получить числа кратные 3
// -- при помощи filter получить числа кратные 10
// -- перебрать (проитерировать) массив при помощи foreach()
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

//
let array = [1,4,7,9,920,2902,67,20,44,25,646,291,8,10,15,19,29,39,49,56];
let newArray = array.sort((a,b) =>  a - b);
console.log(newArray);
//
let filter = array.filter(function (num) {
    if (num % 3 === 0){
        return true
    }else {
        return false
    }
});
console.log(filter);
//
array.forEach((num)=> {
    console.log(num);
    console.log('___')
});
//
let reverse = array.sort((a,b)=> b - a);
console.log(reverse);
//
let filterTen = array.filter(function (num) {
    if (num % 10 === 0){
        return true
    }else {
        return false
    }
});
console.log(filterTen);
//
let map = array.map((num)=> {
    return num * 3
});
console.log(map);

//- создать массив со словами на 15-20 элементов.
// -- отсортировать его по алфавиту в восходящем порядке.
// -- отсортировать его по алфавиту  в нисходящем порядке.
// -- отфильтровать слова длиной менее 4х символов
// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

//
let strings = ['Mac','Lana','Sticer','Term','Serg','Victor','Andrii','Stepko','Yabko','Zen'];

let str = strings.sort((a,b)=>{
    if (a < b){
        return -1
    }else {
        return 1
    }
});
console.log(str);
//
let str1 = strings.sort((a,b)=> {
    if (a > b){
        return -1
    }else {
        return 1
    }
});
console.log(str1);
//
let string = strings.map(value => {
    return value += '!'
});
console.log(string);
//
let strin = strings.filter(value => value.length > 4);
console.log(strin);

//Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
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
// - відсортувати його за  віком (зростання , а потім окремо спадання)
// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// - відсортувати його за індентифікатором
//
let  sort = users.sort((a,b)=> a.age - b.age);
console.log(sort);
//
// let sortdec = users.sort((a,b)=> b.age - a.age);
// console.log(sortdec);
//
// let stringx = users.sort((value,value2) => value.name.length - value2.name.length);
// console.log(stringx);
//
let stringz = users.sort((value,value2)=> value2.name.length -value.name.length);
console.log(stringz);
//
let maps = JSON.parse(JSON.stringify(users)).map((value, index) =>{
    value.id = index + 1;
    return value
});
console.log(maps);// with id
console.log(users);// without id
//
let allArrayWithId = maps.forEach(num => {
    console.log(num);
});


// -- наисать функцию калькулятора с 2мя числами и колбеком
// TASK i

function calculator(number1,number2,callback) {
    console.log(callback(number1,number2));
}

calculator(20,40,(number1,number2)=> {
    return number1 + number2;
});
calculator(30,89,(number1,number2)=> {
    return number1 - number2 * 123;
});

calculator(30,89,(number1,number2)=> {
    let fix = (number1 * number2 / 123);
    return fix.toFixed(2);
});
calculator(4,9,(number1,number2)=> {
    return  Math.pow(number1,number2);
});

// -- наисать функцию калькулятора с 3мя числами и колбеком
// TASK ii

function calc(num1,num2,num3,callback) {
    console.log(callback(num1,num2,num3));
}

calc(20,40, 15, (num1,num2,num3)=> {
    return num1 + num2 * num3;
});
calc(30,89,1690,(num1,num2,num3 )=> {
    return (num1 - num2) * num3;
});

calc(30,89,-9,(num1,num2,num3)=> {
    let fix = (num1 * (num2 / num3));
    return fix.toFixed(2);
});
calc(4,9,-98,(num1,num2,num3)=> {
    return  (Math.pow(num1,num2)+ num3);
});










