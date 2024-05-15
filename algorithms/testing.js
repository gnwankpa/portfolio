

/*
 * Complete the 'getMaximumEvenSum' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY val as parameter.
 */

function getMaximumEvenSum(val) {
    
    
    // Write your code here
    // return val
    //sorting first
    const sorter =  (arr) => {
        return arr.sort((a,b)=>{
            return a-b
        })
    }
    const reducer = (arr) =>{
        let newArr = [...arr]
        return newArr.reduce((el, prevEl)=>prevEl + el, 0)
    }
    
    let sortedList = sorter(val)
    let poppedVal
    let biggestSum = 0
    
    
    const checkIfSumEven = (list) =>{
        let sum =  reducer(list)
            if(sum % 2 === 0 || sum % 2 === -0){
                return sum
            }else{
                // if(poppedVal){
                //     sortedList.push(poppedVal)
                //     poppedVal = null
                // }
                // poppedVal = sortedList.shift()
                sortedList.shift()
                // summedArr =  reducer(sortedList)
                // return sortedList
                return checkIfSumEven(sortedList)
            }
        
    }
    
    for(let val of sortedList){
          let bestSum = checkIfSumEven(sortedList)
          if(bestSum > biggestSum){
              biggestSum = bestSum
          }
        
    }
    
    return biggestSum


}



let val = [5,-1,-2,-3,8,7]
console.log(getMaximumEvenSum(val))