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
  
  const alertFunc = () =>{
    return alert('You clicked me and this program worked so you will become more RICH!')
  }



  return (
    <div className="App">
      <h3>User names</h3>
      <button className='button-st' onClick={()=>alertFunc()}>Click me</button>
        <ul className='list-st'>
          {
            users.map((user, index)=>(
              
                <li key={user.id}>{user.name}</li>
              
            ))
          }
    
        
        </ul>
    </div>
  );
}

export default App;
