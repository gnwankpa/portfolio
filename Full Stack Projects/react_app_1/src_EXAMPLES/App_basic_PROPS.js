import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const Person = (props) =>{
  return (
    <>
    <h1>Name: {props.name}</h1>
    <h2>Last Name: {props.lastName}</h2>
    <h2>Age:{props.age}</h2>
    </>
  )
}


const App = () => {
  const name = 'Gene'
  const isNameShowing = false;
  return (
    <div className='App'>
      <h1>Hello , {isNameShowing ? name : "someone"}</h1>
      <Person name="John" lastName="Nwankpa" age={20+2}/>
      <Person name="Mark" lastName="Loko" age={43}/>
      <Person name="Mark" lastName="Borb" age={51}/>
      <Person name="Mark" lastName="KAke" age={34}/>
    </div>
  )
}

export default App;
