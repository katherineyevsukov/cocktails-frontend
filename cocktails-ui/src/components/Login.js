import "./../styles/login.css";
import React, { useState } from "react";

const initialLoginValues = {
  email: "",
  password: "",
};

function Login() {
  const [formValues, setFormValues] = useState(initialLoginValues);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    console.log(formValues)
  };
  return (
    <form className="login">
      <div className="mb-3">
        <label htmlFor="emailInput" className="form-label">
          Email address
        </label>
        <input
          name="email"
          type="email"
          className="form-control"
          id="emailInput"
          value={formValues.email}
          onChange={handleChange}
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="passwordInput" className="form-label">
          Password
        </label>
        <input
          name="password"
          type="password"
          className="form-control"
          id="passwordInput"
          value={formValues.password}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary shadow">
        Submit
      </button>
    </form>
  );
}

export default Login;
