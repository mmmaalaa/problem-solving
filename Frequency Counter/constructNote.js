// Write a function called constructNote, which accepts two strings, a message and some letters.
// The function should return true if the message can be built with the letters that you are given, or it should return false.



function constructNote(str1, str2) {
  let obj1 = {};
  let obj2 = {};
  for (const element of str1) {
    obj1[element] = (obj1[element] || 0) + 1;
  }
  for (const element of str2) {
    obj2[element] = (obj2[element] || 0) + 1;
  }
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
}
console.log(constructNote("aabbccee", "bcabcaddff"));
console.log(constructNote("aa", "abc")); // false
console.log(constructNote("abc", "dcba")); // true
console.log(constructNote("aabbcc", "bcabcaddff"));
