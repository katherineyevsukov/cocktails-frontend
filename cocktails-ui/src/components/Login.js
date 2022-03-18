import React from "react";
import { useFormFields } from "./../utils/useFormFields";
import { connect } from "react-redux";
import { loginUser, messageReset } from "./../redux/actions/authActions";
import { Link } from "react-router-dom";

const initialLoginValues = {
  email: "",
  password: "",
};

function Login({
  errorMessage,
  successMessage,
  isLoading,
  isLoggedIn,
  user,
  loginUser,
  messageReset,
}) {
  const [fields, setFields] = useFormFields(initialLoginValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(fields.email, fields.password);
  };

  const leavePage = () => {
    messageReset();
  };

  console.log(user)

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
        <button type="submit" className="btn btn-primary shadow">
          Submit
        </button>
        {isLoading ? <div>Loading</div> : null}
        {errorMessage ? <div id="formErrors" className="form-text form-errors">
          {errorMessage}
        </div> : null}
        {successMessage ? <div>{successMessage}</div> : null}
        <Link to="/register" onClick={leavePage}>
          Don't have an account yet? Click to sign up!
        </Link>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.authState.authErrorMessage,
    successMessage: state.authState.authSuccessMessage,
    isLoggedIn: state.authState.isLoggedIn,
    isLoading: state.authState.isLoading,
    user: state.authState.user
  };
};

export default connect(mapStateToProps, { loginUser, messageReset })(Login);
