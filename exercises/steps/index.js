// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//Using recursion:
function steps(n, currStair = 0, stairString = '') {
  
  //if we reached the number of desired stairs, then stop.
  if (n === currStair) {
    return;
  }

  // If the stair String is fully assembled, then print and start the dfo the recursion for the next staircase:
  if (stairString.length === n) {
    console.log(stairString);
    return steps(n,currStair+1,'');
  } 

  if(stairString.length <= currStair) {
    stairString += '#';
  } else {
    stairString += ' ';
  }
  
  steps(n,currStair,stairString);

}
// console.log("4");
// steps(4);
// console.log("0");
// steps(0);
// console.log("1");
// steps(1);

// Using padEnd string function to fillin words:
// function steps(n) {
//     for (let i = 1; i <= n; i++) {
//         word = "";
//         for (let j = 0; j < i; j++) {
//             word+='#';
//         }
//         console.log(word.padEnd(n, ' '));
//     }
// }

// Using pure iteration. What's the O() notation?
// O(n^2) ?
// function steps(n) {
//   for (let i = 1; i <= n; i++) {
//     word = "";
//     for (let j = 1; j <= n; j++) {
//       if (j <= i) {
//         word += "#";
//       } else {
//         word += " ";
//       }
//     }
//     console.log(word);
//   }
// }

module.exports = steps;
