
//uses absolute numbers
//for coins use the current world population of 7.6 - 8 billion... because if everyone cane get at leas 1 of the coin its not as scarce
// 16 billion means everyone in the world can get 2
// https://www.researchgate.net/post/How_do_i_normalize_data_from_0_to_1_range


const randomMaxCoinSupplies = [120000000, 10000000, 90000000, 20000000, 30000000, 70000000, 9000000, 1000000, 42000000000, 1800000000]

let sortedCoinSupplyList = randomMaxCoinSupplies.sort(function(a,b) {
    return a - b;
    //low to high
    //the .sort() actually changes the main list
});
let minValueCoinSupply = sortedCoinSupplyList[0]

let maxValueCoinSupply = sortedCoinSupplyList[sortedCoinSupplyList.length - 1]

const gradeMyNumbers = (lowScale, highScale) => {
    

    sortedCoinSupplyList.forEach((coinSupply, index) => {
        let absLow = Math.abs(lowScale - coinSupply)
        let absHigh = Math.abs(highScale - coinSupply)
        let coinSupplyScore = Math.abs(((coinSupply - highScale) / (highScale - lowScale)) * 100)
        let tightCoinSupplyScore = ((1 - (100 - coinSupplyScore)) * 100)
        // The tight scores move the decimal to the right a few times and omits the 99 since the difference between high and low is so great it yields a lot of 99s

        if(coinSupply < lowScale) {

            console.log(`${coinSupply} This is a grade A+ coin with score of ${tightCoinSupplyScore}`);
        } 
        else if(coinSupply > highScale) {
            console.log(`${coinSupply} This is a failure coin with score of 0 or less!`)
        }
        
        else if(coinSupply > lowScale && coinSupply < highScale) {
            

            
            // if(absLow > absHigh) {
            //     // If coin is closer to not being scarce

            //     console.log(coinSupplyScore / 100);

            //     // if(coinSupplyScore < 100.0 && coinSupplyScore > 99.0) {
            //     // console.log(`${coinSupply} This is a coin that is not as scarce with score of ${tightCoinSupplyScore}`)
            //     // }
            //     // else{
            //     //     console.log(`${coinSupply} This is a failure coin with score of 0 or less!`)
            //     // }

            // }
            // else if(absLow < absHigh) {
            //     // If coin is closer to  being scarce
            //     console.log(coinSupplyScore /100);

            //     // if(coinSupplyScore < 100.0 && coinSupplyScore > 99.0) {
            //     //     console.log(`${coinSupply} This is a coin that is close to being scarce with score of ${tightCoinSupplyScore}`)
            //     //     }
            //     //     else{
            //     //         console.log(`${coinSupply} This is a failure coin with score of 0 or less!`);
            //     //         console.log(`${coinSupply} This is a coin that is not as scarce with score of ${coinSupplyScore}`);
            //     //     }
                

            // }
            // else if(absLow === absHigh) {
            //     console.log(coinSupplyScore /100);
            //     // console.log('This is a dead even coin in scarcity');
            // }
        }

    })
}

// 300 200 900
// (currentX - minX) / (maxX - minX) to track to max
// (currentX - maxX) / (maxX - minX) to track to min
// use -1 for immediate ABS for negative numbers use if(num < 0)

gradeMyNumbers(1000000, 1000000000000);

