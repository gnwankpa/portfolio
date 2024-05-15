const axios = require('axios');
const fs = require('fs');

// 'https://coincheckup.com/images/coins/bitcoin-1254c573.png'

const singImgDL = async (coinName, coinIMGURL) => {

    let file = fs.createWriteStream(`${coinName}.png`);
    const request = () => {
        
            return   axios({
                        method: 'GET',
                        url: coinIMGURL,
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
    
    return request()

}


singImgDL('imgs/bitcoin', 'https://coincheckup.com/images/coins/bitcoin-1254c573.png')
    .then((response) =>{
        console.log('Done for this coin');
    })
    .catch((err) =>{
        console.log(err);
    })

