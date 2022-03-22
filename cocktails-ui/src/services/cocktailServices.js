import axiosWithAuth from "./../utils/axiosWithAuth";
import { API_URL } from "./../config";
import axios from "axios";

const getUserCocktails = (id) => {
  return axiosWithAuth()
    .get(`${API_URL}/users/current-user/cocktails`)
    .then((res) => {
      return res;
    });
};

const getStepsAndIngredients = (id) => {
  const promise = axios
    .all([
      axiosWithAuth().get(`${API_URL}/cocktails/${id}/ingredients`),
      axiosWithAuth().get(`${API_URL}/cocktails/${id}/steps`),
    ])
    .then(
      axios.spread((...responses) => {
        const ingredients = responses[0].data;
        const steps = responses[1].data;
        return [ingredients, steps];
      })
    );
  return promise;
};
export { getUserCocktails, getStepsAndIngredients };
