import { getUserCocktails } from './../../services/cocktailServices'

export const FETCH_USER_COCKTAILS_START = "FETCH_USER_COCKTAILS_START";
export const FETCH_USER_COCKTAILS_SUCCESS = "FETCH_USER_COCKTAILS_SUCCESS";
export const FETCH_USER_COCKTAILS_FAIL = "FETCH_USER_COCKTAILS_FAIL";
export const SET_COCKTAIL = "SET_COCKTAIL"

export const fetchUserCocktails = (user_id) => (dispatch) => {
    dispatch(fetchCocktailsStart())
    getUserCocktails(user_id)
      .then((res) => {
        dispatch(fetchCocktailsSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchCocktailsFail(err.response ? err.response.data.prodMessage : err.message))
      });
  };

  export const fetchCocktailsStart = () => {
    return { type: FETCH_USER_COCKTAILS_START };
  };
  
  export const fetchCocktailsSuccess = (data) => {
    return {
      type: FETCH_USER_COCKTAILS_SUCCESS,
      payload: { cocktails: data },
    };
  };
  
  export const fetchCocktailsFail = (error) => {
    return { type: FETCH_USER_COCKTAILS_FAIL, payload: { message: error } };
  };

  export const setSelectedCocktail = (cocktail) => {
    return { type: SET_COCKTAIL, payload: {cocktail}}
  }
