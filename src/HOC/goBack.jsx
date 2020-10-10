import React from "react";
import { withRouter } from "react-router-dom";

const GoBack = (props) => {
  // let { history } = withRouter();
  console.log(props);

  const redirectHandle = () => {
    props.history.push("/");
  };

  const backHandle = () => {
    props.history.goBack();
  };

  const forwardHandle = () => {
    props.history.goForward();
  };

  return (
    <React.Fragment>
      <div className="mt-2">
        <button
          onClick={redirectHandle}
          className="btn mr-2 btn-sm btn-primary"
        >
          Redirect
        </button>
        <button onClick={backHandle} className="btn mr-2 btn-sm btn-danger">
          Back
        </button>
        <button onClick={forwardHandle} className="btn btn-sm btn-success">
          Forward
        </button>
      </div>
    </React.Fragment>
  );
};

export default withRouter(GoBack);
