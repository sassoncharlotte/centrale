import React from "react";
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: "Fetching data",
  decorators: [withKnobs],
};

export const SubmitEventStory = () => {
  const input = React.createRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(
      "https://xpzicf3p88.execute-api.eu-west-1.amazonaws.com/dev/items",
      {
        method: "POST",
          body: JSON.stringify({ name: input.current.value }),
      }
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
