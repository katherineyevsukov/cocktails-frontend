import "./../styles/landing.css";
import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <div class="jumbotron">
        <h1 class="display-4">Welcome, cocktail creators!</h1>
        <p class="lead">
          Say goodbye to your bartender's notebook! Handshaken allow bartenders
          to easily keep track of cocktails they create, without the hassle of
          carrying around a notebook &#40;or the fear of destroying it with a
          spill &#41;. With Handshaken bartenders can upload photos, detail
          ingredients &amp; steps, and update recipes as necessary.
        </p>
        <p class="lead">
          Looking for inspiration? Look no further! Handshaken provides an
          easy-to-use search feature, where bartenders can find cocktails
          created by other users.
        </p>
        <p class="lead">
          Are you a bar manager? Organize your menus with us! With Handshaken,
          a manager can create bars, invite their staff to join it and easily
          share and update bar-exclusive recipes and menus.
        </p>
        <hr class="my-4"></hr>
        {/* <p>
          Get started now! Click below to register:
        </p> */}
        <p class="lead">
          <Link
            to="/register"
            class="btn btn-primary btn-lg landing-button"
            role="button"
          >
            Sign Up
          </Link>
        </p>
        <p>Already have an account? Click below to login:</p>
        <p class="lead">
          <Link
            to="/login"
            class="btn btn-primary btn-lg landing-button"
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
