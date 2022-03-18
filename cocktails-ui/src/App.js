import "./App.css";
import { Route, Switch } from "react-router-dom";
// import { Button, Alert } from "react-bootstrap";

import heroImg from "./images/hero-img.jpg";
// import { API_URL } from "../src/config";
// import axios from "axios";
import React, { useEffect } from "react"
import Landing from "./../src/components/Landing";
import Login from "./../src/components/Login";
import Signup from "./../src/components/Signup";
import Home from "./components/Home"
import { connect } from "react-redux";

// verifyToken().then(res => {
//   console.log(res)
//   user = res.data.subject
// })

function App() {

  useEffect(() => {

  })
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={heroImg}
          className="img-fluid"
          alt="bartender wearing a white shirt and black apron standing at a well-stocked bar stirring a cocktail"
        />
      </header>

      <Switch>
      <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Signup />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
      {/* <Alert variant="secondary">This is a button</Alert>
        <Button>hello</Button> */}
    </div>
  );
}

export default App;
