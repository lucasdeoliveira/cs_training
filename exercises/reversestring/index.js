// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Without use of array.reverse function
// traversing only half of array, which gives O(n/2) complexity:
// function reverse(str) {
//     let rev = Array.from(str);
//     for (let i = 0; i < (rev.length / 2); i++) {
//         swp = rev[i];
//         rev[i] = rev[rev.length -i -1];
//         rev[rev.length -i -1] = swp;
//     }
//     return rev.join("");
// }

// Using array reduce option:
function reverse(str) {
    let rev = str.split('');
    return rev.reduce( (acumm, curr) => { return curr + acumm }, '');
}

//Using 'for of' loop
// function reverse(str) {
//     let rev = '';
//     for (const val of str) {
//         rev = val + rev;
//     }
//     return rev;
// }

// Using full blown javascript features (e.g. array.reverse function)
// function reverse(str) {
//     let rev = Array.from(str);
//     rev.reverse();
//     return rev.join("");
// }

// Remaking the entire string from scratch. 
// O(n) complexity, O(n) memory usage (no good...)
// function reverse(str) {
//     let rev = "";
//     for (let i = str.length -1 ; i >= 0; i--) {
//         rev = rev.concat(str[i]);
//     }
//     return rev;
// }

module.exports = reverse;
