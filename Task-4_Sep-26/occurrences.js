/* 7.  Write a function that takes an array and an element as arguments and removes all 
       occurrences of that element from the array. */


function removeElementFromArray(arr, element) {
    return arr.filter(item => item !== element);
}

// Example usage:
const originalArray = [1, 2, 3, 4, 2, 5, 2];
const elementToRemove = 2;
const newArray = removeElementFromArray(originalArray, elementToRemove);
console.log(newArray); // Output: [1, 3, 4, 5]
      