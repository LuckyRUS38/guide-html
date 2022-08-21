// Вид наименования переменных называется camelCase
const age = 25; // Целочисленный Number
const ageFloat = 25.0; // Дробный Number

let greet = 'Hello, World!';
console.log(`Человек из-за угла сказал: ${greet}`);
console.log('Человек из-за угла сказал: ' + greet);

// Функции
// let ageMan = prompt('Ваш возраст: ');
// const firstName = prompt('Ваше имя: '); // ИНПУТ
// const lastName = prompt('Ваша фамилия');
//
// function infoHuman(age, firstName, lastName) {
//     console.log(`Имя: ${firstName}, Фамилия: ${lastName}, Возраст: ${age}`);
// }
//
// infoHuman(ageMan, firstName, lastName);
//


// Операторы

let currentYear = 2022;
const birthYear = 2008;

const ageY = currentYear - birthYear;

let a = 20;
let b = 30;

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a += 1)
console.log(a++);
console.log(a--);

console.log(typeof ageFloat)
console.log(typeof greet)


// Условные операторы

const isReady = false;
const isPending = true;

if(isReady){
    console.log('Ready!');
}
else if(isPending){
    console.log('isPending!')
}
else{
    console.log('Not ready!');
}

// Тернарные условные операторы
isReady ? console.log('Ready!') : console.log('Not ready!');

if(isReady || isPending){
    console.log('Хер его знает что с ним делать.')
}



// Массивы и циклы

let cars = ['Mercedes', 'Mazda', 'Subaru', 'Volga', 'Moskvich'];
console.log(cars);

console.log(cars[2]);
// Не актуально
let cars2 = new Array('Mercedes', 'Mazda', 'Subaru', 'Ford')

cars[cars.length] = 'Kia';


cars[1] = 'Haval';
console.log(cars);

// Циклы

for(let i = 0; i < cars.length; i++){
    console.log(cars[i]);
}

// Ускоренный цикл для массива (FOR OF)
for(let car of cars){
    console.log(car);
}

// Объекты - ООП (объектное ориентированное программирование)

let person = {
    firstName: 'John',
    lastName: 'Smith',
    yearBirth: 1997,
    languages: ['English', 'Russia', 'Polish'],
    greet: function(){
        console.log(`Hello my name is ${person.firstName} ${person.lastName}, my birthday is ${person.yearBirth}, i speak a languages ${person.languages[0]}, ${person.languages[1]}, ${person.languages[2]}`)
    }
}

for(let language of person.languages){
    console.log(language);
}