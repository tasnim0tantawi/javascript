// 1. Write a function that calculates BMI (Body Mass Index) from a person's weight and height.
// 2. Write a function that takes a string and returns the number of vowels in the string.
// 3. Write a function that takes a string and returns the number of words in the string.
// 4. Write a function that takes an array of numbers and returns the sum of the numbers.

// 1. Write a function that calculates BMI (Body Mass Index) from a person's weight and height. 
// weight in KMs
// height in cm

function calculateBMI(weight, height){
    height = height/100;
    result = weight/(height*height);
    return result;
}

console.log(calculateBMI(70, 173));
console.log(calculateBMI(50, 163));


// 2. Write a function that takes a string and returns the number of vowels in the string.
function numberOfVowels(word){


}

// 3. Write a function that takes a string and returns the number of letters in word.

function numberOfLetter (name) {
    let numberOfLetters = name.length;
    return numberOfLetters;
}

console.log(numberOfLetter("sara"))


const x=20;


// 5. Define a variable called age.
// use it to print "underage" if less than 18, "adult" otherwise.

let age=  19;
if(age < 18){
    console.log("underage")
}
else {
    console.log("adult")
}

// 6. write code to calculate sum of cubes of array
// [1, 2, 3, 4] --> 1^3 + 2^3 .. + 4^3 

array = [10, 20, 30, 4]

function calculateSum (array){
    let cubes = 0;
    for (i=0; i< array.length; i++){
        cubes = cubes+array[i] * array[i] * array[i]
    }
    return cubes;
}

console.log(calculateSum(array))