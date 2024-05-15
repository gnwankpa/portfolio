const listOfObjects = [
    {
    name: 'BTC',
    scarcity: '21000',
    circSupply: '17000'
    },
    {
        name: 'LTC',
        scarcity: '840000',
        circSupply: '390000'
    },
    {
        name: 'ETC',
        scarcity: '',
        circSupply: '36000'
    },
    {
        name: 'ETH',
        scarcity: '',
        circSupply: '36000'
    },
    {
        name: 'BCH',
        scarcity: '21000',
        circSupply: '17000'
    },
    {
        name: 'XMR',
        scarcity: '',
        circSupply: '980000'
    },
    {
        name: 'XRP',
        scarcity: '0',
        circSupply: '980000'
    },
    {
        name: 'DNR',
        scarcity: '1000',
        circSupply: '500'
    }
]


const getMax = (() => {
    return new Promise((resolve, reject) => {

        let y = 99999999999999999999999999999999
        let x = 99999999999999999999999999999999
        listOfObjects.forEach((coin, index) => {
            console.log(coin.name)
            let scarcity = coin.scarcity
            if(scarcity && scarcity != 0 && scarcity != '' || scarcity > y) {
                if (scarcity < x)
                {
                    x = scarcity
                    
                } else{
                    console.log(`More than max value for ${coin.name}!`)
                    // reject(`Less than zero value for !`)
                }
            } else {
                // console.log(`${type}: - ${scarcity[type]}`)
                console.log(`Less than '''' value for ${coin.name}!`)
            }
        })
        resolve(x)
    })
})


const rankSorterHigh = (() => {
    return new Promise((resolve, reject) => {

        let newList = []

        listOfObjects.forEach((coin, index) =>{
            console.log(coin.name)
            scarcity = coin.scarcity
            let counter = 0
            const maxCounter = newList.length 
            const checkSort = (list) => {
                scarcity = coin.scarcity
                console.log(coin.name)
                
                if (counter === maxCounter){
                    if(newList.length === 0) {
                        newList.push(scarcity)
                        console.log(newList)
                    } else if(scarcity < list[counter]){
                        // let insertIndex = counter + 1
                        newList.splice(counter, 0, scarcity)
                        console.log(newList)
                    } else{
                        newList.push(scarcity)
                        console.log(newList)
                    }

                } else {
                    if(list.length === 0) {
                        newList.push(scarcity)
                        console.log(newList)
                    } else if(scarcity < list[counter]){
                        // let insertIndex = counter + 1
                        newList.splice(counter, 0, scarcity)
                        console.log(newList)
                    } else{
                        counter++
                        console.log(newList)
                        return checkSort(newList)
                        
                    }

                }
                
            } 
            setTimeout(() =>{
                checkSort(newList)
            }, 1000*index)
            
        })



        



    })
})


// console.log(listOfObjects);

// let x = 10

// // for (let number of x) {
// //     console.log(x)
// // }

// getMax()
//     .then((response) =>{
//         console.log(response)
//     })
//     .catch((err) => {
//         console.log(err)
//     })


rankSorterHigh()
    .then((response) => {
        console.log(response)
    })
    .catch((err) => {
        console.log(err)
    })