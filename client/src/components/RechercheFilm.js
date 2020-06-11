import React from "react";
import "./Interface.css";
import { withKnobs } from "@storybook/addon-knobs";

const RechercheFilm = () => {
  const input = React.createRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(
      "https://154ggc17qg.execute-api.eu-west-1.amazonaws.com/dev/items/"+String( input.current.value ),
    );
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" ref={input} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};


export default RechercheFilm;