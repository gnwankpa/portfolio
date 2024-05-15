/// was looking at having lsat function wait for recursion to finish before doing anything

let time = 2000
let testArray = [1,3,4,5,3]
let exArray = [1,2,3,4,5,6,7,7]


const pushArray = (() => {
    return new Promise((resolve, reject) => {
        exArray.push(2)
        resolve('pushed')
    })
})
const recursiveArrayCheck = () =>{
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if(exArray.length < 50){
            pushArray()
                .then((response) =>{
                    
                    
                        // time = time + 1000
                        console.log(exArray.length)
                        recursiveArrayCheck()
                    
                })
            
        } else if(exArray.length >= 50)  {
            console.log('cycle')
            exArray = [1,2,3,4,5,6,7,7]
            resolve('Done')

        } else{
            reject('something is wrong')
        }
    },500)
    })

    
// There needs to be a way to get this updated to another array
}


// recursiveArrayCheck()


// testArray.forEach((number, index) => {
//     setTimeout(() => {
        
//         recursiveArrayCheck()
//             .then((response) => {
//                 // console.log(`Number: ${number}`)
//                 console.log(response)
//             })
//             .catch((err) =>{
//                 console.log(err)
//             })
//     }, 15000 * index) 
// })

const asyncLooper = async () => {
    
    for (let number of testArray){
            console.log(`Number: ${number}`)
            await recursiveArrayCheck()     
    }

}

const asyncLooperG = async () => {
    await lol()
    for (let number of testArray){
        setTimeout(() => {
            console.log(`Number: ${number}`)
            
        },5000)   
    }

}

const lol  = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let timeStamp = new Date(0)
            console.log(`${timeStamp}`)
            resolve(console.log('lol'))
        },5000)
    })
    
    
}

const testFor = async ()=> {

    for (let number of testArray) {
        await lol()
        

    }
    console.log('Done');
    return('done')

}


const testEndPromise = () => {
    return new Promise((resolve, reject) => {
        testFor()
            .then((response) => {
                resolve(response)
            })
        // resolve()
    })
}

testEndPromise()
    .then((response) => {
        console.log(response)
    })
// testFor()
// asyncLooperG()






// function computeMaxCallStackSize() {
//     try {
//         return 1 + computeMaxCallStackSize();
//     } catch (e) {
//         // Call stack overflow
//         return 1;
//     }
// }

// console.log(computeMaxCallStackSize())