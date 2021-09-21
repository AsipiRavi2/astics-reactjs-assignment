import { createSlice } from '@reduxjs/toolkit'

import checkCredentials from './checkCredentials'

const initialState = {
  user: null,
}


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser: (state, action) => {
        const res = checkCredentials(action.payload)
        if(res){
            state.user = action.payload.username
        }
        else{
            state.user = null
        }
    },
    logoutUser: (state) => {
          state.user = null
          
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, loginUser, logoutUser } = authSlice.actions

export default authSlice.reducer