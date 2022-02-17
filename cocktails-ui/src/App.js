import "./App.css";
import { Button, Alert } from "react-bootstrap";
import Jumbotron from "bootstrap";
import heroImg from "./images/hero-img.png";

function App() {
  return (
    <div className="App">
        <img
          src={heroImg}
          class="img-fluid"
          alt="bartender standing at a bar stirring a cocktail"
        />
      <header className="App-header">
        <Alert variant="secondary">This is a button</Alert>
        <Button>hello</Button>
      </header>
    </div>
  );
}

export default App;
