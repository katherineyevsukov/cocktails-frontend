import axios from 'axios';
import {API_URL} from './../config'

const login = (email, password) => {
   return axios.post(`${API_URL}/auth/login`, {email, password})
    .then(res => {
        localStorage.setItem("user", JSON.stringify(res.data.token))
        return res
    })
}

const signUp = (registrationBody) => {
    return axios.post(`${API_URL}/auth/register`, registrationBody)
     .then(res => {
         return res
     })
 }


export { login, signUp }
