// import logo from './logo.svg';
import './App.css';



function App() {

  const alertFunc = ()=>{
    return alert('I have clicked this button :)')
  }


  return (
    <div className="App">
      <header className="App-header">
        <button className="button-st" onClick={()=>alertFunc()}>Click me</button>
      </header>
    </div>
  );
}

export default App;
