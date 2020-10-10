import React from "react";
import { Input, Button } from "../../Propety/Form";
import { Link, useHistory } from "react-router-dom";
import Axios from "axios";
import { config } from "../../config";

const Login = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  let { push } = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    post();
  };

  const post = async () => {
    const url = `${config.api_host}login`;
    const payload = {
      email,
      password
    };
    try {
      let response = await Axios.post(url, payload);
      console.log(response);
      localStorage.setItem("token", response.data.token);
      push("/");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col">
            <form onSubmit={onSubmit}>
              <Input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                label="Email Address"
                type="email"
                id="email"
                className="form-control"
              />
              <Input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                label="Password"
                type="password"
                id="password"
                className="form-control"
              />
              <Button label="Submit" className="btn btn-primary btn-sm" />
            </form>
            <Link to="/register">Register</Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
