import {
  LOGIN_SUCCESS,
  LOGIN_START,
  LOGIN_FAIL,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  MESSAGE_RESET,
  GET_USER_SUCCESS,
  TOKEN_FAIL,
  TOKEN_SUCCESS
} from "./../actions/authActions";

const initialState =  {
      isLoggedIn: false,
      isLoading: false,
      user: null,
      authSuccessMessage: null,
      authErrorMessage: null,
    };

export default function authReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_START:
      return {
        ...state,
        isLoading: true,
        isLoggedIn: false,
        user: null,
        authSuccessMessage: null,
        authErrorMessage: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
        isLoading: false,
        authSuccessMessage: payload.message,
        authErrorMessage: null,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        isLoading: false,
        authErrorMessage: payload.message,
        authSuccessMessage: null,
      };
    case SIGNUP_START:
      return {
        ...state,
        isLoading: true,
        isLoggedIn: false,
        user: null,
        authErrorMessage: null,
        authSuccessMessage: null,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        isLoading: false,
        authSuccessMessage: payload.message,
        authErrorMessage: null,
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        isLoading: false,
        authErrorMessage: payload.message,
        authSuccessMessage: null,
      };
    case MESSAGE_RESET:
      return {
        ...state,
        authErrorMessage: null,
        authSuccessMessage: null,
      };
      case GET_USER_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
        isLoading: false,
        authErrorMessage: null,
        authSuccessMessage: null,
      };
      case TOKEN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
        isLoading: false,
        authErrorMessage: null,
        authSuccessMessage: null,
      };
      case TOKEN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        isLoading: false,
        authErrorMessage: null,
        authSuccessMessage: null,
      };
    default:
      return state;
  }
}
