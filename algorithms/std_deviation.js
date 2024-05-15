// const arrlong = Array.from({length: 206}, () => Math.floor(Math.random() * ((500000000.00 - 5000000) + 5000000)));

const arrlosng = [1,2,3,4,5,5,6,7,8,3,7,10]

const arrlong = [50000000000, 899999933, 233445454545, 12000000, 3102002020, 299200001, 29299999499, 400000000]



const average = ((data) => {
    var sum = data.reduce((sum, value)=> {
      return sum + value;
    }, 0);
  
    var avg = sum / data.length;
    return avg;
  })


const standardDeviation = ((values) => {{
    

    var avg = average(values);
    
    var squareDiffs = values.map((value) => {{
      var diff = value - avg;
      var sqrDiff = diff * diff;
      return sqrDiff;
    }
});

    var avgSquareDiff = average(squareDiffs);
  
    var stdDev = Math.sqrt(avgSquareDiff);
    return stdDev;
  }
  
 
})


const zScoreFunc = ((score, mean, stdDeviation) => {

    let zScore = (score - mean)/stdDeviation
    return zScore;

})

let meany = average(arrlong);
let stdDevy = standardDeviation(arrlong);



arrlong.forEach((value, index) => {
    let vZScore = zScoreFunc(value, meany, stdDevy)
    console.log(`z-Score is: ${vZScore} for ${value}`);
})






// 



console.log(average(arrlong));

console.log(standardDeviation(arrlong));