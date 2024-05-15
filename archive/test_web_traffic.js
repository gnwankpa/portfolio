const axios = require('axios');


var getCoins = () => {
    return axios
    .get('https://coinshakedown.com/coinlist/full/scarcity')
    .then((response) => {
        let x = response;
        console.log(x);
    })
    .catch((err) => {
        let l = err;
        console.log(l)
    })
}


getCoins()

