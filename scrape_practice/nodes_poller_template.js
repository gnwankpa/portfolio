
/////////////// This is the polling service for Nodes /////////////// 
/////// This service will leverage proxies and should be able to run every 5 minutes per ///////


//// Need a list with Tickers and Names that shows whether its an API call or Scrape and URL

const cheerio = require('cheerio');

//// Use this for Proxies!
const axios = require('axios-https-proxy-fix')
const util = require('util')
 
let coinNames= [];
let coinIncidents= [];
let htmlData = ''




/////// Async / Await ste timeout version
const asyncSleep = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log('Done with rest'));

        }, time)
    })
}

const proxyIPs = [
    '148.163.70.39',
    '148.163.70.40',
    '148.163.70.42',
    '148.163.70.92',
    '148.163.70.93',
    '148.163.70.94',
    '148.163.70.95',
    '148.163.70.96',
    '148.163.70.97',
    '148.163.70.98',
    '148.163.70.99',
    '148.163.70.100',
    '148.163.70.101',
    '148.163.70.102',
    '148.163.70.103',
    '148.163.70.104',
    '148.163.70.105',
    '148.163.70.106',
    '148.163.70.107',
    '148.163.70.108',
    '148.163.70.109',
    '148.163.70.110',
    '148.163.70.111',
    '148.163.70.112',
    '148.163.70.113',
    '148.163.70.114',
    '148.163.70.115',
    '148.163.70.116',
    '148.163.70.117',
    '148.163.70.118',
]
const proxyPort = 5432
const proxyUser = '5is6way0'
const proxyPass ='ncm243eh6dn0mx30qif5ymy1'

let proxyOne = {
    host: proxyIPs[0],
    port: proxyPort,
    auth: {
        username: proxyUser,
        password: proxyPass
    }
  }
  
//////////////// BTC ////////////////
/////////////////////////////////////

const nodeBTCPrimaryAPIPull = () => {
    return new Promise((resolve, reject) =>{
        // return is very important here when you want to return data outside axios
        return axios({
            url: 'https://bitnodes.earn.com/api/v1/snapshots/',
            method: 'get',
            proxy: proxyOne
        })
        .then((response) => {
            if(response.status === 200 && response.data.results[0]['total_nodes'] && response.data.results[0]['total_nodes'] != '' ){
                let nodeSummary = {
                    ticker: 'BTC',
                    name: 'Bitcoin',
                    totalNodes : response.data.results[0]['total_nodes'],
                    error: { flag: false, type: 'none' },
                    lastUpdated: new Date(),
                    lastChecked: new Date(),

                }
                resolve(nodeSummary);

            } else{
                let nodeSummary = {
                    ticker: 'BTC',
                    name: 'Bitcoin',
                    totalNodes : 0,
                    error: { flag: true, type: 'node retrieval: General Error please investigate' },
                    lastChecked: new Date(),
                }
                resolve(nodeSummary);

            }
            
            // console.log(nodeSummary);

        })
        .catch((error) => {
            console.log('!!!! An Error Has Occured!');
            console.log('Check Error Log in object returned. This function will keep processing and not kill operations. please report any performance hits');
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                let nodeSummary = {
                    ticker: 'BTC',
                    name: 'Bitcoin',
                    totalNodes : 0,
                    error: { flag: true, type: error.response.status, data: error.response.data, config: error.config},
                    lastChecked: new Date(),
                }
                
                // console.log('Data');
                // console.log(error.response.data);
                // console.log('Status');
                // console.log(error.response.status);
                // console.log('Headers');
                // console.log(error.response.headers);

                resolve(nodeSummary);
              } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                let nodeSummary = {
                    ticker: 'BTC',
                    name: 'Bitcoin',
                    totalNodes : 0,
                    error: { flag: true, type: 'No Response Received', data:'The request was made but no response was received', config: error.config},
                    lastChecked: new Date(),
                }
                // console.log('Request');
                // console.log(error.request);
                resolve(nodeSummary);

              } else {
                // Something happened in setting up the request that triggered an Error
                let nodeSummary = {
                    ticker: 'BTC',
                    name: 'Bitcoin',
                    totalNodes : 0,
                    error: { flag: true, type: 'General error', data: error.message, config: error.config},
                    lastChecked: new Date(),
                }
                // console.log('Error', error.message);
                resolve(nodeSummary);
              }
            //   console.log('Config');
            //   console.log(error.config);
    


            
        })
    })
}


nodeBTCPrimaryAPIPull()
    .then((response)=>{
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    })