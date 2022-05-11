// import axios from 'axios';
// import React, {useState} from 'react'
import Display from './components/Display';
import Form from './components/Form';

function App() {
  // const [pokemon, setPokemon] = useState()
  // const fetchPokemon = () =>{
  //   fetch(` https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0`)
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(Response=>{
  //       setPokemon(Response)
  //     })
  //     .catch(err =>console.error(err));
  //   }

  // const pokemonAxios = () => {
  //   axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0`)
  //   .then(response => {
  //     console.log(response.data)
  //     setPokemon(response.data)
  //   })
  //   .catch(err =>console.error(err))
  // }
  return (
    <div>
      <Form />
      <Display />
      {/* <button onClick={fetchPokemon}>Fetch</button>
      <button onClick={pokemonAxios}>Axios</button> */}
      {/* {
        pokemon ? 
        <ul>
            {pokemon.results.map((pokemon, i) => 
            <li key={i}>{pokemon.name}</li>
            )}
        </ul>:
        <p>Select fetch</p>
      } */}
    </div>
  );
}

export default App;
