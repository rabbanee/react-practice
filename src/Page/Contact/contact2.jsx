import React from "react";
import WithHOC from "../../HOC/withHOC";

const Contact2 = (props) => {
  const { counter, name, incrementHandle } = props;
  return (
    <React.Fragment>
      <div>{counter}</div>
      <button
        onDoubleClick={incrementHandle}
        className="btn btn-sm btn-primary"
      >
        Click Me twice
      </button>
      <h2>{name}</h2>
    </React.Fragment>
  );
};

export default WithHOC(Contact2, 100);
