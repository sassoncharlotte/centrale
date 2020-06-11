import React from "react";
import "./Interface.css";


const SubmitEventStory = () => {
  const input = React.createRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(
      "https://154ggc17qg.execute-api.eu-west-1.amazonaws.com/dev/items",
      {
        method: "POST",
        body: JSON.stringify({ name: input.current.value }),
      }
    );
  };

const CreerFilm= () => {
  
  return (
    <div>
      <div className="Titre">
        <h1>
          Créer un film
        </h1>
      </div>
      <div className="Interface">
        <header className="FilmInterface">
          <p>
            <NameForm/>
          </p>
        </header>
      </div>
      </div>  
  );
};

export default SubmitEventStory;
