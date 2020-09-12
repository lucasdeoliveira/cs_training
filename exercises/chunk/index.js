// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


// Using array features from javascript: slice (startPosition, endPosition)
function chunk(array, size) {
    final = []
    for (let index = 0; index < array.length; index = index+size) {
        final.push(array.slice(index, index+size));
    }
    return final;
}

// Using for loop and no array features
// function chunk(array, size) {
//     final = []
//     temp = []
//     for (let index = 0; index < array.length; index++) {
//         temp.push(array[index]);
//         //if temp array is filled OR
//         // temp array is not filled AND we're in the last item, then push the temp array into final array
//         if(temp.length === size || index === array.length - 1 ) {
//             final.push(temp)
//             temp = []
//         }
//     }
//     return final;
// }

module.exports = chunk;
