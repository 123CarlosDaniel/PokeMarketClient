import axios from '../../api/axios'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setAuth } from '../../features/auth/authSlice'

import '../LoginForm/LoginForm.css'
import { useNavigate } from 'react-router-dom'

const SIGNUP_ENDPOINT = '/register'
const SignUpForm = () => {
  console.log(import.meta.env)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [inputData, setInputData] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [error, setError] = useState('')
  const handleChange = e => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e)=> {
    e.preventDefault()
    try {
      const { name, email, password } = inputData
      const response = await axios.post(
        SIGNUP_ENDPOINT,
        { name, email, password },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      )
      if (response.status === 202) {
        const { accessToken } = response.data
        dispatch(setAuth({ accessToken }))
        setInputData({
          name: '',
          email: '',
          password: '',
        })
        navigate('/pokemons')
      }
    } catch (error) {
      console.log(error)
      let msg = RegExp('400').test(error) ? 'Email is already used' : 'Something went wrong'
      setError(msg)
      setTimeout(() => {
        setError('')
      }, 3500)
    }
  }
  return (
    <section>
      <h3 className="login-title">Registrate para ver pokemones</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Write your name"
            required
            value={inputData.name}
            onChange={handleChange}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Example@example.com"
            value={inputData.email}
            required
            onChange={handleChange}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
            value={inputData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Registrar</button>
        {error !== '' && <div className='error'>{error}</div>}
      </form>
    </section>
  )
}

export default SignUpForm
