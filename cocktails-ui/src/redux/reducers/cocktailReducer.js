import {
  FETCH_USER_COCKTAILS_START,
  FETCH_USER_COCKTAILS_SUCCESS,
  FETCH_USER_COCKTAILS_FAIL,
  SET_COCKTAIL,
  FETCH_RECIPE_START,
  FETCH_RECIPE_FAIL,
  FETCH_RECIPE_SUCCESS,
} from "./../actions/cocktailActions";

const initialState = {
  cocktails: [],
  cocktailsLoading: false,
  cocktailErrorMessage: "",
  cocktail: {},
  cocktailIngredients: [],
  cocktailSteps: [],
};

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
        cocktailErrorMessage: payload.message,
      };
    case SET_COCKTAIL:
      return {
        ...state,
        cocktail: payload.cocktail,
      };
    case FETCH_RECIPE_START:
      return {
        ...state,
        cocktailsLoading: true,
      };
    case FETCH_RECIPE_SUCCESS:
      return {
        ...state,
        cocktailsLoading: false,
        cocktailIngredients: payload.ingredients,
        cocktailSteps: payload.ingredients,
      };
    case FETCH_RECIPE_FAIL:
      return {
        ...state,
        cocktailsLoading: false,
        cocktailErrorMessage: payload.message,
      };

    default:
      return state;
  }
}
