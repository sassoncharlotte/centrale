import React, { useState, useEffect } from "react";
import "./Interface.css";

const MovieDisplayer = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [fetchAgain, setFetchAgain] = useState(false);
  const triggerFetchAgain = () => setFetchAgain(!fetchAgain);

  const fetchExample = async () => {
    try {
      const response = await fetch("https://qwg2tsyzmf.execute-api.eu-west-1.amazonaws.com/dev/items");
      const responseJson =  await response.json();
      setIsLoaded(true);
      setError(false);
      setItems(responseJson);
    } catch (error) {
      setIsLoaded(true);
      setError(error);
    }
  };

  useEffect(() => {
    setIsLoaded(false);
    fetchExample();
    // The useEffect hook will retrigger every time an element in the dependency array changes.
    // changes = strict egality, so beware when mutating objects
  }, [fetchAgain]);

  const displayMovie = () => {
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map((item) => (
            <li key={item.uuid}>{item.uuid}</li>
          ))}
        </ul>
      );
    }
  };

  return (
    <div>
      <h1>
        Liste des films
      </h1>
    <div className="FilmInterface">
      <button onClick={triggerFetchAgain}>Lister les films</button>
      {displayMovie()}
    </div>
    </div>
  );
};

export default MovieDisplayer;