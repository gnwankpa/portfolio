const randomMaxCoinSupplies = [120000000, 10000000, 90000000, 20000000, 30000000, 70000000, 9000000, 1000000, 42000000000, 1800000000]
const randomMaxCoinSuppliesTwo = Array.from({length: 206}, () => Math.floor(Math.random() * ((500000000.00 - 5000000) + 5000000)));
// https://sciencing.com/calculate-weighted-average-5328019.html
// https://www.mathsisfun.com/data/standard-normal-distribution.html
// z-score and z value
// http://www.statisticshowto.com/probability-and-statistics/z-score/

const sum = randomMaxCoinSuppliesTwo.reduce((a,b) => a + b, 0)

const gradeMyNumbers = (lowScale, highScale) => {
    

    randomMaxCoinSupplies.forEach((coinSupply, index) => {
        let absLow = Math.abs(lowScale - coinSupply)
        let absHigh = Math.abs(highScale - coinSupply)
        let coinSupplyScore = Math.abs(((coinSupply - highScale) / (highScale - lowScale)) * 100)
        let tightCoinSupplyScore = ((1 - (100 - coinSupplyScore)) * 100)

        ///
        

        // The tight scores move the decimal to the right a few times and omits the 99 since the difference between high and low is so great it yields a lot of 99s

        if(coinSupply < lowScale) {

            console.log(`${coinSupply} This is a grade A+ coin with score of ${tightCoinSupplyScore}`);
        } 
        else if(coinSupply > highScale) {
            console.log(`${coinSupply} This is a failure coin with score of 0 or less!`)
        }
        
        else if(coinSupply > lowScale && coinSupply < highScale) {
            

            if(absLow > absHigh) {
                // If coin is closer to not being scarce

                console.log(coinSupplyScore / 100);
                

            }
            else if(absLow < absHigh) {
                // If coin is closer to  being scarce
                console.log(coinSupplyScore /100);

            }
            else if(absLow === absHigh) {
                console.log(coinSupplyScore);
                // console.log('This is a dead even coin in scarcity');
            }
        }

    })
}


gradeMyNumbers(1000000, 1000000000000);

console.log((randomMaxCoinSuppliesTwo));
console.log(sum);