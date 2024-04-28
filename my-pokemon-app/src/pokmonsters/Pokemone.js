import axios from "axios";
import React, { lazy, Suspense, useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import { POKEMON_API_URL, IMAGE_URL } from "../config";
import "./Pokemone.css";

const PokemonCard = lazy(() => import("../components/PokemonCard"));
var offset = 0;
function CountIt(i) {
  if (i > 9 && i <= 99) {
    return "0";
  } else {
    if (i > 99) return "";
  }
  return "00";
}

function Pokemone() {
  const [pokemonData, setPokemonData] = useState([]);
  const [seed, setSeed] =useState(1);
  const reset = () => { setSeed(Math.random());  
}

  const next = () => {
    offset = offset + 20;
    getPokemone();
  }

  const previous = () => {
    if (offset > 19) {
      offset = offset - 20;
      getPokemone();
    }
  };

  const getPokemone = () => {
    axios.get(POKEMON_API_URL + "?limit=20&offset=" + offset).then((response) => {
        if (response.status >= 200 && response.status < 300) {
          const { results } = response.data;
          let newPokeData = [];
          let last = "00";
          var imageId = offset;
          results.forEach((pokemon, i) => {
            imageId++;
            i++;
            last = CountIt(imageId);
            let pokeObj = {
              id: i,
              url: IMAGE_URL + last + imageId + ".png",
              name: pokemon.name,
            };
            newPokeData.push(pokeObj);
          });

          setPokemonData(newPokeData);
          reset();
        }
      });
  };
  useEffect(getPokemone, []);

  return (
    <div key={seed}>
      {pokemonData ? (
        <div className="content">
          <SearchBar />
          <div className="grid">
            {pokemonData.map((pokemon) => (
              <div className="grid-item" key={pokemon.id}>
                <Suspense fallback={<h1>Loading...</h1>}>
                  <PokemonCard pokemon={pokemon} image={pokemon.url} />
                </Suspense>
              </div>
            ))}
          </div>
          <div className="pagination">
            {offset > 0 ? (
              <div className="buttonDiv">
                <button onClick={previous}>{"<< previous"}</button>
              </div>
            ) : (
              <div></div>
            )}
            {offset < 1000 ? (
              <div className="buttonDiv">
                <button onClick={next}>{"next >>"}</button>{" "}
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      ) : (
        <h1>{"Loading"}</h1>
      )}
    </div>
  );
}
export default Pokemone;
