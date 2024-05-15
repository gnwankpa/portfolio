// coinChangeChallenge.js

// /**
//  * This function calculates all the combinations of coins that make up a total amount.
//  * Each combination uses the denominations provided in the coin set.
//  *
//  * @param {number} amount - The total amount to make change for.
//  * @param {number[]} coins - An array of integers, where each integer is a coin denomination.
//  * @returns {Object[]} - An array of objects, where each object represents a valid combination of coins 
//  *                        that sum up to the target amount. The object's key is the coin denomination, 
//  *                        and the value is the count of that denomination used.
//  *
//  * @example
//  *  makeChange(6, [1, 5]); // returns [{1: 6}, {1: 1, 5: 1}]
//  * 
//  * Considerations:
//  *  - If there's no possible combination, or the coin set is empty, or the total amount is less than 
//  *    the smallest coin denomination, the function should handle these cases appropriately.
//  *  - The solution's efficiency is important. Using strategies like dynamic programming for optimization 
//  *    is encouraged, especially for cases with large inputs.

function makeChange(amount, coins) {
    // Your code here to calculate combinations
    const solutionModelArray = []
    // let solutionArray  =[]
    
    const sortedValues = coins.sort((a,b)=>{
            return a-b
    })
        
    
    const createBaseModel = (items) =>{
        for(let i = 0; i<items.length; i++){
            let obj = {}
            obj[Number(items[i])]=0
            solutionModelArray.push(obj);
        }

    }

    createBaseModel(coins);
    // console.log(solutionModelArray)



    const checkIfClean= (val, amt) =>{
        
        if(amt % val === 0){
            return true
        }else {
            return -1
        }
    }

    if(amount === 0){
        return solutionModel
    }

    // determine the larger value to check how many times to get values. so if coin 1 is divisable

    for(i=0; i<=coins.length; i++){
        const getdiv =(checkIfClean(sortedValues[i], amount) )
        console.log(getdiv)
        console.log(amount)
        console.log(sortedValues[i])
        console.log(amount % Number(sortedValues[i]))
        if(getdiv!= 1){
             
        }


    }



    return [ ]
}

// Helper function for testing
function assertEqualArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
            if (!assertEqualArrays(arr1[i], arr2[i])) return false;
        } else if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

// Tests execution function
function runTests() {
    const testCases = [
        {
            amount: 6,
            coins: [1, 5],
            expected: [{1: 6}, {1: 1, 5: 1}], // or any order of these combinations
        },
        // ... other test cases
    ];

    testCases.forEach((test, index) => {
        const {amount, coins, expected} = test;
        const result = makeChange(amount, coins);
        console.log(`Running test ${index + 1}...`);
        if (assertEqualArrays(result, expected)) {
            console.log('Test passed.\n');
        } else {
            console.log('Test failed.\n');
        }
    });
}

// Implement your function before this line

// Run the tests
runTests();
