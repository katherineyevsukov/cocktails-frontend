import "./../styles/landing.css";
import React from "react";
import { Link } from "react-router-dom";

function Landing() {

  return (
    <>
      <div class="jumbotron">
        <h1 class="display-4">Welcome, cocktail creators!</h1>
        <p class="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr class="my-4"></hr>
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <p class="lead">
          <Link
            to="/register"
            class="btn btn-primary btn-lg landing-button"
            role="button"
          >
            Sign Up
          </Link>
        </p>
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
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
