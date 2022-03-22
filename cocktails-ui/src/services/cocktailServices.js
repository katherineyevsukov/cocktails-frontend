import axiosWithAuth from './../utils/axiosWithAuth'
import { API_URL } from "./../config";

const getUserCocktails = (id) => {
    return axiosWithAuth().get(`${API_URL}/users/current-user/cocktails`).then((res) => {
      return res;
    });
  };

  export { getUserCocktails }
