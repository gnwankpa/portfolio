// import logo from './logo.svg';
// import './App.css';
import React, {useState, useEffect} from "react";





function App() {

    const [universities, setUniversities]= useState([]);
    const URL = 'http://universities.hipolabs.com/search?country=United+States'

    useEffect (()=>{
        const getResults = async ()=>{
            let response = await fetch(URL)
            console.log(response)
            let data = await response.json()
            console.log(data)
            setUniversities(data)
        }
        getResults()
    }, []);


  const alertFunc = () =>{
    alert('I have been clicked')
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <button className="button-st" onClick={()=>alertFunc()}>Click me</button> */}
        
        <h1>US universities</h1>
      
      </header>
      <ul>
        {universities? (
            universities.map((university, index)=>(
                    <li key={index}>
                        {university.name}
                    </li>

            ))) :(
                <></>
            )
        }
        


        </ul>
    </div>
  );
}

export default App;
