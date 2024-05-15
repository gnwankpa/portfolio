// import logo from './logo.svg';
import './App.css';



function App() {

  const alertFunc = () =>{
    alert('I have been clicked :)')
  }



  return (
    <div className="App">
      <header className="App-header">
        <button className='button-st' onClick ={()=>alertFunc()}>Click me for an Alert</button>
      </header>
    </div>
  );
}

export default App;
