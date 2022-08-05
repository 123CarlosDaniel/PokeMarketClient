import axios from '../../api/axios'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setAuth } from '../../features/auth/authSlice'

import './LoginForm.css'
import { useNavigate } from 'react-router-dom'

const LOGIN_ENDPOINT = '/auth'
const LoginForm = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [inputData, setInputData] = useState({
    email: '',
    password: '',
  })
  const [loading, setLoading] = useState(false)
  const handleChange = e => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const { email, password } = inputData
      setLoading(true)
      const response = await axios.post(
        LOGIN_ENDPOINT,
        { email, password },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      )
      if (response.status === 202) {
        const { accessToken } = response.data
        dispatch(setAuth({ accessToken }))
        console.log('login success')
        setInputData({
          email: '',
          password: '',
        })
        navigate('/pokemons')
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  return (
    <div>
      <h3 className="login-title">Ingresa para ver a tus pokemones</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Example@example.com"
            value={inputData.email}
            onChange={handleChange}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={inputData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Ingresar</button>
      </form>
      {loading && <p>Loading...</p>}
    </div>
  )
}

export default LoginForm
