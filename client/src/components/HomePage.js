import React from "react";
//import Logo_film from "./logo_film.png"
import Logo from "./logo.svg"
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="HomePage">
      <header className="HomePage-header">
        <img source={Logo} alt='logo film' />
        <p>
          Page d'accueil
        </p>
      </header>
    </div>
  );
};

export default HomePage;
