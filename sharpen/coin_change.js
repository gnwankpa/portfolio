// Function to calculate the fewest coins needed
function coinChange(coins, amount) {
    // We use this to fill the dp table with default values
    const MAX = 9999999;
    
    // Create an array to store our subproblems, initialize with default values
    // We use amount + 1 to account for the 0 index
    let dp = Array(amount + 1).fill(MAX);
    
    // Base case: the least number of coins to make 0 is always 0 coins
    dp[0] = 0;

    // Loop through all subproblems from 1 to amount
    for (let i = 1; i <= amount; i++) {
        // For each subproblem, try each coin
        for (let j = 0; j < coins.length; j++) {
            // If the coin value is less than or equal to the subproblem amount
            if (coins[j] <= i) {
                // Check if one more coin is the minimum option and update dp[i]
              
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
               

                
                
            }
        }
    }
    
    // If no solution is found, dp[amount] will be MAX, so return -1
    // Otherwise, return the answer at dp[amount]
    return dp[amount] > amount ? -1 : dp[amount];
}

// Test the function with an example case
const coins = [1, 2, 5];
const amount = 30;

console.log(coinChange(coins, amount));  // Output should be 3
