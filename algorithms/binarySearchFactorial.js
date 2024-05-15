// Factorial (!)
// 4! = 4 *3 * 2 * 1 = 24

// 3! = 3 * 2 * 1 = 6
let x = 0
function factorial(num) {
    if (num === 1) {
        //base case
       console.log(num);

    }
    else {
        let x= (num * factorial(num -1));
    }
    console.log(x);
}


factorial(4);