import axios from '../api/axios'
import { setAuth } from '../features/auth/authSlice'
import { useDispatch } from 'react-redux'

const REFRESH_ENDPOINT = '/refresh'

const useRefreshToken = () => {
  const dispatch = useDispatch()

  const refresh = async () => {
    const response = await axios.get(REFRESH_ENDPOINT, {
      withCredentials: true,
    })

    dispatch(setAuth({ accessToken: response.data.accessToken }))
    return response.data.accessToken
  }
  return refresh
}

export default useRefreshToken
