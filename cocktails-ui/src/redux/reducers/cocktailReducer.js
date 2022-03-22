import { FETCH_USER_COCKTAILS_START, FETCH_USER_COCKTAILS_SUCCESS, FETCH_USER_COCKTAILS_FAIL} from './../actions/cocktailActions'

const initialState = {
    cocktails: [],
    cocktailsLoading: false,
    cocktailErrorMessage: '',
    cocktailIngredients: [],
    cocktailSteps: [],
}


export default function cocktailReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case FETCH_USER_COCKTAILS_START:
        return {
          ...state,
          cocktailsLoading: true,
          cocktails: [],
        };
      case FETCH_USER_COCKTAILS_SUCCESS:
        return {
          ...state,
          cocktails: payload.cocktails,
          cocktailsLoading: false,
        };
      case FETCH_USER_COCKTAILS_FAIL:
        return {
          ...state,
          cocktailsLoading: false,
          cocktailErrorMessage: payload.message
        };
      default:
        return state;
    }
  }
