import { login } from "./../../services/authServices";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const loginUser = (username, password) => (dispatch) => {
  dispatch(loginStart());
  login(username, password)
    .then((res) => {
        console.log(res.data)
      dispatch(loginSuccess(res.data));
    })
    .catch((err) => {
      dispatch(loginFail(err.message));
    });
};

export const loginStart = () => {
  return { type: LOGIN_START };
};

export const loginSuccess = (data) => {
  return { type: LOGIN_SUCCESS, payload: data };
};

export const loginFail = (error) => {
  return { type: LOGIN_FAIL, payload: error };
};
