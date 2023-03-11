import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
// import PokemonMoves from "./PokemonMoves";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";

function App() {
  const abilities = ['Anticipation', 'Adaptability', 'Run-Away']
  const date = new Date().toLocaleDateString()
  function  logWhenClicked(){
    console.log (29)
  }

  return (
    <div>
 <Logo appName ="Hengameh" handleClick= {logWhenClicked}/>
  
 <BestPokemon abilities ={abilities}/>
 <CaughtPokemon date={date}/>
 <PokemonMovesSelector/>
 <PokemonCity/>
 </div>    
  );
}

  


export default App;
