import React from 'react';
import './AppContain.css';


const alertfFunc = () =>{
  return alert('I have been clicked')
}

function App() {
  return (
    <div className="container">
      <h1 className="title">US universities</h1>
      <button className="button" onClick={()=>alertfFunc()}>click me :)</button>
    </div>
  );
}

export default App;