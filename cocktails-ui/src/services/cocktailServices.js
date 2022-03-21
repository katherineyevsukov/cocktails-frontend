import axiosWithAuth from './../utils/axiosWithAuth'
import { API_URL } from "./../config";

const getUserCocktails = (id) => {
    return axiosWithAuth().get(`${API_URL}/users/${id}/cocktails`).then((res) => {
      return res;
    });
  };

  export { getUserCocktails }
