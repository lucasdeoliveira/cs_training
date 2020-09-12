// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Iterative Fibonacci (no support array)
// function fib(n) {
//     curr = 0;
//     next = 1;
//     for (let i = 0; i < n; i++) {
//         swp = next;
//         next = curr + next;
//         curr = swp;
//     }
//     return curr;
// }

// Iterative with array
// function fib(n) {
//   const result = [0,1];
//   for (let i = 2; i <=n; i++) {
//     a = result[i-1];
//     b = result[i-2];
//     result.push(a+b);
//   }
//   return result[n];
// }

// **************
// Recursive
// **************
// Remember:
//   fib:  0  1  2  3  4  5  6
//     y:  0  1  1  2  3  5  8
//
// So for example:
//   fib(4) = fib(3) + fib(2)
//   fib(4) = (fib(2) + fib(1)) + (fib(1) + fib(0))
//   fib(4) = ((fib(1) + fib(0))) + fib(1)) + (fib(1) + fib(0))
//   fib(4) = ((1 + 0)+ 1) + (1+0)
//   fib(4) = 3
//
// Now if we generalize it:
//   fib(n) = fib(n - 1) + fib(n - 2), fib(0) = 0, fib(1) = 1
//
// Time complexity: O(2^n) <-- exponential
//
// function fib(n) {
//   if (n < 2) {
//     return n;
//   }
//   return fib(n - 1) + fib(n - 2);
// }

// **************************************************
// With Dynamic programming (recursive) + Recursion
// **************************************************
// Let's build the fibo array and reuse the values we already calculated
function fib(n) {
  //init array and set the values we know
  const result = Array(n + 1).fill(-1);
  result[0] = 0;
  result[1] = 1;

  //index to iterate over array from start to end:
  i = 2;

  return fibonacci(n + 1, result, i);
}

function fibonacci(n, result, i) {
  if (i >= n) {
    return result[n - 1];
  }
  // if not in the array, start the recursion to find it but keep the current value as 1*previous value + 2*previous value
  if (result[i] < 0) {
    result[i] = fibonacci(n, result, i - 1) + fibonacci(n, result, i - 2);
  } else {
    // until you find the memoized part
    return result[i];
  }

  // now go for the next index 
  return fibonacci(n, result, i + 1);
}

// ******************
// With Memoization (TODO)
//
// function fib(n) {
//     if (n < 2 ) {
//         return n;
//     }
//     return fib(n-1) + fib(n-2);
// }

module.exports = fib;
