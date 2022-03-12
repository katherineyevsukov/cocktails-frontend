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
    }
  : { isLoggedin: false, isLoading: false, user: null };

export default function authReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_START:
      return {
        ...state,
        isLoading: true,
        isLoggedin: false,
        user: null,
        authMessage: null
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedin: true,
        user: payload.token,
        isLoading: false,
        authMessage: payload.message,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedin: false,
        user: null,
        isLoading: false,
        authMessage: payload.message,
      };
      case SIGNUP_START:
      return {
        ...state,
        isLoading: true,
        isLoggedin: false,
        user: null,
        authMessage: null
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoggedin: false,
        user: null,
        isLoading: false,
        authMessage: payload.message,
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        isLoggedin: false,
        user: null,
        isLoading: false,
        authMessage: payload.message,
      };
    default:
      return state;
  }
}
