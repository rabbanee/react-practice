import React from "react";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import dashboardRoutes from "./routes";

const Layout = () => {
  const Navbar = dashboardRoutes.map((link, key) => {
    const { path, name, layout } = link;

    return (
      <div>
        <NavLink
          activeStyle={{ fontWeight: "bold", color: "red" }}
          to={layout + path}
          key={key}
        >
          {name}
        </NavLink>
      </div>
    );
  });

  const Content = (
    <Switch>
      {dashboardRoutes.map((routes, key) => {
        const { path, Component, layout } = routes;
        if (layout === "/admin") {
          return (
            <Route path={layout + path} key={key}>
              <Component />
            </Route>
          );
        }
        return null;
      })}
      <Redirect from="/admin" to="admin/home" />
    </Switch>
  );

  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row bg-primary">JSON Config</div>
        <div className="row">
          <div className="col vh-100">{Navbar}</div>
          <div className="col">{Content}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
