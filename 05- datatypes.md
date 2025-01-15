# Data Types
JavaScript provides different data types to hold different types of values. There are two types of data types in JavaScript:

1. **Primitive data types**
    - String
    - Number
    - Boolean
    - Undefined
    - Null
    - Symbol
    - BigInt

2. **Non-primitive data types**
    - Object
    - Array
    - Function

## Primitive Data Types

### String

Strings are used to represent text. They are enclosed in single or double quotes.

```javascript
let name = 'Alice';

let message = "Hello, World!";
```

### Number

Numbers are used to represent numeric values. They can be integers or floating-point numbers.

```javascript
let count = 10;
let price = 19.99;
```

### Boolean

Booleans are used to represent `true` or `false` values.

```javascript

let isLogged = true; // 1
let isHidden = false; // 0

if(isLogged) {
    console.log('Welcome to array world');
} else {
    console.log('Please login to continue');
}
```

### Undefined

`undefined` represents a variable that has been declared but has not been assigned a value.

```javascript
let x;
console.log(x); // undefined
```

### Null

`null` represents an empty value or no value.

```javascript
let y = null;
console.log(y); // null
```


## Non-Primitive Data Types

### Object

Objects are used to store collections of key-value pairs. They can represent real-world entities and have properties and methods.

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

```

### Array

Arrays are used to store multiple values in a single variable. They are a special type of object that holds a list of items.

```javascript

let fruits = ['apple', 'banana', 'cherry'];

console.log(fruits[0]); // apple

```

### Function

Functions are used to define reusable blocks of code. They can take parameters and return values.

```javascript

function greet(name) {
    return 'Hello, ' + name + '!';
}

let greet2 = function(name) {
    return 'Hello, ' + name + '!';
}

console.log(greet('Alice')); // Hello, Alice!

```
