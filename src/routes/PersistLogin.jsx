import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { selectAccessToken } from '../features/auth/authSlice'
import useRefreshToken from '../hooks/useRefreshToken'

const PersistLogin = () => {
  const [isloading, setIsloading] = useState(true)
  const refresh = useRefreshToken()
  const auth = useSelector(selectAccessToken)

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        let token = await refresh()
        // console.log(token)
      } catch (error) {
        console.log(error)
      } finally {
        setIsloading(false)
      }
    }
    console.log(auth)
    !auth?.accessToken ? verifyRefreshToken() : setIsloading(false)
  }, [])

  return <>{isloading ? <div>loading ...</div> : <Outlet />}</>
}

export default PersistLogin
