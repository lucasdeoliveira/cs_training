// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)  //row size=1
//       '#'
//   pyramid(2)  //row size=3
//       ' # '
//       '###'
//   pyramid(3)  //row size=5
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)  //row size=7
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'
//   pyramid(5)  //row size=9
//       '    #    '
//       '   ###   '
//       '  #####  '
//       ' ####### '
//       '#########'
//   pyramid(6)  //row size=11 , mid = 5
//       '     #     '
//       '    ###    '
//       '   #####   '
//       '  #######  '
//       ' ######### '
//       '###########'

// Each rowSize is equal to the number of stairs * 2  - 1
// E.g.
//   pyramid(3)  //row size=5, mid = 2
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(6)  //row size=11 , mid = 5
//       '     #     '
//       '    ###    '
//       '   #####   '
//       '  #######  '
//       ' ######### '
//       '###########'
//
// We can only print '#' when the pivot on the current line has a value:
// (a) equal to the middle position of the
// (b) greater than the middle position - the current line number (the left side of the pyramid stair)
// (c) smaller than the middle position + the current line number (the right side of the pyramid stair)
//
// Complexity: O(n^2)
function pyramid(n) {
  i = 0;
  rowSize = n * 2 - 1;
  while (i < n) {
    stair = "";

    j = 0;
    while (j < rowSize) {
      midright = Math.floor(rowSize / 2 + i);
      left = Math.floor(rowSize / 2 - i);
      // print if the current pivot is between the leftmost limit and the rightmost limit:
      if (j >= left && j <= midright) {
        stair += "#";
      } else {
        stair += " ";
      }
      j++;
    }
    console.log(stair);

    i++;
  }
}

// Alternative: Using arrays to make use of the mutable iterative construction of each stair
// O(2n)
// function pyramid(n) {
//   let str = [];
//   const mid = n - 1;
//   for (let j = 0; j < n * 2 - 1; j++) {
//     str.push(" ");
//   }
//   for (let i = 0; i < n; i++) {
//     str[mid + i] = "#";
//     str[mid - i] = "#";
//     console.log(str.join(""));
//   }
// }

// Alternative: using JS padStart, padEnd to construct
// O(n)??
// function pyramid(n) {
//     rowsize = n * 2 - 1;
//     mid = Math.floor(rowsize/2);
//     for (let i = 0; i < n; i++) {
//         side  = "".padStart(n-1-i,' ');
//         str_mid   = "".padStart(2*i + 1,'#');
//         console.log(side+str_mid+side);
//     }
// }

// console.log(1);
// pyramid(1);

// console.log(4);
// pyramid(4);

// console.log(8);
// pyramid(8);

module.exports = pyramid;
