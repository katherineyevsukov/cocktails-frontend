import { login, signUp, verifyToken } from "./../../services/authServices";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const SIGNUP_START = "SIGNUP_START";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAIL = "SIGNUP_FAIL";
export const MESSAGE_RESET = "MESSAGE_RESET";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAIL = "GET_USER_FAIL";

export const loginUser = (username, password) => (dispatch) => {
  dispatch(loginStart());
  login(username, password)
    .then((res) => {
      dispatch(loginSuccess(res.data));
    })
    .catch((err) => {
      dispatch(loginFail(err.response ? err.response.data.prodMessage : err.message));
    });
};

export const signupUser = (registrationBody) => (dispatch) => {
  dispatch(signupStart());
  signUp(registrationBody)
    .then((res) => {
      dispatch(signupSuccess(res.data));
    })
    .catch((err) => {
      dispatch(signupFail(err.response.data.prodMessage));
    });
};

export const getUser = () => (dispatch) => {
  verifyToken().then((res) => {
    dispatch(getUserSuccess(res))
  })
  .catch(err => {
    console.error(err)
  })

}

export const loginStart = () => {
  return { type: LOGIN_START };
};

export const loginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: { message: data.message, user: data.user_id },
  };
};

export const loginFail = (error) => {
  return { type: LOGIN_FAIL, payload: { message: error } };
};

export const signupStart = () => {
  return { type: SIGNUP_START };
};

export const signupSuccess = (data) => {
  return { type: SIGNUP_SUCCESS, payload: { message: data.message } };
};

export const signupFail = (error) => {
  return { type: SIGNUP_FAIL, payload: { message: error } };
};

export const messageReset = () => {
  return { type: MESSAGE_RESET };
};

export const getUserSuccess = (user) => {
  return { type: GET_USER_SUCCESS, payload: {user: user.data.subject} };
};
