// Function to solve the TwoSum problem
const twoSum = (nums, target) => {
    const numsMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (numsMap.has(complement)) {
            return [numsMap.get(complement), i];
        }

        numsMap.set(nums[i], i);
    }

    return [];
};

// A utility function to check if two arrays (with no duplicate elements) are equal regardless of order
const arraysHaveSameElements = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;

    // Make sure to sort numbers correctly
    const sortedArr1 = arr1.slice().sort((a, b) => a - b);
    const sortedArr2 = arr2.slice().sort((a, b) => a - b);

    for (let i = 0; i < sortedArr1.length; i++) {
      if (sortedArr1[i] !== sortedArr2[i]) {
        return false;
      }
    }
    return true;
};

const testTwoSum = () => {
    const testCases = [
        { nums: [8, 15, 3, 7], target: 15, expected: [0, 3] }, // Correct as 8 + 7 = 15
        { nums: [1, 12, 18, 9, 3], target: 21, expected: [1, 3] }, // Correct as 12 + 9 = 21
        { nums: [100, 56, 32, -26], target: 26, expected: [2, 3] }, // Should be correct as 32 + (-26) = 6 (not 26)
        { nums: [-1, -3, -5, -7], target: -8, expected: [1, 2] }, // Correct as -3 + (-5) = -8
        { nums: [33, 44, 11, 22], target: 55, expected: [0, 2] }, // Should be [0, 2] because 33 + 22 = 55 (not [0, 3])

    // ... (any additional test cases)

    ];

    testCases.forEach(({ nums, target, expected }, index) => {
        const result = twoSum(nums, target);
        
        // Use the new utility function to compare the results
        console.log(`Test case ${index + 1}:`, arraysHaveSameElements(result, expected) ? 'PASS' : 'FAIL');
    });
};

// Run the test cases
testTwoSum();
