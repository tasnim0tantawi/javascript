# Let, Const and Var

## Let

`let` is a new keyword introduced in `ES6`. It is similar to `var` in some aspects but has some differences.

```javascript

let x = 10;
x = 11;

x= 6 + 89;

console.log(x); // 95

var y = 10;
y = 11;

y = 6 + 89;

console.log(y); // 95
```

In the above example, we have declared two variables `x` and `y` using `let` and `var` respectively. We have assigned new values to both variables and printed them. Both `let` and `var` work the same way in this example.

## Const

`const` is another new keyword introduced in `ES6`. It is used to declare constants in JavaScript. Once a variable is declared using `const`, its value cannot be changed.

```javascript

const PI = 3.14159;
PI = 3.14; // Error: Assignment to constant variable.

const array = [1, 2, 3];
array.push(4); // [1, 2, 3, 4]
array.pop(); // [1, 2, 3]
array.reverse(); // [3, 2, 1]

array = [5, 6, 7]; // Error: Assignment to constant variable.

```
