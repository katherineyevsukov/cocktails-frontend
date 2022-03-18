import { FETCH_USER_COCKTAILS_START, FETCH_USER_COCKTAILS_SUCCESS, FETCH_USER_COCKTAILS_FAIL} from './../actions/cocktailActions'

const initialState = {
    cocktails: [],
    cocktailIngredients: [],
    cocktailSteps: [],
    cocktailPhoto: ''
}


// export default function authReducer(state = initialState, action) {
//     const { type, payload } = action;
//     switch (type) {
//       case LOGIN_START:
//         return {
//           ...state,
//           isLoading: true,
//           isLoggedin: false,
//           user: null,
//           authSuccessMessage: null,
//           authErrorMessage: null,
//         };
//       case LOGIN_SUCCESS:
//         return {
//           ...state,
//           isLoggedin: true,
//           user: payload.token,
//           isLoading: false,
//           authSuccessMessage: payload.message,
//           authErrorMessage: null,
//         };
//       case LOGIN_FAIL:
//         return {
//           ...state,
//           isLoggedin: false,
//           user: null,
//           isLoading: false,
//           authErrorMessage: payload.message,
//           authSuccessMessage: null,
//         };
//       case SIGNUP_START:
//         return {
//           ...state,
//           isLoading: true,
//           isLoggedin: false,
//           user: null,
//           authErrorMessage: null,
//           authSuccessMessage: null,
//         };
//       case SIGNUP_SUCCESS:
//         return {
//           ...state,
//           isLoggedin: false,
//           user: null,
//           isLoading: false,
//           authSuccessMessage: payload.message,
//           authErrorMessage: null,
//         };
//       case SIGNUP_FAIL:
//         return {
//           ...state,
//           isLoggedin: false,
//           user: null,
//           isLoading: false,
//           authErrorMessage: payload.message,
//           authSuccessMessage: null,
//         };
//       case MESSAGE_RESET:
//         return {
//           ...state,
//           authErrorMessage: null,
//           authSuccessMessage: null,
//         };
//       default:
//         return state;
//     }
//   }
