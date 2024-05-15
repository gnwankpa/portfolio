import {useEffect} from "react";
import './App.css';
import SearchIcon from './search.svg'



const API_URL = 'https://api.snap.bitmetrix.io/api/report-tweets/realtime-view-lite/bitcoin'

const App = () =>{

    const searchProfiles = async() =>{
        const response = await fetch(`${API_URL}`)
        const data = await response.json()
        console.log(data)
    }

    useEffect(()=>{
        searchProfiles()
    }, [])

    return (
        <div className="App">
            <h1 >InlfuencerLand</h1>
            <div className="search">
                <input placeholder="Search for Influencers"
                value="BTCGuy"
                onChange={() =>{}}/>
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={()=>{}} />
            </div>
        </div>
        
    )
}


export default App;