import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectAccessToken } from '../../features/auth/authSlice'
import Logout from '../../routes/Logout'

const Buttons = () => {
  const auth = useSelector(selectAccessToken)
  return (
    <>
      <Link className='principal-button' to={'/'}>Principal</Link>
      {auth?.accessToken ? (
        <Logout />
      ) : (
        <>
          <Link className='principal-button' to={'/login'}>Login</Link>
          <Link className='principal-button' to={'/signup'}>Signup</Link>
        </>
      )}
    </>
  )
}

export default Buttons
