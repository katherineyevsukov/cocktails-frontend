import {
  LOGIN_SUCCESS,
  LOGIN_START,
  LOGIN_FAIL,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
} from "./../actions/authActions";

const user = JSON.parse(localStorage.getItem("user"));
const initialState = user
  ? {
      isLoggedin: true,
      isLoading: false,
      user,
      successMessage: null,
      errorMessage: null,
    }
  : {
      isLoggedin: false,
      isLoading: false,
      user: null,
      successMessage: null,
      errorMessage: null,
    };

export default function authReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_START:
      return {
        ...state,
        isLoading: true,
        isLoggedin: false,
        user: null,
        successMessage: null,
        errorMessage: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedin: true,
        user: payload.token,
        isLoading: false,
        successMessage: payload.message,
        errorMessage: null,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedin: false,
        user: null,
        isLoading: false,
        errorMessage: payload.message,
        successMessage: null,
      };
    case SIGNUP_START:
      return {
        ...state,
        isLoading: true,
        isLoggedin: false,
        user: null,
        errorMessage: null,
        successMessage: null,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoggedin: false,
        user: null,
        isLoading: false,
        successMessage: payload.message,
        errorMessage: null,
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        isLoggedin: false,
        user: null,
        isLoading: false,
        errorMessage: payload.message,
        successMessage: null,
      };
    default:
      return state;
  }
}
