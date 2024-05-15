let testList = [1,2,3,4,5,6,7,8,9,9]
let testListTwo = [10,11,23,244,22,2]
let y = 0
let z  = 0



const testPromise = (() => {
    return new Promise((resolve, reject) => {
        // May be having issues with my counters since they start at 0?
        let counter = 1
        // let baseNumber = 0
        let x = 0
        console.log('Starting First Promise');

        testList.forEach((number, index) => {
            setTimeout(() => {
                if (counter != testList.length) {
                    x = x + number
                    console.log(x)
                    counter++

                } else {
                    x = x + number
                    console.log(x)
                    resolve(x)
                }
                
            }, 1000 * index)

        })

    })

})


const testPromiseTwo = (() => {
    return new Promise((resolve, reject) => {
        // May be having issues with my counters since they start at 0?
        let counter = 1
        // let baseNumber = 0
        let x = 0
        console.log('Starting Second Promise');
        testListTwo.forEach((number, index) => {
            setTimeout(() => {
                if (counter != testListTwo.length) {
                    x = x + number
                    console.log(x)
                    counter++

                } else {
                    x = x + number
                    console.log(x)
                    resolve(x)
                }
                
            }, 1000 * index)

        })

    })

})


const testFunction = (() => {
    return y + z    
})


const testAsync = async() => {
    await testPromise()
            .then((response) => {
                y = response
            })
    await  testPromiseTwo()
            .then((response) =>{
                z = response
            })
    console.log('');
    console.log(`This is the Final Value: ${testFunction()}`);
}


testAsync();