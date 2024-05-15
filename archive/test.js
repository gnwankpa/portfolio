const array = ["Bob", "John", "Ada"]

/// Bob - John - Ada

// Final output
//list = 'Bob - John - Ada';


const formatNames =(arr )=>{ 
    // console.log(arr)
    let joinedName = arr.join(' - ')
    // console
    return joinedName

    
}

console.log(formatNames(array))