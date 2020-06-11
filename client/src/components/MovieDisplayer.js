import React, { useState, useEffect } from "react";

const MovieDisplayer = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [fetchAgain, setFetchAgain] = useState(false);
  const triggerFetchAgain = () => setFetchAgain(!fetchAgain);

  const fetchExample = async () => {
    try {
      const response = await fetch("https://c1ktp61r65.execute-api.eu-west-1.amazonaws.com/dev/items");
      const responseJson =  await response.json();
      setIsLoaded(true);
      setError(false);
      setItems(responseJson);
    } catch (error) {
      setIsLoaded(true);
      setError(error);
    }
  };


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
      <button onClick={triggerFetchAgain}>Fetch again</button>
      {displayMovie()}
    </div>
  );
};

export default MovieDisplayer;
