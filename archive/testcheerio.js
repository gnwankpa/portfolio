const cheerio = require('cheerio');
const axios = require('axios');


let coinNames=[];
let coinMarkets= [];


// Get Coin List from site
// made a promise

// * Price Excluded
// ** Volume Excluded - No Trading Fees
// *** Price/Volume Excluded - Outlier Detected

var getCoins = () => {
    axios
    .get('https://coinmarketcap.com/currencies/bitcoin/#markets')
    .then((response) => {
        
        let $ = cheerio.load(response.data);
        // Best to use 'tr' first and then break down by children
        $('#markets-table tbody tr').each((i, elm) => {    
            // let market = $(elm).text();
            let a = $(elm)

            let marketObject = new Object();
            marketObject = {
                number: a.children().first().text(),
                market: a.children().eq(1).text(),
                pair: a.children().eq(2).text(),
                pairLink: a.children().eq(2).children('a').attr('href'),
                // volume: a.children().eq(3).text(),
                // price: a.children().eq(4).text(),
                // volumePer: a.children().eq(5).text()
            };

            coinMarkets.push(marketObject);
            // let marketObject = new Object();
            // marketObject = {
            //     marketName: market,
            //     markeyVolume: volume,
            //     marketPair: pair
            // }
            // coinNames.push(market);
        });
      console.log(coinMarkets);
        
    })
    .catch((err) => {
        console.log(err);
    })
        
        
        // return true;


};

getCoins()

