import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };


  const navigate = useNavigate();

  const handleSubmit = () => {
      navigate("/pokemon/" + inputValue.toLowerCase());
  }

  return (
    <form onSubmit={handleSubmit}>
      {" "}
      <div className="searchBar">
        <input
          placeholder="Type the name of a pokemon"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />

        <div className="buttonDiv"><button type="submit" >Search</button></div>
      
      </div>
    </form>
  );
};
export default SearchBar;
