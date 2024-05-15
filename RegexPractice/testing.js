let x = 'strng.jpg'
let y = /^(.*\.(?!(jpg|png|gif)$))?[^.]*$/i

let a = y.test(x);

let b = x.match(/^(.*\.(?!(jpg|png|gif)$))?[^.]*$/i)

console.log(a);


console.log(b);