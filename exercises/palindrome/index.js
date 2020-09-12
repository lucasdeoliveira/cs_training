// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//Using array every function
function palindrome(str) {
    return str.split('').every( (character, i) => character === str[str.length -i -1]);
}

//Using reverse function
// function palindrome(str) {
//     return str.split('').reverse().join('') === str
// }

// For debugging
// console.log(palindrome("abba"));
// console.log(palindrome("abbc"));

module.exports = palindrome;
