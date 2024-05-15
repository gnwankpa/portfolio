 import React from "react";


 const InfluencerCard = ({influencer}) => { // destructor is pretty cool to use instead or props everywhere
    return(
        <div className="movie">
                    <div>
                        <p>
                            {influencer.engagements}
                        </p>
                    </div>
                    <div>
                        <img src={(influencer.tweets[0].img !== null || influencer.tweets[0].img !== undefined) ? influencer.tweets[0].img : "https://via.placeholder.com/400"}/>
                    </div>
                    <div>
                        <span>{influencer.username}</span>
                        <h3>{influencer.twitterHandle}</h3>
                    </div>
                </div>

    )
 }

 export default InfluencerCard