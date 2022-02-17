import "./App.css";
import { Button, Alert } from "react-bootstrap";
import Login from './components/Login'
import heroImg from "./images/hero-img.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={heroImg}
          class="img-fluid"
          alt="bartender standing at a bar stirring a cocktail"
        />
      </header>
        <Login />
        {/* <Alert variant="secondary">This is a button</Alert>
        <Button>hello</Button> */}
      
    </div>
  );
}

export default App;
