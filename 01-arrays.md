# Arrays in JavaScript

## Introduction

Arrays are a fundamental concept in JavaScript. They are used to store multiple values in a single variable. This makes it easier to manage and manipulate data in your programs.

## Array Functions

- `push(element)`: Adds an element to the end of an array.
- `pop()`: Removes the last element from an array.
- `shift()`: Removes the first element from an array.
- `unshift(element)`: Adds one or more elements to the beginning of an array.
- `splice(index, count, element1, element2, ...)`: Adds or removes elements from an array at a specific index. `index` is the index at which to start changing the array, `count` is the number of elements to remove, and `element1`, `element2`, etc. are the elements to add.
- `slice(start, end)`: Returns a copy of a portion of an array. The `start` parameter is the index at which to begin extraction, and the `end` parameter is the index at which to stop extraction (not included).
- `concat(array)`: Joins two or more arrays together.
- `reverse()`: Reverses the order of the elements in an array.
- `sort()`: Sorts the elements of an array.

```javascript
let fruits = ['apple', 'banana', 'cherry'];

// Add an element to the end of the array
fruits.push('strawberry'); // ['apple', 'banana', 'cherry', 'strawberry']

// Remove the last element from the array
fruits.pop(); // ['apple', 'banana', 'cherry']

// Remove the first element from the array
fruits.shift(); // ['banana', 'cherry']

// Add an element to the beginning of the array
fruits.unshift('orange'); // ['orange', 'banana', 'cherry']

// Add an element at a specific index
fruits.splice(1, 0, 'pear'); // ['orange', 'pear', 'banana', 'cherry'], // Adds 'pear' at index 1, the second argument is the number of elements to remove

// Remove an element at a specific index
fruits.splice(2, 1); // ['orange', 'pear', 'cherry'], // Removes 'banana' at index 2, the second argument is the number of elements to remove

// Return a copy of a portion of the array
let citrus = fruits.slice(1, 3); // ['pear', 'cherry'], // Returns a new array with elements from index 1 to 3 (not including 3)

// Join two arrays together
let vegetables = ['carrot', 'potato', 'lettuce'];
let food = fruits.concat(vegetables); // ['orange', 'pear', 'cherry', 'carrot', 'potato', 'lettuce']

// Reverse the order of the elements in the array
fruits.reverse(); // ['cherry', 'pear', 'orange']

// Sort the elements of the array
fruits.sort(); // ['cherry', 'orange', 'pear']

// Add 7 elements to specific index

fruits.splice(1, 0, 'grape', 'kiwi', 'mango', 'papaya', 'peach', 'plum', 'raspberry'); // ['cherry', 'grape', 'kiwi', 'mango', 'papaya', 'peach', 'plum', 'raspberry', 'orange', 'pear']
```

## References

- [Youtube Video](https://www.youtube.com/watch?v=R8rmfD9Y5-c)