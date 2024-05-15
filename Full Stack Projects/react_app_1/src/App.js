// import {useEffect} from "react";
import './App.css';
import SearchIcon from './search.svg'
import InfluencerCard from './InfluencerCard'
import { useState, useEffect } from "react";



const API_URL = 'https://api.snap.bitmetrix.io/api/report-tweets/realtime-view-lite/bitcoin'

// const influencer = {
//     "username": "Michael Saylor⚡️",
//     "twitterHandle": "@saylor",
//     "mentions": 0,
//     "count": 2,
//     "engagements": 6260,
//     "likes": 5079,
//     "retweets": 700,
//     "replies": 481,
//     "sentimentAgg": 25,
//     "avgSentimentPerTweet": 12.5,
//     "avgEngagementPerTweet": null,
//     "avgLikesPerTweet": 2539.5,
//     "avgRetweetsPerTweet": 350,
//     "avgRepliesPerTweet": 240.5,
//     "likesRank": 2,
//     "engagementsRank": 2,
//     "retweetsRank": 3,
//     "repliesRank": 5,
//     "countRank": 21,
//     "mentionsRank": 2,
//     "sentimentAggRank": 2,
//     "avgSentimentPerTweetRank": 4,
//     "avgEngagementsPerTweetRank": 3,
//     "avgLikesPerTweetRank": 1,
//     "avgRepliesPerTweetRank": 5,
//     "avgRetweetsPerTweetRank": 3,
//     "Impact": {
//         "fourHour": null,
//         "day": null,
//         "month": null
//     },
//     "tweets": [
//         {
//             "username": "Michael Saylor⚡️",
//             "twitterHandle": "@saylor",
//             "text": "#Bitcoin to the Moon.",
//             "likes": 4117,
//             "retweets": 632,
//             "replies": 365,
//             "tweetTimeMS": "Invalid date",
//             "tweetHash": "c38f743196bde30554af989ae67537e812c68c1da0e8c7ec2dac21d43e5ec286",
//             "tweetURL": "https://twitter.com/saylor/status/1616782786077097985#m",
//             "grabbedDate": 1674309293661,
//             "img": "https://pbs.twimg.com/profile_images/1485632175932383235/8t0DGo6V_bigger.jpg",
//             "age": null,
//             "handleURL": "https://twitter.com/saylor",
//             "topic": [
//                 "bitcoin",
//                 "btc"
//             ],
//             "sentiment": 25,
//             "updatedAt": "2023-01-21T13:54:53.707Z"
//         },
//         {
//             "username": "Michael Saylor⚡️",
//             "twitterHandle": "@saylor",
//             "text": "#Bitcoin is engineered to last forever.",
//             "likes": 962,
//             "retweets": 68,
//             "replies": 116,
//             "tweetTimeMS": "Invalid date",
//             "tweetHash": "add8281241182c7feb7bc967ec6418e0d2279fc8d37b8ad7366a75f37ce412c8",
//             "tweetURL": "https://twitter.com/saylor/status/1616589128228806660#m",
//             "grabbedDate": 1674309456381,
//             "img": "https://pbs.twimg.com/profile_images/1485632175932383235/8t0DGo6V_bigger.jpg",
//             "age": null,
//             "handleURL": "https://twitter.com/saylor",
//             "topic": [
//                 "bitcoin",
//                 "btc"
//             ],
//             "sentiment": 0,
//             "updatedAt": "2023-01-21T13:57:36.424Z"
//         }
//     ],
//     "avgEngagementsPerTweet": 3130
// }

const App = () =>{

    

    const [influencers, setInfluencers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchProfiles = async(username) =>{
        const response = await fetch(`${API_URL}`)
        
        const data = await response.json()
        // console.log(data[0].influencersData)
        setInfluencers(data[0].influencersData)
        
    }

    useEffect(()=>{
        searchProfiles()
    }, [])

    return (
        <div className="app">
            <h1 >InlfuencerLand</h1>
            <div className="search">
                <input placeholder="Search for Influencers"
                value={searchTerm}
                onChange={(e)=>setSearchTerm(e.target.value)}/>
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={()=>searchProfiles(searchTerm)} />
            </div>
            {
                influencers?.length > 0
                ? (
                    <div className="container">
                        {influencers.map((influencer)=>(
                            <InfluencerCard influencer={influencer}/>
                        ))}
                        
                    </div>

                ) : (
                    <div className="empty">
                        <h2> No Movies found </h2>
                    </div>
                )            
            }

            
        </div>
        
    )
}


export default App;