import React, { useState, useEffect } from "react";
import "./Interface.css";
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
      "https://qwg2tsyzmf.execute-api.eu-west-1.amazonaws.com/dev/items/" + String(input.current.value)
    );
    const responseJson =  await response.json();
    setItems(responseJson);
    }

  const displayMovie = () => {
    return(
      <div className="Nomgenre">
        <p>
        Nom : {items.uuid} 
        </p>
        Genre : {items.genre}
      </div>);
  };

  return (
    <div>
      <h1>
        Rechercher un Film
      </h1>
    <div class="FilmInterface">
      <form onSubmit={fetchExample}>
        <label>
        <input type="text" ref={input} />
        </label>
        <input type="submit" value="Rechercher" />
      </form>
      {displayMovie()}
    </div>
    </div>
  );
};

export default RechercheFilm;