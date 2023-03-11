
import React,{}from "react";




function Logo(props) {
  // const appName ="Hengameh's"
  return (
    <header>
      <h1>Welcome to the {props.appName} pokedex</h1>
      <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" onClick={props.handleClick} alt="Pokedex"></img>
    </header>
  );
}
  export default Logo;