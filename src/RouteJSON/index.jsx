import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Layout from "./layout";
import Login from "../Page/Login";

export default function Index() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin" component={Layout} />
        <Route path="/login" component={Login} />
        <Redirect from="/" to="/admin/home" />
      </Switch>
    </BrowserRouter>
  );
}
