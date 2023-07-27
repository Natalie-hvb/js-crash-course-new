/*
// string, numbers, boolean, null, undefined

const firstName = 'John';
const age = 30;

// Concatenation
console.log('My name is ' + firstName + ' and I am ' + age);
// Template String 
const hello = `My name is ${firstName} and I am ${age}`;

console.log(hello);

const s = 'Hello World';

console.log(s.substring(0, 5).toUpperCase()); 
console.log(s.split(''));

const b = 'technology, computers, it, code';
console.log(b.split(', '));

//Arrays - multiple values

const fruits = ['apples', 'oranges', 'pears']
console.log(fruits[1]);

// add to an array
const fruits = ['apples', 'oranges', 'pears'];

fruits[3] = 'grapes'; // add to a specific index

fruits.push('mangos'); //add after the last one

fruits.unshift('strawberries'); //add to the beginning 

console.log(Array.isArray(fruits)); //check if something is in the array, like string, or true or false (will give us true)

console.log(Array.isArray('hello')); //will give us false

console.log(fruits.indexOf('oranges'));  //check the index of specific value 

fruits.pop(); //to take out the last one off
console.log(fruits);


//Objects
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person);
console.log(person.firstName, person.lastName); //to access a single value

console.log(person.hobbies[1]); //to get single value in an array  
console.log(person.address.city);

//distructuring - pulling this out of the persons to create variables
const { firstName, lastName } = person;

console.log(firstName);

//we can add property
person.email = 'john@gmail.com';

console.log(person);


//create an array of to do's;
const todos = [
{
    id: 1,
    text: 'Take out trash',
    isCompleted: true
},
{
    id: 2,
    text: 'Meeting with boss',
    isCompleted: true
},
{
    id: 3,
    text: 'Dentist',
    isCompleted: false
}
];

console.log(todos);

//change it for JSON input
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//for loop
for(let i = 0; i <= 10; i++) {
    console.log(i);
}
//can be anything inside 
for(let i = 0; i <= 10; i++) {
    console.log(`For Loop Number: ${i}`);
}

//WHILE LOOP - differnce is we set the varuable outside of the loop
let i = 0;
while(i < 10) {
    console.log(`While Loop Number: ${i}`);
    i++;
}

//HOW TO LOOO THROGHT ARRAYS
for(let todo of todos) {
    console.log(todo);
}

//throught a specific one 
for(let todo of todos) {
    console.log(todo.text);
}

//HIGHT ORDER ARRAY METHODS

//forEach
todos.forEach(function(todo) {
    console.log(todo.text)
});

//MAP it returns the whole array
const todoText = todos.map(function(todo){
    return todo.text;
});

console.log(todoText);

//FILTER
//filters throught and returns the ones which equals true
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted === true;
});

console.log(todoCompleted);


//filters and returns the completed ones with text
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
});

console.log(todoCompleted);



//CONDITIONALS 
// 1 conditional
const x = 10;

if(x === 10) {
    console.log('x is 10');
} else if(x > 10) {
    console.log('x is greater than 10');
} else {
    console.log('x is less than 10');
}



// || - means OR ; && - means AND;

//multiple conditions
const x = 10;
const y = 11;

if(x > 5 || y > 11) {
    console.log('x is more that 5 or y is more than 10');
}

//TERNARY OPERATOR
// this --> ? -means THAN 
// this --> : -means ELSE 

const e = 1;
const color = e > 10 ? 'red' : 'blue';

console.log(color);



// SWITCHES - another way to evaluate the conditions
const t = 14;
const color = t > 10 ? 'red' : 'blue';

switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
}



//FUNCTIONS
//with default values
function addNums(num1 = 1, num2 = 2) {
    console.log(num1 + num2);
}

addNums(5, 7);

//better way below

function addNumb(num1 = 1, num2 = 2) {
    return num1 + num2;
}

console.log(addNumb(5, 7));


//even better way using the array
const addNums = (num1 = 1, num2 = 2) => num1 + num2;

console.log(addNums(5,5));

*/ 

// or if you have only 1 parametr
const addNums = num1 => num1 + 7;

console.log(addNums(5));




