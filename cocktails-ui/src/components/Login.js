import "./../styles/login.css";
import React from "react";
import {useFormFields} from './../utils/useFormFields'
import { connect } from 'react-redux';
import { loginUser } from './../redux/actions/authActions'


const initialLoginValues = {
  email: "",
  password: "",
};

function Login({ message, isLoading, isLoggedIn, loginUser, setSignup }) {
  const [fields, setFields] = useFormFields(initialLoginValues);
  
  // useEffect(() => {
  //   login('kat@kat.com', 'password').then(res => {
  //     console.log(res)
  //   })
  // }, [])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    loginUser(fields.email, fields.password)
  }

  return (
    <div>
    <form className="login" onSubmit={handleSubmit}>
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
      <button type="submit" className="btn btn-primary shadow" onClick={handleSubmit}>
        Submit
      </button>
      {isLoading ? <div>Loading</div> : null}
      {message ? <div>{message}</div> : null}
      <div onClick={() => setSignup(true)}>Don't have an account yet? Click to sign up!</div>
    </form>
    
    </div>
  );
}

const mapStateToProps = state => {
  return {
    message: state.authState.authMessage,
    isLoggedIn: state.authState.isLoggedIn,
    isLoading: state.authState.isLoading
  }
}

export default connect(mapStateToProps, { loginUser })(Login);
