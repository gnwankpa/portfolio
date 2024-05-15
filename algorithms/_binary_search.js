function binarySearch(numArray, key) {
    var middleIdx = Math.floor(numArray.length / 2);
    var middleElem = numArray[middleIdx];
    
    if (middleElem === key) return true;
    else if (middleElem < key && numArray.length > 1) {
        return binarySearch(numArray.splice(middleIdx, numArray.length), key);
    }
    else if (middleElem > key && numArray.length > 1) {
        return binarySearch(numArray.splice(0, middleIdx), key);
    }
    else return false;
}
 
console.log(binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 48));


// you will have to sort the numbers first

const binarySearchNew = (arr, val) =>{
    let middleIndex = Math.floor(arr.length / 2);
    let middleElem = arr[middleIndex]

    if(middleElem === val){
        return true
    }else if (middleElem < val && arr.length >1){
        return binarySearchNew(arr.splice(middleIndex, arr.length), val);
    }else if (middleElem > val && arr.length > 1){
        return binarySearchNew(arr.splice(0, middleIndex), val);
    }
    else return false;
}

console.log(binarySearchNew([5, 7, 12, 16, 36, 39, 42, 56, 71], 71))