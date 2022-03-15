import "./../styles/landing.css";
import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <div className="jumbotron">
        <h1 className="display-4">Welcome, cocktail creators!</h1>
        <p className="lead">
          Say goodbye to your bartender's notebook! Handshaken allow bartenders
          to easily keep track of cocktails they create, without the hassle of
          carrying around a notebook &#40;or the fear of destroying it with a
          spill&#41;. With Handshaken bartenders can upload photos, detail
          ingredients &amp; steps, and update recipes as necessary.
        </p>
        <p className="lead">
          <i>Looking for inspiration?</i> Look no further! Handshaken provides an
          easy-to-use search feature, where bartenders can find cocktails
          created by other users.
        </p>
        <p className="lead">
          <i>Are you a bar manager?</i> Organize your menus with us! With Handshaken, a
          manager can create bars, invite their staff to join it and easily
          share and update bar-exclusive recipes and menus.
        </p>
        <hr className="my-4"></hr>
        <p>Get started now! Click below to register:</p>
        <p className="lead">
          <Link
            to="/register"
            className="btn btn-primary btn-lg landing-button"
            role="button"
          >
            Sign Up
          </Link>
        </p>
        <p>Already have an account? Click below to login:</p>
        <p className="lead">
          <Link
            to="/login"
            className="btn btn-primary btn-lg landing-button"
            role="button"
          >
            Login
          </Link>
        </p>
      </div>
    </>
  );
}

export default Landing;
