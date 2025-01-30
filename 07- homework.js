// 1. Write a function that takes age as an argument and returns:
// - "Child" if age is 0-12
// - "Teen" if age is 13-19
// - "Adult" if age is 20-150
// - "This is not a valid age" if age is less than 0 or more than 150
 
function ageGroup(age){
    if (age < 0 || age > 150)
        return "this is not availd age"
    else 
    if (age >= 0 && age <= 12)
        return " child"
    else if (age >=13 && age <= 19)
        return "Teen"
    else if (age >= 20 && age <= 150)
        return "Adult"

}

console.log(ageGroup(17))
// 2. Write a function that takes first name, middle name, last name as arguments and returns the full name.
// - middle name is only first letter and a dot
// -ex: getFullName("Sara", "Ali", "Mohamed") should return "Sara A. Mohamed"

function getFullName (firstName , middleName , lastName){
    
    return firstName + " " + middleName[0] +". " + lastName;

}
console.log(getFullName ("Sara", "Rashed", "Alrefai"));

// 3. Write a function that takes a number and returns the factorial of the number.
// - ex: getFactorial(5) should return 5*4*3*2*1 = 120
// result = result * 1 = 1
// result = result * 2 = 2
// result = result * 3 = 6
// result = result * 4 = 24
// result = result * 5 = 120



function getFactorial (num1){
    result = 1
    for(let i = 1; i<=num1; i++){
        result = result * i

    }
    return result

}
console.log(getFactorial(5))


// 4. Write a function takes two arrays and returns true if they have the same length and false otherwise.

function sameLength (array1, array2){
    if (array1.length == array2.length)
        return true
    else 
        return false

    }

console.log(sameLength([1,3,3], [2,4]));
console.log(sameLength([3,3,3], [3,3,4]));

   
// 5. Write a function that takes three numbers and returns the largest one.
function getLargestNumber (num1 , num2 , num3){
    if (num1 > num2 && num1 > num3 )
        return num1;
    else if ( num2 > num1 && num2 > num3)
        return num2;

    else if ( num3 > num1 && num3 > num2)
        return num3;
    else return -1;

}

console.log(getLargestNumber(65, 74, 89));
console.log(getLargestNumber(10, 10, 10));
