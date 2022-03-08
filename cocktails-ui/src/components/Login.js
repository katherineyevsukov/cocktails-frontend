import "./../styles/login.css";
import React, { useEffect } from "react";
import {useFormFields} from './../utils/useFormFields'
import { login } from './../services/authServices'

const initialLoginValues = {
  email: "",
  password: "",
};

function Login() {
  const [fields, setFields] = useFormFields(initialLoginValues);
  // useEffect(() => {
  //   login('kat@kat.com', 'password').then(res => {
  //     console.log(res)
  //   })
  // }, [])
  
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
          value={fields.email}
          onChange={setFields}
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
          value={fields.password}
          onChange={setFields}
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
