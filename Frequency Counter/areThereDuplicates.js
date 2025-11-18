// Implement a function called, areThereDuplicates which accepts a variable number of arguments,
//  and checks whether there are any duplicates among the arguments passed in.
//  You can solve this using the frequency counter pattern OR the multiple pointers pattern.
// areThereDuplicates(1, 2, 3);

function areThereDuplicates(...args) {
  if (args.length === 0 || args.length === 1) {
    return false;
  }
  let obj = {};
  for (const element of args) {
    obj[element] = (obj[element] || 0) + 1;
  }
  for (let key in obj) {
    if (obj[key] > 1) return true;
  }
  return false;
}
console.log(areThereDuplicates("a", "b", "c", "a"));
