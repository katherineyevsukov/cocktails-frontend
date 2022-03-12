import { useFormFields } from "./../utils/useFormFields";

const initialSignupValues = {
  email: "",
  password: "",
  first_name: "",
  last_name: "",
  phone: "",
};

function Signup({ setSignup }) {
  const [fields, setFields] = useFormFields(initialSignupValues);

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   loginUser(fields.email, fields.password)
  // }

  return (
    <div>
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
        <div className="mb-3">
          <label htmlFor="passwordInput" className="form-label">
            First Name
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
          <label htmlFor="passwordInput" className="form-label">
            Last Name
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
          <label htmlFor="passwordInput" className="form-label">
            Phone Number
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
        <button
          type="submit"
          className="btn btn-primary shadow"
        //   onClick={handleSubmit}
        >
          Submit
        </button>
        {/* {isLoading ? <div>Loading</div> : null}
        {message ? <div>{message}</div> : null} */}
        <div onClick={() => setSignup(false)}>Already have an account? Click to login!</div>
      </form>
    </div>
  );
}

export default Signup;
