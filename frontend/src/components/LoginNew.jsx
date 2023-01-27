import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import OauthLogin from '../../../backend/oauth.js'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import FormControl, { useFormControl } from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import FormHelperText from '@mui/material/FormHelperText'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import axios from 'axios'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '10px solid #F77F00',
  borderRadius: '10px',
  boxShadow: 12,
  pt: 10,
  px: 4,
  pb: 10,
}

function MyEmailHelperText() {
  const { focused } = useFormControl() || {}

  const helperText = React.useMemo(() => {
    if (focused) {
      return 'We\'ll never share your email.';
    }

    return 'Your Email'
  }, [focused])

  return <FormHelperText>{helperText}</FormHelperText>
}


function SignUp() {
  //set states for sign-up
  const navigate = useNavigate()
  const [open, setOpen] = React.useState(false)
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  })

  //on Change
  const onChange = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  //close and open Modal - UI
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false);
  };
  
  //on Submit
  const onSubmit = async (e) => {
    e.preventDefault()

    console.log('On Submit fired!')
    const { username, email, password } = formData
    const response = await axios.post('user/signup', {
      username,
      email,
      password,
    })
    if (response.data) console.log('success')
    else console.log('error')
    handleClose()
    navigate('/')
  }

  //show and hide Password - UI
  const [showPassword, setShowPassword] = React.useState(false)
  const handleClickShowPassword = () => setShowPassword((show) => !show)
  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  return (
    <React.Fragment>
      <button onClick={handleOpen} className="m-5 text-right text-sm underline">
        Don't have an account?
      </button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 500 }} className="relative">
          <FormControl
            displayEmpty
            fullWidth
            sx={{ mx: 2, my: 1, pl: 1, width: '90%' }}
            variant="outlined"
          >
            {/* <InputLabel htmlFor="outlined-adornment-amount">Search By Name</InputLabel> */}
            <OutlinedInput
              id="signUpUser"
              className="focus:border-none"
              name="username"
              value={formData.username}
              required={true}
              onChange={onChange}
            />
            <FormHelperText id="outlined-weight-helper-text">
              Username
            </FormHelperText>
          </FormControl>
          <FormControl
            displayEmpty
            fullWidth
            sx={{ mx: 2, my: 1, pl: 1, width: '90%' }}
            variant="outlined"
          >
            <OutlinedInput
              id="signUpEmail"
              name="email"
              value={formData.email}
              required={true}
              onChange={onChange}
            />
            <MyEmailHelperText />
          </FormControl>
          <FormControl
            displayEmpty
            fullWidth
            sx={{ mx: 2, my: 1, pl: 1, width: '90%' }}
            variant="outlined"
          >
            {/* <InputLabel htmlFor="outlined-adornment-amount">Search By Name</InputLabel> */}
            <OutlinedInput
              id="userPassword1"
              name="password"
              value={formData.password}
              required={true}
              onChange={onChange}
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormHelperText id="outlined-weight-helper-text">
              Password
            </FormHelperText>
          </FormControl>
          <FormControl
            displayEmpty
            fullWidth
            sx={{ mx: 2, my: 1, pl: 1, width: '90%' }}
            variant="outlined"
          >
            {/* <InputLabel htmlFor="outlined-adornment-amount">Search By Name</InputLabel> */}
            <OutlinedInput
              id="userPassword2"
              name="password2"
              value={formData.password2}
              required={true}
              onChange={onChange}
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormHelperText id="outlined-weight-helper-text">
              Type Your Password Again
            </FormHelperText>
          </FormControl>
          <div className="text-center mt-5">
            <button
              onClick={onSubmit}
              className="bg-yellow rounded p-3 px-10 ml-6 font-large"
              type="submit"
            >
              Sign Up
            </button>
          </div>
          <div className="text-center ml-5">
            <button
              onClick={handleClose}
              className="m-5 text-right text-sm underline"
            >
              Have an account? Sign In
            </button>
          </div>
        </Box>
      </Modal>
    </React.Fragment>
  )
}

const Login = () => {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const [showPassword, setShowPassword] = React.useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }
  return (
    <div className="mt-2">
      <button
        onClick={handleOpen}
        className="text-gray-600 py-2 hover:text-dark-purple font-semibold text-2xl"
      >
        Login/Register
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 500 }}>
          <h2
            id="parent-modal-title"
            className="pl-4 mb-4 text-2xl text-center"
          >
            Sign In
          </h2>
          <FormControl
            displayEmpty
            fullWidth
            sx={{ mx: 2, my: 1, pl: 1, width: '90%' }}
            variant="outlined"
          >
            {/* <InputLabel htmlFor="outlined-adornment-amount">Search By Name</InputLabel> */}
            <OutlinedInput id="LoginEmail" />
            <FormHelperText id="outlined-weight-helper-text">
              Your Email
            </FormHelperText>
          </FormControl>
          <FormControl
            displayEmpty
            fullWidth
            sx={{ mx: 2, my: 1, pl: 1, width: '90%' }}
            variant="outlined"
          >
            {/* <InputLabel htmlFor="outlined-adornment-amount">Search By Name</InputLabel> */}
            <OutlinedInput
              id="loginPassword"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <FormHelperText id="outlined-weight-helper-text">
              Password
            </FormHelperText>
          </FormControl>
          <button
            size="medium"
            fullWidth
            className="bg-yellow px-40 rounded ml-6 py-4"
          >
            Log In
          </button>

          <Typography
            sx={{ mb: 1.5 }}
            color="text.secondary"
            className="p-3 rounded text-center"
          >
            -or-
          </Typography>
          <button
            size="medium"
            className="px-28 rounded ml-6 border-solid border-2 py-4"
          >
            Sign in with Google
          </button>
          <div className="text-center">
            <SignUp />
          </div>
        </Box>
      </Modal>
    </div>
  )
}
export default Login
