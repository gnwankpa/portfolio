
const coinProjects = [
    {
        coinName: 'bitcoin',
        coinStars: 32000,
        coinRepos: 4,
        coinIssues: 821,
        coinForks: 19000
    },
    {
        coinName: 'ethereum',
        coinStars: 33000,
        coinRepos: 240,
        coinIssues: 2999,
        coinForks: 13198
    },
    {
        coinName: 'litecoin',
        coinStars: 3414,
        coinRepos: 37,
        coinIssues: 69,
        coinForks: 2566
    },
    {
        coinName: 'cardano',
        coinStars: 3907,
        coinRepos: 83,
        coinIssues: 319,
        coinForks: 3907
    },
]

let coinScores = [
    {
        coinName: 'bitcoin',
        coinStarsScores: 0,
        coinReposScores: 0,
        coinIssuesScores: 0,
        coinForksScores: 0
    },
    {
        coinName: 'ethereum',
        coinStarsScores: 0,
        coinReposScores: 0,
        coinIssuesScores: 0,
        coinForksScores: 0
    },
    {
        coinName: 'litecoin',
        coinStarsScores: 0,
        coinReposScores: 0,
        coinIssuesScores: 0,
        coinForksScores: 0
    },
    {
        coinName: 'cardano',
        coinStarsScores: 0,
        coinReposScores: 0,
        coinIssuesScores: 0,
        coinForksScores: 0
    },
]

let normalize = ((coin, min, max) => {
    nValue = 100 * ((coin - min) / (max - min))
    return nValue
})


// 256
// 75273
// 35768
// 4532

let gradeMyCoin = (() => {
    coinProjects.forEach((ccoin, index) => {
        coinScores.forEach((coin, index) => {
            if (coin.coinName === ccoin.coinName) {
                coin.coinStarsScores = normalize(ccoin.coinStars, 0, (35000*0.05)+35000)
                coin.coinReposScores = normalize(ccoin.coinRepos, 0, (250*0.05)+250)
                coin.coinIssuesScores = normalize(ccoin.coinIssues, (4000*0.05)+4000, 0)
                coin.coinForksScores = normalize(ccoin.coinForks, 0, (20000*0.05)+20000)
                // coin.coinStarsScores = normalize(ccoin.coinStars, 0, (75273))
                // coin.coinReposScores = normalize(ccoin.coinRepos, 0, (256))
                // coin.coinIssuesScores = normalize(ccoin.coinIssues, (4532), 0)
                // coin.coinForksScores = normalize(ccoin.coinForks, 0, (35768))
            }
        })
        
    })
    // return coinScores
})


// I love it!
// returns and undefined at the bottom???

let weightedAvg = (() => {
    gradeMyCoin()
    coinScores.forEach((coin, index) => {
        let wavg = (((coin.coinStarsScores * 0.01)*0.30) + ((coin.coinReposScores * 0.01)*0.16) + ((coin.coinIssuesScores * 0.01)*0.24) + ((coin.coinForksScores * 0.01)*0.30)) * 100
        // console.log(coin);
        console.log(`Weighted average of ${coin.coinName} development score: ${wavg} %`);
    })
})

weightedAvg();