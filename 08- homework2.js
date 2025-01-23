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

fizzBuzz()

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

// 7. Write a function takes a number  returns true if it's divisible by 3 and 5, false otherwise


function fizzBuzzReturn(i) { // with return value
    if(i%3 ==0 && i%5 ==0){
        return true;
    }
       else{
        return false;
       }
    
   }
   
console.log(fizzBuzzReturn(3))