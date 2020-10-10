import React from "react";
import "./styles.css";
import Navbar from "./Page/Navbar";
import Home from "./Page/Home";
import About from "./Page/About";
import Contact from "./Page/Contact";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DetailUser from "./Page/DetailUser";
import ProtectedRoute from "./Component/ProtectedRoute";
import ProtectedAuth from "./Component/ProtectedAuth";
import Login from "./Page/Login";
import Register from "./Page/Register";
import UserNotFound from "./Page/UserNotFound";
import NotFound from "./Page/NotFound";
import Corona from "./Corona";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <ProtectedRoute exact path="/">
            <Navbar>
              <Home />
            </Navbar>
          </ProtectedRoute>
          <Route path="/about">
            <Navbar>
              <About />
            </Navbar>
          </Route>
          <Route path="/contact">
            <Navbar>
              <Contact />
            </Navbar>
          </Route>
          <Route path="/DetailUser/:id">
            <Navbar>
              <DetailUser />
            </Navbar>
          </Route>
          <ProtectedAuth path="/login">
            <Login />
          </ProtectedAuth>
          <ProtectedAuth path="/register">
            <Register />
          </ProtectedAuth>
          <Route path="/UserNotFound" component={UserNotFound} />
          <Route path="/corona">
            <Navbar>
              <Corona />
            </Navbar>
          </Route>
          <Route path={"*"} component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
