let list  = ['llol', ';pss', 'sdad', 1,3,4,5,6,7,8,98,9,9,9,8,7,7,5,5,5,5,5,5,4,4,4]


const newItemTwo = (value, gage) => {
    return new Promise((resolve, reject) =>{
        // setTimeout(()=>{
            resolve('LOL')
        // }, 250 * gage)
    })
}

const newItem = (value, gage) => {
    return new Promise((resolve, reject) =>{
        // setTimeout(()=>{
            resolve(value)
        // }, 3000 * gage)
    })
}


// list.forEach((item, index) => {

for(let [index, item] of list.entries()) {


    

    const newItemAsync  = async ()  => {
        
        await newItem(item, index)
                .then((response) => {
                    setTimeout(() => {
                        console.log(response);
                    },2000 * index)
                })
                .catch((err) => {
                    console.log(err);
                })
        
        await newItemTwo(item, index)
                .then((response) => {
                    setTimeout(() => {
                        console.log(response);
                    },250 * index)
                })
                .catch((err) => {
                    console.log(err);
                })

        return 'Iteration complete'

    }


    newItemAsync()
        .then((response) => {
            console.log(response)
        })
        .catch((err) =>{
            console.log(err)
        })
    }


