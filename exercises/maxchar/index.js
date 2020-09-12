// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Only one iteration over array, building map and finding max char:
// function maxChar(str) {
//     res = {};
//     maxchar = '';
//     prev = 0;
//     for (const val of str) {

//         res[val] = 1 + (res[val] == undefined ? 0 : res[val]);

//         if(res[val]>=prev){
//             maxchar = val;
//             prev = res[val];
//         }
//     }

//     return maxchar;
// }


//Two iterations, using 1 for *in* and 1 for *of*
function maxChar(str) {
    res = {};
    for (const val of str) {
        res[val] = 1 + (res[val] == undefined ? 0 : res[val]);
    }

    maxchar = '';
    prev = 0;
    for(const val in res) {
        if(res[val] >= prev){
            maxchar = val;
            prev = res[val];
        }
    }

    return maxchar;
}


//Two iterations over the array to build JS Object and then find maxchar:
// function maxChar(str) {
//     arrayStr = str.split('');
//     res = arrayStr.reduce((summaryMap, val) =>{
//         summaryMap[val] = 1 + (summaryMap[val] === undefined  ? 0 : summaryMap[val]);
//         return summaryMap;
//     }, {});

//     maxchar = undefined;
//     prev = 0;
//     for (const val of arrayStr) {
//         if(res[val]>=prev){
//             maxchar = val;
//         }
//     }

//     return maxchar;
// }

//maxChar("aabcccccccd");

module.exports = maxChar;
