/* 2.  Write a JavaScript function that takes an array as input and returns a new array 
       with duplicate values removed. */


function duplicates(arr){
    return Array.from(new Set(arr));    // converting to a set 
}

// decalring an array 'arr' to store some elements
const arr = ['Suraj', 'sunny', 'sanchay', 'Suraj', 'sunny'];
const newArr = duplicates(arr);
console.log(newArr);