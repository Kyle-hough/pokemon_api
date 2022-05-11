import React, {useState} from 'react'

const Form = () => {
    const [pokemonName, setPokemonName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        
    }
  return (
    <div>
        <form>
            <p>
                <input 
                type="text" name="pokemonName" value={pokemonName}
                onChange={e => setPokemonName(e.target.value)}
                />
            </p>
            <button type="submit">Search</button>
        </form>
    </div>
  )
}

export default Form