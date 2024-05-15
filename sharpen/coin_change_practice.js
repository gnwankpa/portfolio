// Function to calculate the fewest coins needed
function coinChange(coins, amount) {

  const MAX = Number.MAX_SAFE_INTEGER

  let dp = Array(amount + 1).fill(MAX);

  dp[0] = 0;

  for(let i =1; i <= amount; i++){

    for(let j= 0; j < coins.length; j++){
        if(coins[j] <= i){
            dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
        }
        console.log(dp[i])
    }
  }

  return dp[amount] > amount ? -1 : dp[amount];

}

// Test the function with an example case
const coins = [1, 2, 5];
const amount = 100023229;
// coinChange(coins, amount)
console.log(coinChange(coins, amount));  // Output should be 3

