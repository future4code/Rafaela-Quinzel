import React, { useEffect, useState } from 'react'
import axios from 'axios'

function PokeCard(props) {
    const [pokemon, setPokemon] = useState({})


    useEffect(() => {
        pegaPokemon(props.pokemon)
    }, [props.pokemon])
    
     // Fiquei na dúvida se precisa ou não deste useEffect a baixo, mas funcionou sem ele:
    // useEffect(() => {
    //   if (pokemon !== props.pokemon) {
    //    pegaPokemon(props.pokemon)
    //   }
    // }, [pokemon])


    const pegaPokemon = pokeName => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        .then(response => {
            setPokemon(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }

    
  return (
    <div>
        <p>Nome: {pokemon.name}</p>
        <p>Peso: {pokemon.weight} Kg</p>
        {pokemon.types && <p>Tipo: {pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
            <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
        )}
      
    </div>
  );
}

export default PokeCard;