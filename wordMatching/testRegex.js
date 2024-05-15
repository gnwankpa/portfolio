//https://www.debuggex.com/cheatsheet/regex/javascript
const blockText = require('./blockText');
const singleBlock = require('./singleBlock')

let textBlock = blockText.blockText
let textBlockTwo = singleBlock.singleBlockText

arrayBlockText = textBlockTwo.split("\n");
let matches = []

arrayBlockText.forEach((sentence, index) => {
   let reg = sentence.match('(coin|total|supply|max|money)')

    if(reg !== null) {
        matches.push(reg)
    } else {

    }

})

console.log(matches);