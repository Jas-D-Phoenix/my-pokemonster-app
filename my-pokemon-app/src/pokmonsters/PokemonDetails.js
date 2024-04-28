import axios from "axios";
import React, { Component } from "react";
import { IMAGE_URL, POKEMON_API_URL } from "../config";
import { useParams } from "react-router-dom";
import "./PokemonDetails.css";
import About from "../components/pokemones/pokedetails";
import BaseStats from "../components/pokemones/BaseStats";


function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;

}

function last(i) {
  if (i > 9 && i <= 99) {
    return "0";
  } else {
    if (i > 99) return "";
  }
  return "00";
}

class PokemonDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: null,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.params.name !== prevProps.params.name) this.fetchData();
  }

  fetchData = () => {
    let { name } = this.props?.params;
    axios
      .get(POKEMON_API_URL + "/" + name)
      .then((response) => {
        if (
          response.status >= 200 &&
          response.status < 300 &&
          this.state.pokemon === null
        ) {
          this.setState({ pokemon: response.data });
        }
      })
      .catch((error) => {
        if (error.response.status === 404) {
          console.log("Error...... Bad request");
          this.setState({ error: "Pokemone not found" });
        } else {
          console.error("Error");
        }
      });
  };

  render() {
    const { pokemon } = this.state;
    if (pokemon) {
      return (
        <div>
          <div className="container">
            <div className="imageCard">
              <p>{pokemon.name}</p>
              <img
                src={IMAGE_URL + last(pokemon.id) + pokemon.id + ".png"}
                alt={"null"}
              />
            </div>
            <div className="detailsCard">
              <About pokemon={pokemon} />
              <BaseStats stats={pokemon.stats} />
            </div>
          </div>
        </div>
      );
    } else if (this.state.error) {
      return <div className="error">{this.state.error}</div>;
    } else {
      return <div className="error">loading</div>;
    }
  }
}
export default withParams(PokemonDetails);
