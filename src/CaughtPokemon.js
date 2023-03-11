import React, { useState } from "react";

const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState(0);
  const [caught1, setCaught1] = useState([]);
  const [pokemonNameInput, setPokemonNameInput] = useState("");
  
  function handleInputChange (event){
    console.log (event.target.value)
    setPokemonNameInput(event.target.value)

  }

  function catchPokemon() {
    setCaught(caught + 1);
    setCaught1(caught1.concat(pokemonNameInput))
    setPokemonNameInput("")
  }
  return (
    <div>
      <p>
        Caught {caught} Pokemon on{props.date}
      </p>
      <input type  ="text" value = {pokemonNameInput} onChange ={handleInputChange}/>
      <button onClick={catchPokemon}>Catch Pokemon</button>
      {caught1.map((item,index)=> {
        return <li key={index}>{item}</li>
      })}
    </div>
  );
};

export default CaughtPokemon;