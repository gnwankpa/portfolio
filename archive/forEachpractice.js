let x =[1,1]
let y = 6
let N = 12

x.forEach((number, index) => {
    console.log(number);
})


console.log(Array.from(y));

console.log(Array.from(new Array(N),(val,index)=>index));

/// Create an aray from one number
///http://www.jstips.co/en/javascript/create-range-0...n-easily-using-one-line/