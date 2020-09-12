// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


// Solution with lookback, starting iteration from the second element in the array:
function capitalize(str) {
    let result = str[0].toUpperCase();
    for (let i = 1; i < str.length; i++) {
        if(str[i-1] === ' '){
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }
    return result;
 }


// Alternative solution
// function capitalize(str) {
//     final = []
//     isNewWord = true
//     for (let i = 0; i < str.length; i++) {
//         if(isNewWord){
//             final.push(str[i].toUpperCase());
//             isNewWord = false;
//         } else {
//             final.push(str[i]);
//         }
//         if(str[i] === ' ') {
//             isNewWord = true;
//         }
//     }
//     return final.join('');
//  }

//Using slice to get substring after 1st character
// function capitalize(str) {
//     words = str.split(" ")
//     res   = [ ]
//     for (const word of words) {
//         res.push(word[0].toUpperCase()+word.slice(1));
//     }
//     return res.join(" ");
// }

module.exports = capitalize;
