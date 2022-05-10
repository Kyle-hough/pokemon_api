import React, {useState} from 'react'

function App() {
  const [pokemon, setPokemon] = useState()
  const fetchPokemon = () =>{
    fetch(` https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0`)
      .then(response => {
        return response.json();
      })
      .then(Response=>{
        setPokemon(Response)
      })
      .catch(err =>console.error(err));
  }
  return (
    <div>
      <button onClick={fetchPokemon}>Fetch</button>
      {
        pokemon ? 
        <ul>
            {pokemon.results.map((pokemon, i) => 
            <li key={i}>{pokemon.name}</li>
            )}
        </ul>:
        <p>Select fetch</p>
      }
    </div>
  );
}

export default App;
