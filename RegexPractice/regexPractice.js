//https://www.debuggex.com/cheatsheet/regex/javascript

const axios = require('axios');

axios
.get('https://bitcointalk.org/index.php?topic=1502028.0')
.then((response) => {
    let htmlData = response.data
    const searchHTMLCoin = (data) => {
        // let strippedData = data.replace(/<(?:.|\n)*?>/gm, '')
        // arrayBlockText = strippedData.split("\n");
        arrayBlockText = htmlData.split("/<(?:.|\n)*?>/gm, ''");
        let matches = []

        arrayBlockText.forEach((sentence, index) => {
        let reg = sentence.match('\scoin\s|total\s|supply\s|max\s|money')

        if(reg !== null) {
        matches.push(reg)
        } else {

        }

        })

        console.log(matches);

    }

    searchHTMLCoin(htmlData);
})


/// This works... need to get text and dormat into an array for the matching and then have node ask for input and an action to insert the amounts


///https://www.npmjs.com/package/clean-html

//https://www.npmjs.com/package/js-beautify