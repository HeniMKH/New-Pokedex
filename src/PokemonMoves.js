import React ,{ useEffect , useState }from "react";
function PokemonMoves(props) {
 const[pokemonData,setCountData]= useState("")
        useEffect(() => {
          fetch(
           `https://pokeapi.co/api/v2/pokemon/${props.pokemonId}/.`
          )
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              setCountData(data);
            });
        }, [props.pokemonId]);



//   if (pokemonData) {
    return pokemonData ? (
          <div>
            <p>{pokemonData.name}'s moves:</p>

            <ul>
            {pokemonData.moves.map((move, index) => {
              return <li key={index}>{move.move.name}</li>;
            })}
          </ul>
          </div>
          ):null;
      }
  
     
  
//   } else {
//     return null;
//   }


export default PokemonMoves;