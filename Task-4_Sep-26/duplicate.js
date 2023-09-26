/* 11. Create a function that duplicates the contents of an array using different array methods.*/


// Using the slice method
function duplicateArrayWithSlice(arr) {
    return arr.slice();
}

// Using the concat method
function duplicateArrayWithConcat(arr) {
    return arr.concat([]);
}

// Using the spread operator
function duplicateArrayWithSpread(arr) {
    return [...arr];
}

// Example usage:
const originalArray = [1, 2, 3, 4, 5];
const duplicatedArray1 = duplicateArrayWithSlice(originalArray);
const duplicatedArray2 = duplicateArrayWithConcat(originalArray);
const duplicatedArray3 = duplicateArrayWithSpread(originalArray);

console.log(duplicatedArray1); // Output: [1, 2, 3, 4, 5]
console.log(duplicatedArray2); // Output: [1, 2, 3, 4, 5]
console.log(duplicatedArray3); // Output: [1, 2, 3, 4, 5]
