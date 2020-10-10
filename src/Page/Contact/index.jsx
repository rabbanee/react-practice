import React from "react";
import Contact1 from "./contact1";
import Contact2 from "./contact2";

const Contact = () => {
  return (
    <React.Fragment>
      <h2>Contact</h2>
      <div className="row">
        <div className="col">
          <Contact1 />
        </div>
        <div className="col">
          <Contact2 />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
