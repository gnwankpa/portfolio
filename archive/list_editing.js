const util = require('util')

const listOfStuff  = [
    
    {
        product:"N3K",
        lineCards: ["fx-24"]
    },
    {
        product:"N9K",
        lineCards: ["fx-24"]
    },
    {
        product:"N9K",
        lineCards: ["fx-25"]
    },
    {
        product:"N9K",
        lineCards: ["fx-29"]
    },
    {
        product:"N2K",
        lineCards: ["fx-24"]
    },
    {
        product:"N1K",
        lineCards: ["fx-25"]
    },
    {
        product:"N9K",
        lineCards: ["fx-31"]
    },

]

let newListOfStuff = []

// let y=0;
// const binarySearch = ((objArray, key) => {
//     let objArrayCopy = objArray.slice(0)
    
//    //  console.log(objArrayCopy)
//     // let middleIdx = Math.floor(objArrayCopy.length /2);  // math.floor rounds down so you are not stuck with a decimal key
//     let targetElem = objArrayCopy[y]['product'];
    
//    //https://stackoverflow.com/questions/22697936/binary-search-in-javascript
//     if (targetElem == key) {
//         console.log(`Item Found -> ${targetElem}`);
//         return true;
//        }
//     else if (y < (objArrayCopy.length - 1)) {
//         console.log(`checking forward....`);
//         y++
//        //  console.log('.')
//        //  console.log(binarySearch(objArrayCopy.splice(middleIdx, objArrayCopy.length), key))
//         return binarySearch(objArrayCopy, key);
//     }
//     else {
//         console.log(`Not Found for ${key}!!!`);
        
//         return false;
//     }
// })

let currentFoundIndex;

const objSearchRaw = ((objArray, key, y) =>{
     if(objArray.length === 1){
         let targetElem = objArray[y]['product']
         if(targetElem === key) {
             console.log(`Single item in array with match on index ${y}`);
            currentFoundIndex = y
             return true
         } 
         else{
            console.log(`Single item in array with NO match`);
             return false
         } 
     }
     else if (objArray.length > 1){
         let targetElem = objArray[y]['product']
         if(targetElem === key){
             console.log(`Found a match after on index ${y} after ${y+1} tries`);
             currentFoundIndex = y
             return true
         }
         else if(y != (objArray.length-1)){
             console.log(`checking forward on ${y+1} of ${objArray.length} try....`)
             
            //  console.log(y)
             y++
             return objSearchRaw(objArray,key,y);
         }
         else{
             console.log(`Nothing Found for ${key} on ${y+1} of ${objArray.length} try... `);
             console.log(targetElem)
             return false;
         }
     }
     else{
         console.log('Empty Object or another error')
         return false
     }

})



const nonDupList = () => {
// console.log('lolo')
    listOfStuff.forEach((item) => {
        // console.log(item)
    
    
        {
        if(newListOfStuff.length === 0) {
            newListOfStuff.push(item)
            // console.log('test')
            // console.log(`Item Empty Array -> ${item['product']}`);
        }
        else if (objSearchRaw(newListOfStuff, item['product'], 0) != false){
            newListOfStuff[currentFoundIndex]['lineCards'].push(item['lineCards'][0])

            // console.log(`Item Existed -> ${item['product']}`);
            // console.log('found')

        } else {
            newListOfStuff.push(item)
            // console.log(`Item Did not Exist -> ${item['product']}`);
            // console.log('test')
        }

        
              
        
    }
})
// console.log(newListOfStuff)  

console.log(util.inspect(newListOfStuff, {showHidden: false, depth: null}))
    
   
}

nonDupList()