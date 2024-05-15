let personalities = {
                
    cryptoCowboy: {
        text: 'Crypto Cowboy',
        score: 0,
        mult: 0
    },
    cryptoConnoisseur: {
        text: 'Crypto Connoisseur',
        score: 0,
        mult: 0
    },
    bitcoinMaximalist: {
        text: 'Bitcoin Maximalist',
        score: 0,
        mult: 0
    },
    cryptoArchitect: {
        text: 'Crypto Architect',
        score: 0,
        mult: 0
    },
    cryptoAnarchist: {
        text: 'Crypto Anarchist',
        score: 0,
        mult: 0
    },
    cryptoTycoon: {
        text: 'Crypto Tycoon',
        score: 0,
        mult: 0
    },
    cryptoHipster: {
        text: 'Crypto Hipster',
        score: 0,
        mult: 0
    },
    cryptoGumshoe: {
        text: 'Crypto Gumshoe',
        score: 0,
        mult: 0
    },
    cryptoCritic: {
        text: 'Crypto Critic',
        score: 0,
        mult: 0
    },
    cryptoGangster: {
        text: 'Crypto Gangster',
        score: 0,
        mult: 0
    },

    

}

// Object.keys(personalities).forEach((personality, index) =>{
//     console.log(personality.text);
// })


for (var property in personalities) {
    if (personalities.hasOwnProperty(property)) {
        console.log(personalities[property].text);
    }
}