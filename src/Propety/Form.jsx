import React from "react";
export const Input = ({ label, validasi, ...rest }) => {
  return (
    <React.Fragment>
      <div className="mb-3">
        <label htmlFor="s" className="form-label">
          {label}
        </label>
        <input {...rest} />
        <div id="emailHelp" className="form-text">
          {validasi}
        </div>
      </div>
    </React.Fragment>
  );
};

export const Button = ({ label, ...rest }) => {
  return (
    <React.Fragment>
      <button {...rest}>{label}</button>
    </React.Fragment>
  );
};
