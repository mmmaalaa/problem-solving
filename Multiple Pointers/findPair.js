// Given an unsorted array and a number n, find if there exists a pair of elements in the array whose
// difference is n. This function should return true if the pair exists or false if it does not.
function findPair(arr, n) {
  if (arr.length === 0 || arr.length === 1) return false;
  arr.sort((a, b) => a - b);
  console.log(arr)
}
console.log(findPair([6, 1, 4, 10, 2, 4], 2));