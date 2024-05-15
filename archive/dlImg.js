var axios = require('axios');
var fs = require('fs');

var file = fs.createWriteStream("imgs/file3.png");
var request = () => {
    
        return   axios({
                    method: 'GET',
                    url: 'https://coincheckup.com/images/coins/bitcoin-1254c573.png',
                    responseType: 'stream'
                })
                .then((response) => {
                    // console.log(response)
                    response.data.pipe(file);
                })
                .catch((err) => {
                    console.log(err);

                })


            }

request()