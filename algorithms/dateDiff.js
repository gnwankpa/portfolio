var date_diff_indays = function(date1, date2) {
    dt1 = new Date(date1);
    dt2 = new Date(date2);
    return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
}

let currentDate = Date.now()
let wrongDate = '29/07/2016'
let wDateBits = wrongDate.split('/');

wDateBits.push(wDateBits[0])
wDateBits.push(wDateBits[1])
wDateBits[0] = wDateBits[4]
wDateBits[1] = wDateBits[3]
wDateBits.splice(3)

// console.log(wDateBits[0]);
let newWDateBits = wDateBits.join('/');



console.log(date_diff_indays(newWDateBits, currentDate));
console.log(date_diff_indays('12/02/2009', currentDate));
    

// 1522097099645
// 24
// 1210
