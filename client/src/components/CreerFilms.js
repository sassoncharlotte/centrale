import React from "react";
import "./Interface.css";


const SubmitEventStory = () => {
  const input = React.createRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(
      "https://c1ktp61r65.execute-api.eu-west-1.amazonaws.com/dev/items",
      {
        method: "POST",
        body: JSON.stringify({ name: input.current.value }),
      }
    );
  };


  
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom : 
        &nbsp;
        <input type="text" ref={input} />
      </label>
      &nbsp;
      <input type="submit" value="Créer" />
    </form>
  );
};

export default SubmitEventStory;
