// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function removeSpecialChars(str){ 
    return str.replace(/[^\w]/g,'');
}

// function buildCharMap(str){ 
//     obj = {}
//     for (const character of str) {
//         obj[character] = obj[character] + 1 || 1;
//     }
//     return obj
// }

// function anagrams(stringA, stringB) {
//     stringA = removeSpecialChars(stringA).toLowerCase();
//     stringB = removeSpecialChars(stringB).toLowerCase();
//     if(stringA.length != stringB.length)
//         return false;
//     objA = buildCharMap(stringA);
//     objB = buildCharMap(stringB);
//     for (const key in objA) {
//         if(objB[key] !== objA[key])
//             return false;
//     }
//     return true;
// }

//Using sort to oder the chars on each string and compare the final string.
function anagrams(stringA, stringB) {
    stringA = removeSpecialChars(stringA).toLowerCase();
    stringB = removeSpecialChars(stringB).toLowerCase();
    
    return stringA.split('').sort().join('') === stringB.split('').sort().join('');
}

module.exports = anagrams;
