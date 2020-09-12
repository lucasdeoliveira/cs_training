// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Simple iterative method:
// function vowels(str) {

//     vowels = 0
//     for (const char of str.toLowerCase()) {
//         if(['a','e','i','o','u'].indexOf(char) >=0 ){
//             vowels++;
//         }
//     }
//     return vowels;
// }

// Using reduce + array
function vowels(str) {
  vowelArray = ["a", "e", "i", "o", "u"];
  return str
    .toLowerCase()
    .split("")
    .reduce((sum, elem ) => {
      if (vowelArray.indexOf(elem) >= 0) {
        sum+=1;
      }
      return sum;
    }, 0);
}

// One-liner using regex with inclusion (needs conditional to check regex match as it returns null when no match exists)
// function vowels(str) {
//     return str.match(/[aeiou]/gi) ? str.match(/[aeiou]/gi).length : 0;
// }

// With regex+exclusion
// function vowels(str) {
//     return str.replace(/[^aeiou]/gi,'').length;
// }

// Using JS Array filter +regex
// function vowels(str) {
//     return str.split('').filter( (char) => char.match(/[aeiou]/i)).length;
// }

module.exports = vowels;
