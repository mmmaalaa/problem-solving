function findAllDuplicates(arr) {
  if (arr.length === 0) {
    return [];
  }
  let result = [];
  let obj = {};
  for (let num of arr) {
    obj[num] = (obj[num] || 0) + 1;
  }
  for (key in obj) {
    if (obj[key] > 1) {
      result.push(key);
    }
  }
  return result;
}
console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]));
