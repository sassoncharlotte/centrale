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
      this.setState({ name: evt.target.value });
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(
      "https://xpzicf3p88.execute-api.eu-west-1.amazonaws.com/dev/items",
      {
        method: 'POST',
        body: JSON.stringify({ name: evt.target.value }),
      }
    );
  };

};

export default CreerFilm