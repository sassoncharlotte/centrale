import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MovieDisplayer from "./components/MovieDisplayer";
import HomePage from "./components/HomePage";
import RechercheFilm from "./components/RechercheFilm";
import "./App.css"
import SubmitEventStory from "./components/CreerFilms"

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/liste_films">Liste de films</Link>
            </li>
            <li>
              <Link to="/rechercher_film">Rechercher un film</Link> 
            </li>
            <li>
              <Link to="creer_film">Créer un film</Link>
            </li>
          </ul>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path = "/creer_film">
            <SubmitEventStory />
          </Route>
          <Route path="/rechercher_film">
            <RechercheFilm />
          </Route>
          <Route path="/liste_films">
            <MovieDisplayer />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
