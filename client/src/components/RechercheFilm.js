import React, { useState, useEffect } from "react";
import "./Interface.css";
import link from "./link"
const RechercheFilm = () => {
  
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [fetchAgain, setFetchAgain] = useState(false);
  const triggerFetchAgain = () => setFetchAgain(!fetchAgain);
  const input = React.createRef();

  const fetchExample = async (event) => {
    event.preventDefault();
    const response = await fetch(
      link + String(input.current.value)
    );
    const responseJson =  await response.json();
    setItems(responseJson);
    }

  const displayMovie = () => {
    return(
      <ul>
        {items.uuid}
      </ul>);
  };

  return (
    <div>
      <form onSubmit={fetchExample}>
        <label>
          Name:
        <input type="text" ref={input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {displayMovie()}
    </div>
  );
};

export default RechercheFilm;