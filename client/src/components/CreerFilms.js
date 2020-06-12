import React from "react";
import "./Interface.css";

const SubmitEventStory = () => {
  const input = React.createRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(
      "https://qwg2tsyzmf.execute-api.eu-west-1.amazonaws.com/dev/items",
      {
        method: "POST",
        body: JSON.stringify({ name : input.current.value }),
      }
    );
  };


  
  return (
    <div>
      <h1>
          Créer un film
      </h1>
      
    <div className="FilmInterface">
    <form onSubmit={handleSubmit}>
      <label className ="Nomgenre">
        Nom : 
        &nbsp;
        <input type="text" ref={input} />
      </label>
      &nbsp;
      <input type="submit" value="Créer" />
    </form>
    </div>
    </div>
  );
};

export default SubmitEventStory;
