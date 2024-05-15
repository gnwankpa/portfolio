// Has a good way to rank below
// remember to get an if else statement to control invalid output

// When using sort hopefully orginal order will be preserved !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


//The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
const randomMaxCoinSuppliesTwo = Array.from({length: 8706}, () => Math.floor(Math.random() * ((5000000000000.00 - 5000000) + 5000000)));

// console.log(randomMaxCoinSuppliesTwo);


const randomMaxCoinSupplies = [120000000, 10000000, 90000000, 20000000, 30000000, 70000000, 9000000, 1000000, 42000000000, 1800000000, 900000000000, 560000000000, 9800000000000, 45555555555555, 500000, 88888888888, 6776767676767, 500999, 200000, 565656]

// sort((a, b) =>  (a - b)) ":means:" function sortNumber(a,b) {
//     return a - b;
// }

const sortedRandomMaxCoinSupplies = randomMaxCoinSuppliesTwo.sort((a, b) =>  (a - b))

console.log(sortedRandomMaxCoinSupplies);

const gradeMyNumbers = () => {

    randomMaxCoinSuppliesTwo.forEach((coinSupply, index) => {
        let coinSupplyRank = (1+(sortedRandomMaxCoinSupplies.indexOf(coinSupply)));
        let totalCoins = sortedRandomMaxCoinSupplies.length;

        const coinPercentOfRankFunc = (coinAmt) => {
            let coinPercentageOfRank = ((coinAmt * 100) / totalCoins)
            let gradeOfScarecity = 101 - coinPercentageOfRank
            // Use 101 because if 100 you will get 0 for the last index number and the 0s are reserver for coins with no max value yet
            // When using sort hopefully orginal order will be preserved
            return gradeOfScarecity;
        };  

        let scarcityRating = coinPercentOfRankFunc(coinSupplyRank);
        let easyReadScarcityRating  = scarcityRating.toFixed(2)

        console.log(`${coinSupplyRank} out of ${totalCoins} and percantage of ${easyReadScarcityRating}`)
        

      
    })
}

// 300 200 900
// (currentX - minX) / (maxX - minX) to track to max
// (currentX - maxX) / (maxX - minX) to track to min
// use -1 for immediate ABS for negative numbers use if(num < 0)

gradeMyNumbers();
