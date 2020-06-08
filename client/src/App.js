import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PokemonDisplayer from "./components/PokemonDisplayer";
import HomePage from "./components/HomePage";
import recherche_film from "./components/recherche_film"

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
          <Route path="/demo">
            <PokemonDisplayer />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
          <Route path="/rechercher_film">
            <recherche_film />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
