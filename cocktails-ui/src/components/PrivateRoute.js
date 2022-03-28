import { Route, Redirect } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { verifyToken } from "./../services/authServices";
import { connect } from "react-redux";
import { tokenFail, tokenSuccess } from "./../redux/actions/authActions";

const PrivateRoute = ({
  component: Component,
  tokenFail,
  tokenSuccess,
  isLoggedIn,
  ...rest
}) => {
  const [isTokenValidated, setIsTokenValidated] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("handshaken_token");
    if (token) {
      verifyToken()
        .then((res) => {
          if (res.status === 200) {
            tokenSuccess(res.data);
          }
        })
        .catch((err) => {
          tokenFail();
          localStorage.removeItem("handshaken_token");
        })
        .then(() => setIsTokenValidated(true));
    } else {
      setIsTokenValidated(true); // in case there is no token
      tokenFail();
    }
  }, [tokenSuccess, tokenFail]);

  if (!isTokenValidated) {
    return <div> Loading...</div>;
  } //NEED TO ADD LOADING ANIMATION

  return (
    <Route
      {...rest}
      render={(props) => {
        return isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />;
      }}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.authState.isLoggedIn,
  };
};

export default connect(mapStateToProps, { tokenFail, tokenSuccess })(
  PrivateRoute
);
