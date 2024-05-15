
const sleep = ((val) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            let x = 1
            resolve(x)

        }, val)

        
      
})
})


sleep(1000)
    .then(() => {
        console.log('one');
        return sleep(1000)
    })
    .then(() => {
        console.log('two');
        return sleep(1000)
    })
    .then(() => {
        console.log('three');
        
    });

    /// This works fine