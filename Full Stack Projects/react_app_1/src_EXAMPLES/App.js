import { useState, useEffect } from 'react';
import './App.css';




const App = () => {

  const [counter, setCounter] = useState(0);
  useEffect(() =>{
  //   alert(`You changed something in ${counter}`) // use this if something changes
  // },[counter])
    setCounter(100);
  }, [] )// with this the code only works at the intial part of the component);

  return (
  <div className='App'>
    <button onClick={()=> setCounter((prevCount)=> prevCount - 1)}> - </button>
    <h1>{counter}</h1>
    <button onClick={()=> setCounter((prevCount)=> prevCount + 1)}>+</button>

  </div>
  )
}

export default App;
