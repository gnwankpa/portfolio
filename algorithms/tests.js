function lonelyinteger(a) {
    // Write your code here
    
    let example  = [{val:1,count:2}]
    let b = []
    // console.log(a)
    for(let num of a){
        let indexF = b.findIndex((x)=>x.val === num)
        // console.log(indexF)
        
        if(indexF === -1){
            b.push({val:num, count:1})
            
        }else{
            // return indexF
            
            b[indexF].count = b[indexF].count + 1
            // console.log(b[indexF])
        }
    }
    for(let c of b){
        if(c.count === 1){
            return c.val
        }
    }

}

console.log(lonelyinteger([1,2,3,4,5,5,3,2,1]))


const sortThis = (arr) => {
    return arr.sort((a,b) =>{
        return a-b
    })

}

console.log(sortThis([1,2,3,4,1,2,3,3,9,01,2]))


let bX = [1,2,3,4,5,6,7,7,8,8,0]

bX.splice(4)
console.log(bX)