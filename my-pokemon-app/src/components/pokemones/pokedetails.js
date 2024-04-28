import React, { useState, useEffect } from "react";

export default function About(props) {
  const { pokemon } = props;
  const { abilities, height, weight, base_experience, order } = pokemon;
  const [able, setAble] = useState("");

  useEffect(() => {
    setAble(abilities?.map((ability) => ability.ability.name).join(", "));
  }, [abilities]);

  return (
    <div className="section">
      <h3>Pokemone Info</h3>
      <ul>
        <li>
          <b>{"Abilities: "}</b>
          {able}
        </li>

        <li>
          <b>{"Height: "}</b>
          {height + "cm"}
        </li>
        <li>
          <b>{"Weight: "}</b>
          {weight + "Kg"}
        </li>
        <li>
          <b>{"Base Experience: "}</b>
          {base_experience}
        </li>
        <li>
          <b>{"Order: "}</b>
          {order}
        </li>
      </ul>
    </div>
  );
}
