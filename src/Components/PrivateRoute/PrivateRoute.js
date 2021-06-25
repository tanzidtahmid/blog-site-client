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
import { userContext } from '../../App';
const PrivateRoute = ({children, ...rest}) => {
    const [signedInUser, setSignedInUser]= useContext(userContext)
    return (
        <Route
        {...rest}
        render={({ location }) =>
          (signedInUser.email || localStorage.getItem("blogUser")) ? (
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