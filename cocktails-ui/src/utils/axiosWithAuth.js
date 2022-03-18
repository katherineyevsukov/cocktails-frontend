import axios from "axios";
import { API_URL } from "../config";

const axiosWithAuth = () => {
  const token = localStorage.getItem("handshaken_token");

  return axios.create({
    headers: {
      authorization: token,
    },
    baseURL: API_URL,
  });
};

export default axiosWithAuth;
