
let unix_timestamp = 1452680400

var date = new Date(unix_timestamp*1000);

var dateNew = new Date()
// Hours part from the timestamp
var hours = (date.getHours());

var hoursMinus = (date.getHours() - 2);
// Minutes part from the timestamp
var minutes = "0" + date.getMinutes();
// Seconds part from the timestamp
var seconds = "0" + date.getSeconds();

// Will display time in 10:30:23 format
var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

formattedTimeMinus = hoursMinus + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

console.log(formattedTime);
console.log(`Minus 2 hours -  ${formattedTimeMinus}`);

console.log(dateNew);

console.log(dateNew.getTime() / 1000);