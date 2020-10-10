import React from "react";
import { NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
import GoBack from "../HOC/goBack";

const Corona = () => {
  let match = useRouteMatch();

  return (
    <React.Fragment>
      <h3>Belajar Nested Route</h3>
      <NavLink
        activeClassName="active"
        className="btn btn-primary btn-sm ml-2"
        to={`${match.url}/positif`}
      >
        Data Positif
      </NavLink>
      <NavLink
        activeClassName="active"
        className="btn btn-success btn-sm ml-2"
        to={`${match.url}/sembuh`}
      >
        Data Sembuh
      </NavLink>
      <NavLink
        activeClassName="active"
        className="btn btn-danger btn-sm ml-2"
        to={`${match.url}/meninggal`}
      >
        Data Meninggal
      </NavLink>
      <Switch>
        <Route path={`${match.url}/positif`}>
          <h2>Data Positif: </h2>
        </Route>
        <Route path={`${match.url}/sembuh`}>
          <h2>Data Sembuh: </h2>
        </Route>
        <Route path={`${match.url}/meninggal`}>
          <h2>Data Meninggal: </h2>
        </Route>
      </Switch>
      <GoBack />
    </React.Fragment>
  );
};

export default Corona;
