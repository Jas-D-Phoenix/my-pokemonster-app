import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import "./PokemonCard.css";

export default function PokemonCard(props) {
  const { pokemon, image } = props;
  const { id, name } = pokemon;
  return (
    
      <div className="card" key={id}>
        <Link to={"/pokemon/" + name} className="link">
          <div className="image">
          <Suspense fallback={<h1>Loading....</h1>}>
            <img src={image} alt={"null"}  loading='lazy'/>
            </Suspense>
          </div>

          <div className="header">
            <h1>{name}</h1>
          </div>
        </Link>
      </div>
    
  );
}
