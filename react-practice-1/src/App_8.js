import React ,{useState, useEffect} from 'react';
// http://universities.hipolabs.com/search?country=United+States'


function App() {

  const URL = 'http://universities.hipolabs.com/search?country=United+States'

  const [universities, setUniversities] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const getResults = async ()=>{
    let response = await fetch(URL)
    let data = await response.json()
    // console.log(data)
    setUniversities(data)

  }

  const filteredUniversities = universities.filter(university =>
    university.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const clearData = () =>{
    setUniversities([])
  }

  useEffect(()=>{
    // getResults()

  }, [])


  return (
    <div>
      <h1>US universities</h1>
      <button onClick={()=>getResults()}>
        Click me :)
      </button>
      <button onClick={()=>clearData()}>
        Click me :(0)
      </button>
      <input type="text" placeholder="Search by movie title" value={searchTerm} onChange={event => setSearchTerm(event.target.value)} />

      <ul>
        {
          filteredUniversities?(
            filteredUniversities.map((university, index)=>(
              <li key={index}>
                {university.name}
              </li>
            ))
          ):(<></>)
        }
      </ul>
    </div>
  );
}

export default App;