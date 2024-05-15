const delay = ms => new Promise(res => setTimeout(res, ms));

async function coinChange(coins, amount) {
    const MAX = 9999999;
    let dp = Array(amount + 1).fill(MAX);
    dp[0] = 0; // The base case: 0 amount requires 0 coins

    console.log("Initial dp table:", dp);
    await delay(5000);

    // Iterate through all amounts from 1 to the target amount
    for (let i = 1; i <= amount; i++) {
        console.log(`\nComputing for amount: ${i}`);

        // Try each coin
        for (let j = 0; j < coins.length; j++) {
            console.log(`  Checking coin with denomination: ${coins[j]}`);

            // Check if the current coin can be used for the current amount
            if (coins[j] <= i) {
                let newCount = dp[i - coins[j]] + 1;

                // Check if using the current coin would be better than the previous best count
                if (newCount < dp[i]) {
                    console.log(`    Using coin: ${coins[j]}, since it improves the count from ${dp[i]} to ${newCount}`);
                    dp[i] = newCount;
                } else {
                    console.log(`    Skipping coin: ${coins[j]}, since it doesn't improve the count`);
                }
            } else {
                console.log(`    Coin: ${coins[j]} is too large to be used for current amount`);
            }
            await delay(5000); // Pause to understand each step

            // Log the dp table after trying each coin
            console.log(`  dp table after considering coin ${coins[j]}:`, dp);
        }

        console.log(`Minimum coins needed for amount ${i}: ${dp[i] === MAX ? "No solution found" : dp[i]}`);
        await delay(5000); // Pause to review the result of each amount
    }

    // Conclude the function
    const finalResult = dp[amount] > amount ? -1 : dp[amount];
    console.log(`\nFinal result: ${finalResult === -1 ? "No solution could be found" : finalResult}`);
    console.log("Final dp table:", dp); // Log the final dp table

    return finalResult;
}

// Test function with an example case
async function testFunction() {
    const coins = [1, 2, 5];
    const amount = 11;

    await coinChange(coins, amount); // Asynchronous call to the main function with a delay
}

testFunction();
