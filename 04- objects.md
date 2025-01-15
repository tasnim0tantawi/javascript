# Objects in JavaScript

## Introduction

Objects are a fundamental concept in JavaScript. They are used to store collections of key-value pairs. Objects can represent real-world entities, such as a person, a car, or a book, and can have properties and methods that define their behavior.

```javascript

let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    isAdult: true,
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
};

console.log(person.firstName); // John
console.log(person['lastName']); // Doe
console.log(person.age); // 30
console.log(person.fullName()); // John Doe

let person2 = {
    firstName: 'Alice',
    lastName: 'Smith',
    age: 25,
    cpr: {
        number: '123456-7890',
        country: 'Denmark'
    }
};

console.log(person2.cpr.number); // 123456-7890
console.log(person2.cpr.country); // Denmark
console.log(person2.cpr); // { number: '123456-7890', country: 'Denmark' }

```
