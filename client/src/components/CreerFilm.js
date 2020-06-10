import React from "react";
import "./Interface.css";
import { withKnobs } from "@storybook/addon-knobs";

class NameForm extends React.Component {
  constructor () {
      super();
      this.state = {
        name: ''
      };
      this.handleNameChange = this.handleNameChange.bind(this);
    }
    
    handleNameChange (evt) {
      this.setState({ email: evt.target.value });
    }
    
  render() {
    return (
      <form>
        <label>Name</label>
        <input type="text" name="name" onChange={this.handleNameChange} />
      </form>
    );
  }
}

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

export default CreerFilm