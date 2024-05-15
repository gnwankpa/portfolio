import React from 'react';
import { useState } from 'react';

function Slides({slides}) {

    const [counter, setCounter] = useState(0);

    return (
        <div>
            <div id="navigation" className="text-center">
                <button onClick={()=> setCounter((prevCount)=> prevCount = 0)} data-testid="button-restart" className="small outlined" disabled={counter===0} >Restart</button>
                <button onClick={()=> setCounter((prevCount)=> prevCount -1)} data-testid="button-prev" className="small" disabled={counter===0}>Prev</button>
                <button onClick={()=> setCounter((prevCount)=> prevCount +1)} data-testid="button-next" className="small" disabled={counter===slides.length-1}>Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides[counter].title}</h1>
                <p data-testid="text">{slides[counter].text}</p>
            </div>
        </div>
    );

}

export default Slides;
