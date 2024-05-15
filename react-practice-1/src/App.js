import React ,{useState, useEffect, useCallback} from 'react';
import './App.css';
import axios from 'axios';
// import { get } from 'https';
// http://universities.hipolabs.com/search?country=United+States'
// load a list of universities from this URL above.. rinse and repeat until comfortable and try sorting and filtering.

function App() {

  const URL = 'http://universities.hipolabs.com/search?country=United+States'

  const [universities, setUniversities] = useState([]);
  const [sortUnis, setSortUnis] = useState(0);

  const getUniversities = async () =>{
    const results = await axios.get(URL);
    return setUniversities(results.data)
  }

  const sortUniversities = () =>{
    // console.log(sortUnis)
    if(sortUnis === 0){
      const sortedList = universities.sort((a,b)=>{
        return a.name.localeCompare(b.name)
      })
      console.log(sortedList)
      setUniversities(sortedList)
      setSortUnis(1)
    }else{
      const sortedList = universities.sort((a,b)=>{
        return b.name.localeCompare(a.name)
      })

      setUniversities(sortedList)
      setSortUnis(0)

    }
    


    // return
  }

  useEffect(()=>{
     getUniversities()

  },[])





  return (
    <div className='App'>
      <div className='u-title'>Universities</div>
      <div>
        <button className='button-st' onClick={()=>sortUniversities()}>
          Sort
        </button>
      </div>
      <ul className='u-container'>

        {
          universities?(universities.map((university, index)=>(<li key={index}>{university.name}</li>))):(<></>)
        }
      </ul>


    </div>
  )


}

export default App;