let arr = [ [ 1373628934214, 3 ],
  [ 1373628934218, 3 ],
  [ 1373628934220, 1 ],
  [ 1373628934230, 1 ],
  [ 1373628934234, 0 ],
  [ 1373628934237, -1 ],
  [ 1373628934242, 0 ],
  [ 1373628934246, -1 ],
  [ 1373628934251, 0 ],
  [ 1373628934266, 11 ] ]

const fs = require('fs');

let file = fs.createWriteStream('array.txt');
file.on('error', function(err) { /* error handling */ });
arr.forEach(function(v) { file.write(v.join(', ') + '\n'); });
file.end();