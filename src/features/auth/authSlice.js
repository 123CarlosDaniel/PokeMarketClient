import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  accessToken: '',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth(state, action) {
      const { accessToken } = action.payload
      state.accessToken = accessToken
    },
  },
})

export const selectAccessToken = state => state.auth

export const { setAuth } = authSlice.actions
export default authSlice.reducer
