const twoSum = (num, target) =>{


    return null
}

const main = () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    
    const result = twoSum(nums, target);

    if (result) {
        console.log(`Indices found at: ${result}`);
    } else {
        console.log("No solution found!");
    }
};

// Run the test
main();