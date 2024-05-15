import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const URL = "https://swapi.dev/api/starships";
  const getResults = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setMovies(data);
  };
  const [movies, setMovies] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        {
          <div>
            <button onClick={() => getResults()}>Click Me for Movies</button>
          </div>
        }
        {movies?.count > 0 ? (
          <div>
            {movies.results.map((movie, index) => (
              <div className="movieText" key={index}>
                {movie.name}
              </div>
            ))}
          </div>
        ) : (
          <></>
        )}
      </header>
    </div>
  );
}
export default App;
