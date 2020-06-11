import React from "react";
import logo_film from "./Logo_film.png";
import logo from "./logo.svg";
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
