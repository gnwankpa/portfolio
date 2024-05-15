const readline = require('readline-sync');

const readLine = (question) =>{
    return new Promise((resolve, reject) => {

        let x = readline.question(question)
        resolve(x);
    })
}


const getNamedAndAge = async () => {
    let name = await readLine('What is your name? ');
    console.log(`Your name: ${name}`);
    let age = await readLine('What is your age? ');
    console.log(`Your age: ${age}`);
    console.log('Thank you!');
    process.exit();

}

getNamedAndAge()
    // .then((response) =>{
    //     console.log(response)
    // })