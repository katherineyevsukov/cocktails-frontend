import "./App.css";
import { Button, Alert } from "react-bootstrap";
import Login from './components/Login'
import heroImg from "./images/hero-img.jpg";
import { API_URL } from '../src/config'
import axios from "axios";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={heroImg}
          className="img-fluid"
          alt="bartender wearing a white shirt and black apron standing at a well-stocked bar stirring a cocktail"
        />
      </header>
        <Login />
        {/* <Alert variant="secondary">This is a button</Alert>
        <Button>hello</Button> */}
      
    </div>
  );
}

export default App;
