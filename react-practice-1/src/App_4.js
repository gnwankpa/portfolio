// import logo from './logo.svg';
import './App.css';

//

// ALert button
// Iterate List of name
// Hide an Element
// restApi

function App() {
  const users = [
    { name: "John Doe", id: 1 },
    { name: "Jane Doe", id: 2 },
    { name: "Billy Doe", id: 3 }
  ];


  const alertFunc= () =>{
    return alert('Hello have a great day!')
  }

  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <button className='button-st' onClick={()=>alertFunc()}>Click me!</button>
      {/* </header> */}
      <h3>User names</h3>
        <ul className='list-st'>
          {
          users.map((user,index)=>(
            <li className='text-practice-w' key={user.id}>{user.name}</li>
          )
          )
          }
        </ul>
    </div>
  );
}

export default App;
