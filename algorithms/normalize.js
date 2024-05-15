// You could try this approach - normalise your data set to range between the values -1 and +1 thus:
// (individual_value−min_of_all_valuesmax_of_all_values−min_of-all_values−0.5)∗2.
// This will convert every value in your data set to a value between -1 and +1, with the actual maximum and minimum values being set to +1 and -1 respectively, and then reset these +1 and -1 values to be +0.9999 and -0.9999 (necessary for following calculations.)

// Then apply the Fisher Transformation to each of the above normalised values to "force it" to approximately conform to a normal distribution, and then "un-normalise" each of these Fisher Transform values to range in value between 200 and 800 thus:
// Fish_value−min_all_Fish_valuesmax_all_Fish_values−min_all_Fish_values∗600+200
// The maximum Fisher Transform value will be set to exactly 800, the minimum Fisher Transform value will be set to exactly 200, and all the other values will lie between these two extremes, according to an approximate normal distribution.

// Referencing your original question on SO and the issue of scalability, the advantage of this approach is that provided any new data point is not itself a new maximum or minimum for the data set as a whole you can apply the above calculations to the new data point to get its score between 200 and 800 without affecting any of the existing scores of the original data set. If a new data point is a new maximum or minimum you will have to recalculate the scores for the whole data set with this new "normalising" maximum or minimum value.

//https://www.researchgate.net/post/How_do_i_normalize_data_from_0_to_1_range
//https://www.mrexcel.com/forum/excel-questions/875332-normalize-convert-range-0-100-range-based-cells-another-column.html

const coinSupplyList = [3000000, 42, 50000000000, 899999933, 233445454545, 12000000, 3102002020, 299200001, 29299999499, 400000000, 7000000000000000]
let sortedCoinSupplyList = coinSupplyList.sort(function(a,b) {
    return a - b;
    //low to high
    //the .sort() actually changes the main list
});
let minValueCoinSupply = sortedCoinSupplyList[0]

let maxValueCoinSupply = sortedCoinSupplyList[sortedCoinSupplyList.length - 1]


// const normalize = (value, minValue, maxValue) => {

//     let nScore = ((((value - minValue)/(maxValue - minValue)) - 0)* 1)
//     return nScore;  
// }

// coinSupplyList.forEach((coinValue, index) => {
//    let fishValue = normalize(coinValue, minValueCoinSupply, maxValueCoinSupply);

//    let fishTransValue = 100-(((fishValue - 0)/( 100 - 0)) * 100)
//    console.log(`coin Value:${coinValue} with fish value:${fishValue} and transform value: ${fishTransValue}`)
// })


coinSupplyList.forEach((coinValue, index) => {
    let normalize = ((coin, min, max) => {
        let nValue = 100 * ((coin - min) / (max - min))
        return nValue

    })

    let x = 100 - normalize(coinValue, 1, 1000000000)

    
    console.log(`coin Value:${coinValue} with normalized value:${x}`)
 })

