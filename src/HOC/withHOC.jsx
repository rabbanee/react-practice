import React, { useState } from "react";

const WithHOC = (WrapedComponent, startCounter) => {
  const newComponent = () => {
    const [counter, setCounter] = useState(startCounter);

    const incrementHandle = () => {
      setCounter((c) => c + 1);
    };
    return (
      <WrapedComponent
        name={"Daffa"}
        incrementHandle={incrementHandle}
        counter={counter}
      />
    );
  };

  return newComponent;
};

export default WithHOC;
