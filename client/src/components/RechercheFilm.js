import React, { useState, useEffect } from "react";
import "./Interface.css";


const RechercheFilm = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [fetchAgain, setFetchAgain] = useState(false);
  const triggerFetchAgain = () => setFetchAgain(!fetchAgain);
  const input = React.createRef();

  const handleSubmit = async (event) => {
    
      event.preventDefault();
      const response = await fetch(
      "https://c1ktp61r65.execute-api.eu-west-1.amazonaws.com/dev/items/"+String(input.current.value));
        const responseJson =  await response.json();
        setItems(responseJson);
    
    };

    const displayMovie = () => {
        return (
          <ul>
            {items.map((item) => (
              <li key={item.uuid}>{item.uuid}</li>
            ))}
          </ul>
        );
      };

 

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Nom :&nbsp;
          <input type="text" ref={input} />
        </label>&nbsp;
        <input type="submit" value="Rechercher" />
      </form>
      {displayMovie()}
    </div>  
  );
};

export default RechercheFilm;