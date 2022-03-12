import { useFormFields } from "./../utils/useFormFields";
import { connect } from "react-redux";
import { signupUser } from "./../redux/actions/authActions";

const initialSignupValues = {
  email: "",
  password: "",
  first_name: "",
  last_name: "",
  phone: "",
};

function Signup({
  setSignup,
  signupUser,
  isLoading,
  errorMessage,
  successMessage,
}) {
  const [fields, setFields] = useFormFields(initialSignupValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    signupUser(fields);
  };

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
        <div className="mb-3">
          <label htmlFor="first_nameInput" className="form-label">
            First Name
          </label>
          <input
            name="first_name"
            type="first_name"
            className="form-control"
            id="first_nameInput"
            value={fields.first_name}
            onChange={setFields}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="last_nameInput" className="form-label">
            Last Name
          </label>
          <input
            name="last_name"
            type="last_name"
            className="form-control"
            id="last_nameInput"
            value={fields.last_name}
            onChange={setFields}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneInput" className="form-label">
            Phone Number
          </label>
          <input
            name="phone"
            type="phone"
            className="form-control"
            id="phoneInput"
            value={fields.phone}
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
        <button
          type="submit"
          className="btn btn-primary shadow"
        >
          Submit
        </button>
        {isLoading ? <div>Loading</div> : null}
        {errorMessage ? <div>{errorMessage}</div> : null}
        {successMessage ? <div>{successMessage} Please <span onClick={() => setSignup(false)}>login</span> to continue</div> : null}
        <div onClick={() => setSignup(false)}>
          Already have an account? Click to login!
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.authState.authErrorMessage,
    successMessage: state.authState.authSuccessMessage,
    isLoading: state.authState.isLoading,
  };
};

export default connect(mapStateToProps, { signupUser })(Signup);
