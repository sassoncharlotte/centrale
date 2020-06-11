import React from "react";
import logo_film from "./Logo_film.png";

import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="HomePage">
      <header className="HomePage-header">
        <img src={logo_film} alt="logo" /> 
        <p>
          Page d'accueil
        </p>
      </header>
    </div>
  );
};

export default HomePage;
