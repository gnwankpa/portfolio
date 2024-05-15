import React, {useEffect, useState} from 'react';


function App() {

const [universities, setUniversities] = useState([])
const URL = 'http://universities.hipolabs.com/search?country=United+States'


const getResults = ( async() =>{
  let response = await fetch(URL)
  let data = await response.json()
  setUniversities(data)
}
)

const alertFunc = (()=>{
  return alert('I have been clicked')
})

useEffect(()=>{

  
  getResults() // activate to test useEffect Rest API case
}, [])

  return (
    <div>
      <h1>US universities</h1>
      <button onClick={()=>getResults()}>
        Click Me :)
      </button>
      <h2>Total universities found: {universities.length}</h2>
      <ul>
        {
          universities?(
            universities.map((university, index)=>(
                <li key={index}>
                  {university.name}
                </li>
            ))
            

          ):(
            <></>
          )
        }
      </ul>
    </div>
  );
}

export default App;