import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit'


//routes/userRoutes/login
//signup user
export const userSignup = createAsyncThunk(
    'auth/signup',
    async ({ userName, email, password }, { rejectWithValue }) => {
      try {
        // configure header's Content-Type as JSON
        const config = {
            headers: {
          'Content-Type': 'application/json',
            },
        }
        const {data} = await axios.post('user/signup',{ userName, email, password }, config)
        console.log(data); 

      } catch (error) {
      // return custom error message from backend if present
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message)
        } else {
          return rejectWithValue(error.message)
        }
      }
    }
  )


//Login user
export const userLogin = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const { data } = await axios.post(
        'user/login',
        { email, password },
        config
      )
      // store user's token in local storage
      localStorage.setItem('userToken', data.userToken)
      return data
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

