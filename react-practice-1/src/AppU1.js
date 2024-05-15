import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [universities, setUniversities] = useState([]);
  const URL = 'http://universities.hipolabs.com/search?country=United+States'

  useEffect( () =>  {
    const getResults = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setUniversities(data);
    };
    getResults()
  }, []);



  return (
    <div>
      <h1>US universities</h1>
      <ul>
        { universities?(
            universities.map((university, index)  => (
          <li key={index}>{university.name}</li>
        )))
        :
        (<> </>)
        }
        
      </ul>
    </div>
  );
}

export default App;
