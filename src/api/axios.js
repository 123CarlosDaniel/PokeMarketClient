import axios from 'axios'
const mode= import.meta.env.MODE 
const BASE_URL_API = mode === 'development' ? 'http://localhost:3500/api' : 'https://api-rest-authentication.herokuapp.com/api'

export default axios.create({
  baseURL: BASE_URL_API,
})

export const axiosPrivate = axios.create({
  baseURL: BASE_URL_API,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
})
