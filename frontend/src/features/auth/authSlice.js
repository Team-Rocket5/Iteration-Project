import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import authService from './authService';

//Determine what is used for auth and create a variable to hold it

//delare the initial state
const intialState ={
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.user = null;
    }
  }
})

export const { reset } = authSlice.actions;
export default authSlice.reducer;