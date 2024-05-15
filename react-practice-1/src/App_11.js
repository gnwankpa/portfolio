import React ,{useState, useEffect, useCallback} from 'react';
import './App.css';
import axios from 'axios';
// http://universities.hipolabs.com/search?country=United+States'
// load a list of universities from this URL above.. rinse and repeat until confortable and try sorting and filtering.

function App() {

  const URL = 'http://universities.hipolabs.com/search?country=United+States'

  const [universities, setUniversities] = useState([])
  const [sortDirection, setSortDirection] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')

  const getUniversities = useCallback( async () =>{
    const result = await axios.get(URL)
    return setUniversities(result.data)
  },[])

  useEffect(()=>{
    getUniversities()
  },[getUniversities])

  const getFilteredList = (term, list) =>{
    setSearchTerm(term)
    return setUniversities(list.filter(listItem => listItem.name.toLowerCase().includes(term.toLowerCase())))
  }

  const sortedUniversities = (unis, direction) =>{
    if(direction === 1){
      const sortedUniList = unis.sort((a,b)=>{
        return a.name.localeCompare(b.name)
      })
      setSortDirection(0)
      return setUniversities(sortedUniList)
    }else{
      const sortedUniList = unis.sort((a,b)=>{
        return b.name.localeCompare(a.name)
      })
      setSortDirection(1)
      return setUniversities(sortedUniList)
    }
  }

  const clearUniversities = () =>{
    setUniversities([])
  }

  const loadUniversities = () =>{
    getUniversities()
  }


  return(
    <div className='App'>

      <div>
        <button className='button-st' onClick={()=>sortedUniversities(universities, sortDirection)}> Sort 🗎 </button>
        <button className='button-st' onClick={()=>clearUniversities()}> Clear List 🗑️ </button>
        <button className='button-st' onClick={()=>loadUniversities()}> Reload List 🔃 </button>
        <input input='text'  className='button-st' placeholder='Enter Search here'  value={searchTerm} onChange={(e)=>(getFilteredList(e.target.value, universities))}></input>
      </div>
      <div className='u-title'>Universities list</div>

     
      <ul className='u-container'>
        {
          universities?(universities.map((university, index) => <li key={index}>{university.name}</li>)):(<></>)
      }
      </ul>

    </div>

  )


 
}

export default App;