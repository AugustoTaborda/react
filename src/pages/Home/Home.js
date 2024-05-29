import React, {useState,useEffect}from "react";
import { Navibar } from "../../components/NaviBar";
import axios from "axios";  

export function Home() {
 
  const[pokemon, setPokemon] = useState([]);
  
  useEffect(()=>{
    const fetchPokemon = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
        setPokemon(response.data.results);
        console.log(pokemon)
      }catch (error){
        console.log(error);
      }
    }

    fetchPokemon();
  },[]);

 return (<>
   <div>
      <Navibar>
      </Navibar>
    </div> 
    <div>
    
    </div>

    <table>
    <tbody>
        <tr>  
          <td>{
            pokemon.map((poke) => {return <tr>{poke.name}</tr>})
            }</td>
            <td>{
              pokemon.map((poke) => {return <tr>{poke.url}</tr>})
              }
            </td>
        </tr> 
    </tbody>
    </table>
</>
 )
}
