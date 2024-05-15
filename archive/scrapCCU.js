//Using this to gather all coins and categories
const axios = require('axios');
const cheerio = require('cheerio');
const util = require('util')



let HTML_Data = '';
let coinMarkets = [];
let marketObject = {};
let info = {};
let cArray = [];

const pagesBreakDown = [
    {
        categorySlug:'abandoned',
        pages: 2
    },
    {
        categorySlug:'adult',
        pages: 1
    },
    {
        categorySlug:'advertising',
        pages: 3
    },
    {
        categorySlug:'ai',
        pages: 1
    },
    {
        categorySlug:'art',
        pages: 1
    },
    {
        categorySlug:'business-service',
        pages: 5
    },
    {
        categorySlug:'cannabis',
        pages: 1
    },
    {
        categorySlug:'charity',
        pages: 1
    },
    {
        categorySlug:'communication',
        pages: 1
    },
    {
        categorySlug:'computing',
        pages: 2
    },
    {
        categorySlug:'crowdfunding',
        pages: 2
    },
    {
        categorySlug:'debit-card',
        pages: 1
    },
    {
        categorySlug:'ecommerce',
        pages: 1
    },
    {
        categorySlug:'education',
        pages: 1
    },
    {
        categorySlug:'energy',
        pages: 2
    },
    {
        categorySlug:'entertainment',
        pages: 3
    },
    {
        categorySlug:'exchange',
        pages: 4
    },
    {
        categorySlug:'financial-service',
        pages: 9
    },
    {
        categorySlug:'gambling',
        pages: 2
    },
    {
        categorySlug:'gaming',
        pages: 4
    },
    {
        categorySlug:'healthcare',
        pages: 1
    },
    {
        categorySlug:'identity',
        pages: 2
    },
    {
        categorySlug:'infrastructure',
        pages: 1
    },
    {
        categorySlug:'investing-tool',
        pages: 4
    },
    {
        categorySlug:'iot',
        pages: 2
    },
    {
        categorySlug:'manufacturing',
        pages: 1
    },
    {
        categorySlug:'marketplace',
        pages: 5
    },
    {
        categorySlug:'media',
        pages: 1
    },
    {
        categorySlug:'mining-facility',
        pages: 1
    },
    {
        categorySlug:'proof-of-stake',
        pages: 22
    },
    {
        categorySlug:'proof-of-work',
        pages: 29
    },
    {
        categorySlug:'prediction',
        pages: 1
    },
    {
        categorySlug:'privacy',
        pages: 2
    },
    {
        categorySlug:'real-estate',
        pages: 1
    },
    {
        categorySlug:'social',
        pages: 4
    },
    {
        categorySlug:'software',
        pages: 5
    },
    {
        categorySlug:'stablecoin',
        pages: 1
    },
    {
        categorySlug:'storage',
        pages: 1
    },
    {
        categorySlug:'ticketing',
        pages: 1
    },
    {
        categorySlug:'transportation',
        pages: 1
    },
    {
        categorySlug:'travel',
        pages: 1
    },
    {
        categorySlug:'virtual-reality',
        pages: 1
    }

]

const request = (page, category) => {
    return new Promise((resolve, reject) => {
        let URL = `https://cryptoslate.com/cryptos/${category}/page/${page}/`
        axios({
            method: 'GET',
            url: URL,
        })
        .then((response) => {
            // console.log(response.data);
            const $ = cheerio.load(response.data);
            // console.log(response.data);
            // let info = $('').children()
            // console.log(info);
            // let a = '';
            $('div .object-post').each((i, elm) => {    
                // let market = $(elm).text();
                 let a = $(elm)
    
                // console.log(a);

                rawTicker = (a.children().eq(0).children().eq(1).children().eq(0).children().eq(1).children().eq(0).children().eq(0).text()).split("")
                rawTicker.splice(0,2)
                cTicker = rawTicker.join("")



    
                // let marketObject = new Object();
                coinInfo = {
                    // numberTwo: a.children().eq(0).children().eq(0).children().eq(0).children().eq(1).children('img').attr('src')
                    coinName: a.children().eq(0).children().eq(1).children().eq(0).children().eq(1).children('a').attr('title'),
                    cSSingleLink: a.children().eq(0).children().eq(1).children().eq(0).children().eq(1).children('a').attr('href'),
                    ticker: cTicker,
                    shortDescription: a.children().eq(0).children().eq(1).children().eq(1).text(),
                    marketCap: a.children().eq(0).children().eq(1).children().eq(2).text(),
                    category: [category]


                    // market: a.children().eq(1).text(),
                    // pair: a.children().eq(2).text(),
                    // pairLink: a.children().eq(2).children('a').attr('href'),
                    // volume: a.children().eq(3).text(),
                    // price: a.children().eq(4).text(),
                    // volumePer: a.children().eq(5).text()
                };
    
                cArray.push(coinInfo);
                // let marketObject = new Object();
                // marketObject = {
                //     marketName: market,
                //     markeyVolume: volume,
                //     marketPair: pair
                // }
                // coinNames.push(market);
            });
            // console.log(a);
            // console.log(HTML_Data);
    
        })
        .then(() => {
            // console.log('1');
            console.log(URL);
            console.log(`Total in category: ${category} page: ${page} - ${cArray.length}`);
            console.log(`The last in the list`)
            console.log(cArray[cArray.length-1])
            console.log('');
            console.log('');
            console.log('=========================');
            console.log('');
            console.log('');
            resolve(cArray);
        })
        .catch((err) => {
            // console.log('2');
            console.log(err);
        })

    })
    
    

}

