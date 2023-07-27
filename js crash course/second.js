//OBJECT ORIENTED PROGRAMMING

//constructor function (starts with a capital letter)
/*
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}
Person.prototype.getBirthYear = function() {
        return this.dob.getFullYear();
}
Person.prototype.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
}

*/

//better way to write the code above (syntactic sugar)

//CLASS
class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}



//initiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');

console.log(person2.getFullName());
console.log(person1);