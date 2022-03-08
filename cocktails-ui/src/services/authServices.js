import axios from 'axios';
import {API_URL} from './../config'

const login = (email, password) => {
   return axios.post(`${API_URL}/auth/login`, {email, password})
    .then(res => {
        localStorage.setItem("user", JSON.stringify(res.data.token))
        return res.data
    }).catch(err => {
        console.error(err)
    })
}


export { login, }
