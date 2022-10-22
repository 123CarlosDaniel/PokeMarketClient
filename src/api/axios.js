import axios from 'axios'
const BASE_URL_API = import.meta.env.VITE_SERVER_HOST

export default axios.create({
  baseURL: BASE_URL_API,
})

export const axiosPrivate = axios.create({
  baseURL: BASE_URL_API,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
})
