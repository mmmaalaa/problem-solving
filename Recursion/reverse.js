// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

function reverse(str) {
 if (str.length <= 1) return str;
 console.log(str.slice(1))
 return reverse(str.slice(1)) + str[0];
}
console.log(reverse("hello"));
