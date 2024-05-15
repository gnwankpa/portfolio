
//uses absolute numbers
//for coins use the current world population of 7.6 - 8 billion... because if everyone cane get at leas 1 of the coin its not as scarce
// 16 billion means everyone in the world can get 2

const randomMaxCoinSupplies = [120000000, 10000000, 90000000, 20000000, 30000000, 70000000, 9000000, 1000000, 42000000000, 1800000000]
const arrSum = (arr) => arr.reduce((a,b) => a + b, 0)
const totalGlobalCoinSupply = arrSum(randomMaxCoinSupplies);

const gradeMyNumbers = () => {

    randomMaxCoinSupplies.forEach((coinSupply, index) => {

        const coinPercentOfGlobalFunc = (coinAmt) => {
            let coinPercentageOfGlobal = ((coinAmt * 100) / totalGlobalCoinSupply)
            let gradeOfScarecity = 100 - coinPercentageOfGlobal
            return gradeOfScarecity;
        }

        console.log(`${coinSupply} out of ${totalGlobalCoinSupply} and percantage of ${coinPercentOfGlobalFunc(coinSupply)}`)



    })
}



gradeMyNumbers();
