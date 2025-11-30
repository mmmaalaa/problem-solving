// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

function productOfArray(arr) {
  if (arr.length === 0) return 1;
  if (arr[0] === 0) return 0;
  let result = arr[0];
  return result * productOfArray(arr.slice(1));
}
console.log(productOfArray([0, 1, 2, 3]));
