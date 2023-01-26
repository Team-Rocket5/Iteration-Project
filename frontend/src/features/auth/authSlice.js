import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {userSignup, userLogin} from './authService';

//Determine what is used for auth and create a variable to hold it
const userToken = localStorage.getItem('userToken')
  ? localStorage.getItem('userToken')
  : null

//delare the initial state

const initialState = {
  loading: false,
  userInfo: null,
  userToken,
  error: null,
  success: false,
}


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('userToken') // delete token from storage
      state.loading = false
      state.userInfo = null
      state.userToken = null
      state.error = null
    }
  }, 
  extraReducers: {
    // login user
    [userLogin.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.userInfo = payload
      state.userToken = payload.userToken
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    // signup user
    [userSignup.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [userSignup.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true // registration successful
    },
    [userSignup.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  },
})

export const { logout } = authSlice.actions;
export default authSlice.reducer;