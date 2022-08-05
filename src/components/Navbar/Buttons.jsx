import { useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import { selectAccessToken } from '../../features/auth/authSlice'
import Logout from '../../routes/Logout'

const Buttons = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const auth = useSelector(selectAccessToken)
  return (
    <>
      <button onClick={() => navigate('/')}>Principal</button>
      {auth?.accessToken ? (
        <Logout />
      ) : (
        <>
          <button onClick={() => navigate('/login')}>Login</button>
          <button onClick={() => navigate('/signup')}>Signup</button>
        </>
      )}
    </>
  )
}

export default Buttons
