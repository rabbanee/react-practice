import React from "react";
import { Redirect, Route, useParams, useRouteMatch } from "react-router-dom";

const ProtectedRoute = ({ children, ...rest }) => {
  const [auth, setAuth] = React.useState(false);

  React.useMemo(() => {
    if (localStorage.getItem("token")) {
      setAuth(true);
    }
  }, [auth]);

  return (
    <div>
      <Route {...rest}>{auth ? children : <Redirect to="/login" />}</Route>
    </div>
  );
};

export default ProtectedRoute;
