


let ReposScores = 80
// let PullScoresAvg = 80
let PullScoresAvg = 80
let StarsScoresAvg = 80
let StarsScores = 80 
let IssuesScoresAvg = 80
let IssuesScores = 80
let ForksScoresAvg = 80
let ForksScores = 80
let ContributorScoresAvg  = 80
let ContributorScores = 80
let CommitRateScoresAvg = 80
let CommitRateScores = 80 
let CodeFrequencyRateScoresAvg = 80 
let CodeFrequencyRateScores = 80 

const weightedAvg = (() => {
                                    
    let x = (
            (((ReposScores * 0.01) * 0.09) + 
            (( ((PullScoresAvg * 0.30 + PullScoresAvg * 0.70)) * 0.01) * 0.20) + 
            (( ((StarsScoresAvg * 0.30 + StarsScores * 0.70)) * 0.01) * 0.18) + 
            (( ((IssuesScoresAvg * 0.30 + IssuesScores * 0.70)) * 0.01) * 0.07) + 
            (( ((ForksScoresAvg * 0.30 + ForksScores * 0.70)) * 0.01) * 0.08) +
            (( ((ContributorScoresAvg * 0.3 + ContributorScores * 0.70)) * 0.01) * 0.15) +
            (( ((CommitRateScoresAvg * 0.30 + CommitRateScores * 0.70)) * 0.01) * 0.14) +
            (( ((CodeFrequencyRateScoresAvg * 0.30 + CodeFrequencyRateScores * 0.70)) * 0.01) * 0.09))
            * 100) 
           
    return x
})

console.log(weightedAvg())