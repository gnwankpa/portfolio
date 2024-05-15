
const binarySearch = ((numArray, key) => {
     let numArrayCopy = numArray.slice(0)
    //  console.log(numArrayCopy)
     let middleIdx = Math.floor(numArrayCopy.length /2);  // math.floor rounds down so you are not stuck with a decimal key
     let middleElem = numArrayCopy[middleIdx];
     
    //https://stackoverflow.com/questions/22697936/binary-search-in-javascript
     if (middleElem == key) {
        //  console.log('true')
         return true;
        }
     else if (middleElem < key && numArrayCopy.length > 1) {
        //  console.log('.')
        //  console.log(binarySearch(numArrayCopy.splice(middleIdx, numArrayCopy.length), key))
         return binarySearch(numArrayCopy.splice(middleIdx, numArrayCopy.length), key);
     }
     else if (middleElem > key && numArrayCopy.length > 1) {
        // console.log(binarySearch(numArrayCopy.splice(0, middleIdx), key))
        //  console.log('.')
         return binarySearch(numArrayCopy.splice(0, middleIdx), key);
     }
     else {
        //  console.log('false')
         return false;
     }
})


testArray = [1,2,3,4,0,6,7,8,9,0]

console.log(testArray.slice(0))


if (binarySearch(testArray, 5) === true) {
    console.log('true')
} else {
    console.log('false')
}



console.log(binarySearch(testArray, 2));




