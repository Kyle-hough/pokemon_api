import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Display = () => {
    const [pokemon, setPokemon] = useState()
    useEffect(()=> {
        axios.get(` https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0`)
            .then (response => setPokemon(response.data))
            .catch (err =>console.error(err))
    }, []) 
  return (
    <div>
    {
    pokemon ? 
    <ul>
        {pokemon.results.map((pokemon, i) => 
            <li 
            key={i}>{pokemon.name}
            {/* <img src={} alt={pokemon.image}/> */}
            </li>
        )}
    </ul>:
    <p>Select fetch</p>
    }
    </div>
  )
}

export default Display