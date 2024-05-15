const cheerio = require('cheerio');
const axios = require('axios');


let coinNames= [];
let coinMarkets= [];


// Get Coin List from site
// made a promise

// * Price Excluded
// ** Volume Excluded - No Trading Fees
// *** Price/Volume Excluded - Outlier Detected

var getCoinLinks = (coin) => {
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

                    websiteLinks: [],
                    annLink: '',
                    explorerLinks: [],
                    sourceCodeLink: '',
                    messageBoardLinks: [],
                    chatLink: '',

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


                // Gather Websites
                let websiteScrape =  (() => {
                    let possibleWebLinks = ['Website', 'Website 2', 'Website 3'];
                    
                    let addWebsite = (() => {

                        possibleWebLinks.forEach((website, index) => {
                            let counter;

                            for (counter = 0; counter < 12; counter++) {
                                // console.log(counter);
                                if ((a.children().eq(counter).children('a').text()) === website){
                                    coinLinksObject.websiteLinks.push((a.children().eq(counter).children('a').attr('href')
                                ))
                                
                                } else {
                                }
                            }
                        })
                    })
                    
                    addWebsite();
                });

                // Gather Explorers
                let explorerScrape =  (() => {
                    let possibleExlporerLinks = ['Explorer', 'Explorer 2', 'Explorer 3', 'Explorer 4'];
                    
                    let addExplorer= (() => {

                        possibleExlporerLinks.forEach((explorer, index) => {
                            let counter;

                            for (counter = 0; counter < 12; counter++) {
                                // console.log(counter);
                                if ((a.children().eq(counter).children('a').text()) === explorer){
                                    coinLinksObject.explorerLinks.push((a.children().eq(counter).children('a').attr('href')
                                ))
                                
                                } else {
                                }
                            }
                        })
                    })
                    
                    addExplorer();
                });

                // Gather Message Boards
                let messageBoardScrape =  (() => {
                    let possibleMessageBoardLinks = ['Message Board', 'Message Board 2', 'Message Board 3', 'Message Board 4'];
                    
                    let addMessageBoard= (() => {

                        possibleMessageBoardLinks.forEach((messageBoard, index) => {
                            let counter;

                            for (counter = 0; counter < 12; counter++) {
                                // console.log(counter);
                                if ((a.children().eq(counter).children('a').text()) === messageBoard){
                                    coinLinksObject.messageBoardLinks.push((a.children().eq(counter).children('a').attr('href')
                                ))
                                
                                } else {
                                }
                            }
                        })
                    })
                    
                    addMessageBoard();
                });

                // Gather Source Code Link
                let sourceCodeLinkScrape =  (() => {
                    let aSourceCodeLink = 'Source Code'
                    
                    let addSourceCode= (() => {
                            let counter;

                            for (counter = 0; counter < 12; counter++) {
                                // console.log(counter);
                                if ((a.children().eq(counter).children('a').text()) === aSourceCodeLink){
                                    coinLinksObject.sourceCodeLink = (a.children().eq(counter).children('a').attr('href')
                                )
                                
                                } else {
                                }
                            }
                       
                    })
                    
                    addSourceCode();
                });

                // Gather Chat Link
                let chatScrape =  (() => {
                    let aChatLink = 'Chat'
                    
                    let addChat= (() => {
                            let counter;

                            for (counter = 0; counter < 12; counter++) {
                                // console.log(counter);
                                if ((a.children().eq(counter).children('a').text()) === aChatLink){
                                    coinLinksObject.chatLink = (a.children().eq(counter).children('a').attr('href')
                                )
                                
                                } else {
                                }
                            }
                       
                    })
                    
                    addChat();
                });

                // Gather Ann Link
                let annScrape =  (() => {
                    let aAnnLink = 'Announcement'
                    
                    let addAnn= (() => {
                            let counter;

                            for (counter = 0; counter < 12; counter++) {
                                // console.log(counter);
                                if ((a.children().eq(counter).children('a').text()) === aAnnLink){
                                    coinLinksObject.annLink = (a.children().eq(counter).children('a').attr('href')
                                )
                                
                                } else {
                                }
                            }
                       
                    })
                    
                    addAnn();
                });

                websiteScrape();
                explorerScrape();
                messageBoardScrape();
                sourceCodeLinkScrape();
                chatScrape();
                annScrape();
    
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


let coinLinksPromise = new Promise((resolve, reject) => {
    if (getCoinLinks('litecoin')) {
        resolve(getCoinLinks('litecoin'));
    } else {
        reject('This coin does not exist');
    }
});

coinLinksPromise
    .then((response) => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    })




module.exports.getCoinLinks = getCoinLinks;
