import React from "react";
import "./Interface.css"


const RechercheFilm = () => {
  return (
    <div>
      <div className="Titre">
        <h1>
          Rechercher un film
        </h1>
      </div>
      <div className="Interface">
        <header className="FilmInterface">
          <p>
            <input type="text" />
            &emsp; 
            <input type="submit" value="Rechercher un Film" />
          </p>
        </header>
      </div>
      </div>  
  );
};


export default RechercheFilm;