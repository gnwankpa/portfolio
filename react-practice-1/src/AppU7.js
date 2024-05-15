import React, {useState, useEffect} from 'react';
// http://universities.hipolabs.com/search?country=United+States'

function App() {

  const [universities, setUniversities] = useState([])

  const [number, setNumber] = useState([0])

  const URL = 'http://universities.hipolabs.com/search?country=United+States'

  const getResults = (async()=>{
      const response = await fetch(URL)
      const data = await response.json()
      console.log(data)
      setUniversities(data)
  })

  const clearResults = () =>{
    setUniversities(null)
  }

  const incNumber = (inc) =>{
    const newNumber = Number(number) + inc
    setNumber(newNumber)
  }

  const decNumber = (inc) =>{
    const newNumber = Number(number) - inc
    setNumber(newNumber)
  }

  useEffect(()=>{
    getResults()
  },[])




  return (
    <div>
      <h1>US universities</h1>
      <button onClick={()=>clearResults()}> Click Me :)</button>
      
      <div>{number}</div>
      <button onClick={()=>incNumber(101)}>+</button>
      <button onClick={()=>decNumber(10)}>-</button>
      <ul>
        {
          universities?(
            universities.map((university, index)=>(
              <li key={index}>{university.name}</li>)
            )
          ):(
            <></>
          )
        }
      </ul>
    </div>
  );
}

export default App;