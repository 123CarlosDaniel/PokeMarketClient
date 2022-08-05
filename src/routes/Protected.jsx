import { Outlet, Navigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectAccessToken } from '../features/auth/authSlice'

const Protected = () => {
  const location = useLocation()
  const auth = useSelector(selectAccessToken)

  return auth?.accessToken ? <Outlet /> : <Navigate to={'/login'} state={{ from: location }} replace />
}

export default Protected
