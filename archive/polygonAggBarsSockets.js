// const WebSocketServer  = require('ws');
// grabbing symbol 1M aggregate candle bars from public WS and distributing for internal consumption
// polgone WS docus --> https://polygon.io/docs/stocks/ws_getting-started

const WebSocket = require('ws');
require('dotenv').config()

// my websocket server
const wss = new WebSocket.Server({ port: 3300 });

// polygon websocket client connection
const ws = new WebSocket('wss://socket.polygon.io/stocks');

let authCommand = {"action": "auth", "params": `${process.env.POLY_KEY}`}

// let symbol = process.argv[2]
// let subscribeCommand = {"action":"subscribe","bars":["TQQQ", "SQQQ", "AAPL", "AMD", "F", "MSFT", "JMIA", "VALE", "XOM","KMI", "SHEL", "WMT","BABA", "PG", "TSLA", "CVX", "PEP","KO", "PBR", "XOP", "GOLD", "MRO", "OXY", "MU", "UMC"]}



let subscribeCommand = {"action":"subscribe","params":"A.DVN,A.CSCO,A.SLB,A.GFS,A.BAC,A.FCX,A.OXY,A.WMB,A.HPQ,A.ET,A.DELL,A.MU,A.KR,A.KMI,A.GLW,A.GE,A.INTC,A.AIG,A.AFL,A.DOW,A.PEG,A.GM,A.CTVA,A.MET,A.F,A.FTNT,A.KO,A.APO,A.TFC,A.BSX,A.CARR,A.MO,A.CTSH,A.VICI,A.FAST,A.KHC,A.EXC,A.MDLZ,A.T,A.WFC,A.DD,A.USB,A.KDP,A.TWTR,A.BK,A.CSX,A.C,A.TQQQ,A.BAX,A.NEM,A.TJX,A.KKR,A.GILD,A.PFE,A.RIVN,A.TTD,A.CMCSA,A.UBER,A.VZ,A.WBA,A.TST,A.AES,A.SNAP,A.PCG,A.AA,A.PLUG,A.MRO,A.BKR,A.OKE,A.EBAY"}

// {"action":"subscribe", "params":"A.*"}

//some functions to deal with buffered coming from the polgon WS and rebuffering
const unBufferData = (data) =>{
    let bufferedData = data.toString()
    bufferedData = JSON.parse(bufferedData)
    return bufferedData
    // return JSON.parse(bufferedData)
  }
  
const bufferData = (data) =>{
    let bufferedData = JSON.stringify(data)
    return bufferedData
    // return JSON.parse(bufferedData)
}


/// opening polgon socket unbuffering data and resending connected internal ws clients for various business logic 
ws.on('open',  function open() {

});
ws.on('message', function message(data) {
    
    let bufferedData = unBufferData(data)
        // console.log(bufferedData)
        
        if(bufferedData[0]['status'] === 'connected'){
            console.log('sending auth')
    
            ws.send(bufferData(authCommand))
        }
        if(bufferedData[0]['status'] === 'auth_success'){
            console.log(`Subscribing to ${subscribeCommand.params}`)
            ws.send(bufferData(subscribeCommand))
        }
    wss.broadcast(data);

    


})



wss.on('connection', function connection(ws) {
   
})

wss.broadcast = function broadcast(msg) {
    // console.log(msg);
    let bufferedData = unBufferData(msg)
    // console.log(bufferedData)
    wss.clients.forEach(function each(client) {
        // console.log(msg)
       client.send(msg);
    });
};