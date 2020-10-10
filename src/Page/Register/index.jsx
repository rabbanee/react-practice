import React from "react";
import { Input, Button } from "../../Propety/Form";
import { Link } from "react-router-dom";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import { config } from "../../config";

const Register = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    post();
  };

  const post = async () => {
    const url = `${config.api_host}register`;
    const payload = {
      email,
      password
    };
    try {
      let response = await Axios.post(url, payload);
      console.log(response);
      localStorage.setItem("token", response.data.token);
      props.history.push("/");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>Silakan Mendaftar</h4>
            <form onSubmit={onSubmit}>
              <Input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                label="Email Address"
                type="email"
                id="email"
                value={email}
                className="form-control"
              />
              <Input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                label="Password"
                type="password"
                id="password"
                value={password}
                className="form-control"
              />
              <Button label="Submit" className="btn btn-primary btn-sm" />
              <Link to="/about">About</Link>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Register;
