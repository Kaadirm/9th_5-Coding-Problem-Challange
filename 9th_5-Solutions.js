/*
------   1   -------

You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.

SOLUTION

function frankenSplice(arr1, arr2, n) {
   return arr2.slice(0, n).concat(arr1).concat(arr2.slice(n));
}

------   2   -------

Remove all falsy values from an array. Return a new array; do not mutate the original array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.

SOLUTION

function bouncer(arr) {
  return arr.filter(a => a);
}

------   3   -------

Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. 
The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 
because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

SOLUTION

function getIndexToIns(arr, num) {
    arr.push(num);
    (arr.sort((a, b) => a - b));
    return (arr.indexOf(num))
}

------   4   -------

Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.


SOLUTION 

function mutation(arr) {
    const word = arr[0].toLowerCase(); // Convert word to lowercase for case-insensitive comparison
    const letter = arr[1].toLowerCase(); // Convert letter to lowercase for case-insensitive comparison
    
    return [...letter].every(a => word.includes(a));
}

*/
------   5   -------

Write a function that splits an array (first argument) into groups the length of size (second argument) 

and returns them as a two-dimensional array.

SOLUTION

function chunkArrayInGroups(arr, size) {
  const myArr = [];
   
  for(let i= 0; i < arr.length; i += size){
    let temporaryArr = arr.slice(i, i + size);
    myArr.push(temporaryArr)
  }
    return myArr
}

*/