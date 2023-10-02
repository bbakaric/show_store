import { createSlice } from "@reduxjs/toolkit"

type InitialState = {
  user: string,
}

type UserPayload = {
  type: string,
  payload: string,
}

const initialState: InitialState = {
  user: ''
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginUser: (state: InitialState, action: UserPayload) => {
      state.user = action.payload
    },
    logoutUser: (state: InitialState) => {
      state.user = ''
    }
  }
})

export const { loginUser, logoutUser } = loginSlice.actions

export default loginSlice.reducer