import { createSlice } from "@reduxjs/toolkit"

type InitialState = {
  user: string,
}

const initialState: InitialState = {
  user: ''
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload
    },
    logoutUser: (state) => {
      state.user = ''
    }
  }
})

export const { loginUser, logoutUser } = loginSlice.actions

export default loginSlice.reducer