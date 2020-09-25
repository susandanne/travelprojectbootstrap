import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";
import { usercontext } from '../App';

const PrivateRoute = ({ children, ...rest }) => {
    const[loggedin,setloggedin]=useContext(usercontext);
    return (
        <Route
      {...rest}
      render={({ location }) =>
        loggedin.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;