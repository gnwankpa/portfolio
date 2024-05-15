// copy Deep
let sortedCopy = [...sortedArr]
// find in index
let indexLocation = list.findIndex(i => i.tweetHash === item)
let indexF = b.findIndex((x)=>x.val === num)

const basicSort = (arr) =>{
    return arr.sort((a,b) =>{
        return a-b
    })
}
const sortObjects = (type,array) =>{
    let newArray = [...array]
    return(newArray.sort((a,b) =>{
      let x = a[type]
      let y = b[type]
      return y-x
    })
    )
}


console.log(lowestA)


const momentSort = (type,obj,inv) =>{
    let newArray = [...obj]
    return(newArray.sort((a,b) =>{
      let x = Number(moment(a[type]).format('x'))
      let y = Number(moment(b[type]).format('x'))
      if(inv){
        return x-y
      }else{
        return y-x
      }
      
    })
    )
  }


const reducer = (type, obj) =>{
    let newArray = [...obj]
    return(newArray.reduce((prevVal, elem) => prevVal + elem[type], 0)
    );
}
const posFilter = (array) =>{
    let newArray = [...array]
    return(newArray.filter((item) => (item.sentiment > 0.75)))
}
const negFilter = (array) =>{
    let newArray = [...array]
    return(newArray.filter((item) => (item.sentiment < -0.75)))
}
const neuFilter = (array) =>{
    let newArray = [...array]
    return(newArray.filter((item) => (item.sentiment < 0.75 && item.sentiment > -0.75)))
}
const infFilterLite = (array) =>{
  let newArray = [...array]
  return(newArray.filter((item) => ((item.engagementsRank <= 5 || item.retweetsRank <= 5 || item.repliesRank <= 5 || item.mentionsRank <= 5 || item.likesRank <= 5 || item.countRank <= 5) && (item.engagementsRank > 0  || item.retweetsRank > 0 || item.repliesRank > 0 || item.mentionsRank > 0 || item.likesRank > 0 || item.countRank > 0) )))
}
const sort = (type,array) =>{
    let newArray = [...array]
    return(newArray.sort((a,b) =>{
      let x = a[type]
      let y = b[type]
      return y-x
    })
    )
}

const sortEngagments = (typeOne, typeTwo, typeThree,array) =>{
  let newArray = [...array]
  return(newArray.sort((a,b) =>{
    let x = (a[typeOne] + a[typeTwo] + a[typeThree])
    let y = (b[typeOne] + b[typeTwo] + b[typeThree])
    return y-x
  })
  )
}

const createTopArray = (max,array) =>{
    let dataArray = []
    for (let i = 0; i < max; i++ ){
      dataArray.push(array[i])
    }
    return dataArray
}

const countOccurrences = (arr, val) => arr.reduce((a, v) => (v.twitterHandle === val ? a + 1 : a), 0);

const countOccurrencesMentions = (arr, val) => arr.reduce((a, v) => (val.test(v.text) === true ? a + 1 : a), 0);

const influencerFilter = (array, handle) =>{
  let newArray = [...array]
  return(newArray.filter((item) => (item.twitterHandle === handle)))
}

const influencerReduce = (array) =>{
  let newArray = [...array]
  return(newArray.filter((item) => (item.twitterHandle < 0.75 && item.sentiment > -0.75)))
}