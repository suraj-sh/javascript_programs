/* 9.  Write a code snippet that uses the map method to transform an array of numbers 
        into an array of their squared values.*/

        
const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(number => number * number);

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
