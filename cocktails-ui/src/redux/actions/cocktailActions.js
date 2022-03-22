import { getUserCocktails, getStepsAndIngredients } from './../../services/cocktailServices'

export const FETCH_USER_COCKTAILS_START = "FETCH_USER_COCKTAILS_START";
export const FETCH_USER_COCKTAILS_SUCCESS = "FETCH_USER_COCKTAILS_SUCCESS";
export const FETCH_USER_COCKTAILS_FAIL = "FETCH_USER_COCKTAILS_FAIL";
export const SET_COCKTAIL = "SET_COCKTAIL"
export const FETCH_RECIPE_START = "FETCH_RECIPE_START";
export const FETCH_RECIPE_SUCCESS = "FETCH_RECIPE_SUCCESS";
export const FETCH_RECIPE_FAIL = "FETCH_RECIPE_FAIL";

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

  export const fetchRecipe = (id) => (dispatch) => {
    dispatch(fetchRecipeStart())
    getStepsAndIngredients(id)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.error(err)
    })
  }

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

  export const fetchRecipeStart = () => {
    return { type: FETCH_RECIPE_START };
  };
  
  export const fetchRecipeSuccess = (data) => {
    return {
      type: FETCH_RECIPE_SUCCESS,
      payload: { cocktails: data },
    };
  };
  
  export const fetchRecipeFail = (error) => {
    return { type: FETCH_RECIPE_FAIL, payload: { message: error } };
  };
