let imgExtensions = ['png', 'gif', 'jpg']

let x = 'mypic.jspg'

let splittedX = x.split('.')

if(splittedX.length > 1){
    if(splittedX[1] === imgExtensions[0] || splittedX[1] === imgExtensions[1] || splittedX[1] === imgExtensions[2]) {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log(false);
}