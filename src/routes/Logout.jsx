import { useNavigate } from 'react-router-dom'

import useLogout from '../hooks/useLogout'

const Logout = () => {
  const navigate = useNavigate()
  const logout = useLogout()

  const handleLogout = async () => {
    await logout()
    navigate('/login')
  }
  return <button onClick={handleLogout}>Logout</button>
}

export default Logout
