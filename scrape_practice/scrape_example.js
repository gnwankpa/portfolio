const cheerio = require('cheerio');
const axios = require('axios');
const util = require('util')
 
let coinNames= [];
let coinIncidents= [];
let htmlData = ''
// let mCounter = 1
 
 
// Get Coin List from site
// made a promise
 
// * Price Excluded
// ** Volume Excluded - No Trading Fees
// *** Price/Volume Excluded - Outlier Detected
 

/////// Async / Await ste timeout version
const asyncSleep = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log('Done with rest'));

        }, time)
    })
}

const getCoinIncidents = (page, posID) => {
    return new Promise((resolve, reject) =>{
 
   
        // return is very important here when you want to return data outside axios
        return axios
        
        .get(`http://fftoday.com/stats/playerstats.php?Season=2018&GameWeek=1&PosID=${posID}&LeagueID=193033&order_by=FFPts&sort_order=DESC&cur_page=${page}`)
        .then((response) => {
           
 
            let counter = 0
            let maxItems = 1
            let maxA = null
            let tBody = null
            const deadCoinScrape =  (() => {
                return new Promise((res, rej) => {
                    let $ = cheerio.load(response.data);
                    console.log($)
                    if($('tbody')) {
                        // $('tbody')  
                            // let market = $(elm).text();
                            let a = $('tbody')  
               
                            let coinSecurityObject = new Object();
                            coinSecurityObject = {
 
                                numberID: null,
                                coinName: '',
                                ticker: '',
                                securityDescription: '',
                                sourceLink: '',
                                typeOfIncident: ''
 
                            };
 
 
                            // Scrape Table Row
                       
                                    maxItems = (a.children()).length
                                    maxA = ($('tbody')).length
                                    tBody = $('tbody')
                                   
                                for (counter = 0; counter < maxItems; counter++) {
                                        coinSecurityObject = {
                                            number: page.toString() + (counter+1).toString(),
                                            coinName: a.children().eq(counter).children().eq(0).text(),
                                            ticker: ((a.children().eq(counter).children().eq(1).text())).toUpperCase(),
                                            securityDescription: a.children().eq(counter).children().eq(2).text(),
                                            sourceLink: a.children().eq(counter).children().eq(3).text(),
                                            typeOfIncident: a.children().eq(counter).children().eq(4).text()
                                    }
                                    coinIncidents.push(coinSecurityObject);
                                    // counter++
                                    
                                }
                               
                                   
                                   
                                   
 
                               
                               
 
 
                                // addWebsite();
                       
                               
 
                    }
                    if(counter === maxItems) {
                                       
                        res('finished a page')
                    }else{
                    }

                    // console.log(maxItems)
                    // console.log(counter)
                    // console.log(`Page ${page} and the last item is ${coinIncidents[(coinIncidents.length - 1)]['number']} - ${coinIncidents[(coinIncidents.length - 1)]['coinName']}`)
                    // console.log(`Total items tracked so far is ... ${coinIncidents.length}`)
                });
            });
 
            deadCoinScrape()
            .then((response) => {
                console.log(response)
                resolve(response)
            })
            .catch((err) => {
                console.log(err)
                reject( err)
            })
 
           
           
       
           
        })
        .catch((err) => {
            console.log(err);
        })
       
    })
 
};
 
getCoinIncidents(1, 30)
 
// const cycleDeadCoinPages = async () =>{
//     let foo = new Array(20)
//     // console.log(foo)

//     for(const item of foo.keys()) {
//         // console.log(item)
//         await getCoinIncidents(item+1)
//         // console.log('l')
//         // await asyncSleep(2000)
//         // return 'Done'

        
//     }
    
        
 
// }
 
// cycleDeadCoinPages()

// setTimeout(() => {
//     console.log(util.inspect(coinIncidents, { maxArrayLength: 90000 }))
// }, 60000)
 
// for(mCount = 1; mCount < 20; mCount++) {
    // setTimeout(() => {
        // getCoinIncidents(3)
        // getCoinIncidents(2)
        // getCoinIncidents(3)
        // getCoinIncidents(4)
        // getCoinIncidents(5)
        // getCoinIncidents(6)
        // getCoinIncidents(7)
        // getCoinIncidents(8)
        // getCoinIncidents(9)
        // getCoinIncidents(10)
        // getCoinIncidents(11)
        // getCoinIncidents(12)
        // getCoinIncidents(13)
        // getCoinIncidents(14)
        // getCoinIncidents(15)
        // getCoinIncidents(16)
    // }, mCount * 20000)
   
// }
 
 
 
 
 
// let getCoinIncidentsPromise = () => {
//    return new Promise((resolve, reject) => {
//         if (getCoinIncidents(1)) {
//             resolve(getCoinIncidents(1));
//         } else {
//             reject('l');
//         }
// })
// };
 
 
// getCoinIncidentsPromise()
//         .then((response) => {
//             console.log(response);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
 
 
 
// Use:
 
// someModule.someFunction(username, password).then(uid => {
//   /* stuff */
// });
 
// coinLinksPromise
//     .then((response) => {
//         console.log(response);
//     })
//     .catch(err => {
//         console.log(err);
//     })
 
 
 
 
// module.exports.getCoinIncidentsPromise = getCoinIncidentsPromise;