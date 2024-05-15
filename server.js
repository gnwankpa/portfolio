const cheerio = require('cheerio');
const axios = require('axios');


let coinNames=[];
let coinObjects = {
    coinName: '',
    coinMarkets: []
}

// Get Coin List from site
// made a promise

var getCoins = () => {
    axios
    .get('https://coinmarketcap.com/coins/views/all/')
    .then((response) => {
        
        let $ = cheerio.load(response.data);
        $('a.currency-name-container').each((i, elm) => {
            let coin = $(elm).text();
            coinNames.push(coin);
        });
        coinNames.forEach((coin)=> {
            axios
            .get(`https://coinmarketcap.com/currencies/${coin}/#markets`)
            .then(()=> {
                let $ = cheerio.load(response.data);
                $('#markets-table tbody tr td a').each((i, elm) => {
                    coinObjects.coinName = coin;
                    coinObjects.coinMarkets.push($(elm).text());

            })

            })
            .then(() => {
                return coinObjects;
            })
            .catch((err) => {
                console.log(err);
            })
        
    });
    })
    .then(()=> {
            
    })
    .catch((err) => {
        console.log(err);
    })
        
        
        // return true;


};

getCoins()





    // var getCoins = new Promise((resolve, reject) => {
        //     axios
        //     .get('https://coinmarketcap.com/coins/views/all/')
        //     .then((response) => {
                
        //         let $ = cheerio.load(response.data);
        //         $('a.currency-name-container').each((i, elm) => {
        //             let coin = $(elm).text();
        //             coinNames.push(coin);
        //             console.log(coinNames);
        //         });
        //     })
        //     .then(coinNames => {
        //             coinNames.forEach((coin)=> {
        //                 if (err) {
        //                     console.log(err);
        //                 }
        //                 axios
        //                 .get(`https://coinmarketcap.com/currencies/${coin}/#markets`)
        //                 .then(()=> {
        //                     let $ = cheerio.load(response.data);
        //                     $('#markets-table tbody tr td a').each((i, elm) => {
        //                         coinObjects.coinName = coin;
        //                         coinObjects.coinMarkets.push($(elm).text());
        
        //                 })
        
        //                 })
        //                 .then(() => {
        //                     resolve(coinObjects);
        //                 })
                    
        //         });
        //     })
        //     .catch((err) => {
        //         reject(err);
        //     })
                
                
        //         // return true;
        
        
        // })