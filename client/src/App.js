import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PokemonDisplayer from "./components/PokemonDisplayer";
import HomePage from "./components/HomePage";
import RechercheFilm from "./components/RechercheFilm"
import CreerFilm from "./components/CreerFilm"

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
              <Link to="/demo">API Fetch demo</Link>
            </li>
            <li>
              <Link to="/rechercher_film">Rechercher un film</Link> 
            </li>
            <li>
              <Link to="creer_film">Créer un film</Link>
            </li>
            <li>
              <Link to="lister_film">Lister des films</Link>
            </li>
          </ul>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path = "/creer_film">
            <CreerFilm />
          </Route>
          <Route path="/rechercher_film">
            <RechercheFilm />
          </Route>
          <Route path="/demo">
            <PokemonDisplayer />
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
