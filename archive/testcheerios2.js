const cheerio = require('cheerio');
const axios = require('axios');


let coinNames= [];
let coinMarkets= [];


// Get Coin List from site
// made a promise

// * Price Excluded
// ** Volume Excluded - No Trading Fees
// *** Price/Volume Excluded - Outlier Detected

var getFinancialMarkets = (coin) => {
    // return is very important here when you want to return data outside axios
    return axios
    .get(`https://coinmarketcap.com/currencies/${coin}/#markets`)
    .then((response) => {
        
        let $ = cheerio.load(response.data);
        // Best to use 'tr' first and then break down by children
        if($('div div ul.list-unstyled')) {
            $('div div ul.list-unstyled').each((i, elm) => {    
                // let market = $(elm).text();
                let a = $(elm)
    
                let coinLinksObject = new Object();
                coinLinksObject = {




                    websiteLinks: a.children().first().children('a').attr('href'),
                    annLink: a.children().eq(1).text(),
                    explorerLinks: a.children().eq(2).text(),
                    sourceCodeLink: a.children().eq(2).children('a').attr('href'),
                    messageBoardLink: a.children().eq(2).children('a').attr('href'),

                    // volume: a.children().eq(3).text(),
                    // price: a.children().eq(4).text(),
                    // volumePer: a.children().eq(5).text()

                    // websiteLink: a.children().first().children('a').attr('href'),
                    // annLink: a.children().eq(1).text(),
                    // explorerLink: a.children().eq(2).text(),
                    // sourceCodeLink: a.children().eq(2).children('a').attr('href'),
                    // messageBoardLink: a.children().eq(2).children('a').attr('href'),

                    // volume: a.children().eq(3).text(),
                    // price: a.children().eq(4).text(),
                    // volumePer: a.children().eq(5).text()
                };
    
                coinMarkets.push(coinLinksObject);
            });
            return coinMarkets;

        }
        return false;

        
        
      
        
    })
    .catch((err) => {
        console.log(err);
    })
        


};


let marketPromise = new Promise((resolve, reject) => {
    if (getFinancialMarkets('bitcoin')) {
        resolve(getFinancialMarkets('bitcoin'));
    } else {
        reject('This coin does not exist');
    }
});

marketPromise
    .then((response) => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    })




module.exports.getFinancialMarkets = getFinancialMarkets;
