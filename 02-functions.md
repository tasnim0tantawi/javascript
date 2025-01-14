# Functions in JavaScript

## Introduction

Functions are a fundamental concept in JavaScript. They are blocks of code that can be defined and called to perform a specific task. Functions allow you to reuse code, organize your program, and make it more readable.

## Function Declaration

A function in JavaScript can be declared using the `function` keyword followed by the function name, a list of parameters enclosed in parentheses, and the function body enclosed in curly braces. Here is an example of a simple function that adds two numbers:

```javascript

function concatFirstAndLastNames(fullname) {
    // fullname is an array 
    return fullname[0] + ' ' + fullname[fullname.length - 1];
}

console.log(concatFirstAndLastNames( ['Sara', 'Ali', 'Ahmed'])); // Sara Ahmed
console.log(concatFirstAndLastNames( ['John', 'Doe', 'Smith', 'Jr'])); // John Jr
```

In the example above, the `concatFirstAndLastNames` function takes an array of names as a parameter and returns the first and last names concatenated with a space in between.

```javascript

function reverseString(str) {
    // for loop to reverse the string
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
    console.log('This line will not be executed');
}

console.log(reverseString('hello')); // olleh
console.log(reverseString('world')); // dlrow

```

We can also declare a function without parameters:

```javascript

function greet() {
    return 'Hello, Everyone!';
}

console.log(greet()); // Hello, Everyone!

```

We can also declare a function with no return value:

```javascript

function greet(name) {
    console.log('Hello, ' + name + '!');
}

greet('Alice'); // Hello, Alice!

```

Note that after `return` statement, the function will stop executing and return the value. If there is no `return` statement, the function will return `undefined`.

## Function Expression

In JavaScript, functions can also be defined using function expressions. A function expression is similar to a function declaration, but the function is assigned to a variable. Here is an example of a function expression:

```javascript

let reverseString = function (str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
};

console.log(reverseString('hello')); // olleh
console.log(reverseString('world')); // dlrow

```

In the example above, the `reverseString` function is assigned to a variable using a function expression. The function can then be called using the variable name.

## Arrow Functions

Arrow functions are a more concise way to write functions in JavaScript. They provide a shorter syntax for writing function expressions. Here is an example of an arrow function that adds two numbers:

```javascript

let add = (a, b) => a + b;

console.log(add(5, 3)); // 8

```
