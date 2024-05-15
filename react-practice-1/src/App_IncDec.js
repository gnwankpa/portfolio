import React, { useState } from 'react';
import './AppContain.css';

function App() {
  const [cNum, setNum] = useState(0);

  const increment = () => {
    setNum(cNum + 1);
  };

  const decrement = () =>{
    setNum(cNum - 1);
  }

  return (
    <div className="container">
      <h1 className="title">US universities</h1>
      <h2>{cNum}</h2>
      <button className="button" onClick={increment}>
        click  + 
      </button>
      <button className="button" onClick={decrement}>
        click  -
      </button>
    </div>
  );
}

export default App;
