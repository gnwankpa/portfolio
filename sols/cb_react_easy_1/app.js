import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Toggle() {

  const [buttonText, setButtonText] = useState(['ON'])


  const handleClick = (val) =>{
    if(val === 'OFF'){
        setButtonText('ON')
    }else if(val === 'ON'){
        setButtonText('OFF')
    }else{
    }
  }

  return (
    <button id="buttonTexter" onClick={e=>handleClick(e.currentTarget.innerHTML)}>{buttonText}</button>
  );
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);