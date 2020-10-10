import React from "react";
import WithHOC from "../../HOC/withHOC";

const Contact1 = (props) => {
  const { counter, name, incrementHandle } = props;
  return (
    <React.Fragment>
      <div>{counter}</div>
      <button onClick={incrementHandle} className="btn btn-sm btn-success">
        Click Me
      </button>
      <h2>{name}</h2>
    </React.Fragment>
  );
};

export default WithHOC(Contact1, 10);
