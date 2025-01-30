// 1. FizzBuzz. Write a program that prints the numbers from 1 to 100.
// If the number is divisible by 3, it should print "Fizz".
// If it is divisible by 5, it should print "Buzz".
// If it is divisible by both 3 and 5, it should print "FizzBuzz".

function fizzBuzz() { // void
 for(let i =1 ; i<=100 ; i++)
 {
    if(i%3 ==0 && i%5 ==0){
        console.log("FizzBuzz");

    }else if (i%5 ==0)
    {
        console.log("Buzz")
    }
    else if (i%3 ==0){
        console.log("Fizz")
    }
    else{
    console.log(i);
    }
 }
}


// 2. Area of a triangle. Write a program that takes the base and height of a triangle and return its area.
// area = 0.5 * base * height

function areaTriangle(base, height){
    let area = 0.5 * base * height
    return area;

}

console.log(areaTriangle(5, 10))

// 3. Area of a circle. Write a program that takes the radius of a circle and return its area.
// area = 3.14 * radius * radius
function areaCircle (radius){
    let area =3.14 * radius *radius;
    return area;


}
console.log(areaCircle(5))

// 4. Celsius to Fahrenheit. Write a program that takes a temperature in Celsius and converts it to Fahrenheit.
// F = C * 1.8 + 32

function c2f (tempC){
    let F = tempC * 1.8 + 3;
    return F;


}

console.log("c 2 f"+ c2f(20))
// 5. Write a program that takes a number and returns true if the number is a prime.
function isPrime(number){
    for(let i =2; i<= number/2; i++ ){
        if (number %i ==0)
            return false;
    }
    return true;

}

console.log([isPrime(97)])

// 6. Write a program that takes a number and returns true if the number is even and false otherwise.

function isEven(number) {
    return number % 2 === 0;
  }
  
  // Example usage
  console.log("is even "+ isEven(4));  // true
  console.log("is even "+ isEven(7));  // false
  
// 7. Write a function takes a number  returns true if it's divisible by 3 and 5, false otherwise


function fizzBuzzReturn(i) { // with return value
    if(i%3 ==0 && i%5 ==0){
        return true;
    }
       else{
        return false;
       }
    
   }
   
console.log(fizzBuzzReturn(3));

// 8. Write a program that checks is a string is a palindrome, returns true if it is, false otherwise.
// palindrome reads the same forwards and backwards e.g. "mom", "dad", "racecar" 
// r = 0, 6
// a =1, 5
// c =2 , 4
// e = 3, 3

function isPalindrome(word){
    let start = 0; // incremnting -> start++
    let end = word.length -1; // decrementing -> end--

    while(start < end) {
        if(word[end] !== word[start]){
            return false;
        }
        start ++;
        end --;
    }

    return true;

}

console.log("hi")
console.log("is palindrome " + isPalindrome("madam"))


// 9. Write a program that takes an array of strings and filters out names that are less than 4 characters long using the filter method.

function filterNames(names){
    return names.filter(name => name.length >= 4);
}

console.log(filterNames(["sara","tasneem","may","mariam"]));

// 9. Write a program that takes an array of strings and filters out names that starts with m

function filterNames2 (names){
    return names.filter(name => name[0] != 'M' &&  name[0] != 'm');
}
console.log(filterNames2(["mariam","sara", "tasneem", "may"]))

// 9. Write a program that takes an array of strings and filters out names that ends with m

function filterNames3 (names){
    return names.filter (name => name[name.length-1 ] != 'm' &&  name[name.length-1 ] !='M');
}

console.log(filterNames3(["mariam","sara", "tasneeM", "may"]))

// "mariam" --> false, --> false
// "sara" --> true, true --> true
//  "tasneeM" --> true, false --> false
// "may"


// 1. girl if(girl && vacation) // true -> check the rest
// 2. vacation
// 3. salary

// 1. girl if(girl || vacation) // false -> check the rest
// 2. vacation
// 3. salary

