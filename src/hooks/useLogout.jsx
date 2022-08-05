import axios from '../api/axios'
import { useDispatch } from 'react-redux'
import { setAuth } from '../features/auth/authSlice'

const LOGOUT_ENDPOINT = '/logout'

const useLogout = () => {
  const dispatch = useDispatch()
  const logout = async () => {
    dispatch(setAuth({ accessToken: '' }))
    try {
      const response = await axios.get(LOGOUT_ENDPOINT, {
        withCredentials: true,
      })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
  return logout
}

export default useLogout
