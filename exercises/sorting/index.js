// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

// function bubbleSort(array) {
//     for (let i = 0; i < array.length; i++) {
//         let max = array[0];
//         for (let j = 0; j < array.length; j++) {
//             if(max > array[j]){
//                 const swp = array[j];
//                 array[j] = max;
//                 array[j-1] = swp;
//             }
//             max = array[j];
//         }
//     }
//     return array;
// }

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        const swp = array[j];
        array[j] = array[j+1];
        array[j+1] = swp;
      }
    }
  }
  return array;
}

// bubbleSort([100, -40, 500, -124, 0, 21, 7]);

[100, -40, 500]

function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        let min = i;

        for (let j = 0 + i; j < arr.length; j++) {
            if(arr[j] < arr[min])  //found the index of new min
                min = j;
        }
        const swp = arr[i];
        arr[i] = arr[min];
        arr[min] = swp;
    }

    return arr;
}

// selectionSort([100, -40, 500, -124, 0, 21, 7]);

function mergeSort(arr) {

    if (arr.length === 1)
        return arr;
    else {
        const center = Math.ceil(arr.length/2);
        const left = arr.slice(0,center);
        const right = arr.slice(center);

        return merge(mergeSort(left), mergeSort(right));
    }

}

mergeSort([10, 1, -1, -2, 0, 3, 15, -10]);


function merge(left, right) {

    let res = [];
    while (left.length && right.length) {
    
        if(left[0] < right[0])
            res.push(left.shift());
        else
            res.push(right.shift());
    }

    if (left.length) {
        res.push(...left);
    } else if (right.length) {
        res.push(...right);
    }

    return res;
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
