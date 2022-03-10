import { login } from "./../../services/authServices";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const loginUser = (username, password) => (dispatch) => {
  dispatch(loginStart());
  login(username, password)
    .then((res) => {
        console.log('here')
      dispatch(loginSuccess(res.data));
    })
    .catch((err) => {
        console.log('err', err)
      dispatch(loginFail(err.response.data.prodMessage));
    });
};

export const loginStart = () => {
  return { type: LOGIN_START };
};

export const loginSuccess = (data) => {
  return { type: LOGIN_SUCCESS, payload: {message: data.message, token: data.token} };
};

export const loginFail = (error) => {
  return { type: LOGIN_FAIL, payload: {message: error} };
};
