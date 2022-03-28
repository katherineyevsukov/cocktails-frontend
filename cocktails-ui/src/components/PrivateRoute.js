import { Route, Redirect } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { verifyToken } from "./../services/authServices";
import { connect } from "react-redux";
import { loginFail, loginSuccess } from './../redux/actions/authActions'


const PrivateRoute = ({ component: Component,loginFail, loginSuccess, isLoggedIn, ...rest }) => {
  const [isTokenValidated, setIsTokenValidated] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("handshaken_token");
    if (token) {
      verifyToken()
        .then((res) => {
          console.log(res);
          return res;
        })
        .then((res) => {
          if (res.status === 200) {
            console.log("hello");
            loginSuccess()
          }
        })
        .catch((err) => {
          console.log(err);
          loginFail()
          localStorage.removeItem("handshaken_token");
        })
        .then(() => setIsTokenValidated(true));
    } else {
      setIsTokenValidated(true); // in case there is no token
    }
  }, [loginSuccess, loginFail]);

  if (!isTokenValidated) {
    return <div> Loading...</div>;
  } // or some kind of loading animation

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

export default connect (mapStateToProps, {loginFail, loginSuccess})(PrivateRoute);
