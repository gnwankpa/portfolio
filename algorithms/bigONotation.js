
//                     //Constant runtime
//                     //Big O Notation "0[1]"
// function log(array) {
//     console.log(array[0]);
//     console.log(array[1]);
// }


// log([1,2,3,4]);
// log([1,2,3,4,5,6,7,8,9,10]);


// function logAll(array) { // Big O Notation: "0 (n)"
//     for (var i = 0; i < array.length; i++) {
//         console.log(array[i]);
//     }
// }

// logAll([1,2,3,4,5]);
// logAll([1,2,3,4,5,6]);
// logAll([1,2,3,4,5,6,7]);


// function addAndLog(array) {
//     for (var i = 0; i < array.length; i++) {
//         for (var j = 0; j < array.length; j++) {
//             console.log(array[i] + array[j]);
//         }
//     }
// }

// addAndLog(['A', 'B', 'C']);
// addAndLog(['A', 'B', 'C', 'D']);
// addAndLog(['A', 'B', 'C', 'D', 'E']);


// ======
// Logarithmic Algorithms

// O(log n)

// function binarySearch(array, key) {
//     var low = 0;
//     var high = array.length - 1;
//     var mid;
//     var element;

//     while (low <= high) {
//         mid = Math.floor((low + high) / 2, 10);
//         element = array[mid];
//         if (element < key) {
//             low = mid + 1;
//         } else if (element > key) {
//             high = mid - 1;
//         } else {
//             return mid;
//         }
//     }
//     return -1;
// }