// request(1,'adult')
    // .then((response) =>{
    //     console.log(response);
    // })
    
const loopPages = (pages, category) => {
    return new Promise((resolve, reject) =>{

    
    let x;
    if (pages === 1) {
        x = 1
        request(x, category)
            .then((response) => {
                // console.log(response);
                resolve(response);
            })
            .catch((err) =>{
                reject(err);
            })
    } else if (pages < 1) {
        console.log('bad pages value here');
    } else {
        x=1
        
            const cylcePromise = ((page) =>{
                return new Promise((resolve, reject) => {
                    request(page, category)
                        .then((response) => {
                            // console.log(response);
                            resolve(response);
                            
                        })
                        .catch((err) =>{
                            console.log((err));
                        })

                })
            })

            const recurPageProm = () => {
                if(x != pages) {
                    // console.log(x)
                    cylcePromise(x)
                        .then((response) => {
                            x++
                            setTimeout(()=>{
                                recurPageProm()
                            }, 3000)
                            
                        })
                        .catch((err) =>{
                            reject(err)
                        })
                } else{
                    // console.log(x)
                    cylcePromise(x)
                        .then((response) =>{
                            // console.log(response)
                            resolve(response);
                        })
                        .catch((err) =>{
                            reject(err)
                        })
                }
                
            }
            
            recurPageProm()

            // console.log(x)
        // setTimeout(()=>{
            
        // }, 5000 * x)
        }


    })
    
}



//    loopPages(pagesBreakDown[2].pages)


const pagesBreakDownCycle = () => {

    return new Promise((resolve, rejct) => {
        let x=0
            let totalCategoriesMax = pagesBreakDown.length - 1

            const recurCatProm = () => {

                if(x != totalCategoriesMax) {
                    console.log(x)
                    loopPages(pagesBreakDown[x].pages, pagesBreakDown[x].categorySlug)
                        .then((response) => {
                            x++
                            // setTimeout(()=>{
                                recurCatProm()
                            // }, 5000)
                            
                        })
                        .catch((err) =>{
                            console.log(err)
                            reject(err)
                        })
                } else{
                    console.log(x)
                    loopPages(pagesBreakDown[x].pages, pagesBreakDown[x].categorySlug)
                        .then((response) =>{
                            // console.log(response)
                            // resolve(response);
                            console.log('');
                            console.log('');
                            console.log('=========================');
                            console.log('');
                            console.log('');
                            console.log(cArray);
                            resolve(cArray);
                        })
                        .catch((err) =>{
                            console.log(err)
                            reject(err)
                        })
                }
                
            }
            
            recurCatProm()

    })
    
    
    


}

let newcArray = []

let currentFoundIndex;

const objSearchRaw = ((objArray, key, y) =>{
     if(objArray.length === 1){
         let targetElem = objArray[y]['coinName']
         if(targetElem === key) {
            //  console.log(`Single item in array with match on index ${y}`);
            currentFoundIndex = y
             return true
         } 
         else{
            // console.log(`Single item in array with NO match`);
             return false
         } 
     }
     else if (objArray.length > 1){
         let targetElem = objArray[y]['coinName']
         if(targetElem === key){
            //  console.log(`Found a match after on index ${y} after ${y+1} tries`);
             currentFoundIndex = y
             return true
         }
         else if(y != (objArray.length-1)){
            //  console.log(`checking forward on ${y+1} of ${objArray.length} try....`)
             
            //  console.log(y)
             y++
             return objSearchRaw(objArray,key,y);
         }
         else{
            //  console.log(`Nothing Found for ${key} on ${y+1} of ${objArray.length} try... `);
            //  console.log(targetElem)
             return false;
         }
     }
     else{
        //  console.log('Empty Object or another error')
         return false
     }

})

pagesBreakDownCycle()
    .then((response) =>{

        const nonDupList = (() => {
            return new Promise((resolve, reject) => {

                cArray.forEach((item, index) => {
                        // console.log(item)
                    
                    if(index != (cArray.length-1))
                        {
                        if(newcArray.length === 0) {
                            newcArray.push(item)
                        }
                        else if (objSearchRaw(newcArray, item['coinName'], 0) != false){
                            newcArray[currentFoundIndex]['category'].push(item['category'][0])     
                
                        } else {
                            newcArray.push(item)
                            
                        }
                    
                    } 
                    else {
                        if(newcArray.length === 0) {
                            newcArray.push(item)
                            resolve(newcArray);
                        }
                        else if (objSearchRaw(newcArray, item['coinName'], 0) != false){
                            newcArray[currentFoundIndex]['category'].push(item['category'][0])
                            resolve(newcArray);
                
                        } else {
                            newcArray.push(item)
                            resolve(newcArray);
                        }

                    }
                })
            // console.log(newcArray)  
            
            // console.log(util.inspect(newcArray, {showHidden: false, depth: null}))
                
               
            })
            })
            
            nonDupList()
                .then((response) =>{
                    response.forEach((item, index) => {
                        console.log(item);
                    })
                })

    })

// Create a fauz array with duplicates and practice sorting the list into a new list with categories and no duplicate coins